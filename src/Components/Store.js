import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import{ImCross} from 'react-icons/im'
import {remove} from '../features/cartSlice'

const Store = () => {
    const products = useSelector((state)=>state.cart)
    const dispatch = useDispatch()
    const handleRemove = (productId)=>{
        dispatch(remove(productId))
     }
console.log(products)
  return (
    <div>

        {products.length==0 ?<h1 className="text-center semi text-[25px] my-10 text-[#484848]">Your Cup is Empty</h1>:''}

        {
            products.map((product)=>{
                return (
                    <div className="shadow flex gap-4 items-center md:flex-row flex-col  justify-between p-5 max-w-5xl mx-auto  bg-[#c9c9c9] my-10 rounded-lg" key={product.id}>
                        <img src={product.img}  className="md:w-[200px] h-[111px] object-cover w-full rounded-md" />
                        <div>
                        <p className="text-2xl semi">{product.title}</p>
                        <p className="pr-5 text-justify">{product.description}</p>
                        <p className="text-[23px] semi">₹ {product.price}.00</p>
                        <p>{product.qty}</p>
                        </div>

                        <div><ImCross size={30} color={'gray'} className="cursor-pointer" onClick={()=>{handleRemove(product.id)}}/></div>
                      
                    </div>
                )
            })

        }
    </div>
  )
}

export default Store

