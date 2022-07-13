import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function DelEmp() {
  const deleteEmp = () => {
    // let resultElem = document.getElementById("result");
    let empnoElem = document.getElementById("deleteEmpno");
    // resultElem.innerHTML = "";
    axios
      .delete("http://localhost:8080/emp/" + empnoElem.value)
      .then((res) => alert("삭제 완료"))
      .then((window.location.href = "/"));
  };
  return (
    <div>
      <h1>Emp 삭제</h1>
      <input id="deleteEmpno" type="text"></input>
      <button onClick={deleteEmp}>delete</button>
      {/* <hr></hr>
      <h1>결과</h1>
      <div id="result"></div> */}
    </div>
  );
}

export default DelEmp;
