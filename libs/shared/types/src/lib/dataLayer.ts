/* eslint-disable @typescript-eslint/no-explicit-any */
export {}; // Make this file as external module

declare global {
  interface Window {
    dataLayer?: object[];
  }
}
