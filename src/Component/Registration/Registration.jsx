import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, useLocation } from 'react-router'
import useAuth from '../../Hooks/useAuth'

const Registration = () => {
    const {customSignin,updateProfileInfo,setLoading,setUser} = useAuth()
    const {register, handleSubmit,reset} = useForm()
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };

    const onSubmit = data => {
        const {email,password,name,img}= data
        console.log(data)
        customSignin(email,password)
        .then(result =>{
            setLoading(true)
            setUser(result.user)
            updateProfileInfo(name,img)
            history.push(from)
        }).catch(err=>{
            //
        }).finally(()=> setLoading(false))
        reset()
    }

    return (
        <section className="absolute w-full">
            {/* style={{backgroundImage: "url(&quot;https://demos.creative-tim.com/tailwindcss-starter-project/static/media/register_bg_2.2fee0b50.png&quot;"); backgroundSize: "100%"; backgroundRepeat: "no-repeat"}} */}
            <div className="absolute top-0 w-full h-full bg-gray-900"></div>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4 pt-32">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-black text-3xl text-center pt-10 my-3  font-bold">Registration Form</div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">Name</label>
                                        <input type="text" className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Enter Your Full Name" style={{transition: "all 0.15s ease 0s"}} {...register("name")}/>
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">Photo link</label>
                                        <input type="text" className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Image Link" style={{transition: "all 0.15s ease 0s"}} {...register("img")}/>
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">Email</label>
                                        <input type="email" className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Email" style={{transition: "all 0.15s ease 0s"}} {...register("email")}/>
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">Password</label>
                                        <input type="password" className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Password" style={{transition: "all 0.15s ease 0s"}} {...register("password")}/>
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input id="customCheckLogin" type="checkbox" className="form-checkbox text-gray-800 ml-1 w-5 h-5" style={{transition: "all 0.15s ease 0s"}}/><span className="ml-2 text-sm font-semibold text-gray-700">Remember me</span></label>
                                    </div>
                                    <div className="text-center mt-6">
                                        <button className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full" type="submit" style={{transition: "all 0.15s ease 0s"}}>Sign In</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-6">
                            <div className="w-1/2"><a href="#pablo" className="text-gray-300"><small>Forgot password?</small></a></div>
                            <div className="w-1/2 text-right"><a href="#pablo" className="text-gray-300"><small>Create new account</small></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Registration
