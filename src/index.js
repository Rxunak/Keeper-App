import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../src/component/App";
import Footer from "./component/Footer";
import Register from "./component/Register";
import Header from "./component/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);
