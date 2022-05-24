import React, { useState } from "react";

function UseState1() {
  const [time, setTime] = useState(1);
  console.log("--렌더링--");
  console.log("--외부--", time);

  const updateTime = () => {
    // if(time < 24){
    //     setTime(time + 1);
    // }
    // else if(time >= 24){
    //     setTime(1);
    // }
    // time < 24 ? setTime(time+1) : setTime(1);
    // setTime(time < 24 ? time + 1 : 1)

    // 1. state 변수에는 직접 값을 할당할 수 없다.(time+=1;)

    setTime(time + 1);

    console.log("내부", time);
  };
  return (
    <div>
      <span>Now : {time}</span>
      <button onClick={updateTime}>Click!!</button>
    </div>
  );
}

export default UseState1;
