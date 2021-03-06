import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, useLocation } from 'react-router'
import useAuth from '../../Hooks/useAuth'

const Login = () => {
    const {googleSignIn,customLogin,setLoading,setUser} = useAuth()
    const {register, handleSubmit} = useForm()
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const onSubmit = data => {
        const {email,password}= data
        customLogin(email,password)
        .then(res=>{
            setLoading(true)
            setUser(res.user)
            history.push(from);
            //
        })
        .catch(err=>{
            //
        })
        .finally(()=>setLoading(false))
    }


    
    const hundleGoogle = ()=>{
        googleSignIn()
        .then(result =>{
            setLoading(true)
            setUser(result.user)
            history.replace(from);
        })
        .catch(err=>{
            //
        }).finally(()=>setLoading(false))
    }
    return (
        <section className="absolute w-full ">
            {/* style={{backgroundImage: "url(&quot;https://demos.creative-tim.com/tailwindcss-starter-project/static/media/register_bg_2.2fee0b50.png&quot;"); backgroundSize: "100%"; backgroundRepeat: "no-repeat"}} */}
            <div className="absolute  w-full h-full bg-gray-900"></div>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4 pt-32">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-center mb-3">
                                    <h6 className="text-gray-600 text-sm font-bold">Sign in with</h6></div>
                                <div className="btn-wrapper text-center">
                                    <button className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center  text-xs" type="button" style={{transition: "all 0.15s ease 0s"}}><img alt="..." className="w-5 mr-1" src="images/icons-github.svg"/>Github</button>
                                    <button className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center  text-xs" type="button" style={{transition: "all 0.15s ease 0s"}} onClick={hundleGoogle}><img alt="..." className="w-5 mr-1" src="images/icons-google.svg" />Google</button>
                                </div>
                                <hr className="mt-6 border-b-1 border-gray-400"/>
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-gray-500 text-center mb-3 font-bold"><small>Or sign in with credentials</small></div>
                                <form onSubmit={handleSubmit(onSubmit)}>
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

export default Login
