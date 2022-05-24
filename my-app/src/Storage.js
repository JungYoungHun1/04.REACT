import React, { useEffect, useState } from 'react'

function Storage() {
    const [name, setName] = useState('')
    const [check, setCheck] = useState(false)
    const [data, setData] = useState('')
    const onChange = (e) => {
        // console.log(e.target.value);
        setName(e.target.value)
    }

    const saveName = () => {
        const user = { name: name }
        // window.localStorage.setItem("key1", name);
        window.localStorage.setItem('name3', JSON.stringify(user))
    }

    const loadName = () => {
        // setCheck(true);
        // 키값 들고오기
        let showData = []

        for (let i = 0; i < window.localStorage.length; i++) {
            let key = window.localStorage.key(i)
            let value = window.localStorage.getItem(key) // - 문자열

            // console.log(JSON.parse(value).name === name); // - 객체로 변환 (프로퍼티로 접근 가능)

            if (JSON.parse(value).name === name) {
                // showData = (JSON.parse(value).name);
                showData.push({ key, name })
            } else {
                showData = showData
            }
        }
        setData(showData)
        setCheck(showData.length === 0 ? false : true)
    }
    useEffect(() => {
        loadName()
    }, [name]) //실시간 검색

    return (
        <div>
            <input
                name="name"
                value={name}
                placeholder="이름을 입력하시오"
                onChange={onChange}
            />
            <button onClick={saveName}>저장</button>
            <button onClick={loadName}>요청</button>
            {/* {check? <p>{data}</p> : <></>} */}
            {check ? (
                data.map((obj) => {
                    return <p key={obj.key}>{obj.name}</p>
                })
            ) : (
                <></>
            )}
        </div>
    )
}

export default Storage
