import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom'
import swal from 'sweetalert'
import useAuth from '../../Hooks/useAuth'

const Purchase = () => {
    const {id} = useParams()
    const [post ,setPost] = useState({})
    const {user} = useAuth()
    const {register, handleSubmit,reset} = useForm()
    useEffect(() => {
        axios.get(`https://stark-cove-71679.herokuapp.com/products/${id}`)
        .then(res => {
            setPost(res.data)
        })
        .catch(err => {
            // console.log(err)
        })
    }, [id])

    const onSubmit = data => {
        data.order = post
        axios.post(`https://stark-cove-71679.herokuapp.com/orders`, data)
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
        <>
        
        <div className="p-5 bg-gray-700 ">
            <div className="p-10">
                <div className=" w-full lg:max-w-full lg:flex">
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url("${post?.photo}")`}} title="M">
                </div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Order Product only
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">{post?.product}</div>
                    <p className="text-gray-700 text-base">{post?.description}</p>
                    </div>
                    <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src={user?.photoURL} alt="A"/>
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">{user?.displayName}</p>
                        <p className="text-gray-600">Recent Now</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Card End */}
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
                                <input placeholder="Price" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" type='number' defaultValue={post.price} {...register("price")} readOnly/> </div>
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
        </>
    )
}

export default Purchase
