import React from 'react'
import axios from 'axios'

function Upd() {
    const updateDept = () => {
        let resultElem = document.getElementById('result')
        let deptnoElem = document.getElementById('updateDeptno')
        let dnameElem = document.getElementById('updateDname')
        let locElem = document.getElementById('updateLoc')
        resultElem.innerHTML = ''
        axios
            .put(
                'http://localhost:8080/project/api/dept/' + deptnoElem.value,
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
            .then((res) => (resultElem.innerHTML = '수정 완료'))
    }
    return (
        <div>
            <h1>Dept 수정</h1>
            deptno : <input id="updateDeptno" type="text"></input>
            <br></br>
            dname : <input id="updateDname" type="text"></input>
            <br></br>
            loc : <input id="updateLoc" type="text"></input>
            <br></br>
            <button onClick={updateDept}>update</button>
            <hr></hr>
            <h1>결과</h1>
            <div id="result"></div>
        </div>
    )
}

export default Upd
