import React,{useState} from 'react'
import { Link } from 'react-router-dom';

export default function navbar() {
  const [show, setshow] = useState(false)
  return(
     <>
     <div className='flex justify-between px-3 py-2 bg-black relative'>
      <div className="left flex gap-6 items-center">
       <span className='text-white text-xl italic font-bold'>TSK-000-44</span>
       </div>
       <div className="right md:flex gap-6 items-center hidden">
       <Link to="/"><span className='text-gray-500 hover:text-white font-semibold'>General</span></Link>
       <Link to="/business"><span className='text-gray-500 hover:text-white font-semibold'>Business</span></Link>
       <Link to="/entertainment"><span className='text-gray-500 hover:text-white font-semibold'>Entertainment</span></Link>
       <Link to="/health"><span className='text-gray-500 hover:text-white font-semibold'>Health</span></Link>
       <Link to="/science"><span className='text-gray-500 hover:text-white font-semibold'>Science</span></Link>
       <Link to="/sports"><span className='text-gray-500 hover:text-white font-semibold'>Sports</span></Link>
       </div>

        <img src="src\assets\menu.svg" alt="menu" className='md:hidden' onClick={()=>{setshow(!show)}}/>

        <div className={`gap-6 items-center absolute top-12 right-5 ${show?"block":"hidden"} bg-black opacity-80 p-3`}>
       <Link to="/" className='block'><span className='text-white hover:text-white font-semibold'>General</span></Link>
       <Link to="/business" className='block'><span className='text-white hover:text-gray-500 font-semibold'>Business</span></Link>
       <Link to="/entertainment" className='block'><span className='text-white hover:text-gray-500 font-semibold'>Entertainment</span></Link>
       <Link to="/health" className='block'><span className='text-white hover:text-gray-500 font-semibold'>Health</span></Link>
       <Link to="/science" className='block'><span className='text-white hover:text-gray-500 font-semibold'>Science</span></Link>
       <Link to="/sports" className='block'><span className='text-white hover:text-gray-500 font-semibold'>Sports</span></Link>
       </div>
       </div>
     </>
  );
}
