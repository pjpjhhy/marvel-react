import React, { useState } from 'react'
import { testimonials } from '../Lib/Menus'
import FaceBook from '../assets/FaceBook'
import Insta from '../assets/Insta'
import Twitter from '../assets/Twitter'
import Button from '../components/Button'
import { motion } from "framer-motion"




const Card = ({logoImage, size,  image, title, link1, link2, sub, article, btn1, btn2, selected, setSelected, position}) => {
    const offset = position <= selected ? 0 : 100
    return(
        // item 1 out of 5
        <div className='w-full h-full flex justify-center'>
          <motion.div
          initial={false}
          animate={{x:`${offset}%`}}
          transition={{duration:0.25, ease:"easeOut"}}
          style={{zIndex:position}}
          onClick={()=> setSelected(position)} 
          className='absolute top-0 left-0 w-full min-h-full p-8 flex flex-col items-center justify-center'>
            <div className='absolute top-0 left-0 w-full h-full flex justify-center'>
              {/* background image */}
              <img 
              className='w-full h-full bg-cover' 
              src={image} 
              alt={title}/>
              <div className=' text-white space-y-4 justify-center absolute max-w-7xl w-full h-full flex flex-col'>
                {logoImage && 
                <div className='h-[90px]'>
                <img src={logoImage} alt="slide_logo" className={size} />
                </div>}
                <h1 className='text-3xl font-black uppercase'>{sub}</h1>
                <p className='text-md w-[700px] font-medium'>{article}</p>
                <div className='flex space-x-4'>
                  {link1 && <Button link={link1} text={btn1}/>}
                  {link2 && <Button link={link2} text={btn2}/>}
                </div>
              </div>
            </div>
          </motion.div>
        {/* description */}
      </div>
    )
  }
  
  const SelectedBtns = ({numTracks, setSelected, selected}) => {
    return(
      <>
      <div className='flex gap-x-2'>
          {numTracks.map((item, index, array) => (
            <button 
                className='h-2 w-full bg-slate-300 relative'
                onClick={()=> setSelected(index)}
                key={index}>
                  {selected == index ?(
                  <motion.span 
                    initial={{width:"0%"}}
                    animate={{width:"100%"}}
                    transition={{duration:5, ease:"easeOut"}}
                    onAnimationComplete={()=>{setSelected(selected === array.length - 1 ? 0 : selected + 1)}}
                    className=' absolute top-0 left-0 bg-red-600 w-full h-full'>
                  </motion.span>
                  ):(
                    <span 
                    style={{width:selected > index ? "100%" : "0%"}}
                    className=' absolute top-0 left-0 bg-red-600'>  
                    </span>
                  )
                  }
                   <p 
                   className={`w-full h-16 text-left text-sm font-semibold items-start pt-4 px-1
                   ${selected === index && "text-red-600"}`}>
                    {item.title}
                  </p>    
            </button>
          ))}
        </div>
      </>
    )
  }


export default function MainSlide() {

    const [selected, setSelected] = useState(0);

  return (
   <>
       {/* main slide carasel */}
       <section className='w-full flex flex-col overflow-hidden'>
            {/* painting area */}
            <div className='relative w-full h-[580px]'>
              {
                testimonials.map((item,index)=>(
                  <Card 
                  key={index} {...item}
                  selected = {selected} 
                  setSelected={setSelected}
                  position={index}
                  />
                ))
              }
            </div>
            {/* btn area */}
            <div className='w-full h-20 flex justify-center'>
              <div className='max-w-7xl h-full w-full grid grid-cols-4'>
                {/* 1:75% grid-cols-3 */}
                <div className='col-span-3 -translate-y-12 bg-white z-30'>
                  <SelectedBtns numTracks={testimonials} setSelected={setSelected} selected={selected}/>
                </div>
                {/* 2:25% grid-cols-1 */}
                <div className='flex justify-end space-x-6 items-center'>
                    <FaceBook/>
                    <Twitter/>
                    <Insta/>
                </div>
              </div>
            </div>
          </section>
   </>
  )
}
