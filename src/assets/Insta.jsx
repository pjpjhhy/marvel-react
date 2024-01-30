import React from 'react'
import { TiSocialInstagram } from "react-icons/ti";
import { Link } from 'react-router-dom';


export default function Insta() {
  return (
    <Link to='https://www.instagram.com/marvel/'>
    <div className='w-6 h-6 duration-500 text-gray-500 hover:text-gray-300 cursor-pointer'>
        <TiSocialInstagram  size='full'/>
    </div>
    </Link>
  )
}
