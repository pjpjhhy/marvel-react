import React from 'react'
import Button from '../components/Button'
import TitleRotate from '../components/TitleRotate'

export default function TitleImageBox() {
  return (
    <div>
         {/* comics section */}
         <section className=' w-full py-2'>
            <div 
            style={{clipPath: "polygon(0 0, 100% 0, 100% 93%, 0% 100%)",}}
            className='relative w-full h-[500px] flex justify-end bg-[#151515]'>
              {/* right:image */}
              <div 
              style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 14% 100%)"}}
              className='w-[55%] h-full '>
                <img src="https://cdn.marvel.com/content/1x/20240124-newtomu_base_set_dsk.jpg" />
              </div>
              {/* absolute relative all select */}
              <div className='absolute top-0 left-0 w-full h-full flex justify-center'>
                <div className='max-w-7xl w-full h-full flex flex-col justify-center text-white space-y-10'>
                  <img 
                  className='w-[65px] h-[90px] -mb-8'
                  src="https://cdn.marvel.com/content/1x/mulogo_lob_log_eye_01_1.png" alt="logo_img" />
                  <div className=' space-y-2'>
                    <TitleRotate text="AVAILABLE NOW"/>
                    <h1 className='text-4xl font-black'>NEW ON MARVEL UNLIMITED</h1>
                    <p>Read these plus 30,000+ digital comics for $9.99 a month!</p>
                  </div>
                  <Button outline='outline' text='get marvel unlimited' />
                </div>
              </div>
            </div>
            {/* comics list */}
            <div className=''>

            </div>
          </section>
    </div>
  )
}
