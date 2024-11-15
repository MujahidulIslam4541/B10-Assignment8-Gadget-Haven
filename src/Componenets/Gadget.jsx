import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Gadget({ gadget }) {

    const { id, product_title, product_image, price } = gadget;
    return (
        <div>
            <div className="card card-compact border-2 h-80">
                <figure className='h-52'>
                    <img className='h-full'
                        src={product_image}
                        alt={product_title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>{price}$</p>
                    <div className="card-actions justify-start">
                        <NavLink to={`/statistics/${id}`}>Details</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
