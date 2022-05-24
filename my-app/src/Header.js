import React, { useContext } from "react";
import { UseContext1 } from "./UseContext1";

const Header = () => {
  // const data = useContext(UseContext1);
  // console.log(data);
  const { company, setCompany } = useContext(UseContext1);
  const { color, setColor } = useContext(UseContext1);
  // const {back, setBack} = useContext(UseContext1);

  const updateEnglish = () => {
    setCompany("DOUZONE");
  };
  const updateKorean = () => {
    setCompany("더존");
  };
  // const updateColor = () => {
  //     setColor("white");
  //     setBack("black");
  // }
  return (
    <body>
      <header className="header" style={{ color: color }}>
        <h1> {company} New Devs</h1>
        <button onClick={updateEnglish}>English</button>
        <button onClick={updateKorean}>한국어</button>
        <button
          onClick={() => {
            setColor(color === "black" ? "white" : "black");
          }}
        >
          다크모드
        </button>
      </header>
    </body>
  );
};

export default Header;
