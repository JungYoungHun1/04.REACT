import React, { useState } from 'react'
import UserName from './UserName'
function Exam02({ age }) {
    let [name, setName] = useState('mike')
    // let [age, setAge] = useState(props.age)
    const msg = age > 19 ? '성인' : '미성년자'

    function changeName() {
        setName(name === 'mike' ? 'jane' : 'mike')
        console.log(name)
    }
    return (
        <div>
            <h1>
                {name}, {age}, {msg}
            </h1>
            <UserName name={name}></UserName>
            <button onClick={changeName}>change</button>
        </div>
    )
}

export default Exam02
