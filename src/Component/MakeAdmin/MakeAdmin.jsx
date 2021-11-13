import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import swal from 'sweetalert'

const MakeAdmin = () => {
    const {register, handleSubmit,reset} = useForm()
    const onSubmit = data => {
        axios.post('https://stark-cove-71679.herokuapp.com/admin',data)
        .then(res => {
            if(res.data.insertedId){
                swal("Success", "Admin Added", "success")
                reset()
            }else{
                swal("Error", "Admin Not Added", "error")
            }
            
        })
        
        
    }
    return (

        <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-4/12 px-4 pt-32">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <div className="text-black text-3xl text-center pt-10 my-3  font-bold">Make  Admin</div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">Email</label>
                                    <input type="text" className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Enter Your Full Name" style={{transition: "all 0.15s ease 0s"}} {...register("email")}/>
                                </div>
                                <div className="text-center mt-6">
                                    <button className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full" type="submit" style={{transition: "all 0.15s ease 0s"}}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MakeAdmin
