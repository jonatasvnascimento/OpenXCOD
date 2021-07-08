import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function NewsContext() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/')
            .then(res => {
                setData(res.data)
                // console.log(res)
            })
    }, [data])

    //Codigo de chamada api usando fetch
    // useEffect(() => {
    //     async function getContent() {
    //         try {
    //             const response = await fetch('http://localhost:3001/')
    //             const data = await response.json()
    //             setData(data)
    //             // console.log(data)
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    //     getContent()

    // }, [data])

    return (
        <div className="container mt-3">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Website</th>
                    </tr>
                </thead>
                <tbody>

                    {data.map((data, index) => (
                        <tr key={index}>
                            <th scope="row">{data.id}</th>
                            <td>{data.name}</td>
                            <td>{data.username}</td>
                            <td>{data.email}</td>
                            <td>{data.website}</td>
                        </tr>
                    ))}
                </tbody>

            </table>


        </div >
    )
}
