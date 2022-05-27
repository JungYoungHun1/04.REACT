import "./App.css";
import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";

const LectureList = styled.ul`
  padding-left: 0px;
`;

const Lecture = styled.li`
  width: 100px;
  background: palevioletred;
  color: white;
  font-size: 1.125rem;
  list-style-type: none;
  text-align: center;
  border-radius: 5px;
  padding: 0.25rem;
  margin: 5px;
`;

const App = () => {
  const [lectures, setLectures] = useState(["HTML", "CSS", "JavaScript"]);
  const [newLecture, setNewLecture] = useState("");

  const inputVal = useRef();

  useEffect(() => {
    inputVal.current.focus();
  }, []);

  const handleInputLecture = (event) => {
    setNewLecture([event.target.value]);
  };

  const handleUpdateLecture = () => {
    if (newLecture !== "") {
      setLectures([...lectures, newLecture]);
      setNewLecture("");
      inputVal.current.focus();
    }
  };

  return (
    <div className="lecture-container">
      <div>
        <input
          ref={inputVal}
          type="text"
          placeholder="배운 과목을 입력해주세요"
          onChange={handleInputLecture}
          value={newLecture}
        ></input>
        <button onClick={handleUpdateLecture}>추가</button>
      </div>
      <LectureList>
        {lectures.map((lecture, index) => (
          <Lecture key={`${lecture + index}`}>{lecture}</Lecture>
        ))}
      </LectureList>
    </div>
  );
};

export default App;
