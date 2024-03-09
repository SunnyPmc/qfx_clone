import {FaFacebookF, FaInstagram, FaViber, FaWhatsapp,FaRegCopyright } from 'react-icons/fa'
import { LuSend } from "react-icons/lu";

const Socials = () => {
  return (
    <>
    <div className="flex  justify-center mt-[-250px] " >
          <hr className="w-2/3   bg-gray-200 h-[3px]" />
     </div>
     <div className='flex flex-col items-center my-10'>
        <div className='h-28 w-44 '>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW1NItzGySpj7_ITeDPLhMjIPa1XuxWR7uzgd7ZK738g&s" alt="qfx-logo" className='h-full w-full object-fill' />
        </div>
        <div className='my-10 flex gap-5 '>
            <a  href=""><FaFacebookF size={24} fill='#89CFF0'/></a>
            <a href=""><FaInstagram size={24} fill='#89CFF0'/></a>
            <a href=""><FaViber size={24} fill='#89CFF0'/></a>
            <a href=""><FaWhatsapp size={24} fill='#89CFF0'/></a>
        </div>
        <h1 className='text-xl text-gray-500 font-medium mt-[-20px]'>Get latest movie Update</h1>
        <div className='my-4 flex items-center text-white'>
            <input type="text"
            placeholder='Enter your email id'
            className='px-3 py-2 bg-gray-800 rounded-md' />
            <button className=' ml-[-20px] '><LuSend color='white' /></button>
        </div>
        <div className='flex gap-4 text-gray-500'>
            <a href="">About us |</a>
            <a href="">Maps |</a>
            <a href="">FAQs |</a>
            <a href="">Terms and Conditions |</a>
            <a href="">Privacy Policy |</a>
        </div>
        <div className='flex items-center gap-2 my-4 text-gray-500 font-medium '>
            <FaRegCopyright/>
            <h1 className='my-8'>All Rights Reserved</h1>
        </div>
     </div>
     </>
  )
}

export default Socials
