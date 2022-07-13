import React from 'react'
import axios from 'axios'

function Del() {
    const deleteDept = () => {
        let resultElem = document.getElementById('result')
        let deptnoElem = document.getElementById('deleteDeptno')
        resultElem.innerHTML = ''
        axios
            .delete(
                'http://localhost:8080/project/api/dept/' + deptnoElem.value
            )
            .then((res) => (resultElem.innerHTML = '삭제 완료'))
    }
    return (
        <div>
            <h1>Dept 삭제</h1>
            <input id="deleteDeptno" type="text"></input>
            <button onClick={deleteDept}>delete</button>
            <hr></hr>
            <h1>결과</h1>
            <div id="result"></div>
        </div>
    )
}

export default Del
