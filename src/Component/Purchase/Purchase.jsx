import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import useAuth from '../../Hooks/useAuth'

const Purchase = () => {
    const {id} = useParams()
    const [post ,setPost] = useState({})
    const {user} = useAuth()
    console.log(id)
    const {register, handleSubmit,reset} = useForm()
    useEffect(() => {
        axios.get(`http://localhost:3000/purchase/${id}`)
        .then(res => {
            setPost(res.data)
        })
        .catch(err => {
            // console.log(err)
        })
    }, [id])

    const onSubmit = data => {
        data.order = post
        axios.post(`http://localhost:5000/orders`, data)
        .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
                swal('Good Job', 'Order Successfully Submit', 'success')
                reset()
            }else{
                swal('Error!', 'Order Not Submit', 'error')
            }

        })
        .catch(err => {
            // console.log(err)
        })
        
    }
    return (
        <div className="p-5 bg-gray-700 ">
            <div className="mt-8 p-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full flex-1 mx-2 svelte-1l8159u">
                            <div className="font-bold text-white text-xs leading-8 uppercase h-6 mx-2 mt-3">Full Name</div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                <input placeholder="Full Name" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" type='text' {...register("name")} defaultValue={user?.displayName}/> </div>
                        </div>
                        <div className="w-full flex-1 mx-2 svelte-1l8159u">
                            <div className="font-bold text-white text-xs leading-8 uppercase h-6 mx-2 mt-3">Price</div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                <input placeholder="Price" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" type='number' {...register("price")}/> </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full mx-2 flex-1 svelte-1l8159u">
                            <div className="font-bold h-6 mt-3 text-white text-xs leading-8 uppercase">Phone Number</div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                <input placeholder="Enter your Phone Number" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" type='tel' {...register("phone")}/> </div>
                        </div>
                        <div className="w-full mx-2 flex-1 svelte-1l8159u">
                            <div className="font-bold h-6 mt-3 text-white text-xs leading-8 uppercase"> Email</div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                <input className="p-1 px-2 appearance-none outline-none w-full text-gray-800" type='email' placeholder="john69@gmail.com" {...register("email")} readOnly defaultValue={user?.email}/> </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full mx-2 flex-1 svelte-1l8159u">
                            <div className="font-bold h-6 mt-3 text-white text-xs leading-8 uppercase"> Address</div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                <input placeholder="Enter your Address" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" type='text' {...register("address")}/> </div>
                        </div>
                        <div className="w-full mx-2 flex-1 svelte-1l8159u">
                            <div className="font-bold h-6 mt-3 text-white text-xs leading-8 uppercase"> Date</div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                <input className="p-1 px-2 appearance-none outline-none w-full text-gray-800" type='date' {...register("date")}/> </div>
                        </div>
                    </div>
                    <div className="flex p-2 mt-4">
                        <Link className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                    hover:bg-gray-200  
                    bg-gray-100 
                    text-gray-700 
                    border duration-200 ease-in-out 
                    border-gray-600 transition" to='/explore'>Back to Explore </Link>
                        <div className="flex-auto flex flex-row-reverse">
                            <button className="text-white  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                    hover:bg-teal-600  
                    bg-teal-600 
                    border duration-200 ease-in-out 
                    border-teal-600 transition" type='submit'>Submit</button>
                        </div>
                    </div>
                
                </form>
            </div>
        </div>
    )
}

export default Purchase
