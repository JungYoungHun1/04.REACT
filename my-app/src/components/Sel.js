import axios from 'axios'

function Sel() {
    const selectDept = () => {
        let resultElem = document.getElementById('result')
        let deptnoElem = document.getElementById('selectDeptno')
        axios
            .get('http://localhost:8080/project/api/dept/' + deptnoElem.value)
            .then(
                (res) =>
                    (resultElem.innerHTML =
                        'deptno : ' +
                        res.data.deptno +
                        ' dname : ' +
                        res.data.deptno +
                        ' loc :' +
                        res.data.loc +
                        '<br/>')
            )
    }
    return (
        <div>
            <h1>특정 Dept 출력</h1>
            <input id="selectDeptno" type="text"></input>
            <button onClick={selectDept}>select</button>
            <hr></hr>
            <h1>결과</h1>
            <div id="result"></div>
        </div>
    )
}

export default Sel
