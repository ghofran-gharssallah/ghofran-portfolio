import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Toaster
    position="top-right"
    toastOptions={{
      duration: 3000,
      style: {
        background: "var(--color-surface)",
        color: "var(--color-ink)",
        border: "1px solid var(--color-line)",
      },
    }}
  />  
  </StrictMode>
);