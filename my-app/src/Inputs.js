import React, { useState } from "react";

function Inputs() {
  // const [name, setName] = useState("");
  // const [nickName, setNickName] = useState("");

  const [inputs, setInputs] = useState({
    name: "",
    nickName: "",
  });

  const { name, nickName } = inputs;

  // const changeName = (e) => {
  //     console.log(e.target.value);
  //     setName(e.target.value);
  // }

  // const changeNickName = (e) => {
  //     console.log(e.target.value);
  //     setNickName(e.target.value);
  // }

  // const resetBtn = () => {
  //     setName("");
  //     setNickName("");
  // }

  const changeInputs = (e) => {
    // console.log(e.target.name);
    // setInput(e.target.name === 'name' ? e.target.value : "");
    // setInput(e.target.name === 'nickName' ? e.target.value : "");
    console.log(e.target);
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const resetInputs = () => {
    setInputs({
      name: "",
      nickName: "",
    });
  };
  return (
    <div>
      {/* <h1>이름: {name}</h1>
			<h1>닉네임: {nickName}</h1>

			<input type="text" placeholder="이름" value={name} onChange={changeName}/>
			<input type="text" placeholder="닉네임" value={nickName} onChange={changeNickName}/> */}

      <h1>이름: {name}</h1>
      <h1>닉네임: {nickName} </h1>

      <input
        type="text"
        name="name"
        placeholder="이름"
        value={name}
        onChange={changeInputs}
      />
      <input
        type="text"
        name="nickName"
        placeholder="닉네임"
        value={nickName}
        onChange={changeInputs}
      />
      <button onClick={resetInputs}>Reset</button>
    </div>
  );
}

export default Inputs;
