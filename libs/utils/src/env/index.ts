/// <reference types="vite/client" />
const { MODE, DEV, PROD } = import.meta.env as ViteEnv;
interface ViteEnv {
  BASE_URL: string;
  MODE: "development" | "release" | "production";
  DEV: boolean;
  PROD: boolean;
  SSR: boolean;
}

export const isDev = DEV && MODE === "development";
export const isRel = PROD && MODE === "release";
export const isProd = PROD && MODE === "production";
