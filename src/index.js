import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Use HashRouter for GitHub Pages
import App from "App";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
