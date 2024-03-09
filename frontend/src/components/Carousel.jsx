import { ChevronLeft,ChevronRight } from 'lucide-react';
import { moviesPoster } from './Constants';
import { useEffect, useState } from 'react';

const Carousel = () => {
    const [activeImageIndex, setActiveImageIndex] = useState(0)

    const handleNext = () => {
        if(activeImageIndex === moviesPoster.length - 1) setActiveImageIndex(0)
        else setActiveImageIndex(activeImageIndex + 1)
    }
    const handleprev = () => {
        if(activeImageIndex === 0) setActiveImageIndex(moviesPoster.length - 1)
        else setActiveImageIndex(activeImageIndex - 1)
    }
    useEffect(() => {
      const timer = setTimeout(() => {
        handleNext()
      },3000)
      return () => clearTimeout(timer)
    })
  return (
    <>
      
      <div className='overflow-hidden relative mt-20 z-10'>
        <div className='w-screen lg:h-[700px] md:h-[500px] sm:h-[400px]
        flex '>
            {moviesPoster.map((movie,i) => (
              <img key={new Date().getTime + Math.random()} src={movie.image} alt={movie.name}
              className={`w-full object-fill ${activeImageIndex === i ? 'block' : 'hidden'}`} /> 
              
            ))}
        </div>
        <div className='absolute inset-0 flex items-center justify-between mx-20 '>
          <button onClick={handleprev}
           className='px-3 py-3 bg-gray-500 opacity-70 rounded-full  '><ChevronLeft size={40}/></button>
          <button onClick={handleNext}
           className='px-3 py-3 bg-gray-500 opacity-70  rounded-full '><ChevronRight size={40}/></button>
        </div>
         <div className='absolute  mt-[-220px] ml-32 flex flex-col gap-6'>
          <p className='text-3xl font-medium text-blue-400'>Now showing</p>
          {moviesPoster.map((movie, i) => (
            <p className={`font-medium text-3xl text-white ${activeImageIndex === i ? 'block' : 'hidden'}`}
            key={movie.name}>{movie.name}</p>
          ))}
          <button className='px-5 py-3 font-bold text-white text-lg bg-blue-400 rounded-md'>Buy Now</button>
        </div>
      
        
      </div>
      
      </>
      
    
  )
}

export default Carousel
