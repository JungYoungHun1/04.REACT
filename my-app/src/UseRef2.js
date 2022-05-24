import React, { useState, useRef } from "react";

function UseRef2() {
  let number = 0;
  const [stateNumber, setStateNumber] = useState(0);
  const updateStateNumber = () => {
    number += 1;
    console.log("Number : " + number);
  };
  const refNumber = useRef(0);

  const updateRefNumber = () => {
    refNumber.current = refNumber.current + 1;
    console.log("RefNumber : " + refNumber.current);
  };
  const [renderVar, setRenderNumber] = useState(0);

  const renderPage = () => {
    setRenderNumber(renderVar + 100);
  };

  const renderNumbers = () => {
    console.log("Number : " + number + " RefNumber : " + refNumber.current);
  };
  return (
    <div>
      <div>
        <p>Number : {stateNumber}</p>
        <button onClick={updateStateNumber}>RefNumber+1</button>
      </div>
      <hr></hr>
      <div>
        <p>RefNumber : {refNumber.current}</p>
        <button onClick={updateRefNumber}>StateNumber+1</button>
      </div>
      <hr></hr>
      <div>
        <button onClick={renderPage}>Render</button>
      </div>
      <div>
        <button onClick={renderNumbers}>ShowNumbers</button>
      </div>
    </div>
  );
}

export default UseRef2;
