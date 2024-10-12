import React from 'react'
import { inter, robotomono } from '../fonts/font'
// Add this import at the top of your file
// import { Roboto_Mono, Inter } from 'next/font/google'

// Initialize the font
// const robotomono = Roboto_Mono({
//     weight: ['400', '700'],
//     subsets: ['latin'],
//     display: 'swap',
// })
// const inter = Inter({
//     weight: ['400', '700'],
//     subsets: ['latin'],
//     display: 'swap',
// })

const page = () => {
    return (
        // Apply the font to the entire section
        <>
            <section className={`relative `}>
                <div className='src-line'></div>
                <div className='wrapper  mx-auto'>

                    <div class={` align-baseline t767px:pl-[30px] t767px:pt-[8px] t950px:pt-[50px] relative pl-[80px] mb-[27px] pt-[100px] ${inter.className}`}>
                        <span class={` a-hero-red ${inter.className}`}>//</span>
                        <h1 class=" align-baseline  text-[75px] t950px:text-[45px] t767px:text-[33px] t767px:leading-[36px] t950px:leading-[55px] font-black leading-[90px] text-left text-[rgb(19,_26,_58)] inline">
                            <div class="line-number before:content-['2'] before:top-[35px] "></div>We're Tabnine
                        </h1>
                        <span class="a-hero-red">//</span>
                    </div>
                    <div class={` ${robotomono.className} box-content align-baseline relative t767px:text-[16px] t767px:leading-[21px] t767px:pl-[30px] t767px:max-w-[270px] t950px:text-[18px] t950px:leading-[24px] text-[20px] leading-[28px] text-left pl-[80px] mb-[40px]  font-normal text-[rgb(19,_26,_58)]`}>
                        <div class={` line-number before:content-['3'] before:top-[10px] `}></div>We’re building the future of AI-assisted software development.
                    </div>
                    <div class={` align-baseline relative t767px:text-[14px] t767px:leading-[22px] t767px:mb-[44px] font-normal text-[rgb(19,_26,_58)] text-[16px] leading-[25.6px] pl-[25px] max-w-[864px] mb-[80px] ${robotomono.className}`}>
                        <div class=" line-number before:content-['4'] before:top-[4px]"></div>Since we launched our first AI code assistant in 2018, Tabnine has been a pioneer in generative AI for software development. Trusted by more than one million users and thousands of organizations, Tabnine’s mission is to accelerate and simplify the entire software development life cycle through AI.
                    </div>
                </div>
                <div className='relative z-[-1] t767px:hidden t1050px:mt-[-70px] mt-[-180px] text-[0px]'>
                    <img src="https://www.tabnine.com/wp-content/themes/tabnine/dist/images/a-shape1.svg" alt="" className='w-full' />
                </div>

                <div class="hidden t767px:block">
                    <svg style={{ marginBottom: "-1px", width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg" width="362" height="111" viewBox="0 0 362 111" fill="none">
                        <rect width="362" height="111" fill="white"></rect>
                        <path d="M277.781 0H248.041V97H277.781V0Z" fill="#EDF2FF"></path>
                        <path d="M362.001 0H298.406V97H362.001V0Z" fill="#EDF2FF"></path>
                        <path d="M226.527 0H201.85V97H226.527V0Z" fill="#EDF2FF"></path>
                        <path d="M182.865 0H161.352V97H182.865V0Z" fill="#EDF2FF"></path>
                        <path d="M141.739 0H122.756V97H141.739V0Z" fill="#EDF2FF"></path>
                        <path d="M101.878 0H88.5898V97H101.878V0Z" fill="#EDF2FF"></path>
                        <path d="M67.0771 0H55.0547V97H67.0771V0Z" fill="#EDF2FF"></path>
                        <path d="M33.5365 0H25.9434V97H33.5365V0Z" fill="#EDF2FF"></path>
                        <path d="M5.19783 0H0V97H5.19783V0Z" fill="#EDF2FF"></path>
                        <path d="M362 101H312.5L232 48L0 48V111H160H256.5H362V101Z" fill="#131A3A"></path>
                        <path d="M362 101H312.275L231.962 48L0 48" stroke="#1F46C1" stroke-width="13" stroke-miterlimit="10"></path>
                    </svg>
                </div>

            </section>

            <section className='relative bg-[#131a3a]'>
                <div className='src-line'></div>
                <div className='wrapper  mx-auto'>
                    <div class=" align-baseline box-content relative t767px:pr-[20px] t767px:pt-0 t767px:mb-[60px] t767px:pl-[37px] t767px:max-w-[260px] pl-[57px] mb-[67px] max-w-[690px]">
                        <span class={` align-baseline col-red ${inter.className} `}>//</span>
                        <h2 class={` align-baseline   t767px:text-[22px] t767px:leading-[25px]  text-[36px] font-extrabold leading-[47px] text-[rgb(255,_255,_255)] inline bg-[rgb(12,_16,_37)] ${inter.className}`}>
                            <div class="line-number before:content-['5'] before:top-[15px]"></div>Unlike other AI code assistants, Tabnine is {' '}
                            <span class=" align-baseline text-[rgb(148,_101,_236)]"> Al that you control</span>
                        </h2>
                        <span class={`col-red ${inter.className} `}>//</span>
                    </div>
                    <div class=" align-baseline relative flex t950px:flex-col justify-between pb-[80px]">
                        <div class=" col-item">
                            <div class=" align-baseline">
                                <img alt="Group 1427" src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1427.svg" class=" align-baseline"></img>
                                <h2 class={`  ${inter.className}`}>
                                    <div class=" line-number before:content-['6'] before:top-[7px]"></div>Private
                                </h2>
                            </div>
                            <p class={`${robotomono.className} align-baseline  `}>Maximize control over your IP by choosing where and how to deploy Tabnine (as SaaS, on VPC, or on-premises) — and rest easily knowing that we never store or share any of your company’s code.</p>
                        </div>
                        <div class=" col-item">
                            <div class=" align-baseline">
                                <img alt="Group 1428" src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1428.svg" class=" align-baseline"></img>
                                <h2 class={`  ${inter.className}`}>
                                    <div class=" align-baseline absolute left-0 w-[5px] h-[54px]"></div>Personalized
                                </h2>
                            </div>
                            <p class={`${robotomono.className} align-baseline  `}>Take advantage of highly personalized, context-aware recommendations for every developer and engineering team through local code awareness and integration with your global codebase.</p>
                        </div>
                        <div class=" col-item">
                            <div class=" align-baseline">
                                <img alt="Group 1429" src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1429.svg" class=" align-baseline"></img>
                                <h2 class={`  ${inter.className}`}>
                                    <div class=" align-baseline absolute left-0 w-[5px] h-[54px]"></div>Protected
                                </h2>
                            </div>
                            <p class={`${robotomono.className} align-baseline   `}>Enterprise-grade security and compliance are at our core. Tabnine is trained exclusively on code with permissive licenses, ensuring that our customers are never exposed to legal liability.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative'>
                <div className='src-line'></div>
                <div className='relative text-[0px]'>
                    <img src="https://www.tabnine.com/wp-content/themes/tabnine/dist/images/a-shape3.svg" alt="" />
                </div>
                <div className='wrapper  mx-auto'>
                    <div class=" align-baseline t767px:pl-[20px] t767px:mt-[40px] pl-[40px] relative inline-block pr-[10px]">
                        <span class={` align-baseline a-logo-red ${inter.className}`}>//</span>
                        <h2 class={` align-baseline t767px:text-[22px] t767px:leading-[29px] text-[25px] font-extrabold leading-[33px] text-[rgb(19,_26,_58)] inline bg-[rgb(240,_245,_255)] mr-[5px] ${inter.className}`}>
                            <div class=" line-number before:content-['7'] before:top-[10px]"></div>Tabnine is{' '}
                            <span class=" align-baseline text-[rgb(31,_70,_193)]">privately held</span> and backed by top-tier investors
                        </h2>
                        <span class={` align-baseline a-logo-red ${inter.className}`}>//</span>
                    </div>

                    <div class=" align-baseline relative">
                        <div class=" line-number before:content-['8'] before:top-[15px]"></div>
                        <div className=" align-baseline t767px:hidden block">
                            <div className=" align-baseline flex flex-wrap ml-[35px] mt-[50px]  pb-[50px] justify-start items-center relative">
                                <div className=" a-logos-bracket">{'{'}</div>
                                <div className=" a-logo">
                                    <img alt="Atlassian" src="https://www.tabnine.com/wp-content/uploads/2024/04/Atlassian.svg" className=" align-baseline" />
                                </div>
                                <div className=" a-logo">
                                    <img alt="Elaia" src="https://www.tabnine.com/wp-content/uploads/2024/04/Elaia.svg" class=" align-baseline"></img>
                                </div>
                                <div class=" a-logo">
                                    <img alt="Headline" src="https://www.tabnine.com/wp-content/uploads/2024/04/Headline.svg" class=" align-baseline"></img>
                                </div>
                                <div class=" a-logo">
                                    <img alt="hetz" src="https://www.tabnine.com/wp-content/uploads/2024/04/hetz.svg" class=" align-baseline"></img>
                                </div>
                                <div class=" a-logo">
                                    <img alt="khosla" src="https://www.tabnine.com/wp-content/uploads/2024/04/khosla.svg" class=" align-baseline"></img>
                                </div>
                                <div class=" a-logo">
                                    <img alt="Qualcomm" src="https://www.tabnine.com/wp-content/uploads/2024/04/Qualcomm.svg" class=" align-baseline"></img>
                                </div>
                                <div class=" a-logo">
                                    <img alt="telstra" src="https://www.tabnine.com/wp-content/uploads/2024/04/telstra.svg" class=" align-baseline"></img>
                                </div>
                                <div class=" a-logo">
                                    <img alt="tpy" src="https://www.tabnine.com/wp-content/uploads/2024/04/tpy.svg" class=" align-baseline" />
                                </div>
                                <div className=" a-logos-bracket">{'}'}</div>
                            </div>
                        </div>
                        <div class=" align-baseline t767px:block hidden">
                            <div class=" align-baseline flex flex-wrap ml-[0px] mt-[20px] pr-0 pb-[50px] justify-start items-center relative">
                                <img alt="about - icons image on mobile" src="https://www.tabnine.com/wp-content/uploads/2024/06/about-icons-image-on-mobile.svg" class=" align-baseline w-full"></img>
                            </div>
                        </div>
                    </div>
                </div>



            </section>


            <section className='relative bg-[#f4f7ff]'>
                <div className='src-line'></div>
                <div className=' right-0 left-auto relative max-w-[290px] t767px:hidden  text-right float-right h-[70px]'>
                    <img src="https://www.tabnine.com/wp-content/themes/tabnine/dist/images/a-shape4.svg" alt="" />
                </div>
                <div class="t767px:block hidden">
                    <svg style={{ backgroundColor: "#ffffff" }} xmlns="http://www.w3.org/2000/svg" width="362" height="56" viewBox="0 0 362 56" fill="none" className='w-full h-full'>
                        <path d="M362 36.4958H315L262 0L0 2.00302e-05V56H229.5H362V36.4958Z" fill="#F4F7FF"></path>
                    </svg>
                </div>
                <div className='wrapper  mx-auto'>
                    <div class=" align-baseline box-content t767px:pr-[30px] t767px:pl-[30px] t767px:pt-0 t767px:mt-[-15px] pl-[40px] relative pt-[60px] max-w-[1000px] mb-[40px] pr-[15px]">
                        <span class={` align-baseline  col-red2 ${inter.className}`}>//</span>
                        <h2 class={` align-baseline t767px:text-[19px] t767px:leading-[28px] text-[25px] font-extrabold leading-[33px] text-[rgb(19,_26,_58)] inline bg-[rgb(240,_245,_255)] ${inter.className}`}>
                            <div class="line-number before:content-['9'] before:top-[10px]"></div>We help dev teams of all sizes use AI to
                            <span class=" align-baseline text-[rgb(31,_70,_193)]">deliver better software, faster</span> —
                            <br></br>without sacrificing privacy, security, or compliance
                        </h2>
                        <span class={` align-baseline  col-red2 ${inter.className}`}>//</span>
                    </div>
                    <div class=" align-baseline relative flex flex-wrap ml-px t767px:pb-0 pb-[70px] justify-between">
                        <div class="col-item2">
                            <div class=" align-baseline box-content title-wrapper">
                                <img alt="Vector (2)" src="https://www.tabnine.com/wp-content/uploads/2024/04/Vector-2.svg" class=" align-baseline mt-[4px]"></img>
                                <div class=" align-baseline title-text-wrapper ">
                                    <h2 className={`align-baseline ${inter.className}`}>
                                        <div className=" line-number before:content-['10'] before:top-[17px] before:left-[-30px]"></div>
                                        <span className={`${inter.className} align-baseline `}>&#123;</span>
                                        Innovation and collaboration
                                        <span className={`${inter.className} align-baseline `}>&#125;</span>
                                    </h2>
                                </div>
                            </div>
                            <div class={` align-baseline  col-detail ${robotomono.className}`}>
                                <div class=" line-number before:content-['11'] before:top-[4px] before:left-[-30px]"></div>We’re pioneers in the AI-assisted development space, but we can’t do it alone. The millions of professional developers who use our technology every day help us push forward to keep innovating and give organizations the edge they need in an increasingly competitive landscape.
                            </div>
                        </div>
                        <div class="col-item2">
                            <div class=" align-baseline title-wrapper">
                                <img alt="Vector (3)" src="https://www.tabnine.com/wp-content/uploads/2024/04/Vector-3.svg" class=" align-baseline mt-[4px]"></img>
                                <div class=" align-baseline title-text-wrapper">
                                    <h2 className={` align-baseline  ${inter.className}`}>
                                        <div className=" align-baseline relative"></div>
                                        <span className={` ${inter.className} align-baseline text-[rgb(161,_177,_216)]  text-[30px] font-normal leading-[47px] text-left`}>&#123;</span>
                                        Privacy and compliance
                                        <span className={`${inter.className} align-baseline text-[rgb(161,_177,_216)]  text-[30px] font-normal leading-[47px] text-left`}>&#125;</span>
                                    </h2>
                                </div>
                            </div>
                            <div class={` align-baseline  col-detail ${robotomono.className}`}>
                                <div class=" align-baseline relative"></div>With on-premises, private, and public cloud hosting options, you can choose the Tabnine deployment that works best for your organization. We don’t store or share any of your code or AI data, providing you and your team complete control and custody over your data.
                            </div>
                        </div>
                        <div class="col-item2">
                            <div class=" align-baseline title-wrapper">
                                <img alt="Group 1645" src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1645.svg" class=" align-baseline mt-[4px]"></img>
                                <div class=" align-baseline title-text-wrapper">
                                    <h2 class={` align-baseline  ${inter.className}`}>
                                        <div class="line-number before:content-['12'] before:top-[17px] before:left-[-30px]"></div>
                                        <span className={` align-baseline text-[rgb(161,_177,_216)]  text-[30px] font-normal leading-[47px] text-left ${inter.className}`}>&#123;</span>
                                        Community
                                        <span className={` align-baseline text-[rgb(161,_177,_216)]  text-[30px] font-normal leading-[47px] text-left ${inter.className}`}>&#125;</span>
                                    </h2>
                                </div>
                            </div>
                            <div className={` align-baseline  col-detail ${robotomono.className}`}>
                                <div class="line-number before:content-['13'] before:top-[4px] before:left-[-30px]"></div>As proud members of the open source community, we know how companies treat the community’s code is critical — and we take that responsibility seriously. That’s why Tabnine only trains on code with permissive licenses for our AI models (MIT, Apache 2.0, BSD-2-Clause, BSD-3-Clause).
                            </div>
                        </div>
                        <div class="col-item2">
                            <div class=" align-baseline flex mb-[23px]">
                                <img alt="Group 1646" src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1646.svg" class=" align-baseline mt-[4px]"></img>
                                <div class=" align-baseline title-text-wrapper">
                                    <h2 class={` align-baseline  ${inter.className}`}>
                                        <div class=" align-baseline relative"></div>
                                        <span class={` align-baseline text-[rgb(161,_177,_216)]  text-[30px] font-normal leading-[47px] text-left ${inter.className}`}>&#123;</span>
                                        Education
                                        <span class={` align-baseline text-[rgb(161,_177,_216)]  text-[30px] font-normal leading-[47px] text-left ${inter.className}`}>&#125;</span>
                                    </h2>
                                </div>
                            </div>
                            <div class={`  align-baseline  col-detail ${robotomono.className}`}>
                                <div class=" align-baseline relative"></div>Tabnine is all about fostering future programming stars. With Tabnine Pro, you get a personalized Al pal that takes the hassle out of learning to code for students and new developers. It's not just an assistant; it's your ticket to fast-track your way to coding mastery.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative '>
                <div className='src-line'></div>

                <div className='relative w-max t767px:hidden block max-w-[40%] left-auto text-right float-right h-[130px] '>
                    <img src="https://www.tabnine.com/wp-content/themes/tabnine/dist/images/a-shape5.svg" alt="" />
                </div>

                <div class="t767px:block hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="362" height="72" viewBox="0 0 362 72" fill="none" className='w-full h-full'>
                        <path d="M362 0H222.5H173.5H0V32H285.933L362 71.9496V0Z" fill="#F4F7FF"></path>
                    </svg>
                </div>
                <div className='wrapper  mx-auto'>
                    <div class=" align-baseline box-content  pl-[40px] relative t767px:pt-[10px] pt-[100px] max-w-[1000px] mb-[20px]">
                        <span class={` align-baseline a-slash4-red ${inter.className}`}>//</span>
                        <h2 class={` align-baseline  t767px:text-[22px] t767px:leading-[24px] text-[36px] font-extrabold leading-[47px] text-[rgb(19,_26,_58)] inline bg-[rgb(240,_245,_255)] ${inter.className}`}>
                            <div class=" line-number before:content-['14'] before:top-[14px] before:left-[-30px]"></div>
                            Want to
                            <span class=" align-baseline text-[rgb(31,_70,_193)]"> be a part</span> of Tabnine?
                        </h2>
                        <span class={` ${inter.className} a-slash4-red`}>//</span>
                    </div>
                    <div class={` align-baseline relative t767px:text-[14px] t767px:leading-[21px] text-[16px] font-normal leading-[26px] text-[rgb(19,_26,_58)] max-w-[630px] pl-[44px] mb-[20px] ${robotomono.className}`}>
                        <div class=" line-number before:content-['15'] before:top-[4px] before:left-[-30px]"></div>If you’re a passionate, open-minded thinker who wants to
                        <br></br>build the future with us, we want to hear from you.
                    </div>
                    <div class=" align-baseline t767px:ml-[-10px] t1200px:ml-[-10px] box-content relative w-max pb-[20px] button-line-hor-wrapper after:absolute after:content-[''] after:left-[0px] t767px:after:w-[40px] after:w-[51px] after:h-[122px]  after:top-[4px] after:bg-no-repeat after:bg-[50%] after:bg-contain after:bg-[url('./assets/tabninehalfbox.svg')]">
                        <div class=" line-number before:content-['16'] before:top-[-10px] top-[50%] translate-y-[-50%] before:left-[-30px]"></div>
                        <a href="/careers/" target="" class={` t767px:text-[14px] t767px:leading-[25px] t767px:px-[34px] t767px:ml-[69px] m-0 pt-[12px] box-content px-[24px] pb-[11px] align-baseline hover:bg-[#df1a0a] bg-[rgb(255,_34,_16)] rounded-[13px] text-center no-underline  font-bold text-[16px] leading-[27px] text-[rgb(255,_255,_255)] inline-block relative mt-[40px] mb-[80px] ml-[104px]  ${robotomono.className}`}>View open positions</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page