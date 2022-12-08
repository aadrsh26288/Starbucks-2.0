import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css'

const Footer = () => {
  return (
    <footer className='bg-[#0E382C] text-white mt-5 '>
      <div className='w-[90%] mx-auto hidden  md:flex md:justify-between py-20 justify-center  '>
        <img src='https://www.starbucks.in/assets/icon/logo.png' className='w-[62px] h-[62px]'/>
        <div className='text-md'>
            <p className='semi text-[19px]'>About Us</p>
          <div className='mt-3 flex flex-col gap-5'>
            <p>Our Heritage</p>
            <p>Our Company</p>
            <p>Coffeehouse</p>
          </div>
        </div>

        <div className='text-md'>
            <p className='semi text-[19px]'>Responsibility</p>
          <div className='mt-3 flex flex-col gap-5'>
            <p>Community</p>
            <p>Ethical Sourcing</p>
            <p>Environment</p>
            <p>Diversity</p>
          </div>
        </div>

        <div className='text-md'>
            <p className='semi text-[19px]'>Quick Links</p>
          <div className='mt-3 flex flex-col gap-5'>
            <p>Careers</p>
            <p>Season's Gifting</p>
            <p>FAQs</p>
            <p>Customer Service</p>
            <p>Delivery</p>
          </div>
        </div>

        <div className='text-md'>
            <p className='semi text-[19px]'>Social Links</p>
          <div className='mt-3 flex gap-3'>
            <img src='https://www.starbucks.in/assets/icon/instagram.svg' className='w-[30px]'/>
             <img src='https://www.starbucks.in/assets/icon/facebook.svg' className='w-[30px]'/>
             <img src='https://www.starbucks.in/assets/icon/twitter.svg' className='w-[30px]'/>
          </div>
        </div>

        <div className='hidden lg:inline'>
          <img src='https://www.starbucks.in/assets/images/appstoreiOS.png'/>
          <img src='https://www.starbucks.in/assets/images/appstoreAndroid.png'/>
        </div>
        </div>

        <h1 className='w-[90%] border-b-[1px] mx-auto '></h1>
        <div className='w-[90%] py-6 pb-10 mx-auto flex justify-center md:justify-between items-center'>
          <div className='flex text-[10px] md:text-[12px] gap-4 '>
            <p className='border-r-[1px] pr-3'>Web Accessiblity </p>
            <p className='border-r-[1px] pr-3'>Privacy Statement </p>
            <p className='border-r-[1px] pr-3'>Terms of Use </p>
            <p className=''>Contact Us </p>
          </div>
          <p className='hidden md:inline text-[10px]'>© 2022 Starbucks Coffee Company. All rights reserved.</p>
        </div>

    </footer>
  )
}

export default Footer