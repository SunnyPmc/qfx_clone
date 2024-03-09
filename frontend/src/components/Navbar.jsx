import React, { useState } from 'react';
import {Menu,X,Search,MapPin} from 'lucide-react'
import { navData } from './Constants';
import Login from './Login';

const Header = () => {
    
      const [open, setOpen] =useState(false);
      const [popup, setPopup] = useState(false)

      const togglePopup = () => {
        setPopup(!popup)
      }

    return (
        <>
        <div className='shadow-md w-full fixed top-0 left-0 h-20 z-30'>
            
           <div className='md:flex  items-center justify-between bg-white py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='cursor-pointer flex items-center gap-1 '>
                <img src="" alt="Logo" className='font-bold text-2xl sm:mr-32 lg:mr-96 md:mr-12 mr-32' />
                 <div className='flex flex-row relative items-center '>
                <Search className='ml-3 absolute'/>
                <input type="text"
                placeholder='movie title, genre' 
                aria-label='search talk'
                className='rounded-lg border-2 px-10 py-1.5
                outline-none w-12 md:w-12 md:hover:w-36 
                transition-all duration-500 ease-out sm:w-32 lg:w-72' />
            </div>
            <MapPin color='red' className='sm:hidden ml-8'/>
            </div>
            
           
            {/* Menu icon */}
            
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <X/> : <Menu />
                }
            </div>
            {/* linke items */}
            
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in whitespace-nowrap
             ${open ? 'top-16' : 'top-[-490px]'}`}>
                {
                    navData.map((link) => (
                    <li key={link.name} className='md:ml-5 md:text-sm lg:ml-10 
                    lg:text-lg md:my-0 my-7 font-semibold'>
                        <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                    </li>))
                }
                {/* button */}
                <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'
               onClick={togglePopup}>sign  up</button>
               
            </ul>
           
            
           </div>
           {popup && (
                <Login onClose={togglePopup}/>
               )}
        </div>
         
               </>
    );

};

export default Header;