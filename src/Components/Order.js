import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import{Orders} from '../Data/data'
import { add } from '../features/cartSlice';
import { useDispatch ,useSelector} from 'react-redux';

const Order = () => {

const [Food,setFood]=useState(Orders)
const dispatch =  useDispatch()



  function FilterCard(category){
    const Filtered=Orders.filter((order)=>{
      return order.category===category
    })
 setFood(Filtered)

  }

  const handleAdd = (product)=>{
    dispatch(add(product))
  }

  return (
    <div>
      <div className=""> 

        
<div className="bg-[#f2f0eb] flex p-4 items-center justify-around ">
  <button className=" text-[18px] hover:font-bold hover:border-b-2 border-black" onClick={()=>{FilterCard('Bestseller')}}>Bestseller</button>
  <button className=" text-[18px] " onClick={()=>{FilterCard('Espress')}}>Espress</button>
  <button className=" text-[18px] " onClick={()=>{FilterCard('Food')}}>Food</button>
  <button className=" text-[18px] " onClick={()=>{FilterCard('')}} >Merchandise</button>
  <button className=" text-[18px] " onClick={()=>{FilterCard('Ready')}} >Ready To Eat</button>

</div>  
          

      <div className="max-w-6xl mx-auto my-5 grid  gap-6 lg:grid-cols-3 md:grid-cols-2 mt-10">
        {
          Food.map((o)=>{
            return(
              <div className='bg-[#f9f9f9] flex p-5 gap-3 hover:shadow-xl duration-300 shadow rounded-lg' key={o.id}>
          

              <div className='w-[150px] flex justify-center '>
                <img src={o.img} className=' object-cover rounded-full h-[96px] w-[96px]'/>
               </div>

               <div className=' flex flex-col md:w-[300px]  '>
              <div>
                <img src='https://www.starbucks.in/assets/icon/veg.svg'/>
                <h3 className='semi text-[15px] mt-2'>{o.title}</h3>
                <p className='text-[12px]'>{o.description}</p>
               </div>

              <div className='flex justify-between p-2 items-center mt-10 '>
              <p className='semi text-[16px]'>₹ 351.75</p>
              <button className=' py-1 px-4 rounded-3xl bg-[#3B514B] text-white ' onClick={()=>{handleAdd(o)}}>Add item</button>
              </div>
            
               
              </div>
             
         
             
    
    
            </div>
            )
          })
        }

     

      </div>
     

      </div>
    </div>
  )
}

export default Order