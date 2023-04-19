import React, { forwardRef, memo, useImperativeHandle, useEffect, useRef, useMemo, useCallback } from 'react';
import { calcFPS, jsConvFilter, flipKernel, fetchWasm } from '@/utils/kernel';
import styles from './style/draw.module.scss';

export interface DrawProps {
}

export interface DrawHandlers {
  times: typeof times;
  setMode: (_m: number) => void;
  getFPS: () => string;
}

const times = [[], [], []] as Array<number[]>;

let mode = 0;
let wasmConvFilter = (data: Uint8ClampedArray, width: number, height: number) => new Uint8Array();

export const Draw = forwardRef<DrawHandlers, DrawProps>((props, ref) => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const kernel = useMemo(() => flipKernel([
    [-1, -1, 1],
    [-1, 14, -1],
    [1, -1, -1],
  ]), []);
  const flatKernel = useMemo(() => kernel.reduce((acc, cur) => acc.concat(cur), []), []);

  // draw the video to canvas
  const draw = useCallback((ctx: CanvasRenderingContext2D, video: HTMLVideoElement, x: number, y: number) => {
    const _start = performance.now();
    ctx.drawImage(video, 0, 0);
    const pixels = ctx.getImageData(0, 0, video.videoWidth, video.videoHeight);

    switch (mode) {
      case 0:
        break;
      case 1:
        pixels.data.set(jsConvFilter(pixels.data, x, y, kernel));
        break;
      case 2:
        pixels.data.set(wasmConvFilter(pixels.data, x, y));
        break;
    }

    ctx.putImageData(pixels, 0, 0);

    const _end = performance.now() - _start;

    times[mode].push(_end);
    requestAnimationFrame(() => draw(ctx, video, x, y));
  }, []);

  useImperativeHandle(ref, () => {
    return {
      times,
      setMode: (_m) => mode = _m,
      getFPS: () => calcFPS(times[mode])
    };
  });

  useEffect(() => {
    // initial wasm
    fetchWasm().then(({ memory, cppConvFilter, cppGetDataPtr, cppGetkernelPtr }) => {
      const dataIndex: number = cppGetDataPtr();
      const kernelIndex: number = cppGetkernelPtr();
      const Uint8View = new Uint8Array(memory.buffer);
      const Int8View = new Int8Array(memory.buffer);
      Int8View.set(flatKernel, kernelIndex);
      wasmConvFilter = function (data: Uint8ClampedArray, width: number, height: number) {
        const len = data.length;
        Uint8View.set(data, dataIndex);
        cppConvFilter(width, height, 3);
        return Uint8View.subarray(dataIndex, dataIndex + len);
      };
    });
  }, []);

  useEffect(() => {
    if (!canvas.current || !video.current) return;

    const clientX = video.current.videoWidth;
    const clientY = video.current.videoHeight;
    const ctx = canvas.current.getContext('2d');
    const playback = video.current.play();
    playback.catch(err => {
      console.error(`The video play occur some error: ${err}`);
    });

    video.current.addEventListener('playing', () => {
      canvas.current?.setAttribute('width', '' + clientX);
      canvas.current?.setAttribute('height', '' + clientY);
      draw(ctx!, video.current!, clientX!, clientY!);
    });
  }, []);

  return (
    <div
      className={styles.wrapper}
    >
      <canvas ref={canvas} className={styles.canvas} />
      <video ref={video} className={styles.video} muted loop>
        <source src='/nature-island.mp4' type='video/mp4' />
        <source src='/nature-sky.mp4' type='video/mp4' />
      </video>
    </div>
  );
});

export default memo(Draw);
