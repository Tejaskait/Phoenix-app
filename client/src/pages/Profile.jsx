import { useSelector } from "react-redux"

export default function Profile() {
  const {currentUser} = useSelector((state) => state.user)
  return (
    <div className="bg-[#004D43]">
    <div className="p-3 flex items-center flex-col gap-5  max-w-lg mx-auto">
      <h1 className='text-[3vw] uppercase font-nmregular text-center my-7'>Profile</h1>
      <form className="flex flex-col ">
        <img src={currentUser.avatar} alt="profile" className="rounded-full h-80 w-80 object-cover self-center cursor-pointer"/>
        <div className="flex py-8 items-center flex-col gap-5 ">
        <input type='text' placeholder='. . . . . .  username . . . . .' className='bg-[#ffffff] placeholder:px-4 rounded-md opacity-70 border p-5 font-nmregular placeholder:text-black' id='username'  />
        <input type='email' placeholder='. . . . . .  email . . . . .' className='bg-[#ffffff] placeholder:px-4 rounded-md opacity-70 border p-5 font-nmregular placeholder:text-black' id='useremail'  />
        <input type='password' placeholder='. . . . . .  password . . . . .' className='bg-[#ffffff] placeholder:px-4 rounded-md opacity-70 border p-5 font-nmregular placeholder:text-black' id='userpassword' />
        
        </div>
      </form>
      <div className="">
      <button className="flex gap-5 items-center font-nmregular px-10 py-6 bg-zinc-900 rounded-full tracking-tighter mt-5 text-white ">
            
            <li className=" uppercase hover:underline">update</li>
          
          <div className="h-2 w-2 bg-zinc-100 rounded-full"></div>
        </button>
        </div>
        <div>
        <button className="flex  gap-5 items-center font-nmregular px-10 py-6 bg-zinc-900 rounded-full tracking-tighter  text-white ">
            
              <li className=" uppercase hover:underline">logout</li>
            
            <div className="h-2 w-2 bg-zinc-100 rounded-full"></div>
          </button>    
      </div>
      <div>
        <button className="flex  gap-5 items-center font-nmregular px-10 py-6 bg-zinc-900 rounded-full tracking-tighter  text-white ">
            
              <li className=" uppercase hover:underline">delete account</li>
            
            <div className="h-2 w-2 bg-zinc-100 rounded-full"></div>
          </button>    
      </div>
      
    </div>
    </div>
  )
}
