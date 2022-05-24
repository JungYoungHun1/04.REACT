import React, { useState, useRef } from 'react'

function UseRef1() {
    // use state - 렌더링이 계속 일어난다
    const [stateNumber, setStateNumber] = useState(0)
    const updateStateNumber = () => {
        setStateNumber(stateNumber + 1)
        console.log(stateNumber)
    }
    // console.log('--렌더링--');
    // useRef

    // useRef - 내부적으로는 실행되지만 렌더링은 일어나지 않는다.
    const refNumber = useRef(0)
    // console.log(refNumber);
    // console.log(refNumber.current);

    const updateRefNumber = () => {
        refNumber.current = refNumber.current + 1
        console.log(refNumber.current)
    }
    return (
        <div>
            <div>
                <p>StateNumber : {stateNumber}</p>
                <button onClick={updateStateNumber}>StateNumber+1</button>
            </div>
            <hr></hr>
            <div>
                <p>RefNumber : {refNumber.current}</p>
                <button onClick={updateRefNumber}>StateNumber+1</button>
            </div>
        </div>
    )
}

export default UseRef1
