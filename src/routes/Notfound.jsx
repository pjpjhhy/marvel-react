import Layout from "../components/Layout";
import ironman from "../assets/png/ironman.png"
import ironman2 from "../assets/png/ironman2.png"
import ironman3 from "../assets/png/ironman3.png"


export default function NotFound(){
    return (
        <Layout>
        <div className=" relative w-full bg-[url('https://cdn.marvel.com/content/u/open-html-assets/marvel-error-pages/iron-man-rain.477626af.gif')] flex justify-center overflow-hidden">
            <div className="max-w-7xl w-full flex h-[calc(100vh-324px)]">
                {/* 왼쪽 */}
                <div className="w-1/2 h-full -z-10 flex flex-col justify-center space-y-8">
                    <h1 className="text-4xl font-black">404 PAGE NOT FOUND</h1>
                    <h2 className="text-xl font-bold">Protocol missing.... Exiting program</h2>
                    <p>Check that you typed the address correctly, go back to your previous<br/> page or try using our site search to find something specific.</p>
                </div>
                {/* 오른쪽 */}
                <div className="w-1/2 h-full flex justify-center overflow-hidden pt-6">
                    <img 
                    className=" absolute -z-10   animate-glitch"
                    src={ironman} alt="ironman" />
                    <img 
                    className=" absolute animate-glitch2  -z-10"
                    src={ironman2} alt="iron2" />
                    <img 
                    className=" absolute animate-pulse -z-10"
                    src={ironman3} alt="iron3" />
                </div>
            </div >
        </div>
        </Layout>
    )
}