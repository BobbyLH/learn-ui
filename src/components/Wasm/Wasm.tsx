import React, { memo, useState, useRef,  useCallback, useEffect } from 'react';
import { Radio } from 'antd';
import { calcFPS, jsConvFilter, flipKernel, fetchWasm } from '@/utils/kernel';
import Draw from './Draw';
import styles from './style/index.module.scss';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { RadioChangeEvent } from 'antd';
import type { DrawHandlers } from './Draw';

export interface WasmProps {}

export const Wasm: FC<PropsWithChildren<WasmProps>> = props => {
  const [rate, setRate] = useState('NaN');
  const [mode, setMode] = useState(0);
  const drawRef = useRef<DrawHandlers | null>(null);

  const onChange = useCallback((e: RadioChangeEvent) => {
    const val = +e.target.value;
    setMode(val);
    drawRef.current?.setMode(val);
  }, []);

  useEffect(() => {
    setInterval(() => {
      const fps = drawRef.current?.getFPS();
      if (fps && fps !== rate) {
        setRate(fps);
      }
    }, 100);
  }, []);

  return (
    <div
      className={styles.wrapper}
    >
      <Draw ref={drawRef} />
      <section className={styles.control}>
        <h3 className={styles.rate}>{`Frame Rate ${rate} FPS`}</h3>
        <Radio.Group onChange={onChange} value={mode}>
          <Radio value={0}>Off Render</Radio>
          <Radio value={1}>Javascript Render</Radio>
          <Radio value={2}>WebAssembly Render</Radio>
        </Radio.Group>
      </section>
    </div>
  );
};

export default memo(Wasm);
