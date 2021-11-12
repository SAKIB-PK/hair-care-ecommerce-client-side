import React from 'react'

const OrderProduct = ({item,hundleDelete}) => {
    const {product, price, photo} = item.order
    

    return (
        <div className="flex justify-between  items-center mt-6 pt-6">
            <div className="flex items-center"> <img src={photo} width="60" className="rounded-full "alt='sa'/>
                <div className="flex flex-col ml-3"> <span className="md:text-md font-medium">{product}</span> <span className="text-xs font-light text-gray-400">#41551</span> </div>
            </div>
            <div className="flex justify-center items-center">
                
                <div className="pr-8 "> <span className="text-xs font-medium">${price}</span> </div>
                <div> <i className="fa fa-close text-xs font-medium"></i> </div>
                <button className="bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" onClick={()=>hundleDelete(item._id)}>Delete</button>
            </div>
        </div>
    )
}

export default OrderProduct
