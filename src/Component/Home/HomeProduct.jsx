import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import ProductCard from './ProductCard';

const HomeProduct = () => {
    const [post,setPost] =useState([]);
    const [loading,setLoading] =useState(true);
    useEffect(()=>{
        axios.get('https://stark-cove-71679.herokuapp.com/home/products')
        .then(res=>{
            setPost(res.data);
            setLoading(false);
        })
        .catch(err=>{
         //   console.log(err);
        })

    },[])
    if(loading){
        return <Loading/>
    }
    return (
        <div className="w-full bg-gray-800">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="text-center pb-12">
                    <h2 className="text-base font-bold text-indigo-600">
                        Our Latest Best Product
                    </h2>
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-200">
                        Check our awesome products for you
                    </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    post.map(item=><ProductCard key={item._id} item={item}/>)
                }
                </div>
            </section>
        </div>
    )
}

export default HomeProduct
