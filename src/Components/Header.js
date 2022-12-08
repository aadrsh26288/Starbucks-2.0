import React,{useState} from 'react'
import {NavLink,Link} from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import { useDispatch ,useSelector} from 'react-redux';
import { Menu, SubMenu, Item } from "burger-menu";
import {GrMenu} from 'react-icons/gr'
import{CiCoffeeCup} from 'react-icons/ci'
import 'burger-menu/lib/index.css';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [side,setSide] = useState('left')
    const products = useSelector((state)=>state.cart)
  return (
    <div>
        <header className="flex justify-around  items-center py-3 border-2 w-full">
            <div className="">
          <Link to='/'><img src='https://www.starbucks.in/assets/icon/logo.png' className="max-w-[45px] h-[45px]"/></Link>      
            </div>
            <div className=' hidden md:flex item-center gap-9 font-myFirstFont '>
              <NavLink exact to='/' activeClassName='border-b-2 border-[#00754a] font-semibold '><p>Home</p></NavLink>  
              <NavLink to='/gift' activeClassName='border-b-2 border-[#00754a] font-semibold'><p>Gift</p></NavLink>  
              <NavLink to='/order' activeClassName='border-b-2 border-[#00754a] font-semibold'> <p>Order</p></NavLink> 
              {/* <NavLink  to='/pay'activeClassName='border-b-2 border-[#00754a] font-semibold'><p>Pay</p></NavLink> */}
              {/* <NavLink  to='' activeClassName='border-b-2 border-[#00754a] font-semibold'><p className=''>store</p></NavLink> */}
            </div>
            <div className='flex  shadow  p-2 gap-1 rounded-3xl px-3 '>
            <img src='https://www.starbucks.in/assets/icon/search.svg'/>
                <input type='text' placeholder='Looking for something specific ?' className='outline-none md:w-[250px]  pl-1 text-sm'/>
              
            </div>
            <div className='flex items-center gap-3 '>
            <Link to='/profile'> <img src='https://www.starbucks.in/assets/icon/account_thin.svg' className='hidden md:flex'/></Link>   
            <Link to='/store'><p className='flex'><CiCoffeeCup size={35} color={'#484848'}/><p className='text-[12px] semi text-red-600'>{products.length}</p></p></Link>   
            </div>
            <div className='md:hidden flex' onClick={() => setIsOpen(!isOpen)}><GrMenu size={23} className='cursor-pointer'/></div>
        </header>
  
  <div className='md:hidden flex'>
       <Menu  className="burger-menu hidden " isOpen={isOpen} selectedKey={'entry'} onClose={() => setIsOpen(false)} >
      <Link to='/'> <Item  text={'Home'}></Item></Link> 
      <Link to='/gift'> <Item  text={'Gift'}></Item></Link> 
      <Link to='/order'> <Item  text={'Order'}></Item></Link>
      <Link to='/profile'> <Item  text={'profile'}></Item></Link> 


       

      </Menu>      
       

  </div>
   




    </div>
  )
}

export default Header