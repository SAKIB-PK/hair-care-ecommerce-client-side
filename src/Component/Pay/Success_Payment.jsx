import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import swal from 'sweetalert';

function SuccessPayment() {
  const {id} = useParams()
  const history = useHistory()
  const [product,setProduct] = useState()
  
  // using id search specific product from database
  useEffect(()=>{
    axios.get(`https://stark-cove-71679.herokuapp.com/orders/${id}`)
    .then(res =>{
      setProduct(res.data)
    })
  },[id])

  // validate actual order
  function validate_order(){
    const data = {
      tran_id:id,
      val_id:product?.val_id
    }
    axios.post(`https://stark-cove-71679.herokuapp.com/validate`,data)
    .then(res =>{
      if(res.data){
        swal('Good Job', 'Payment Successfully Confirmed!', 'success')
        history.replace('/')
      }
    })
  }
  return(
     <div className="bg-gray-100 h-screen flex items-center justify-center">
      {/* <!-- ... card design---- --> */}
      <div class="max-w-sm p-8 bg-white rounded-xl shadow-md mx-auto space-y-3">
        <img
          class="h-24 ring-green-500 ring-4 mx-auto rounded-full"
          src={product?.product_image}
          alt="Learn with sumit"
        />
        <div class="space-y-2 text-center">
          <div class="space-y-0.5">
            <p class="font-semibold text-xl">{product?.product_name}</p>
            <p class="text-gray-500 font-medium">{product?.product_profile}</p>
          </div>
          <button
            class="
              border
              px-3
              py-1
              rounded-full
              text-purple-600 text-sm
              font-semibold
              hover:bg-purple-100
              border-purple-600
            "
            onClick={validate_order}
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuccessPayment;

