import Image from "next/image";
import Testimonial from "./components/Testimonial";
import { robotomono, inter } from "./fonts/font";

export default function Home() {
  return (
    <>
      <section className="relative">
        <div className="src-line box-content"></div>
        <div className="wrapper box-content t1260px:box-border mx-auto">
          <div className=" align-baseline t767px:pt-[4px] t1050px:pt-[65px] pt-[64px]">
            <div className=" before:t1050px:hidden before:t1199px:block align-baseline relative pb-0 before:content-[''] before:absolute before:left-[26px] before:top-[80px] before:w-[2px] before:bg-[#b5c3e3] before:h-[77%]">
              <h1 className={`  align-baseline text-[rgb(19,26,58)]  hero-title   ${inter.className}`}>
                <div className="line-number before:top-[35px] before:content-['2'] before:absolute before:left-[-20px] before:text-[14px] before:font-normal before:leading-[15px] before:text-[#7584a6]  align-baseline absolute left-0 w-[5px] h-[54px] z-[99]  "></div>
                <span className=" hero-red  t580px:left-[5px] t767px:left-[2px] t1050px:left-[10px] left-[20px]">//</span>The AI code assistant
                <br></br> that {' '}
                <span className=" align-baseline text-[rgb(31,_70,_193)]">you</span> control
                <span className="align-baseline text-[rgb(255,_34,_16)] hero-red  ">//</span>
              </h1>


              <div className={` align-baseline t580px:pl-[15px] t580px:mb-0 t767px:pl-[20px] t1050px:pl-[30px] pl-[80px] mt-[20px] mb-[39px] ${robotomono.className}`}>
                <div className="line-number align-baseline absolute left-0 w-[5px] h-[54px] before:top-[4px] before:content-['3'] before:absolute before:left-[-20px] before:text-[14px] before:font-normal before:leading-[15px] before:text-[#7584a6] "></div>
                <div className="hero-detail">
                  <div className=" align-middle inline-block">
                    <img width="45" height="23" src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1475.svg" className=" align-baseline mr-[7px]"></img>
                  </div>
                  <p className=" align-middle inline-block text-[rgb(31,_70,_193)] font-norma t580px:text-[16px] text-[18px] ">Private.</p>
                </div>
                <div className="hero-detail">
                  <div className=" align-middle inline-block">
                    <img width="41" height="23" src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1474.svg" className=" align-baseline mr-[7px]"></img>
                  </div>
                  <p className=" align-middle inline-block text-[rgb(31,_70,_193)] font-normal t580px:text-[16px] text-[18px] ">Personalized.</p>
                </div>
                <div className="hero-detail">
                  <div className=" align-middle inline-block">
                    <img width="45" height="23" src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1473.svg" className=" align-baseline mr-[7px]"></img>
                  </div>
                  <p className=" align-middle inline-block text-[rgb(31,_70,_193)] font-normal t580px:text-[16px] text-[18px] ">Protected.</p>
                </div>
              </div>

              <div className=" align-baseline  t1050px:pl-[30px] pl-[80px] t580px:mt-0 t580px:pl-[15px] t767px:pl-[20px] mt-[20px] mb-0">
                <div className="line-number align-baseline absolute left-0 w-[5px] h-[54px] before:top-[4px] before:content-['4'] before:absolute before:left-[-20px] before:text-[14px] before:font-normal before:leading-[15px] before:text-[#7584a6]"></div>
                <div className={` align-baseline  font-normal t767px:text-[16px] t767px:leading-[23px] t767px:mb-[33px] text-[18px] leading-[25px] text-[rgb(19,_26,_58)] max-w-[850px] mb-[58px] ${robotomono.className}`}> Tabnine’s AI code assistant streamlines code generation and automates mundane tasks so developers can spend more time on the work they love.</div>
              </div>
            </div>
            <div className=" align-baseline t767px:pl-[56px]  t1260px:pl-[70px] pl-[80px] relative pb-0 pt-0 before:content-[''] before:absolute before:left-[0px] before:top-[-19px] t1260px:before:left-[-10px] before:w-[40px] before:bg-contain before:bottom-[48px] before:bg-no-repeat  before:h-[130px] before:bg-[url('./assets/tabnineleft.svg')]">
              <div className="line-number align-baseline absolute left-0 w-[5px] h-[54px] before:top-[15px] before:content-['5'] before:absolute before:left-[-19px] before:text-[14px] before:font-normal before:leading-[15px] before:text-[#7584a6]"></div>
              <a href="/pricing/" target="" className={`m-0 h-[30px] box-content px-[22px] py-[10px] border-[none]  align-baseline t767px:mb-[25px] t767px:block text-[16px] font-bold leading-[26px] text-center text-[rgb(255,_255,_255)] no-underline rounded-[15px] inline-block w-[193px] relative hover:bg-[#df1a0a] bg-[rgb(255,_34,_16)] mr-[50px]  pt-[12px] pb-[8px] after:content-[''] after:absolute after:left-[-41px] after:top-[23px] after:w-[41px] after:h-[1px]  after:bg-[rgb(255,_34,_16)] ${robotomono.className} `}>Get started for free</a>
              <a href="/contact-us/" target="" className={`m-0  px-[22px] box-content py-[10px] border-[2px] border-[solid] border-[rgb(255,34,16)] before:absolute before:right-0  before:bottom-[0px]  before:content-[''] before:h-full before:w-full  before:rounded-[12px] before:transition-all before:duration-[.6s] before:ease-linear hover:before:[border:2px_solid_#df1a0a] before:[border:2px_solid_transparent] align-baseline font-['Roboto_Mono',_sans-serif] text-[16px] font-bold leading-[26px] text-center text-[rgb(19,_26,_58)] no-underline rounded-[15px] inline-block w-[193px] relative before:z-[-1] after:content-[''] after:absolute after:left-[-52px] after:top-[23px] after:w-[50px] after:h-[1px] after:t767px:w-[1px] after:t767px:h-[25px] after:t767px:left-0 after:t767px:right-0 after:t767px:my-0 after:t767px:mx-auto after:t767px:top-[-27px] after:bg-[rgb(255,_34,_16)] ${robotomono.className}`}>Talk to an expert</a>
            </div>


            <div className=" align-baseline relative t580px:max-w-[98%] t580px:mt-[10px] mt-[15px] max-w-[80%]">
              <span className=" align-baseline absolute left-[12px] top-[33px]">
                <img alt="b-left-gray" src="https://www.tabnine.com/wp-content/themes/tabnine/dist/images/b-left-gray.svg" className=" align-baseline"></img>
              </span>
              <div className=" align-baseline relative">
                <div className="line-number align-baseline absolute left-0 w-[5px] h-[54px] before:top-[43px] before:content-['6'] before:absolute before:left-[-20px] before:text-[14px] before:font-normal before:leading-[15px] before:text-[#7584a6]"></div>
                <div className="m-0 px-0 py-4 border-[0px]  align-baseline w-[95%] ml-[5%] overflow-hidden [mask-image:linear-gradient(90deg,_transparent_0px,_rgb(0,_0,_0)_25%,_rgb(0,_0,_0)_75%,_transparent)] whitespace-nowrap text-center">
                  <div className=" align-baseline inline-block animate-[35s_linear_0s_infinite_normal_none_running_scrollX] w-max">
                    <div className="mx-8 my-0 p-0 border-[0px]  align-baseline inline-block">
                      <img alt="Frame 1171275074" src="https://www.tabnine.com/wp-content/uploads/2024/04/Frame-1171275074.svg" className=" align-bottom inline-block mr-0 h-[70px] ml-0"></img>
                    </div>
                    <div className="mx-8 my-0 p-0 border-[0px]  align-baseline inline-block">
                      <img alt="frame1" src="https://www.tabnine.com/wp-content/uploads/2024/04/frame1.svg" className=" align-bottom inline-block mr-0 h-[70px] ml-0"></img>
                    </div>
                    <div className="mx-8 my-0 p-0 border-[0px]  align-baseline inline-block">
                      <img alt="Frame 1171275075" src="https://www.tabnine.com/wp-content/uploads/2024/04/Frame-1171275075.svg" className=" align-bottom inline-block mr-0 h-[70px] ml-0"></img>
                    </div>
                    <div className="mx-8 my-0 p-0 border-[0px]  align-baseline inline-block">
                      <img alt="frame2" src="https://www.tabnine.com/wp-content/uploads/2024/04/frame2.svg" className=" align-bottom inline-block mr-0 h-[70px] ml-0"></img>
                    </div>
                    <div className="mx-8 my-0 p-0 border-[0px]  align-baseline inline-block">
                      <img alt="Frame 1171275077" src="https://www.tabnine.com/wp-content/uploads/2024/04/Frame-1171275077.svg" className=" align-bottom inline-block mr-0 h-[70px] ml-0"></img>
                    </div>
                    <div className="mx-8 my-0 p-0 border-[0px]  align-baseline inline-block">
                      <img alt="Frame 1171275070" src="https://www.tabnine.com/wp-content/uploads/2024/04/Frame-1171275070.svg" className=" align-bottom inline-block mr-0 h-[70px] ml-0"></img>
                    </div>
                    <div className="mx-8 my-0 p-0 border-[0px]  align-baseline inline-block">
                      <img alt="Frame 1171275068" src="https://www.tabnine.com/wp-content/uploads/2024/05/Frame-1171275068.svg" className=" align-bottom inline-block mr-0 h-[70px] ml-0"></img>
                    </div>
                    <div className="mx-8 my-0 p-0 border-[0px]  align-baseline inline-block">
                      <img alt="Frame-1171275072" src="https://www.tabnine.com/wp-content/uploads/2024/04/Frame-1171275072-2.svg" className=" align-bottom inline-block mr-0 h-[70px] ml-0"></img>
                    </div>
                  </div>
                  <div aria-hidden="true" className=" align-baseline inline-block animate-[35s_linear_0s_infinite_normal_none_running_scrollX] w-max">
                    <div className="mx-8 my-0 p-0 border-[0px]  align-baseline inline-block">
                      <img alt="Frame 1171275074" src="https://www.tabnine.com/wp-content/uploads/2024/04/Frame-1171275074.svg" className=" align-bottom inline-block mr-0 h-[70px] ml-0"></img>
                    </div>
                    <div className="mx-8 my-0 p-0 border-[0px]  align-baseline inline-block">
                      <img alt="frame1" src="https://www.tabnine.com/wp-content/uploads/2024/04/frame1.svg" className=" align-bottom inline-block mr-0 h-[70px] ml-0"></img>
                    </div>
                    <div className="mx-8 my-0 p-0 border-[0px]  align-baseline inline-block">
                      <img alt="Frame 1171275075" src="https://www.tabnine.com/wp-content/uploads/2024/04/Frame-1171275075.svg" className=" align-bottom inline-block mr-0 h-[70px] ml-0"></img>
                    </div>
                    <div className="mx-8 my-0 p-0 border-[0px]  align-baseline inline-block">
                      <img alt="frame2" src="https://www.tabnine.com/wp-content/uploads/2024/04/frame2.svg" className=" align-bottom inline-block mr-0 h-[70px] ml-0"></img>
                    </div>
                    <div className="mx-8 my-0 p-0 border-[0px]  align-baseline inline-block">
                      <img alt="Frame 1171275077" src="https://www.tabnine.com/wp-content/uploads/2024/04/Frame-1171275077.svg" className=" align-bottom inline-block mr-0 h-[70px] ml-0"></img>
                    </div>
                    <div className="mx-8 my-0 p-0 border-[0px]  align-baseline inline-block">
                      <img alt="Frame 1171275070" src="https://www.tabnine.com/wp-content/uploads/2024/04/Frame-1171275070.svg" className=" align-bottom inline-block mr-0 h-[70px] ml-0"></img>
                    </div>
                    <div className="mx-8 my-0 p-0 border-[0px]  align-baseline inline-block">
                      <img alt="Frame 1171275068" src="https://www.tabnine.com/wp-content/uploads/2024/05/Frame-1171275068.svg" className=" align-bottom inline-block mr-0 h-[70px] ml-0"></img>
                    </div>
                    <div className="mx-8 my-0 p-0 border-[0px]  align-baseline inline-block">
                      <img alt="Frame-1171275072" src="https://www.tabnine.com/wp-content/uploads/2024/04/Frame-1171275072-2.svg" className=" align-bottom inline-block mr-0 h-[70px] ml-0"></img>
                    </div>
                  </div>
                </div>
              </div>
              <span data-rocket-lazy-bg-e553df9e-3c05-4ca8-9aeb-e79780aa50cd="loaded" data-rocket-lazy-bg-8bc7b56a-8a2a-464b-b8e8-ddac33cd74b5="loaded" className=" align-baseline absolute right-0 top-[33px]">
                <img alt="b-right-gray" src="https://www.tabnine.com/wp-content/themes/tabnine/dist/images/b-right-gray.svg" className=" align-baseline"></img>
              </span>
            </div>
          </div>
        </div>
      </section>



      <section className={`relative ${robotomono.className}`}>
        <div className="src-line box-content"></div>
        <div className="wrapper  t1260px:box-border mx-auto">
          <div className=" align-baseline relative text-[0px] t767px:pt-0 t767px:pr-5 t767px:pl-0 pt-[70px] pl-[30px]">

            <div className="half-text-item">
              <div className=" half-text-wrapper">
                <div className={` align-baseline absolute left-0 w-[5px] h-[54px] before:top-[6px] before:content-['7'] before:absolute before:left-[-20px] before:text-[14px] before:font-normal before:leading-[15px] before:text-[#7584a6] line-number`}></div>

                <div className=" align-baseline relative pl-0">
                  <span className={` half-text-red ${inter.className}`}>//</span>
                  <h2 className={` half-text-title ${inter.className}`}>Stay in the flow with{' '}
                    <span className=" align-baseline text-[rgb(31,_70,_193)]">best-in-class</span> AI code generation
                  </h2>
                  <span className={` half-text-red ${inter.className}`}>//</span>
                </div>
              </div>

              <div class={`half-text-subtitle  ${robotomono.className}`}>
                <div class="line-number "></div>Autogenerate high-quality code, turn plain text into code, eliminate repetitive tasks — and spend more time on work you enjoy.
              </div>

              <div class=" half-text-button-wrapper  relative">
                <div class=" line-number "></div>
                <a href="/best-in-class/" target="" class={` half-text-button ${robotomono.className}`}>Learn more </a>
              </div>
            </div>


            <div className="half-text-item">
              <div class=" half-text-wrapper">
                <div className=" align-baseline relative pl-0">
                  <span className={` half-text-red ${inter.className}`}>//</span>
                  <h2 className={`half-text-title ${inter.className}`}>
                    <span className=" align-baseline text-[rgb(31,_70,_193)]">Build better apps faster</span> with AI chat for the entire SDLC
                  </h2>
                  <span className={` half-text-red ${inter.className}`}>//</span>
                </div>
              </div>
              <p class={` half-text-subtitle  ${robotomono.className}`}>From code creation and explanations, to test and doc generation and bug fixes, faster app development has entered the chat.</p>
              <a href="/ai-chat/" target="" class={`half-text-button ${robotomono.className}`}>Learn more </a>
            </div>
          </div>

          <div className="relative">
            <div className=" line-number "></div>
            <div className=" align-baseline  t767px:pl-0 t767px:pb-[40px] t767px:pt-[50px] t1050px:ml-[76px] t1260px:ml-[76px] t767px:ml-[56px] pl-[86px] relative pb-[90px] pt-[60px] before:content-[''] before:absolute before:left-[1px]  t767px:before:w-[40px] before:w-[50px] before:bg-contain before:bottom-[48px] before:bg-no-repeat  before:h-[130px] before:bg-[url('./assets/tabnineleftbig.svg')] t767px:before:bg-[url('./assets/tabnineleftsmall.svg')] t767px:before:left-[-67px] t767px:before:top-[30px] ">

              <a href="/pricing/" target="" className={`m-0 t767px:text-[14px] t767px:py-2 t767px:px-5 t767px:block t767px:w-max t767px:max-w-full t767px:min-w-[224px] t767px:box-border h-[30px] box-content px-[22px] py-[10px] border-[none]  align-baseline  text-[16px] font-bold leading-[26px] text-center text-[rgb(255,_255,_255)] no-underline rounded-[15px] inline-block w-[193px] t767px:mb-[43px] t767px:h-auto t767px:pb-[10px] relative hover:bg-[#df1a0a] bg-[rgb(255,_34,_16)] mr-[50px]  pt-[12px] pb-[8px] after:content-[''] after:absolute after:left-[-50px] after:top-[23px] after:w-[50px] after:h-[1px] t767px:after:w-[27px] t767px:after:left-[-27px] t767px:after:top-[22px]  after:bg-[rgb(255,_34,_16)] ${robotomono.className}`}>Get started for free</a>
              <a href="/contact-us/" target="" className={`m-0  px-[22px] box-content py-[10px] border-[2px] border-[solid] border-[rgb(255,34,16)] before:absolute before:right-0  before:bottom-[0px]  before:content-[''] before:h-full before:w-full  before:rounded-[12px] before:transition-all before:duration-[.6s] before:ease-linear hover:before:[border:2px_solid_#df1a0a] before:[border:2px_solid_transparent] align-baseline font-['Roboto_Mono',_sans-serif] text-[16px] font-bold leading-[26px] text-center text-[rgb(19,_26,_58)] no-underline rounded-[15px] inline-block w-[193px] relative before:z-[-1] after:content-[''] after:absolute after:left-[-52px] after:top-[23px] after:w-[50px] after:h-[1px]  after:bg-[rgb(255,_34,_16)] t767px:after:h-[44px] t767px:after:w-[1px] t767px:after:right-[110px] t767px:after:top-[-45px] t767px:after:left-auto ${robotomono.className}`}>Talk to an expert</a>
            </div>
          </div>

        </div>
      </section>


      <section className="half relative bg-[#121932]">
        <div className="src-line box-content"></div>

        <div className="relative w-full "> {/* Adjust height as needed */}
          <img
            src='https://www.tabnine.com/wp-content/themes/tabnine/dist/images/h-shape_2.svg'
            alt="Decorative shape"


          />
        </div>

        <div class=" align-baseline hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg" width="362" height="69" viewBox="0 0 362 69" fill="none">
            <g clip-path="url(#clip0_381_473)">
              <rect width="362" height="69" fill="white"></rect>
              <path d="M362 55.175H264.067L188 10.3291H0V69H231H300H362V55.175Z" fill="#131A3A"></path>
              <path d="M362 49.2856H243.654L178 6.5H0" stroke="#1F46C1" stroke-width="13" stroke-miterlimit="10"></path>
              <path d="M249 6H362" stroke="#FF2210" stroke-width="13"></path>
            </g>
            <defs>
              <clippath id="clip0_381_473">
                <rect width="362" height="69" fill="white"></rect>
              </clippath>
            </defs>
          </svg>
        </div>
        <div class="wrapper box-content t1260px:box-border mx-auto">
          <div class=" half-block align-top relative inline-block w-1/2 text-[medium] text-[red] ml-0 pl-[20px] box-border mt-[50px]">
            <div class=" line-number align-baseline absolute left-0 w-[5px] h-[54px] before:top-[7px] before:content-['11'] before:absolute before:left-[-30px] before:text-[14px] before:font-normal before:leading-[15px] before:text-[#7584a6]"></div>
            <div class=" align-baseline mb-[20px] max-w-[360px]">
              <div class=" align-baseline relative pl-[25px]">
                <span class={` align-baseline  text-[25px] font-bold leading-[29px] text-[rgb(68,_86,_170)] absolute mt-[1px] left-[2px] ${inter.className}`}>//</span>
                <h2 class={` align-baseline  text-[25px] font-bold leading-[30px] text-[rgb(246,_246,_246)] bg-[rgb(12,_16,_37)] inline mr-[8px] ${inter.className}`}>
                  <span class=" align-baseline text-[rgb(148,_101,_236)]">Problem  </span>Logs
                </h2>
                <span class={` align-baseline  text-[25px] font-bold leading-[29px] text-[rgb(68,_86,_170)] absolute mt-px -ml-[2px] ${inter.className}`}> //</span>
              </div>
            </div>
            <div class={` align-baseline relative ${robotomono.className}`}>
              <div class="line-number align-baseline absolute left-0 w-[5px] h-[54px] -ml-[20px] before:content-['12'] before:absolute before:left-[-30px] before:top-[7px] before:text-[14px] before:font-normal before:leading-[15px] before:text-[#7584a6]"></div>
              <ul class="half-list">
                <li class=" half-item font-['Roboto_Mono', _sans-serif] ">
                  Each student
                  <span class=" align-baseline text-[rgb(42,_213,_231)]">{' '} project</span> is paired with <span class=" align-baseline text-[rgb(42,_213,_231)]">a problem log</span> where they document the challenges they faced during development.
                </li>
                {/* <li class=" half-item font-['Roboto_Mono', _sans-serif]">Supports the{' '}
                  <span class=" align-baseline text-[rgb(42,_213,_231)]">most popular languages, libraries, and IDEs</span> you use
                </li>
                <li class=" half-item font-['Roboto_Mono', _sans-serif]">Ability to create{' '}
                  <span class=" align-baseline text-[rgb(42,_213,_231)]">bespoke models</span> trained on your codebase
                </li> */}
              </ul>
            </div>
            <div class=" align-baseline relative">
              <div class={`line-number align-baseline absolute left-0 w-[5px] h-[54px] top-2/4 -translate-y-1/2 -ml-[20px] before:content-['13'] before:absolute before:left-[-30px] before:top-[7px] before:text-[14px] before:font-normal before:leading-[15px] before:text-[#7584a6] ${robotomono.className}`}></div>
              <a href="/personalization/" target="" class="half-video-button ">Learn more</a>
            </div>
          </div>
          <div class="half-block align-top inline-block w-1/2 text-[medium] min-h-[200px] bg-black text-[red] ml-0 pl-[20px] box-border">
            <div className="w-full bg-gray-800 ">
              <div className="w-min px-2 py-2 text-white bg-black">
                <span></span>
                <span>weather.js</span>
                <span></span>

              </div>
            </div>
            {/* <div class=" align-baseline t950px:mt-5 t950px:mb-10 t1260px:h-auto  t1260px:max-w-full t1260px:max-h-full w-[599px] h-[379px] mb-[70px]">
              <img alt="Group 1771" src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1806.svg" class=" align-baseline w-[80%]"></img>
            </div> */}
          </div>
        </div>
        <div class=" align-baseline text-[0px] t767px:hidden block">
          <img alt="h-shape_3" src="https://www.tabnine.com/wp-content/themes/tabnine/dist/images/h-shape_4.svg" class=" align-baseline w-full"></img>
        </div>
        <div class=" align-baseline t767px:block hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg" width="360" height="86" className="w-full h-full" viewBox="0 0 360 86" fill="none">
            <path d="M360 0H252H154.5H0V85.5H142.5H307H360V0Z" fill="#131A3A"></path>
            <path d="M360 56.5361H290.369L195.712 0H0V85.5H125H269H360V56.5361Z" fill="#0C1025"></path>
            <rect x="294" y="-0.0078125" width="66" height="15" fill="#0C1025"></rect>
          </svg>
        </div>
      </section >

      <section className="half relative bg-[#121932]">
        <div className="src-line box-content"></div>

        <div className="relative hidden w-full "> {/* Adjust height as needed */}
          <img
            src='https://www.tabnine.com/wp-content/themes/tabnine/dist/images/h-shape_2.svg'
            alt="Decorative shape"


          />
        </div>

        <div class=" align-baseline hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg" width="362" height="69" viewBox="0 0 362 69" fill="none">
            <g clip-path="url(#clip0_381_473)">
              <rect width="362" height="69" fill="white"></rect>
              <path d="M362 55.175H264.067L188 10.3291H0V69H231H300H362V55.175Z" fill="#131A3A"></path>
              <path d="M362 49.2856H243.654L178 6.5H0" stroke="#1F46C1" stroke-width="13" stroke-miterlimit="10"></path>
              <path d="M249 6H362" stroke="#FF2210" stroke-width="13"></path>
            </g>
            <defs>
              <clippath id="clip0_381_473">
                <rect width="362" height="69" fill="white"></rect>
              </clippath>
            </defs>
          </svg>
        </div>
        <div class="wrapper box-content t1260px:box-border mx-auto">
          <div class=" half-block align-top relative inline-block w-1/2 text-[medium] text-[red] ml-0 pl-[20px] box-border mt-[50px]">
            <div class=" line-number align-baseline absolute left-0 w-[5px] h-[54px] before:top-[7px] before:content-['11'] before:absolute before:left-[-30px] before:text-[14px] before:font-normal before:leading-[15px] before:text-[#7584a6]"></div>
            <div class=" align-baseline mb-[20px] max-w-[360px]">
              <div class=" align-baseline relative pl-[25px]">
                <span class={` align-baseline  text-[25px] font-bold leading-[29px] text-[rgb(68,_86,_170)] absolute mt-[1px] left-[2px] ${inter.className}`}>//</span>
                <h2 class={` align-baseline  text-[25px] font-bold leading-[30px] text-[rgb(246,_246,_246)] bg-[rgb(12,_16,_37)] inline mr-[8px] ${inter.className}`}>
                  <span class=" align-baseline text-[rgb(148,_101,_236)]">Hands-on  </span>Effort Index
                </h2>
                <span class={` align-baseline  text-[25px] font-bold leading-[29px] text-[rgb(68,_86,_170)] absolute mt-px -ml-[2px] ${inter.className}`}> //</span>
              </div>
            </div>
            <div class={` align-baseline relative ${robotomono.className}`}>
              <div class="line-number align-baseline absolute left-0 w-[5px] h-[54px] -ml-[20px] before:content-['12'] before:absolute before:left-[-30px] before:top-[7px] before:text-[14px] before:font-normal before:leading-[15px] before:text-[#7584a6]"></div>
              <ul class="half-list">
                <li class=" half-item font-['Roboto_Mono', _sans-serif] ">
                  A feature where students log the time {' '}
                  <span class=" align-baseline text-[rgb(42,_213,_231)]">log the time {' '}</span>they spent on various tasks (e.g., designing front-end components, back-end API integration).
                </li>
                <li class=" half-item font-['Roboto_Mono', _sans-serif]">The platform then generates an{' '}
                  <span class=" align-baseline text-[rgb(42,_213,_231)]">"effort index"</span> score that reflects how much hands-on time they devoted to each project stage.
                </li>
                {/* <li class=" half-item font-['Roboto_Mono', _sans-serif]">Ability to create{' '}
                  <span class=" align-baseline text-[rgb(42,_213,_231)]">bespoke models</span> trained on your codebase
                </li> */}
              </ul>
            </div>
            <div class=" align-baseline relative">
              <div class={`line-number align-baseline absolute left-0 w-[5px] h-[54px] top-2/4 -translate-y-1/2 -ml-[20px] before:content-['13'] before:absolute before:left-[-30px] before:top-[7px] before:text-[14px] before:font-normal before:leading-[15px] before:text-[#7584a6] ${robotomono.className}`}></div>
              <a href="/personalization/" target="" class="half-video-button ">Learn more</a>
            </div>
          </div>
          <div class="half-block align-top inline-block w-1/2 text-[medium] text-[red] ml-0 pl-[20px] box-border">
            <div class=" align-baseline t950px:mt-5 t950px:mb-10 t1260px:h-auto  t1260px:max-w-full t1260px:max-h-full w-[599px] h-[379px] mb-[70px]">
              <img alt="Group 1771" src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1806.svg" class=" align-baseline w-[80%]"></img>
            </div>
          </div>
        </div>
        <div class=" align-baseline text-[0px] t767px:hidden block">
          <img alt="h-shape_3" src="https://www.tabnine.com/wp-content/themes/tabnine/dist/images/h-shape_4.svg" class=" align-baseline w-full"></img>
        </div>
        <div class=" align-baseline t767px:block hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg" width="360" height="86" viewBox="0 0 360 86" className="w-full h-full" fill="none">
            <path d="M360 0H252H154.5H0V85.5H142.5H307H360V0Z" fill="#131A3A"></path>
            <path d="M360 56.5361H290.369L195.712 0H0V85.5H125H269H360V56.5361Z" fill="#0C1025"></path>
            <rect x="294" y="-0.0078125" width="66" height="15" fill="#0C1025"></rect>
          </svg>
        </div>
      </section >

      <section className="half relative bg-[#121932] pb-[10px] ">
        <div className="src-line box-content"></div>
        <div class="wrapper  mx-auto">
          <div class=" half-block align-top relative inline-block w-1/2 text-[medium] text-[red] ml-0 pl-[20px] box-border mt-[50px]">
            <div class=" line-number align-baseline absolute left-0 w-[5px] h-[54px] before:top-[7px] before:content-['11'] before:absolute before:left-[-30px] before:text-[14px] before:font-normal before:leading-[15px] before:text-[#7584a6]"></div>
            <div class=" align-baseline mb-[20px] max-w-[360px]">
              <div class=" align-baseline relative pl-[25px]">
                <span class={` align-baseline  text-[25px] font-bold leading-[29px] text-[rgb(68,_86,_170)] absolute mt-[1px] left-[2px] ${inter.className}`}>//</span>
                <h2 class={` align-baseline  text-[25px] font-bold leading-[30px] text-[rgb(246,_246,_246)] bg-[rgb(12,_16,_37)] inline mr-[8px] ${inter.className}`}>Critical
                  <span class=" align-baseline text-[rgb(148,_101,_236)]"> Feedback  </span>Loop
                </h2>
                <span class={` align-baseline  text-[25px] font-bold leading-[29px] text-[rgb(68,_86,_170)] absolute mt-px -ml-[2px] ${inter.className}`}> //</span>
              </div>
            </div>
            <div class={` align-baseline relative ${robotomono.className}`}>
              <div class="line-number align-baseline absolute left-0 w-[5px] h-[54px] -ml-[20px] before:content-['12'] before:absolute before:left-[-30px] before:top-[7px] before:text-[14px] before:font-normal before:leading-[15px] before:text-[#7584a6]"></div>
              {/* After completing each project, students must provide detailed feedback about what they found difficult, which specific tools or languages slowed them down, and where they feel they improved. This feedback is collated into a summary report for employers to assess how self-aware and reflective students are about their skills and weaknesses. */}

              <ul class="half-list">
                <li class=" half-item font-['Roboto_Mono', _sans-serif] "> After completing each project, students must provide detailed{' '}
                  <span class=" align-baseline text-[rgb(42,_213,_231)]">feedback</span> about what they found difficult, which specific tools or languages slowed them down, and where they feel they <span class=" align-baseline text-[rgb(42,_213,_231)]"> improved.</span>
                </li>
                <li class=" half-item font-['Roboto_Mono', _sans-serif]">This feedback is collated into a{' '}
                  <span class=" align-baseline text-[rgb(42,_213,_231)]">summary report</span> for employers to assess how  <span class=" align-baseline text-[rgb(42,_213,_231)]">self-aware</span> and reflective students are about their skills and weaknesses.
                </li>
                {/* <li class=" half-item font-['Roboto_Mono', _sans-serif]">Ability to create{' '}
                  <span class=" align-baseline text-[rgb(42,_213,_231)]">bespoke models</span> trained on your codebase
                </li> */}
              </ul>
            </div>
            <div class=" align-baseline relative">
              <div class={`line-number align-baseline absolute left-0 w-[5px] h-[54px] top-2/4 -translate-y-1/2 -ml-[20px] before:content-['13'] before:absolute before:left-[-30px] before:top-[7px] before:text-[14px] before:font-normal before:leading-[15px] before:text-[#7584a6] ${robotomono.className}`}></div>
              <a href="/personalization/" target="" class="half-video-button ">Learn more</a>
            </div>
          </div>
          <div class=" half-block align-top inline-block w-1/2 text-[medium] text-[red] ml-0 pl-[20px] pt-10 box-border">
            <div class=" align-baseline t950px:mt-5 t950px:mb-10 t1260px:h-auto  t1260px:max-w-full t1260px:max-h-full w-[599px] h-[379px] mb-[70px]">
              <img alt="Group 1771" src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1811.svg" class=" align-baseline w-[80%]"></img>
            </div>
          </div>
        </div>
        <div className="wrapper  mx-auto">
          <div className="relative">
            <div className=" line-number "></div>
            <div className=" align-baseline  t767px:pl-0 t767px:pb-[40px] t767px:pt-[50px] t1050px:ml-[76px] t1260px:ml-[76px] t767px:ml-[56px] pl-[86px] relative pb-[90px] pt-[60px] before:content-[''] before:absolute before:left-[1px]  t767px:before:w-[40px] before:w-[50px] before:bg-contain before:bottom-[48px] before:bg-no-repeat  before:h-[130px] before:bg-[url('./assets/tabnineleftbig.svg')] t767px:before:bg-[url('./assets/tabnineleftsmall.svg')] t767px:before:left-[-67px] t767px:before:top-[30px] ">

              <a href="/pricing/" target="" className={`m-0 t767px:text-[14px] t767px:py-2 t767px:px-5 t767px:block t767px:w-max t767px:max-w-full t767px:min-w-[224px] t767px:box-border h-[30px] box-content px-[22px] py-[10px] border-[none]  align-baseline  text-[16px] font-bold leading-[26px] text-center text-[rgb(255,_255,_255)] no-underline rounded-[15px] inline-block w-[193px] t767px:mb-[43px] t767px:h-auto t767px:pb-[10px] relative hover:bg-[#df1a0a] bg-[rgb(255,_34,_16)] mr-[50px]  pt-[12px] pb-[8px] after:content-[''] after:absolute after:left-[-50px] after:top-[23px] after:w-[50px] after:h-[1px] t767px:after:w-[27px] t767px:after:left-[-27px] t767px:after:top-[22px]  after:bg-[rgb(255,_34,_16)] ${robotomono.className}`}>Get started for free</a>
              <a href="/contact-us/" target="" className={`m-0  px-[22px] box-content py-[10px] border-[2px] border-[solid] border-[rgb(255,34,16)] before:absolute before:right-0  before:bottom-[0px]  before:content-[''] before:h-full before:w-full  before:rounded-[12px] before:transition-all before:duration-[.6s] before:ease-linear hover:before:[border:2px_solid_#df1a0a] before:[border:2px_solid_transparent] align-baseline font-['Roboto_Mono',_sans-serif] text-[16px] font-bold leading-[26px] text-center text-white no-underline rounded-[15px] inline-block w-[193px] relative before:z-[-1] after:content-[''] after:absolute after:left-[-52px] after:top-[23px] after:w-[50px] after:h-[1px]  after:bg-[rgb(255,_34,_16)] t767px:after:h-[44px] t767px:after:w-[1px] t767px:after:right-[110px] t767px:after:top-[-45px] t767px:after:left-auto ${robotomono.className}`}>Talk to an expert</a>
            </div>
          </div>


        </div>
      </section >


      <Testimonial />

      <section className="relative bg-[#f3f7ff] pb-[50px] overflow-hidden  ">
        <div className="src-line box-content"></div>
        <div className="wrapper  mx-auto">
          <div className=" align-baseline t767px:pl-0 t767px:pt-[30px]  pt-[95px] relative pl-[30px] z-[2]">
            <div className={` align-baseline t767px:pl-[15px] t767px:max-w-[240px] mb-[55px] ${inter.className}`}>
              <div className="line-number align-baseline absolute left-0 w-[5px] h-[54px] before:absolute before:top-[8px] before:content-['23'] before:left-[-30px] before:text-[14px] before:font-normal before:leading-[15px] before:text-[#7584a6] "></div>
              <span className="   logos-red">// </span>
              <h2 className=" align-baseline box-border inline  t767px:text-[22px] t767px:leading-[29px] font-extrabold text-[25px] leading-[30px]  text-[rgb(19,_26,_58)] pl-[21px]">Get Tabnine for free{' '}
                <span className=" align-baseline text-[rgb(31,_70,_193)]">in your favorite IDE</span>
              </h2>
              <span className=" align-baseline  text-[22px] font-bold leading-[26px] text-[rgb(255,_34,_16)] absolute mt-px ml-[4px]  "> // </span>
            </div>
            <div className=" logos-wrapper">
              <div className="line-number align-baseline absolute left-0 w-[5px] h-[54px] before:content-['24'] before:absolute before:left-[-30px] before:top-[20px] before:text-[14px] before:font-normal before:leading-[15px] before:text-[#7584a6]"></div>
              <a href="https://www.tabnine.com/install/vs-code/" className=" align-baseline logos-indi">
                <div className=" logos_img">
                  <img alt="image 57" title="VS Code" src="https://www.tabnine.com/wp-content/uploads/2024/04/image-57.svg" className=" align-baseline w-auto max-w-full"></img>
                </div>
              </a>
              <a href="https://www.tabnine.com/install/intellij/" className=" align-baseline logos-indi">
                <div className="logos_img">
                  <img alt="image 40" title="IntelliJ" src="https://www.tabnine.com/wp-content/uploads/2024/04/image-40.png.webp" className=" align-baseline w-auto max-w-full"></img>
                </div>
              </a>
              <a href="https://www.tabnine.com/install/webstorm/" className=" align-baseline logos-indi">
                <div className=" logos_img t767px:before:bg-none" >
                  <img alt="image 40 (2)" title="WebStorm" src="https://www.tabnine.com/wp-content/uploads/2024/04/image-40-2.png.webp" className=" align-baseline w-auto max-w-full"></img>
                </div>
              </a>
              <a href="https://www.tabnine.com/install/pycharm/" className=" align-baseline logos-indi">
                <div className=" logos_img">
                  <img alt="image 40 (1)" title="PyCharm" src="https://www.tabnine.com/wp-content/uploads/2024/04/image-40-1.png.webp" className=" align-baseline w-auto max-w-full"></img>
                </div>
              </a>
              <a href="https://www.tabnine.com/install/appcode/" className=" align-baseline logos-indi">
                <div className=" logos_img">
                  <img alt="image 40 (3)" title="AppCode" src="https://www.tabnine.com/wp-content/uploads/2024/04/image-40-3.svg" className=" align-baseline w-auto max-w-full"></img>
                </div>
              </a>
              <a href="https://www.tabnine.com/install/android-studio/" className=" align-baseline logos-indi">
                <div className=" logos_img before:bg-none">
                  <img alt="android-studio" title="Android Studio" src="https://www.tabnine.com/wp-content/uploads/2024/04/android-studio.svg" className=" align-baseline w-auto max-w-full"></img>
                </div>
              </a>
            </div>
            <div className=" logos-wrapper">
              <div className="line-number align-baseline absolute left-0 w-[5px] h-[54px] before:content-['25'] before:absolute before:left-[-30px] before:top-[20px] before:text-[14px] before:font-normal before:leading-[15px] before:text-[#7584a6]"></div>
              <a href="https://www.tabnine.com/install/eclipse/" className=" align-baseline logos-indi">
                <div className=" logos_img">
                  <img alt="image 58" title="Eclipse" src="https://www.tabnine.com/wp-content/uploads/2024/04/image-58.png.webp" className=" align-baseline w-auto max-w-full"></img>
                </div>
              </a>
              <a href="https://www.tabnine.com/install/visual-studio/" className=" align-baseline logos-indi">
                <div className=" logos_img">
                  <img alt="image 58" title="Visual Studio" src="https://www.tabnine.com/wp-content/uploads/2024/04/image-58.svg" className=" align-baseline w-auto max-w-full"></img>
                </div>
              </a>
              <a href="https://www.tabnine.com/install/clion/" className=" align-baseline logos-indi">
                <div className=" logos_img t767px:before:bg-none">
                  <img alt="image 40 (2)" title="CLion" src="https://www.tabnine.com/wp-content/uploads/2024/04/image-40-2.svg" className=" align-baseline w-auto max-w-full"></img>
                </div>
              </a>
              <a href="https://www.tabnine.com/install/goland/" className=" align-baseline logos-indi">
                <div className=" logos_img">
                  <img alt="image 40" title="GoLand" src="https://www.tabnine.com/wp-content/uploads/2024/04/image-40.svg" className=" align-baseline w-auto max-w-full"></img>
                </div>
              </a>
              <a href="https://www.tabnine.com/install/phpstorm/" className=" align-baseline logos-indi">
                <div className=" logos_img">
                  <img alt="php-storm" title="PhpStorm" src="https://www.tabnine.com/wp-content/uploads/2024/04/php-storm.svg" className=" align-baseline w-auto max-w-full"></img>
                </div>
              </a>
              <a href="https://www.tabnine.com/install/rubymine/" className=" align-baseline logos-indi">
                <div className=" logos_img before:bg-none ">
                  <img alt="image 40 (1)" title="RubyMine" src="https://www.tabnine.com/wp-content/uploads/2024/04/image-40-1.svg" className=" align-baseline w-auto max-w-full"></img>
                </div>
              </a>
            </div>
          </div>

        </div>
      </section>

    </>
  );
}