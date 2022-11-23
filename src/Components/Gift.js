import React,{useState} from 'react'
import { useEffect } from 'react';
import{useParams } from 'react-router-dom';
import { Gift } from '../Data/data';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const MyGift = () => {
    
  let {giftId} = useParams();
  const [mygift,setMygift]= useState([])

    useEffect(()=>
    {
        const thisBlog = Gift.find((g)=> {
            return (g.id ===parseInt(giftId) )
        })
        setMygift(thisBlog)
    
    })

 

  return (
    <div className=" flex md:flex-row flex-col">
        <div className='bg-[#f9f9f9] w-full  flex flex-col items-center justify-center gap-7  py-10 '>
          <div>
          <img src={mygift.img} alt="Gift" className=" h-[255px]" />
    
          </div>

       
   <div className=''>
          <p className="text-[15px] semi text-gray-600">GIFT AMOUNT</p>
      <Box component="form" className="rounded-3xl"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%',},
      }}
      noValidate
      autoComplete="off"
    >
       <TextField
          required
          id="outlined-required"
          label=" Enter Gift Amount"
          type="number" 
          color="success"
        />
<div className='my-10'>
<p className="text-[15px] semi text-gray-600">To</p>
      <TextField
          required
          id="outlined-required"
          label="Recipient Name" 
        />
          <TextField
          required
          id="outlined-required"
          label="Recipient Email" 
          type='email'
        />
</div>
 
<div className='my-10'>
 <p className="text-[15px] semi text-gray-600">From</p>
      <TextField
          required
          id="outlined-required"
          label="Sender Name" 
        />
          <TextField
          required
          id="outlined-required"
          label="Sender Email" 
          type='email'
        />
 </div>


<div>
<p className="text-[15px] semi text-gray-600">Message</p>
  <TextField
          required
          id="outlined-required"
          label="Your Message"  
          multiline
          rows={4}
        />

</div>
<div className='ml-2 mt-4'>
<Button variant="contained"  >Send </Button>
</div>



      </Box>
   </div>
 
        </div>

        </div>
       

  
  )
}

export default MyGift