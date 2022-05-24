import React, { useState } from "react";

function UseState2() {
    let students = ["정영광", "멍청이"]
    const [names, setNames] = useState(students);
    const [input, setInput] = useState("");

    const inputValueChange = (event) => {
        // console.log('입력');
        // console.log(event.target.value);
        setInput(event.target.value)
    }

    const inputValueRecord = () => {
        setNames((previousValue) => {
            console.log(previousValue);
            setInput("");
            return previousValue.concat(input);

            // let arr = Array.from(previousValue);
            // arr.push(input);
            // return arr

        });
    }
    const inputValueReset = () => {
        setNames((previousValue) => {
            previousValue = [];
            setInput("");
            return previousValue
        })
    }
    const [color, setColor] = useState("");
    const colorChange = () =>{
        // let colorCode = "red"
        setColor("red")
    }
    let color2 = {color}  

    
    
    return(
        <div>
            <input type="text" onChange={inputValueChange} value={input}></input>
            <button onClick={inputValueRecord}>Record!</button>
            <button onClick={inputValueReset}>Reset!</button>
            <button onClick={colorChange}>Color!</button>
            {names.map((name, idx)=> {
                return <p style={color2} key={idx}>{name}</p>;
            })}
        </div>
    )
}

export default UseState2;