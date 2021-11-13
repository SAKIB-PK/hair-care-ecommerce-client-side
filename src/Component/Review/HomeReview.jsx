import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import ReviewBox from './ReviewBox'

const HomeReview = () => {
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        axios.get('https://stark-cove-71679.herokuapp.com/review')
        .then(res =>{
            setReviews(res.data)
            setLoading(false)
        })
        .catch(err => {
            //
        })
    },[])
    if(loading){
        return <Loading/>
    }
    return (
        <div className="min-w-screen min-h-screen bg-gray-800 flex items-center justify-center py-5">
            <div className="w-full bg-gray-700  border-gray-200 px-5 py-16 md:py-24 text-gray-800">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="text-center max-w-xl mx-auto">
                        <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-100">What people <br/>are saying.</h1>
                        <h3 className="text-xl mb-5 text-gray-300 font-light">Talk Less,Work More!</h3>
                        <div className="text-center mb-10">
                            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                        </div>
                    </div>
                    <div className="-mx-3 md:flex flex-wrap items-start">
                        {
                            reviews.map(review => <ReviewBox key={review._id} review={review}/>)
                        }
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeReview
