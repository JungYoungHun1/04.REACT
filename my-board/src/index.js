import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import BoardInsert from "./components/BoardInsert";
import BoardView from "./components/BoardView";
import ListBoard from "./components/ListBoard";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route index path="/" element={<ListBoard />}></Route>
      <Route index path="/boardView" element={<BoardView />}></Route>
      <Route index path="/boardInsert" element={<BoardInsert />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
