import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function InsEmp() {
  const insertEmp = () => {
    // let resultElem = document.getElementById("result");
    let deptnoElem = document.getElementById("insertDeptno");
    let enameElem = document.getElementById("insertEname");
    let empnoElem = document.getElementById("insertEmpno");
    // resultElem.innerHTML = "";
    axios
      .post(
        "http://localhost:8080/emp",
        {
          empno: empnoElem.value,
          ename: enameElem.value,
          dept: { deptno: deptnoElem.value },
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then((res) => alert("작성 완료"))
      .then((window.location.href = "/"));
  };
  return (
    <div>
      <h1>Emp 작성</h1>
      empno : <input id="insertEmpno" type="text"></input>
      <br></br>
      ename : <input id="insertEname" type="text"></input>
      <br></br>
      deptno :
      <select id="insertDeptno">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
        <option value="60">60</option>
      </select>
      <br />
      <button onClick={insertEmp}>insert</button>
      {/* <hr></hr>
      <h1>결과</h1>
      <div id="result"></div> */}
    </div>
  );
}

export default InsEmp;
