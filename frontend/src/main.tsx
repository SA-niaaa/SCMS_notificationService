// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";

// ReactDOM.createRoot(
//   document.getElementById("root")!
// ).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// window.onload = () => {
//   localStorage.removeItem("activities");
// };

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Fix for SockJS in Vite
(globalThis as any).global = globalThis;

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.onload = () => {
  localStorage.removeItem("activities");
};