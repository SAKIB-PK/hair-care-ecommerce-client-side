import axios from 'axios'
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'
import Loading from '../Loading/Loading'
import OrderProduct from '../MyOrder/OrderProduct'

const AllOrder = () => {
    const [post,setPost] = useState([])
    const [loading,setLoading]= useState(true)
    useEffect(() => {
        axios.get(`https://stark-cove-71679.herokuapp.com/orders`)
        .then(res => {
            setPost(res.data)
        })
        .catch(err => {
            //console.log(err)
            })
            .finally(() => setLoading(false))
    },[])

    

    const hundleDelete = (id) => {
        swal('Are you sure?','Are you sure to delete Order ?','error',{
            dangerMode: true,
            buttons: true,
            })
        .then(res =>{
            if(res){
                axios.delete(`https://stark-cove-71679.herokuapp.com/orders/${id}`)
                .then(res => {
                    if(res.data.deletedCount){
                        swal({
                            title:'Good Job!',
                            text:'Order Delete Successfully.',
                            icon:'success'
                        })
                        const filterPost = post.filter(item => item._id !== id)
                        setPost(filterPost)
                    }else{
                        swal({
                            title:'Oopps!',
                            text:'Order Delete Failed!',
                            icon:'warning'
                        })
                    }
                }                       
            )}else{
                swal({
                    title:'Oopps!',
                    text:'Order Delete Failed!',
                    icon:'warning'
                }) 
            }
    })}

    if(loading){
        return <Loading/>
    }
    return (
        <div className="h-screen  ">
            <div className="py-12">
                <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl">
                    <div className="md:flex ">
                        <div className="w-full p-4 px-5 py-5">
                            <div className="md:grid md:grid-cols-3 gap-2 ">
                                <div className="col-span-2 p-5">
                                    <h1 className="text-xl font-medium ">Shopping Cart</h1>
                                    {
                                        post.map(item => <OrderProduct key={item._id} item={item} hundleDelete={hundleDelete}/>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllOrder
