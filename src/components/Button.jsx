import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({link, text, outline ,com, red}) {
  return (

        <Link to={link}>
            <div>
                <button 
                    style={{clipPath: "polygon(10% 0, 100% 0, 100% 75%, 90% 100%, 0 100%, 0 29%)"}}
                    className={`uppercase px-10 py-4 font-bold duration-500
                    ${red === "red" ? "bg-red-600 hover:bg-red-700" : ""}
                    ${outline === "outline" ? "bg-gray-500 hover:bg-gray-700 hover:border hover:border-white" : "" }
                    ${com === "com" ? "bg-none border border-white hover:brightness-[0.7]" : "" }`}>
                    {text}
                </button>
            </div>
        </Link>
  )
}
