import React from 'react'

const OrderProduct = () => {
    return (
        <div class="flex justify-between items-center mt-6 pt-6">
            <div class="flex items-center"> <img src="https://i.imgur.com/EEguU02.jpg" width="60" class="rounded-full "alt='sa'/>
                <div class="flex flex-col ml-3"> <span class="md:text-md font-medium">Chicken momo</span> <span class="text-xs font-light text-gray-400">#41551</span> </div>
            </div>
            <div class="flex justify-center items-center">
                <div class="pr-8 flex "> <span class="font-semibold">-</span> <input type="text" class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value="1"/> <span class="font-semibold">+</span> </div>
                <div class="pr-8 "> <span class="text-xs font-medium">$10.50</span> </div>
                <div> <i class="fa fa-close text-xs font-medium"></i> </div>
            </div>
        </div>
    )
}

export default OrderProduct
