import React from 'react'

export default function TitleRotate({text}) {
  return (
 <div>
    {/* acroos title */}
        <div className='relative w-80 h-20 flex items-center'>
        {/* text */}
        <span className='text-lg z-10 font-bold'>{text}</span>
        {/* acroos */}
        <div className='absolute left-0 top-[45px] w-[105px] h-[2px] bg-[#c6a972] -rotate-45' >
        </div>
        </div>
 </div>
  )
}
