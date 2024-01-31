import React from 'react'
import Layout from '../components/Layout'
import TitleRotate from '../components/TitleRotate'
import { useQuery } from 'react-query'
import { apiGetComics } from '../Lib/api';
import ComicsSlider from '../components/ComicsSlider'

export default function Characters() {
    let comics;

  const {data,isLoading} = useQuery(["getComics", {limit:25}], apiGetComics);
  if(!isLoading){
    comics = data?.data.results;
  }
console.log(comics)



  return (
    <Layout>
        <ComicsSlider/>
        {/* characters subpage imgtitle */}
        <section className='w-full relative'>
           
        </section>
        {/* list */}
        <section className='w-full flex justify-center'>
            <div className='max-w-7xl w-full py-2'>
                <TitleRotate text="JANUARY 31 : NEW RELEASES"/>
                <div className='grid grid-cols-5 gap-4 pt-2'>
                    {comics?.map((item, index)=> (
                        <div key={index} className='h-[380px] cursor-pointer group'>
                            <div 
                            style={{clipPath: "polygon(100% 0, 100% 92%, 82% 100%, 0 100%, 0 0)"}}
                            className='w-full h-full flex flex-col'>
                                {/* image */}
                                <div className='w-full h-full overflow-hidden'>
                                    <img 
                                    className='w-full h-full bg-cover group-hover:-translate-y-3 duration-300'
                                    src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`} alt="" />
                                </div>
                                {/* title */}
                                <div className='w-full h-[8%] flex'>
                                     {item?.title?.substr(0,22)}
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
