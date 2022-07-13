import React, { useState } from 'react'
import axios from 'axios'

function Dept() {
    const [proxy, setProxy] = useState('')
    const onNoProxyHandler = () => {
        axios.get('/no-proxy').then((response) => console.log(response))
    }
    const onProxyHandler = () => {
        axios.get('/api/proxy').then((response) => setProxy(response.data))
    }
    const onNoCorsHandler = () => {
        axios
            .get('http://localhost:8080/jdbc/api/no-cors')
            .then((response) => console.log(response))
    }
    const onCorsHandler = () => {
        axios
            .get(
                'http://localhost:8080/jdbc/api/cors',
                {},
                {
                    headers: {
                        'access-control-allow-origin': 'true',
                    },
                }
            )
            .then((response) => console.log(response))
    }

    return (
        <div>
            <div>
                <h1>{proxy}</h1>
                <button onClick={onNoProxyHandler}>no-proxy</button>
                <button onClick={onProxyHandler}>proxy</button>
                <button onClick={onNoCorsHandler}>no-cors</button>
                <button onClick={onCorsHandler}>cors</button>
            </div>
        </div>
    )
}

export default Dept
