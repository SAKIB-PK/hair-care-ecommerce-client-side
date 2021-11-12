import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import swal from 'sweetalert'

const AddService = () => {
    const {register, handleSubmit,reset} = useForm()
    const onSubmit = data => {
        const {price,description,name,img}= data
        const newData = {
            product:name,
            photo:img,
            price,
            description
        }
        axios.post('https://stark-cove-71679.herokuapp.com/products',newData)
        .then(res => {
            if(res.data.insertedId){
                swal({
                    title:"Good Job!",
                    text:"Your Service Submitted successfully!",
                    icon:"success"
                })
            }else{
                swal({
                    title:"oopps!",
                    text:"Your Service Submitted Failed!",
                    icon:"warning"
                })
            }
            reset()
        })
       
       
    }
    return (
        <div class="font-mono bg-gray-800">
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
						<h3 class="pt-4 text-2xl text-center">Add Your Service</h3>
						<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit(onSubmit)}>
							<div class="mb-4 md:flex md:justify-between">
								<div class="mb-4 md:mr-2 md:mb-0">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="product">
										Product Name
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="product"
										type="text"
										placeholder="Enter Product Name"
                                        {...register("name")}
									/>
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="price">
										Price
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="price"
										type="number"
										placeholder="Price"
                                        {...register("price")}
									/>
								</div>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="photo">
									Photo Link
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="photo"
									type="text"
									placeholder="Photo Link"
                                    {...register("img")}
								/>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="description">
									Description
								</label>
								<textarea rows='5'
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="description"
									type="text"
									placeholder="Enter Your Description"
                                    {...register("description")}
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

export default AddService
