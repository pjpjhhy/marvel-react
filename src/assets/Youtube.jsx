import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Youtube() {
  return (
    <Link to='https://www.youtube.com/marvel/'>
    <div className='w-6 h-6 duration-500 text-gray-500 hover:text-gray-300 cursor-pointer'>
        <FaYoutube  size='full'/>
    </div>
    </Link>
  )
}
