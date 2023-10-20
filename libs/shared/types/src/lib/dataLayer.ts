/* eslint-disable @typescript-eslint/no-explicit-any */
export {}; // Make this file as external module

// 可以參考 - https://github.com/sahava/datalayer-typescript
declare global {
  interface Window {
    dataLayer?: object[];
  }
}
