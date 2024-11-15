import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function GadgetDetails() {
    const data = useLoaderData()
    const { id } = useParams()
    const [item, setItem] = useState({})
    useEffect(() => {
        const singleItemFind = data.find(gadget => gadget.id == id)
        console.log(singleItemFind)
    }, [])
    console.log(id)
    return (
        <div>
            <h2>Gadget Details{id}</h2>
        </div>
    )
}
