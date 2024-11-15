import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Gadget from './Gadget';

export default function GadgetCards() {
    const data = useLoaderData();
    const { gadget } = useParams();
    console.log(gadget)

    const [gadgets, setGadgets] = useState([])
    useEffect(() => {
        if (gadget) {
            const filterBYCategory = [...data].filter(singleGadget =>
                singleGadget.category === gadget
            )
            setGadgets(filterBYCategory)
        }
        else {
            setGadgets(data)
        }
    }, [data, gadget])

    return (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            {
                gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
            }

        </div>
    )
}
