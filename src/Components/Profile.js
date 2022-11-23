import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {FcGoogle} from 'react-icons/fc'
const Profile = () => {
const c1='#458E81'

  return (
    <div className='flex flex-col items-center justify-center my-10'>
        <h1 className='text-[25px] semi '>Sign in or create an account</h1>

        <div className='shadow lg:w-1/2 w-full  p-10 mt-5 bg-[#f9f9f9] rounded-lg'>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { width:'100%', }
      }}
      noValidate
      autoComplete="off"
      className='flex flex-col gap-10 text-[#458E81]'
    >
      <TextField id="outlined-basic" label="Email" variant="outlined"  color="success"  />
      <TextField id="outlined-basic" label="Password" variant="outlined" color="success" />

      <div className=" grid md:grid-cols-2 gap-4">
        <button className="flex  items-center gap-2 p-2 px-4 rounded-[0.93rem]  bg-[#eceae4] justify-center"><FcGoogle size={35}/>Sign In With Google</button>
        <button className="gap-2 p-2 px-4 rounded-[0.93rem] text-center bg-[#3B514B] text-white">Login</button>

      </div>

   
    </Box> 
        </div>
    

    </div>
  )
}

export default Profile