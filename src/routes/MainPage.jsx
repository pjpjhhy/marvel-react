import { useQuery } from "react-query";
import Layout from "../components/Layout";
import ListCarasel from "../components/ListCarasel";
import MainSlide from "../components/MainSlide";
import TitleImageBox from "../components/TitleImageBox";
import TitleRotate from "../components/TitleRotate";
import { apiGetCharacters, apiGetComics, apiGetEvents, apiGetSeries } from "../Lib/api";
import PacmanLoader from "react-spinners/PacmanLoader";
import Button from "../components/Button";

export default function MainPage() {
  let lists; // fetch 요청한 배열을 받기 위한 변수
  let events; //events fetch 요청
  let series; //series fetch 요청
  let characters; //caracters fetch 요청

  // 코믹스 요청
  const { data, isLoading } = useQuery(["getComics"], apiGetComics);
  if (!isLoading) {
    lists = data?.data.results;
  }
  // console.log(isLoading, data);

  // 이벤트요청
  const { data: dataEvents, isLoading: isLoadingEvents } = useQuery(
    ["getEvents"],
    apiGetEvents
  );
if(!isLoadingEvents){
  events = dataEvents?.data.results;
}
  // console.log(events);

  // 시리즈요청
  const { data: dataSeries, isLoading: isLoadingSeries } = useQuery(
    ["getSeries"],
    apiGetSeries
  );
if(!isLoadingSeries){
  series = dataSeries?.data.results;
}
// console.log(series);

// 캐릭터요청
const {data: dataCharacters, isLoading:isLoadingCharacters} =  useQuery(
  ["getCharacters", { limit : 30 }], 
  apiGetCharacters
  );
  if(!isLoadingCharacters){
    characters = dataCharacters?.data.results;
    console.log( "나 캐릭터", characters)

  }
  return (
    <Layout>
      {/* 메인 슬라이드 컴포넌트 */}
      <MainSlide />

      {/* 코믹스 섹션 */}
      <TitleImageBox imgUrl="https://cdn.marvel.com/content/1x/20240124-newtomu_base_set_dsk.jpg" 
           mainTitle="AVAILABLE NOW"
           subTitle="NEW ON MARVEL UNLIMITED"
           description="Read these plus 30,000+ digital comics for $9.99 a month!"
           btnTxt="GET MARVEL UNLIMITED"/>

      {/* 리시트 캐러셀 */}
      <ListCarasel lists={lists}/>

      {/* 이벤트들 */}
      <section className="w-full flex justify-center">
        <div className="max-w-7xl w-full  grid grid-cols-[7fr_3fr]">
          {/* 1 : left */}
          {/* 타이틀 */}
          <div className="w-full h-full ">
            <TitleRotate text= "THE LATEST" />
            {/* 이벤트 api에서 불러오기 */}
            <div className="w-full">
              {events?.map((item, index)=>(
                <div key={index} className="w-full flex justify-center border-b border-slate-300 py-5">  
                  {/* left: image */}
                  <div className="w-[45%] h-80">
                    <img 
                    className="w-full h-full"
                    src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`} alt="" />
                  </div>
                  {/* right : description */}
                  <div className="w-[55%] h-80">
                    {/* title */}
                    <div className="text-2xl font-black m-4 hover:text-red-600 cursor-pointer">
                    {item.title}
                    </div>
                    <div className="ml-4 mb-3 flex font-semibold">
                      {`${item.start || ''}  ${item.end || ''}`}
                    </div>
                    {/* description */}
                    <div className="ml-4">
                    {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* 2  : right*/}
          <div className="w-[80%] ml-[110px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="186" height="55" fill="none" stroke="#c6a972" stroke-width="3px" viewBox="0 0 186 55">
                <path d="M21.4 1L1 21.4V717h264.6l20.4-20.4V1H21.4z" mask="url(#border-line_svg__mask-2)">
                </path>
              </svg>
              <head className="w-full flex flex-col justify-center items-center py-5">
                <p className="text-2xl font-black">THE HYPE BOX</p>
                <p className="text-sm font-light w-full text-center">Can’t-miss news and updates from across the Marvel Universe!</p>
              </head>
              <div className="w-full">
                {series?.map((item, index) =>(
                  <div key={index} className="w-full flex border-t border-[#bbbbbb] py-4">
                    {/* left : image */}
                    <div className="w-[40%] h-30">
                      <img  
                      className="ml-2"
                      src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`} alt="" />
                    </div>
                    {/* right : description */}
                    <div className="w-[60%] ml-5 flex flex-col justify-center">
                      <div className="text-md hover:text-red-600 hover:font-bold">
                      {item.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <svg 
                className=" rotate-[180deg] float-right"
                xmlns="http://www.w3.org/2000/svg" width="186" height="55" fill="none" stroke="#c6a972" stroke-width="3px" viewBox="0 0 186 55">
                <path d="M21.4 1L1 21.4V717h264.6l20.4-20.4V1H21.4z" mask="url(#border-line_svg__mask-2)">
                </path>
              </svg>
          </div>
        </div>
      </section>

      {/* 캐릭터들 */}
      <TitleImageBox 
      imgUrl="https://filmschoolrejects.com/wp-content/uploads/2018/04/the-avengers-comics.jpg"
      mainTitle="On sale 1 / 31"
      subTitle="NEW COMICS THIS WEEK"
      description="AVENGERS : LEGACY
      Celebrating the Legacy of Earth’s Mightiest Heroes!"
      btnTxt="print subscription"/>

        {/* characters 리시트 캐러셀 */}
        { isLoadingCharacters ? (
          <layOut7><div className="w-full flex justify-center py-16"><PacmanLoader color="#36d7b7"  size={37}/></div></layOut7>
        )  : (<ListCarasel lists={characters}/>) }


        {/* marverl insider */}
        <section className="w-full flex justify-center bg-black">
          <div className="max-w-7xl w-full grid grid-cols-[4fr_6fr]">
            {/* 1.left */}
            <div className="w-full h-full bg-blue-200">
              <img 
              className="f-full w-full"

              src="https://cdn.marvel.com/content/1x/01-mi-promo-april2020-featured-half-dsk-1140x680_4.jpg" alt="marver_insider" />
            </div>
            {/* 2.left */}
            <div className="w-full h-full flex flex-col justify-center text-center text-white space-y-3">
                <h1 className="text-red-600 font-black text-xl pt-12">MARVEL INSIDER</h1>
                <div className="space-y-2 pb-4">
                <p className="text-3xl font-black">Watch, Earn, Redeem!</p>
                <p>Get rewarded for doing what you already do as a fan.</p>
                </div>
                <Button text="join now"/>
                <p className="text-xs pt-8">Terms and Conditions Apply</p>
            </div>
          </div>
        </section>
    </Layout>
  );
}
