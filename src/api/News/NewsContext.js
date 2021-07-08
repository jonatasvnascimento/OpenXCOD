import React, { useState, useEffect } from 'react'

export default function NewsContext() {

    const [data, setData] = useState([])
    useEffect(() => {
        async function getContent() {
            try {
                const response = await fetch('http://localhost:3001/')
                const data = await response.json()
                setData(data)
                // console.log(data)
            } catch (error) {
                console.error(error)
            }
        }
        getContent()

    }, [data])

    return (
        <div className="container mt-3">
            {data.map((value, index) => (
                <li key={index}>
                    <h2>{value.name}</h2>
                </li>
            ))}
            
        </div>
    )
}
