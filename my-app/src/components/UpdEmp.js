import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function UpdEmp() {
    const updateEmp = () => {
        let resultElem = document.getElementById('result')
        let deptnoElem = document.getElementById('updateDeptno')
        let enameElem = document.getElementById('updateEname')
        let empnoElem = document.getElementById('updateEmpno')
        resultElem.innerHTML = ''
        axios
            .put(
                'http://localhost:8080/emp/' + empnoElem.value,
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
            .then((res) => (resultElem.innerHTML = '수정 완료'))
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
            <h1>Emp 수정</h1>
            empno : <input id="updateEmpno" type="text"></input>
            <br></br>
            ename : <input id="updateEname" type="text"></input>
            <br></br>
            deptno : <input id="updateDeptno" type="text"></input>
            <br></br>
            <button onClick={updateEmp}>update</button>
            <hr></hr>
            <h1>결과</h1>
            <div id="result"></div>
        </div>
    )
}

export default UpdEmp
