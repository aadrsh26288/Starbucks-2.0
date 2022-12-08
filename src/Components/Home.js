import React,{useState,useRef} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import{items} from '../Data/data'
import Carousel from 'nuka-carousel'; 
import{BsArrowLeftCircle,BsArrowRightCircle} from 'react-icons/bs'
import { SliderData } from '../Data/data';
import{Link} from 'react-router-dom'

const Home = () => {
 
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const flickityOptions = {
    initialIndex: 2
}

  return (
    <div>
      <div className="bg-[#0E382C] text-[#f9f9f9]  p-6  flex items-center  justify-between">
        <p className="text-[20px]">A world of rewards awaits you! Sign up now.</p>
        <button className='border-[1px]  text-[14px] font-[700] p-1 px-2 rounded-xl'>Know More</button>
      </div>

      <div className='w-[88%] mx-auto py-5 '>
        <h2 className="text-[24px] bold text-[#0E382C]">Handcrafted Curations</h2>
        <div className=' grid grid-cols-3 md:flex justify-between mt-5 text-center space-y-1 md:space-y-0 pb-9'>
          <div className="flex flex-col  items-center ">
         <Link to='/order'> <img src='https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Sample_Best.jpg' className='md:w-[108px] w-[84px] h-[84px] md:h-[108px]  object-cover rounded-full hover:border-2 border-[#00754a]  '/></Link>  
            <p className='text-[16px] semi mt-1'>Bestseller</p>
          </div>
          <div className="flex flex-col  items-center ">
            <img src='https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Sample_Drink.jpg' className='md:w-[108px] w-[84px] h-[84px] md:h-[108px]  object-cover rounded-full hover:border-2 border-[#00754a]  '/>
            <p className='text-[16px] semi mt-1'>Drinks</p>
          </div>
          <div className="flex flex-col  items-center ">
            <img src='https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Sample_Food.jpg' className='md:w-[108px] w-[84px] h-[84px] md:h-[108px]  object-cover rounded-full hover:border-2 border-[#00754a]  '/>
            <p className='text-[16px] semi mt-1'>Food</p>
          </div>
          <div className="flex flex-col  items-center ">
            <img src='https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Sample_Merch.jpg' className='md:w-[108px] w-[84px] h-[84px] md:h-[108px] object-cover rounded-full hover:border-2 border-[#00754a]  '/>
            <p className='text-[16px] semi mt-1'>Merchandise</p>
          </div>
          <div className="flex flex-col  items-center">
            <img src='https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/At_Home.jpg' className='md:w-[108px] w-[84px] h-[84px] md:h-[108px] object-cover rounded-full hover:border-2 border-[#00754a]  '/>
            <p className='text-[16px] semi mt-1'>Coffee At Home</p>
          </div>
          <div className="flex flex-col  items-center ">
            <img src='https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Sample_ready.jpg' className='md:w-[108px] w-[84px] h-[84px] md:h-[108px]  object-cover rounded-full hover:border-2 border-[#00754a]  '/>
            <p className='text-[16px] semi mt-1'>Ready to Eat</p>
          </div>

        </div>
      </div>

<div className='bg-[#EDEBE9] pb-10'>

   <div className='flex justify-between items-center p-4 px-8 pt-6 '>
  <h2 className="md:text-[24px] bold text-[#0E382C] ml-5 text-[15px]">Barista Recommends</h2>
    <p className='semi '>View Menu</p>
  </div>

  
  <div className=' w-[95%] mx-auto my-5  '>
   <Slider {...settings}  >
   
    {
      items.map((item) =>{
        return(
          <div className='shadow rounded-lg flex flex-col bg-[#f9f9f9] m-3'>
          <div className='flex gap-3 p-3 '>
          <img src={item.img} className='w-[80px] h-[80px] object-cover'/>
          <div className='p-1'>
          <img src='https://www.starbucks.in/assets/icon/veg.svg'/>
          <p className='semi'>{item.name}</p>
          </div>
            
         </div>
  
          <div className='flex justify-between items-center p-2'>
            <p className='semi'>₹ {item.price}</p>
            <button className='bg-[#00754a] p-1 text-white text-[13px] rounded-2xl hover:bg-black semi text-center px-3'>Add item</button>
          </div>
        
        </div>
        )
      })
    }
    
    </Slider>

 </div>
   </div>


<div className="w-[90%] mx-auto">
<Carousel className=' mt-20 mb-9 rounded-2xl shadow '  wrapAround = {true} autoplay={true}  renderBottomCenterControls={false}
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
      SliderData.map((slide)=>{
        const color = slide.id===1?'white':'black'
        return(

          <div className={`flex md:flex-row flex-col justify-between border-black bg-[${slide.bg}]  text-${color} py-5`} key={slide.id}>
          <div className="flex">
          <div>
        <img src={slide.img} className='w-[200px] md:w-[110px] h-[205px]'/>
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
        <div className="flex flex-col justify-between  pb-5 ">
        <p className='text-center'>{slide.p4}</p>
        <button className='bg-white text-black semi py-3 mr-2 px-14 text-center rounded-3xl '>Order Now</button> 
        
        </div> 
        </div>
        )
      })
    }
      </Carousel>

</div>

{/* ////////////////////////////////// */}
<div className="w-[90%] mx-auto ">
<h2 className="md:text-[24px] bold text-[#0E382C]  text-[15px]">Latest Offerings</h2>
<div className='flex md:flex-row flex-col gap-9'>

  <div className="pb-4  flex flex-col gap-2 rounded-lg my-5  shadow">
    <img src='https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/112898.jpg' className='w-full object-cover rounded-t-lg '/>
    <div className="p-3">
    <img src='https://www.starbucks.in/assets/icon/veg.svg' />
    <p className='semi mt-3 text-lg'>Hazelnut Mocha Cheesecake Latte</p>
    <p className='semi  text-gray-500 text-sm'>SHORT(Short Hazelnut Mocha Latte) .294 kcal</p>
    <p className='mt-5'>Signature espresso and milk with flavors of hazelnut and light cream cheese. Topped with whipped cream, mocha</p>
    </div>
    <div className='flex justify-between item-center  px-4'>
      <p className='semi'>₹ 404.25</p>
      <button className='bg-[#00754a] p-1 shadow text-white rounded-2xl hover:bg-black semi text-center px-4'>Add item</button>
    </div>
  </div>

  <div className="pb-4  flex flex-col gap-2 rounded-lg my-5  shadow">
    <img src='https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/112905.jpg' className='w-full object-cover rounded-t-lg '/>
    <div className="p-3">
    <img src='https://www.starbucks.in/assets/icon/veg.svg' />
    <p className='semi mt-3 text-lg'>Hazelnut Mocha Cheesecake Frappuccino</p>
    <p className='semi  text-gray-500 text-sm'>TALL(Tall Hazelnut Mocha Frappuccino) .491 kcal</p>
    <p className='mt-5'>Hazelnut syrup combined with light cream cheese styled sauce, coffee and milk, blended with ice. Landed on bis</p>
    </div>
    <div className='flex justify-between item-center  px-4'>
      <p className='semi'>₹ 474.25</p>
      <button className='bg-[#00754a] p-1 shadow text-white rounded-2xl hover:bg-black semi text-center px-4'>Add item</button>
    </div>
  </div>

</div>

</div> 
 
 {/* ////////////// */}
 <div className="my-10 w-[94%] mx-auto ">

 <div className='flex justify-between items-center  pt-6 '>
  <h2 className="md:text-[24px] bold text-[#0E382C] ml-5 text-[15px]">Learn more about the world of coffee!</h2>
    <p className='semi'>Discover more</p>
  </div>

<div className='grid md:grid-cols-2 gap-10 p-8 items-center bg-[#D4E9E2] my-5'>
  <img src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81104.jpg' className='border-2 '/>
  <div className=' w-full p-2 '>
    <p className='font-bold text-[33px]'>A new way to earn sips and trips</p>
    <p className='text-[19px] font-semibold mt-2 '>Now you can link your Starbucks® Rewards + Delta SkyMiles® accounts to get:</p>
    <ul className='list-disc text-[15px] mt-3 font-semibold ml-6 text-justify flex flex-col gap-2 '>
      <li>150 Stars + 500 miles when you link before 12/31</li>
      <li>Double Stars on Delta travel days</li>
      <li>1 mile per $1 spent at Starbucks (excludes taxes and gratuities)*</li>
    </ul>
    <button className="mt-4 bg-black text-white p-2 rounded-3xl px-4">Link accounts</button>
  </div>

</div>



 </div>
 <img src='https://starbucks-clone.vercel.app/assets/img/startbuck.png' className='w-full object-cover'/>
     
   
</div>
     


  )
}

export default Home

