import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Carousel from 'nuka-carousel'; 
import{BsArrowLeftCircle,BsArrowRightCircle} from 'react-icons/bs'
import{SliderData2} from '../Data/data'
import {Gift} from '../Data/data'

 
const Gifts = () => {

    const [card,setCard]= useState(Gift)
    const [card2,setCard2]= useState(Gift)



 function FilterCard(category){
  const NewCard =card2.filter((t)=>{
    return t.category === category

})
setCard(NewCard)

 }
   

  return (
  <div className='w-[100%] mx-auto '>
    <div className='bg-[#1E3932] py-10'>

      <div className="w-[90%] mx-auto">
         <Carousel className='rounded-lg shadow '  wrapAround = {true} autoplay={true}  renderBottomCenterControls={false}
           renderCenterLeftControls={({ previousSlide }) => (
            <button onClick={previousSlide}>
               <BsArrowLeftCircle size='35' className='ml-3  text-white'/>
               </button>
  )}
          renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide} >
          <BsArrowRightCircle size='35' className='mr-3 text-white'/>
          </button>
  )}>

    {
      SliderData2.map((slide)=>{
        // const color = slide.id===1?'white':'black'
        return(

          <div className={`flex md:flex-row flex-col justify-between border-black bg-[${slide.bg}]  text-black py-5`}>
          <div className="flex">
          <div>
            <img src={slide.img} className='w-[100px] h-[205px]'/>
        </div>
        
        <div className=' flex flex-col justify-between  p-4'>
          <div>
          <p className='semi '>{slide.p1} </p>
          <p className='semi text-[25px]'>{slide.p2}</p>
          <p className='mt-2 semi text-[14px]' >{slide.p3}</p>
          </div>
        
        <div className=''>
          <p>Start ordering</p>
          <p>₹ {slide.price}</p>
        </div>
       </div>
        
        </div>
        <div className="flex flex-col  justify-between pb-5 ">
        <p>{slide.p4}</p>
        <button className='bg-white text-black semi py-3 mr-2 px-14 text-center rounded-3xl '>Order Now</button> 
        
        </div> 
        </div>
        )
      })
    }
      </Carousel>

  </div>
      </div>

<div className="bg-[#f2f0eb] flex p-5 items-center justify-around md:text-[18px] text-[12px] sm:text-[10px] ">
  <button className=" hover:font-bold hover:border-b-2 border-black ">FEATURED</button>
  <button className=" " onClick={()=>{FilterCard('Anytime')}}>ANYTIME</button>
  <button className="" onClick={()=>{FilterCard('congrats')}}>CONGRATULATIONS</button>
  <button className="  " onClick={()=>{FilterCard('Thanks')}} >THANK YOU</button>
  <button className=" " onClick={()=>{FilterCard('celebration')}} >CELEBRATION</button>
  <button className="  " onClick={()=>{FilterCard('thanksgiving')}} >THANKS GIVING</button>

</div>



<div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-2 px-1">
{
  card.map((g)=>{
       
    return (
    <div className="w-[100%] mx-auto my-10 "key={g.id}>
   <div className='bg-[#F9F9F9] w-[346px]  h-[180px] pt-[16px] pb-[16px] pl-[152px] relative ml-10 shadow'>
      <div>
        <p className='semi'>{g.title}</p>
        <p className='text-[12px]'>{g.description}</p>
   <Link to={`/gifts/${g.id}`}>  <button className='bg-[#00754a] py-2 shadow text-white text-[12px] rounded-2xl hover:bg-black semi text-center px-4 mt-5'>Add item</button></Link> 
      </div>
      <img src={g.img} className='w-[165px] h-[104px] absolute top-5 right-52  shadow rounded-lg '/>

    </div>
</div>
    )


  })
}
</div>

   

    </div>
  )
}

export default Gifts