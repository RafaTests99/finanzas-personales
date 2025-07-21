import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App2.jsx";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./emotionCache";

const cache = createEmotionCache();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
