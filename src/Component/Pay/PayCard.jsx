import React from 'react'
import { Link } from 'react-router-dom'

const PayCard = ({item}) => {
     const {product,photo,price,_id}=item.order
     console.log(item.order)
    return (
        <div className="p-8 rounded-md shadow-md space-y-3 max-w-sm ">
            <img className="mx-auto h-28 ring-4 ring-gray-300 rounded-full" src={photo} alt="product Pay" />
            <div className="space-y-2 text-center">
                <div className="space-y-0.5">
                    <h1 className="text-xl font-semibold">{product} </h1>
                    <p className="text-sm font-medium text-gray-500">Price: ${price}</p>
                </div>
                <button className="border px-3 py-1 rounded-full text-red-500 border-red-600 hover:bg-red-600 hover:text-white" ><Link to={`/dashboard/pay/${_id}`}>Pay Now</Link></button>
            </div>
        </div>
    )
}

export default PayCard
