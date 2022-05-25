import React from 'react'

function homeTraining() {
    const users = [
        { id: 1, username: 'aaa', email: 'ju39001@naver.com' },
        { id: 2, username: 'bbb', email: 'ju39002@naver.com' },
        { id: 3, username: 'c', email: 'ju39003@naver.com' },
    ]

    return (
        <div>
            {users[0].id}, {users[1].id}, {users[2].username}
        </div>
    )
}

export default homeTraining
