import React from 'react'
import { Link } from 'react-router-dom'

const Service = ({item}) => {
    const {product,photo,price,description,_id} =item
    return (
        <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 h-80">
                <img className="object-center object-cover w-full h-full" src={photo} alt={product}/>
            </div>
            <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                <p className="text-xl text-white font-bold">{product}</p>
                <p className="text-base text-gray-400 font-normal">Price- ৳ {price}</p>
                <p className="text-base leading-relaxed text-gray-500 font-normal">{description}</p>
                <div className="flex justify-start space-x-2">
                <Link to={`/purchase/${_id}`}>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Buy Now</button>
                </Link>

                </div>
            </div>
        </div>
    )
}

export default Service
