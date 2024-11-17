import { Link } from 'react-router-dom';
import {FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex  justify-between items-center max-w-6xl mx-auto p-3'> <Link to='/'>
        <h1 class=" text-md font-bold ">PHOENIX <img src="src/components/phoenix-logo-1.png" alt="Logo" style={{ height: '60px', width: '60px' }} /></h1>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type='text' placeholder='SEARCH' className='bg-transparent focus:outline-none w-24 sm:w-64'/> 
            <FaSearch className='text-slate-600'/>

        </form>
        </Link>
        <ul className='flex gap-6'>
            <Link to='/'>
                <li className='hidden sm:inline text-slate-700 hover:underline'>
                    HOME
                </li>
            </Link>
            <Link to='/aboutus'>
                <li className='hidden sm:inline text-slate-700 hover:underline'>
                    ABOUT US
                </li>
            </Link>
            <Link to='/contactus'>
                <li className='hidden sm:inline text-slate-700 hover:underline'>
                    CONTACT US
                </li>
            </Link>
            <Link to='/resources'>
                <li className='hidden sm:inline text-slate-700 hover:underline'>
                    RESOURCES
                </li>
            </Link>
            <Link to='/careers'>
                <li className='hidden sm:inline text-slate-700 hover:underline'>
                    CAREERS
                </li>
            </Link>
            <Link to='/ourservices'>
                <li className='hidden sm:inline text-slate-700 hover:underline'>
                    OUR SERVICES
                </li>
            </Link>
            <Link to='/sign-in'>
                <li className='text-slate-700 hover:underline'>
                    SIGN IN
                </li>
            </Link>
        
        
        
        </ul>

        </div>
    </header>
  )
}
