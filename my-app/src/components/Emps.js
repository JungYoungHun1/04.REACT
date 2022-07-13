import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Emps() {
    const allSelect = () => {
        let resultElem = document.getElementById('result')
        resultElem.innerHTML = ''
        axios.get('http://localhost:8080/emps').then((res) =>
            res.data.forEach((element) => {
                resultElem.innerHTML +=
                    'empno : ' +
                    element.empno +
                    ', ename : ' +
                    element.ename +
                    ', job : ' +
                    element.job +
                    ', mgr : ' +
                    element.mgr +
                    ', hiredate : ' +
                    element.hiredate +
                    ', sal : ' +
                    element.sal +
                    ', comm : ' +
                    element.comm +
                    ', deptno : ' +
                    (element.dept != null ? element.dept.deptno : 'null') +
                    '<br/>'
            })
        )
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
            <h1>AllEmp 출력</h1>
            <button onClick={allSelect}>allSelect</button>
            <hr></hr>
            <h1>결과</h1>
            <div id="result"></div>
        </div>
    )
}

export default Emps
