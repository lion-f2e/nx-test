export {}; // Make this file as external module

import "@shared-types";
import BackendVariables from "./backend";

// Declare types for libraries ...
declare global {
  interface Window extends BackendVariables {}
}
