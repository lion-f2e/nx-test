import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import HomePage from "./pages/home/HomePage";
import "./styles/main.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
