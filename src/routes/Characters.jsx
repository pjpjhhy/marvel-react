import React from 'react'
import Layout from '../components/Layout'
import TitleRotate from '../components/TitleRotate'
import { useQuery } from 'react-query'
import { apiGetCharacters } from '../Lib/api'

export default function Characters() {
    let characters;

  const {data,isLoading} = useQuery(["getCharacters", {limit:36}], apiGetCharacters);
  if(!isLoading){
    characters = data?.data.results;
  }
  console.log(characters)



  return (
    <Layout>
        {/* characters subpage imgtitle */}
        <section className='w-full relative'>
            <img 
            className='brightness-[0.4]'
            src="https://cdn.marvel.com/content/1x/characters_art_mas_dsk_01.jpg" alt="characters_img" />
            <div className='absolute top-0 left-0 w-full h-full'></div>
            <div className='absolute top-1/3 left-1/2 text-white text-center pt-2 -translate-x-1/2'>
                <h1 className='font-black text-[42px]'>MARVEL CHARACTERS</h1>
                <p>Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!</p>
            </div>
        </section>
        {/* list */}
        <section className='w-full flex justify-center'>
            <div className='max-w-7xl w-full py-2'>
                <TitleRotate text="FEATURED CHARACTERS"/>
                <div className='grid grid-cols-6 gap-4 pt-2'>
                    {characters?.map((item, index)=> (
                        <div key={index} className='h-[340px] cursor-pointer group'>
                            <div 
                            style={{clipPath: "polygon(100% 0, 100% 92%, 82% 100%, 0 100%, 0 0)"}}
                            className='w-full h-full flex flex-col bg-red-600'>
                                {/* image */}
                                <div className='w-full h-[65%] overflow-hidden'>
                                    <img 
                                    className='w-full h-full bg-cover group-hover:scale-110 duration-300'
                                    src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`} alt="" />
                                </div>
                                {/* title */}
                                <div className=' relative w-full h-[35%] flex items-end'>
                                    <div className='absolute space-y-8 top-0 left-0 w-full h-full justify-between p-2 flex flex-col text-white'>
                                        <h2 className='font-bold'>{item?.name?.substr(0,11)}</h2>
                                        <p className='text-sm text-gray-300'>{item?.description?.substr(0,20)}</p>
                                    </div>
                                {/* hover: move up&down */}
                                <div className='w-full h-[95%] bg-[#151515] group-hover:h-0 duration-300'>

                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </Layout>  
  
  )
}
