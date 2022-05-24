import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import { getUsers } from '../api/users'

function reducer(state, action) {
    console.log(state, action)
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null,
            }
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null,
            }
        case 'ERROR':
            return { loading: false, data: null, error: action.error }
        default:
            throw new Error('또 다른 문제')
    }
}

function Async() {
    // photos : state

    // Reducer / state/ dispatch - 데이터요청/ 데이터 응답(정상, 비정상)
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null,
    })
    const getData2 = async () => {
        let url = 'https://jsonplaceholder.typicode.com/users'

        dispatch({ type: 'LOADING' })
        try {
            const response = await axios.get(url)
            dispatch({ type: 'SUCCESS', data: response.data })
            // 로딩 끝 : false / 데이터 -> response.data / error : false
            console.log('정상 응답')
        } catch (error) {
            dispatch({ type: 'ERROR', error: error })
            console.log('비정상 응답', error)
        }
    }

    useEffect(() => {
        getData2()
    }, [])

    const { loading, data, error } = state
    console.log(loading)
    console.log(data)
    console.log(error)

    if (loading) return <div>데이터 요청 중입니다.</div>
    if (error) return <div>에러 발생</div>
    if (!data) return null

    // const [photos, setPhotos] = useState([])
    // const [num, setNum] = useState(10)
    // let numCheck = []
    // const usersData = getUsers()
    // usersData.then((response) => {
    //     console.log(response)
    //     console.log('-----------')
    // })

    // const getData = () => {
    //     let url = 'https://jsonplaceholder.typicode.com/photos'
    //     axios
    //         .get(url)
    //         .then((response) => {
    //             for (let index = 0; index < num; index++) {
    //                 numCheck = [...numCheck, response.data[index]]
    //             }
    //             setNum(num + 10)
    //             setPhotos(numCheck)
    //             // setPhotos(response.data)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }

    // useEffect(() => {
    //     const getData3 = async () => {
    //         let url = 'https://jsonplaceholder.typicode.com/users'
    //         try {
    //             const response = await axios.get(url)
    //             console.log('정상 응답')
    //         } catch (error) {
    //             console.log('비정상 응답', error)
    //         }
    //     }
    // }, [])

    return (
        <div>
            <button onClick={getData2}>Data Loading</button>
            {/* {photos.map((photo) => {
                return (
                    <div>
                        <div>{photo.id}</div>
                        <img src={photo.thumbnailUrl}></img>
                    </div>
                )
            })} */}

            {/* 리듀서 사용 */}
            <ul>
                {data.map((user) => (
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Async
