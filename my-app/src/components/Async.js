import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import { getUsers } from '../api/users'

function Async() {
    // photos : state

    // Reducer / state/ dispatch - 데이터요청/ 데이터 응답(정상, 비정상)

    const [photos, setPhotos] = useState([])
    const [num, setNum] = useState(0)
    let numCheck = []
    // const usersData = getUsers()
    // usersData.then((response) => {
    //     console.log(response)
    //     console.log('-----------')
    // })

    const getData = () => {
        let url = 'https://jsonplaceholder.typicode.com/users'
        axios
            .get(url)
            .then((response) => {
                // for (let index = 0; index < num; index++) {
                //     numCheck = [...numCheck, response.data[index]]
                // }
                numCheck = [...numCheck, response.data[num]]

                setPhotos(numCheck)
                setNum(num + 1)
                // setPhotos(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

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
            <button onClick={getData}>Data Loading</button>
            {photos.map((photo) => {
                return (
                    <div>
                        <div>
                            {photo.id} {photo.email}
                        </div>
                        <div></div>
                    </div>
                )
            })}
        </div>
    )
}

export default Async
