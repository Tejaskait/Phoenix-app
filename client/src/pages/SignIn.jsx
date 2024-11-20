import { useState } from 'react'
import Maerqueesignin from '../components/Marqueesignin';
import { motion } from 'framer-motion';
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';

export default function SignIn() {
  const [formData,setFormData] =useState({});
  const {loading , error} = useSelector((state)=>state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
const handleChange=(e)=>{
  setFormData({
    ...formData,
    [e.target.id]:e.target.value,
  });
};
const handleSubmit= async(e)=>{
  e.preventDefault();
  try {
    dispatch(signInStart());
  const res = await fetch('/api/auth/signin',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  console.log(data);
  if (data.success === false) {
    dispatch(signInFailure(data.message));
    return;
  }
  dispatch(signInSuccess(data));
  navigate('/');
  } catch (error) {
    setLoading(false);
    setError(error.message);
  }
  
  
    
  
};
 console.log(formData);
  return (
    <div className='w-full  bg-[#004D43]'>
      <div className='py-8 text-white'>
        <div className='border-b-2 border-t-2 border-zinc-300 hover:text-[#CDEA68] transition-colors duration-300 flex tracking-tighter whitespace-nowrap gap-10 overflow:hidden'>
          <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear",repeat:Infinity,duration: 5}} className='text-[12vw]  uppercase leading-none font-nmregular   font-bold'>SIGN IN</motion.h1>
          <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear",repeat:Infinity,duration: 5}} className='text-[12vw] uppercase leading-none font-nmregular font-bold '>SIGN IN</motion.h1>
          <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear",repeat:Infinity,duration: 5}} className='text-[12vw] uppercase leading-none font-nmregular font-bold '>SIGN IN</motion.h1>
          
        </div>
      </div>
      <form onSubmit={handleSubmit} className=' py-8 '>
        <div className='flex items-center flex-col gap-5 '>
      
        <input type='email' placeholder='. . . . . .  email . . . . .' className='bg-[#ffffff] placeholder:px-4 rounded-md opacity-70 border p-5 font-nmregular placeholder:text-black' id='useremail'  onChange={handleChange}/>
        <input type='password' placeholder='. . . . . .  password . . . . .' className='bg-[#ffffff] placeholder:px-4 rounded-md opacity-70 border p-5 font-nmregular placeholder:text-black' id='userpassword' onChange={handleChange}/>
        <button className="flex gap-5 items-center font-nmregular px-10 py-6 bg-zinc-900 rounded-full tracking-tighter mt-5 text-white ">
            
              <li className=" uppercase hover:underline">SIGN IN</li>
            
            <div className="h-2 w-2 bg-zinc-100 rounded-full"></div>
          </button>
        <h1 className=' '>

        </h1>
        </div>
      </form>
      
      <div className='justify-center items-center flex  '>
      {error && <p className='uppercase   bg-slate-100  border px-5 opacity-70 font-nmregular  text-[1.5vw] text-red-600 rounded-lg mb-5'>{error}</p>}
      <h1 className=''>

      </h1>
      
      </div>
      <Maerqueesignin/>
    </div>
  )
}
