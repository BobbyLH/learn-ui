export const calcFPS = (vector: number[]) => {
  // const vector = _vector.slice(0);
  const AVERAGE_RECORDS_COUNT = 20;
  if (vector.length < AVERAGE_RECORDS_COUNT) return 'NaN';
  while (vector.length > AVERAGE_RECORDS_COUNT) {
    vector.shift();
  }

  const averageTime = vector.reduce((prev, curr) => {
    return prev + curr;
  }, 0) / Math.abs(AVERAGE_RECORDS_COUNT);

  return (1000 / averageTime).toFixed(2);
};

export const flipKernel = (_kernel: Array<number[]>) => {
  const kernel = _kernel.slice();
  const h = kernel.length;
  const half = Math.floor(h / 2);
  for (let i = 0; i < half; i++) {
    for (let j = 0; j < h; j++) {
      const _t = kernel[i][j];
      kernel[i][j] = kernel[h - i - 1][h - j - 1];
      kernel[h - i - 1][h - j - 1] = _t;
    }
  }

  if (h & 1) {
    for (let i = 0; i < half; i++) {
      const _t = kernel[half][i];
      kernel[half][i] = kernel[half][h - i - 1];
      kernel[half][h - i - 1] = _t;
    }
  }

  return kernel;
};

export const jsConvFilter = (_data: Uint8ClampedArray, width: number, height: number, kernel: Array<number[]>) => {
  const data = _data.slice(0);
  const divisor = 3;
  const h = kernel.length;
  const w = kernel[0].length;
  const half = Math.floor(h / 2);

  for (let y = half; y < height - half; y++) {
    for (let x = half; x < width - half; x++) {
      const px = (y * width + x) * 4;
      let r = 0, g = 0, b = 0;
      for (let cy = 0; cy < h; cy++) {
        for (let cx = 0; cx < w; cx++) {
          const cpx = ((y + (cy - half)) * width + (x + (cx - half))) * 4;
          r += data[cpx + 0] * kernel[cy][cx];
          g += data[cpx + 1] * kernel[cy][cx];
          b += data[cpx + 2] * kernel[cy][cx];
        }
      }

      const _r = r / divisor;
      const _g = g / divisor;
      const _b = b / divisor;
      data[px + 0] = _r > 255 ? 255 : _r < 0 ? 0 : _r;
      data[px + 1] = _g > 255 ? 255 : _g < 0 ? 0 : _g;
      data[px + 2] = _b > 255 ? 255 : _b < 0 ? 0 : _b;
    }
  }

  return data;
};

export const fetchWasm = async () => {
  try {
    const { instance } = await WebAssembly.instantiateStreaming(fetch('./kernel.wasm'));
    const {
      cppConvFilter,
      cppGetkernelPtr,
      cppGetDataPtr,
      memory,
    } = instance.exports;
    return {
      cppConvFilter,
      cppGetkernelPtr,
      cppGetDataPtr,
      memory,
    } as {
      cppConvFilter: Function;
      cppGetkernelPtr: Function;
      cppGetDataPtr: Function;
      memory: WebAssembly.Memory;
    };
  } catch (e) {
    console.error(`fetchWasm error: ${e}`);
    throw new Error();
  }
};