import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';


export default function Twitter() {
  return (
    <Link to='https://twitter.com/marvel/'>
    <div className='w-6 h-6 duration-500 text-gray-500 hover:text-gray-300 cursor-pointer'>
        <FaXTwitter  size='full'/>
    </div>
    </Link>
  )
}
