import React from 'react'
import LogoFooter from "../assets/png/logo-small.png";
import FaceBook from '../assets/FaceBook';
import Twitter from '../assets/Twitter';
import Insta from '../assets/Insta';
import Thumblr from '../assets/Thumblr';
import Youtube from '../assets/Youtube';
import Snapchat from '../assets/Snapchat';
import Pinter from '../assets/Pinter';



export default function Footer() {
  return (
    <div className='w-full bg-[#151515] flex justify-center items-center'>
        <div className='max-w-7xl w-full flex justify-between text-white py-16'>
            {/* 1번 로고 */}
            <div className='flex space-x-10'>
                {/* 로고 */}
                <div>
                    <img src={LogoFooter} alt="footer logo" />
                </div>
                {/* description */}
                <div className='flex space-x-16 text-sm justify-center items-center'>
                    {/* 2 */}
                    <div className='space-y-1'>
                        <p>ABOUT MARVEL</p>
                        <p>HELP / FAQS</p>
                        <p>CAREERS</p>
                        <p>INTERNSHIPS</p>
                    </div>
                    {/* 3 */}
                    <div className='space-y-1'>
                        <p>ADVERTISING</p>
                        <p>DISNEY+</p>
                        <p>MARVELHQ.COM</p>
                        <p>REDEEM<br/>DIGITALCOMICS</p>
                    </div>
                </div>
            </div>
            {/* 2번 설명 */}
            <div className='space-y-6'>
                {/* 위 */}
                <div className='flex space-x-4'>
                    {/* image */}
                    <div>
                        <img 
                        className='h-10'
                        src="https://cdn.marvel.com/content/1x/marvel_insider-topnav-logo-large2x.png" alt="" />
                    </div>
                    {/* description */}
                    <div>
                        <p>MARVEL INSIDER</p>
                        <p className='text-xs text-gray-400'>Get Rewarded for Being a Marvel Fan</p>
                    </div>
                </div>
                {/* 아래 */}
                <div className='flex space-x-4'>
                    {/* image */}
                    <div>
                        <img 
                        className='h-10'
                        src="https://cdn.marvel.com/content/1x/mu-logo-w-nav-2x-2021-02.png" alt="" />
                    </div>
                    {/* description */}
                    <div>
                        <p>MARVEL UNLIMITED</p>
                        <p className='text-xs text-gray-400'>ACEESS Over 30,000+ Digital Comics</p>
                    </div>
                </div>
            </div>
            {/* 3번 아이콘 */}
            <div className='space-y-5'>
                <h3 className=''>FOLLOW MARVEL</h3>
                <div className='grid grid-cols-4 grid-rows-2 gap-x-9 gap-y-6'>
                    <p><FaceBook/></p>
                    <p><Twitter/></p>
                    <p><Insta/></p>
                    <p><Thumblr/></p>
                    <p><Youtube/></p>
                    <p><Snapchat/></p>
                    <p><Pinter/></p>
                </div>
            </div>
        </div>
    </div>
  )
}
