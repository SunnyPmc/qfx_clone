import { X, Eye, EyeOff } from "lucide-react"
import { useRef } from "react"


const Login = ({onClose}) => {

    const closePopup = () => {
        onClose(false)
    }
    const modalRef = useRef()
    const closeModal = (e) => {
        if(modalRef.current === e.target) {
            onClose()
        }
    }
  return (
    <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50 flex justify-center items-center mt-[-400px] '>
       <div className='flex flex-col gap-5 text-white relative '>
            <button onClick={closePopup}
            className='place-self-end mb-[-100px] absolute px-2 py-2 my-1 mx-1 bg-opacity-10 bg-gray-200 rounded-full'><X size={24}/></button>
            <div className="bg-gray-600 rounded-md px-32 flex flex-col items-center  py-20 ">
                <p className="mt-[-40px] text-2xl font-bold my-4">Login</p>
                <div className="flex flex-col">
                    <label htmlFor="text" className="text-lg font-medium">Email</label>
                    <input type="text"
                    placeholder="enter your email"
                    className="px-4 py-1.5 text-gray-700 rounded-sm outline-none my-2" />
                    <label htmlFor="text" className="text-lg font-medium">Password</label>
                    <input type="password"
                    placeholder="enter your Password"
                     className="px-4 py-1.5 text-gray-700 rounded-sm outline-none my-2" />
                     <button className="mt-[20px] px-3 py-1.5 bg-gray-800 rounded-md font-medium text-xl">Login</button>
                     
                </div>
            </div>
            
       </div>
    </div>
  )
}

export default Login
