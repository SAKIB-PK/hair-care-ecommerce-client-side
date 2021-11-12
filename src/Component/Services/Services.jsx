import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Service from './Service'

const Services = () => {
    const [post,setPost] = useState([])
    useEffect(()=>{
        axios.get('https://stark-cove-71679.herokuapp.com/products')
        .then(res=>{
            setPost(res.data)
        })
        .catch(err=>{
            //
        })
    },[])
    return (
        <div className="w-full bg-gray-800">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="text-center pb-12">
                    <h2 className="text-base font-bold text-indigo-600">
                        We have the best Products in the market
                    </h2>
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                        Check our awesome products for you
                    </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                        post.map(item=><Service key={item._id} item={item} />)
                    }
                </div>
            </section>
        </div>
    )
}

export default Services
