import React from 'react'
import { RiFacebookBoxFill } from "react-icons/ri";
import { Link } from 'react-router-dom';


export default function FaceBook() {
  return (
    <Link to='https://www.facebook.com/Marvel/'>
    <div className='w-6 h-6 duration-500 text-gray-500 hover:text-gray-300 cursor-pointer'>
        <RiFacebookBoxFill size='full'/>
    </div>
    </Link>
  )
}
