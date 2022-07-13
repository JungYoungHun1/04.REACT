import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function InsEmp() {
    const insertEmp = () => {
        let resultElem = document.getElementById('result')
        let deptnoElem = document.getElementById('insertDeptno')
        let enameElem = document.getElementById('insertEname')
        let empnoElem = document.getElementById('insertEmpno')
        resultElem.innerHTML = ''
        axios
            .post(
                'http://localhost:8080/emp',
                {
                    empno: empnoElem.value,
                    ename: enameElem.value,
                    dept: { deptno: deptnoElem.value },
                },
                {
                    headers: {
                        'Content-type': 'application/json',
                    },
                }
            )
            .then((res) => (resultElem.innerHTML = '작성 완료'))
    }
    return (
        <div>
            <div>
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
            </div>
            <h1>Emp 작성</h1>
            empno : <input id="insertEmpno" type="text"></input>
            <br></br>
            ename : <input id="insertEname" type="text"></input>
            <br></br>
            deptno : <input id="insertDeptno" type="text"></input>
            <br></br>
            <button onClick={insertEmp}>insert</button>
            <hr></hr>
            <h1>결과</h1>
            <div id="result"></div>
        </div>
    )
}

export default InsEmp
