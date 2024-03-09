import { useState } from 'react'
import {moviesPoster} from './Constants'

const NowShowing = () => {
    const [activeImageIndex, setActiveImageIndex] = useState(0)
  return (
    <div className='mx-20 my-10 flex flex-col'>
        <h1 className='text-2xl text-blue-400'>NOW SHOWING </h1>
        <div className='h-60 w-44   my-6 flex flex-row gap-10 '>
            {moviesPoster.map((movie,i) => (
                <img className='object-fill'
                key={movie.name} src={movie.image} alt={movie.name} />
            ))}
        </div>
    </div>
  )
}

export default NowShowing
