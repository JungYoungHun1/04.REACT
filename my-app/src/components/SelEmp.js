import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function SelEmp() {
    const selectEmp = () => {
        let resultElem = document.getElementById('result')
        let empnoElem = document.getElementById('empno')
        axios
            .get('http://localhost:8080/emp/' + empnoElem.value)
            .then(
                (res) =>
                    (resultElem.innerHTML =
                        'empno : ' +
                        res.data.empno +
                        ', ename : ' +
                        res.data.ename +
                        ', job : ' +
                        res.data.job +
                        ', mgr : ' +
                        res.data.mgr +
                        ', hiredate : ' +
                        res.data.hiredate +
                        ', sal : ' +
                        res.data.sal +
                        ', comm : ' +
                        res.data.comm +
                        ', deptno : ' +
                        (res.data.dept != null
                            ? res.data.dept.deptno
                            : 'null') +
                        '<br/>')
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
            <h1>특정 EMP 출력</h1>
            <input id="empno" type="text"></input>
            <button onClick={selectEmp}>select</button>
            <hr></hr>
            <h1>결과</h1>
            <div id="result"></div>
        </div>
    )
}

export default SelEmp
