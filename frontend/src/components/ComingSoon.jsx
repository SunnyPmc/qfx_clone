

const ComingSoon = ({name,image,release}) => {
  return (
   
    <div className=' my-10 flex flex-col z-10'>
        <p className="bg-blue-200 bg-opacity-80 z-20 flex items-center 
        my-[-20px] text-medium text-white justify-center ">{release}</p>
        <div className='h-60 w-44 flex   '>
                <img className='object-fill'
                key={name} src={image} alt={name} />
        </div>
        
    </div>
    
    
  )
}

export default ComingSoon
