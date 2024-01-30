import React from 'react'
import { FaPinterest } from "react-icons/fa6";
import { Link } from 'react-router-dom';
export default function Pinter() {
  return (
    <Link to='https://www.pinterest.co.kr/marvelofficial//'>
    <div className='w-6 h-6 duration-500 text-gray-500 hover:text-gray-300 cursor-pointer'>
        <FaPinterest   size='full'/>
    </div>
    </Link>
  )
}
