import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({link, text, outline}) {
  return (

        <Link to={link}>
            <div>
                <button 
                    style={{clipPath: "polygon(10% 0, 100% 0, 100% 75%, 90% 100%, 0 100%, 0 29%)"}}
                    className={`uppercase px-10 py-4 font-bold bg-red-600 duration-500 hover:bg-red-700
                    ${outline === "outline" ? " bg-slate-500 hover:bg-gray-700 hover:border hover:border-white" : "bg-red-500 hover:bg-red-700" }`}>
                    {text}
                </button>
            </div>
        </Link>
  )
}
