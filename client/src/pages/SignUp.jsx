import React from 'react'
import Maerqueesignup from '../components/Marqueesignup'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



export default function SignUp() {
  return (
    <div className='w-full  bg-[#004D43]'>
      <div className='py-8 text-white'>
        <div className='border-b-2 border-t-2 border-zinc-300 hover:text-[#CDEA68] transition-colors duration-300 flex tracking-tighter whitespace-nowrap gap-10 overflow:hidden'>
          <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear",repeat:Infinity,duration: 5}} className='text-[12vw]  uppercase leading-none font-nmregular   font-bold'>SIGN UP</motion.h1>
          <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear",repeat:Infinity,duration: 5}} className='text-[12vw] uppercase leading-none font-nmregular font-bold '>SIGN UP</motion.h1>
          <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear",repeat:Infinity,duration: 5}} className='text-[12vw] uppercase leading-none font-nmregular font-bold '>SIGN UP</motion.h1>
          
        </div>
      </div>
      <form className=' py-8 '>
        <div className='flex items-center flex-col gap-5 '>
        <input type='text' placeholder='username' className='bg-[#ffffff] placeholder:px-4 rounded-md placeholder:text-black' id='username'  />
        <input type='text' placeholder='email' className='bg-[#ffffff] placeholder:px-4 rounded-md placeholder:text-black' id='useremail'  />
        <input type='text' placeholder='password' className='bg-[#ffffff] placeholder:px-4 rounded-md placeholder:text-black' id='userpassword'  />
        <button className="flex gap-5 items-center font-nmregular px-10 py-6 bg-zinc-900 rounded-full tracking-tighter mt-5 text-white ">
            
              <li className=" uppercase hover:underline">SIGN UP</li>
            
            <div className="h-2 w-2 bg-zinc-100 rounded-full"></div>
          </button>
        <h1 className=' '>

        </h1>
        </div>
      </form>
      <Maerqueesignup/>
    </div>
  )
}
