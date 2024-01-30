import React from 'react'
import { RiTumblrFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
export default function Thumblr() {
  return (
    <Link to='https://marvelentertainment.tumblr.com/'>
    <div className='w-6 h-6 duration-500 text-gray-500 hover:text-gray-300 cursor-pointer'>
        <RiTumblrFill  size='full'/>
    </div>
    </Link>
  )
}
