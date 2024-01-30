import { FaSearch } from "react-icons/fa";
import LogoLarge from "../assets/png/logo-large.png";
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <>
        {/* 헤더 */}
        
        <section className="w-full flex justify-center h-12 bg-[#202020] ">
            <div className="relative max-w-7xl w-full h-full flex text-white justify-between items-center">
                {/* 왼쪽: 회원정보 */}
                <div className="cursor-pointer flex h-full items-center text-sm space-x-2 border-l border-r border-gray-700 px-4">
                    <span className="inline-block bg-white w-5 h-5 rounded-full text-main-dark text-right italic pr-0.5">IN</span>
                    <span className="font-bold text-xs">LOG IN | JOIN</span>
                </div>
                {/* 오른쪽: 검색 */}
                <div className="px-4 cursor-pointer h-full flex items-center border-l border-r border-gray-700 space-x-4">
                    {/* subscribe */}
                    <div className="h-full flex items-center space-x-2">
                        {/* 왼쪽이미지 */}
                        <img className="h-[60%] inline-block" src="https://cdn.marvel.com/u/prod/marvel/images/mu/web/2021/icon-mu-shield.png" alt="image_marvel" />
                        <div className=" inline-block uppercase text-center">
                            <p className="text-sm">marvel unlimited</p>
                            <p className="text-xs">subscribe</p>
                        </div>

                    </div>
                    {/* 아이콘 */}
                    <div className="h-full flex items-center border-l border-gray-700 pl-4"><FaSearch /></div>
                </div>
                {/* 중앙: 로고 */}
                <div className="absolute h-full top-0 left-[50%] -translate-x-[50%]">
                    <Link to="/"><img className="h-full cursor-pointer" src={LogoLarge} alt="logo_large" /></Link>
                </div>
            </div>
        </section>
        <section className="w-full border cursor-pointer hover:text-gray-500 font-bold border-gray-700 flex justify-center h-10 bg-[#202020] text-white uppercase space-x-8 text-sm items-center">
            <p className="hover:text-white hover:border-b-2 p-2 border-red-600">news</p>
            <p className="hover:text-white hover:border-b-2 p-2 border-red-600">comics</p>
            <p className="hover:text-white hover:border-b-2 p-2 border-red-600">characters</p> 
            <p className="hover:text-white hover:border-b-2 p-2 border-red-600">movies</p>
            <p className="hover:text-white hover:border-b-2 p-2 border-red-600">tv shows</p>
            <p className="hover:text-white hover:border-b-2 p-2 border-red-600">games</p>
            <p className="hover:text-white hover:border-b-2 p-2 border-red-600">videos</p>
            <p className="hover:text-white hover:border-b-2 p-2 border-red-600">more</p>
        </section>
        <section className="w-full items-center cursor-pointer bg-[#151515] space-x-3 text-white text-xs flex justify-center">
            <p>STREAM ECHO ON</p>
            <img src="https://cdn.marvel.com/content/1x/disneybtn_asset2x_6.png"  alt="logo" />
        </section>
        </>
        )
    }