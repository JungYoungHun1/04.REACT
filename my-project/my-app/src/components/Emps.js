import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
const AllEmpTable = styled.div`
  justify-content: center;
  text-align: center;
`;
const PageNumber = styled.div`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 5px;
`;
const Page = styled.span`
  padding: 10px;
  font-size: 15px;
  border-radius: 5px;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
    color: blue;
    border-radius: 20px;
    background-color: skyblue;
    transform: scale(1.5);
  }
`;
const EmpTable = styled.table`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`;

const allSelect = (setEmps, pages) => {
  let resultElem = document.getElementById("result");
  resultElem.innerHTML = "";
  axios.get("http://localhost:8080/emps?page=" + pages).then((res) => {
    setEmps(res.data);
  });
};
function Emps() {
  const [pages, setPages] = useState(1);
  const [emps, setEmps] = useState("");
  useEffect(() => {
    allSelect(setEmps, pages);
  }, [pages]);

  return (
    <div>
      <AllEmpTable>
        <h1>AllEmp 출력</h1>
        {/* <button onClick={() => allSelect(setEmps)}>button</button> */}

        <EmpTable>
          <thead>
            <tr>
              <th>empno</th>
              <th>ename</th>
              <th>job</th>
              <th>hireDate</th>
              <th>deptno</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
            {emps &&
              emps.dtoList.map((emp) => {
                // return <div>{emp[("empno")]}</div>;
                return (
                  <tr key={emp.empno}>
                    <td>{emp.empno}</td>
                    <td>{emp.ename}</td>
                    <td>{emp.job}</td>
                    <td>{emp.hiredate}</td>
                    <td>{emp.dept && emp.dept.deptno}</td>
                  </tr>
                );
              })}
          </tbody>
        </EmpTable>
      </AllEmpTable>

      <PageNumber>
        {!!emps.prev ? (
          <button onClick={() => setPages(pages - 1)}>이전</button>
        ) : (
          <div></div>
        )}
        {emps &&
          emps.pageList.map((page) => {
            return (
              <Page
                onClick={() => {
                  setPages(page);
                }}
                key={page}
              >
                {page}
              </Page>
            );
          })}
        {emps.next ? (
          <button onClick={() => setPages(pages + 1)}>다음</button>
        ) : (
          <div></div>
        )}
      </PageNumber>
      <div id="result"></div>
    </div>
  );
}

export default Emps;
