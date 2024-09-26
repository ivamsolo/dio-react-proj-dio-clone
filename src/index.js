import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { LoginContextProvider } from "./contexts/LoginContext";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <LoginContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LoginContextProvider>
);
