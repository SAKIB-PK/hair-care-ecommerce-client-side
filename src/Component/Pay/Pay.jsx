import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useAuth from '../../Hooks/useAuth'
import PayCard from './PayCard'

const Pay = () => {
    const [post,setPost] = useState([])
    const {user} = useAuth()
    useEffect(() => {
        axios.get(`https://stark-cove-71679.herokuapp.com/orders?email=${user.email}`)
        .then(res => {
            setPost(res.data)
        })
        .catch(err => {
            //console.log(err)
            })
    },[user])
    return (
        <>
            <div>
                <h1 className='text-5xl text-center text-red-500'>Payment system coming soon.</h1>
            </div>
            <div className="flex flex-wrap mt-10 space-x-2 space-y-2.5">
                {
                    post.map(item=> <PayCard item={item}/>)
                }
            </div>
        </>
    )
}

export default Pay
