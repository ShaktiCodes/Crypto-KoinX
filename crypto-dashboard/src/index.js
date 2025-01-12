import React from "react";
import ReactDOM from "react-dom/client"; // Use createRoot for React 18+
import App from "./App"; // Assuming your main component is App.js
// Your CSS file for styling

// Get the root element from index.html
const rootElement = document.getElementById("root");

// Create the root and render the app
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

