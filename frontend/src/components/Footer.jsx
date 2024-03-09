import { IoTicketOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='fixed left-0 bottom-0 w-screen h-16 bg-gray-800 z-30 lg:flex items-center hidden '>
     <div className='flex gap-3 mx-10 text-xl font-medium'>
        <IoTicketOutline color="white" size={24}/>
        <h1 className='text-blue-500'>Cinema</h1>
        <h1 className='text-white'>|</h1>
        <h1 className='text-white'>Movie</h1>
     </div>
     <div className="flex justify-evenly w-full">
        
        <select name="" id="" className="px-4 py-1 rounded-sm text-gray-100 font-medium text-lg bg-gray-800 outline-none">
            <option disabled selected>Select cinema</option>
            <option  value="">Labim mall</option>
            <option value="">Civil mall</option>
            <option value="">City center</option>
            <option value="">Bhatbhateni</option>
        </select>
        <select name="" id="" className="px-4 py-1 rounded-sm text-gray-100 font-medium text-lg bg-gray-800 outline-none">
            <option disabled selected>Select Movie</option>
            <option  value="">Dunki</option>
            <option value="">Salaar</option>
            <option value="">Aquaman</option>
            <option value="">Tiger 3</option>
        </select>
        <select name="" id="" className="px-4 py-1 rounded-sm text-gray-100 font-medium text-lg bg-gray-800 outline-none">
            <option disabled selected>Select Date</option>
            <option  value="">20 Dec</option>
            <option value="">21 Dec</option>
            <option value="">22 Dec</option>
            <option value="">23 Dec</option>
        </select>
        <select name="" id="" className="px-4 py-1 rounded-sm text-gray-100 font-medium text-lg bg-gray-800 outline-none">
            <option disabled selected>Select Time</option>
            <option  value="">8:30</option>
            <option value="">12:30</option>
            <option value="">16:30</option>
            <option value="">21:30</option>
        </select>
        <button className="bg-blue-400 px-4 py-1.5 text-xl rounded-md font-medium text-gray-100">Buy now</button>
     </div>
    </div>
  )
}

export default Footer
