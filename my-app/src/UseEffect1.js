import React, { useEffect, useState } from 'react'

function UseEffect1() {
    const [number, setNumber] = useState(0)
    const updateNumber = () => {
        setNumber(number + 1)
    }
    const [text, setText] = useState('')
    const inputValueChange = (e) => {
        setText(e.target.value)
    }

    //useEffect 수행 코드 : console.log("--useEffect--")
    // useEffect(() => {
    //     console.log("--useEffect 실행 --");
    // });

    // number가 변할때만 useEffect 실행
    useEffect(() => {
        console.log('--number 변화--')
    }, [number])

    useEffect(() => {
        console.log('--input 변화--')
    }, [text])

    useEffect(() => {
        console.log('--input, num 변화--')
    }, [text, number])

    useEffect(() => {
        console.log('--input, num 변화--')
    }, []) //한번만 실행

    return (
        <div>
            <div>
                <button onClick={updateNumber}>+1</button>
                <span>Current Number {number}</span>
            </div>
            <div>
                <input type="text" onChange={inputValueChange}></input>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default UseEffect1
