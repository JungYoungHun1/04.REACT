import React, { useState } from 'react'
import axios from 'axios'

function CreateUser({}) {
    const [user, setUser] = useState([])

    const users = [
        {
            id: 1,
            name: 'one',
        },
        {
            id: 2,
            name: 'two',
        },
        {
            id: 3,
            name: 'three',
        },
    ]

    const clickBtn = () => {
        setUser(users.id + 1)
    }

    return (
        <div>
            {users.map((user) => {
                return <div>{user.id}</div>
            })}
        </div>
    )
}

export default CreateUser
