import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Emps from "./components/Emps";
import SelEmp from "./components/SelEmp";
import InsEmp from "./components/InsEmp";
import UpdEmp from "./components/UpdEmp";
import DelEmp from "./components/DelEmp";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route index path="/" element={<Emps />}></Route>
      <Route index path="/select" element={<SelEmp />}></Route>
      <Route index path="/insert" element={<InsEmp />}></Route>
      <Route index path="/update" element={<UpdEmp />}></Route>
      <Route index path="/delete" element={<DelEmp />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
