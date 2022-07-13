import logo from "./logo.svg";
import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Emps from "./components/Emps";
import SelEmp from "./components/SelEmp";
import InsEmp from "./components/InsEmp";
import DelEmp from "./components/DelEmp";
import UpdEmp from "./components/UpdEmp";
import styled from "styled-components";

const Head = styled.li`
  display: flex;
  margin: 10px;
  padding: 20px;
`;

function App() {
  return (
    <div>
      <Head>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/select">특정 Emp 출력</Link>
        </li>
        <li>
          <Link to="/insert">Emp 작성</Link>
        </li>
        <li>
          <Link to="/update">Emp 수정</Link>
        </li>
        <li>
          <Link to="/delete">Emp 삭제</Link>
        </li>
        <hr></hr>
      </Head>

      <Outlet></Outlet>
    </div>
  );
}

export default App;
