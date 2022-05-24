import React, { useEffect, useState } from "react";


// update가 일어나는 경우
// - state가 바뀔때 
// - 전달받은 props가 바뀔때
// - 부모 컴포넌트가 렌더링 될때
// - 강제적인 렌더링이 진행될때


function Item({createItemStyle}) {
    const[styleValue, setStyleValue] = useState({});

    useEffect(() => {
        console.log("Item Update");
        setStyleValue(createItemStyle)
    },[createItemStyle])

    return (
        <div style={styleValue}></div>
    )
}

export default Item;