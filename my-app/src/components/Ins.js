import React from 'react'
import axios from 'axios'

function Ins() {
    const insertDept = () => {
        let resultElem = document.getElementById('result')
        let deptnoElem = document.getElementById('insertDeptno')
        let dnameElem = document.getElementById('insertDname')
        let locElem = document.getElementById('insertLoc')
        resultElem.innerHTML = ''
        axios
            .post(
                'http://localhost:8080/project/api/dept',
                {
                    deptno: deptnoElem.value,
                    dname: dnameElem.value,
                    loc: locElem.value,
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
            <h1>Dept 작성</h1>
            deptno : <input id="insertDeptno" type="text"></input>
            <br></br>
            dname : <input id="insertDname" type="text"></input>
            <br></br>
            loc : <input id="insertLoc" type="text"></input>
            <br></br>
            <button onClick={insertDept}>insert</button>
            <hr></hr>
            <h1>결과</h1>
            <div id="result"></div>
        </div>
    )
}

export default Ins
