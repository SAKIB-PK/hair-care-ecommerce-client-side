import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({item}) => {
    const {_id,product, price, photo,description} = item
    const shortDescription = description?.substring(0,100)
    return (
        <div className="py-6">
            <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-1/3 bg-cover" style={{backgroundImage: `url("${photo}")`}}>
                </div> 
                <div className="w-2/3 p-4">
                <h1 className="text-gray-900 font-bold text-2xl">{product}</h1>
                <p className="mt-2 text-gray-600 text-sm">{shortDescription}</p>
                {/* 
                <-- Rating will be here if needed -->
                
                <div className="flex item-center mt-2">
                    <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                    </svg>
                    <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                    </svg>
                    <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                    </svg>
                    <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                    </svg>
                    <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                    </svg>
                </div> */}
                <div className="flex item-center justify-between mt-3">
                    <h1 className="text-gray-700 font-bold text-xl">${price}</h1>
                    <Link to={`/purchase/${_id}`}>
                        <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Buy Now</button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
