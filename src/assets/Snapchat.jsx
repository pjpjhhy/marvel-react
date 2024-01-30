import React from 'react'
import { FaSnapchatGhost } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Snapchat() {
  return (
    <Link to='https://www.snapchat.com/add/marvelhq/'>
    <div className='w-6 h-6 duration-500 text-gray-500 hover:text-gray-300 cursor-pointer'>
        <FaSnapchatGhost  size='full'/>
    </div>
    </Link>
  )
}
