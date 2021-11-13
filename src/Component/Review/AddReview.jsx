import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import swal from 'sweetalert'
import useAuth from '../../Hooks/useAuth'

const AddReview = () => {
    const {register, handleSubmit,reset} = useForm()
    const {user} = useAuth()
    const onSubmit = data => {
        const {displayName,email,photoURL} = user
        const {review}= data
        const newData = {
            name:displayName,
            photo:photoURL,
            email,
            review
        }
        console.log(newData)
        axios.post('https://stark-cove-71679.herokuapp.com/review',newData)
        .then(res => {
            if(res.data.insertedId){
                swal({
                    title:"Good Job!",
                    text:"Your Review Submitted successfully!",
                    icon:"success"
                })
            }else{
                swal({
                    title:"oopps!",
                    text:"Your Review Submitted Failed!",
                    icon:"warning"
                })
            }
            reset()
        })
       
       
    }
    return (
        <div class="font-mono ">
		{/* <!-- Container --> */}
		<div class="container mx-auto">
			<div class="flex justify-center px-6 py-12">
				{/* <!-- Row --> */}
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
					{/* <!-- Col --> */}
					<div
						class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
						style={{backgroundImage: "url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')"}}
					></div>
					{/* <!-- Col --> */}
					<div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 class="pt-4 text-2xl text-center">Add Your Feelings</h3>
						<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit(onSubmit)}>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="description">
									Comment
								</label>
								<textarea rows='5'
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="description"
									type="text"
									placeholder="Enter Your Review"
                                    {...register("review")}
								></textarea>
							</div>
							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="submit"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

export default AddReview
