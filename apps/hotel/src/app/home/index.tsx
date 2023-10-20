import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import "./styles.css";

import HomePage from "./page";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
