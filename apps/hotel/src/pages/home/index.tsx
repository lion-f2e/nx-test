import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";

import "../../styles/main.css";
import HomePage from "./HomePage";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
