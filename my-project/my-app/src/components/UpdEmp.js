import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UpdEmp() {
  const updateEmp = () => {
    // let resultElem = document.getElementById("result");
    let deptnoElem = document.getElementById("updateDeptno");
    let enameElem = document.getElementById("updateEname");
    let empnoElem = document.getElementById("updateEmpno");
    // resultElem.innerHTML = "";
    axios
      .put(
        "http://localhost:8080/emp/" + empnoElem.value,
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
      .then((res) => alert("수정 완료"))
      .then((window.location.href = "/"));
  };
  return (
    <div>
      <h1>Emp 수정</h1>
      empno : <input id="updateEmpno" type="text"></input>
      <br></br>
      ename : <input id="updateEname" type="text"></input>
      <br></br>
      deptno :
      <select id="updateDeptno">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
        <option value="60">60</option>
      </select>
      <br></br>
      <button onClick={updateEmp}>update</button>
      {/* <hr></hr>
      <h1>결과</h1>
      <div id="result"></div> */}
    </div>
  );
}

export default UpdEmp;
