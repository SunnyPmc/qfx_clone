
import { useSelector } from 'react-redux'
import ComingSoon from './ComingSoon'


const Cmitems = () => {
    
const movies = useSelector(state => state.movie.movies)
    
    
  return (
    <>
    <div>
        <h1 className='mx-20 text-2xl text-blue-400 '>COMING SOON</h1>
    </div>
   <div className='flex mx-20 gap-10  '>
   
    {movies.map((movie) => (
        <ComingSoon
        key={movie.name}
        name={movie.name}
        image={movie.image}
        status={movie.status}
        release={movie.release}/>
    ))}
   </div>
   </>
    
  )
}

export default Cmitems
