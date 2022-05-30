import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    const [data, setData] = useState('parent data')
    return (
        <>
            <div>{data}</div>
            <Child></Child>
        </>
    )
}

export default Parent
