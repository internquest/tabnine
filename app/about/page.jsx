import React from 'react'
// Add this import at the top of your file
import { Roboto_Mono, Inter } from 'next/font/google'

// Initialize the font
const robotomono = Roboto_Mono({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
})
const inter = Inter({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
})

const page = () => {
    return (
        // Apply the font to the entire section
        <>
            <section className={`relative `}>
                <div className='src-line'></div>
                <div className='wrapper box-content mx-auto'>

                    <div class=" align-baseline relative pl-[80px] mb-[27px] pt-[100px]">
                        <span class=" align-baseline  text-[65px] font-extrabold leading-[78px] text-left text-[rgb(255,_34,_16)] absolute left-[24px] mt-[2px]">//</span>
                        <h1 class=" align-baseline  text-[75px] font-black leading-[90px] text-left text-[rgb(19,_26,_58)] inline">
                            <div class="line-number before:content-['2'] before:top-[35px] "></div>We're Tabnine
                        </h1>
                        <span class=" align-baseline  text-[65px] font-extrabold leading-[78px] text-left text-[rgb(255,_34,_16)] absolute ml-[4px] mt-[2px]">//</span>
                    </div>
                    <div class={` ${robotomono.className} align-baseline relative text-[20px] leading-[28px] text-left pl-[80px] mb-[40px]  font-normal text-[rgb(19,_26,_58)]`}>
                        <div class={` line-number before:content-['3'] before:top-[10px] `}></div>We’re building the future of AI-assisted software development.
                    </div>
                    <div class={` align-baseline relative font-['Roboto_Mono',_sans-serif] font-normal text-[rgb(19,_26,_58)] text-[16px] leading-[25.6px] pl-[25px] max-w-[864px] mb-[80px] ${robotomono.className}`}>
                        <div class=" line-number before:content-['4'] before:top-[4px]"></div>Since we launched our first AI code assistant in 2018, Tabnine has been a pioneer in generative AI for software development. Trusted by more than one million users and thousands of organizations, Tabnine’s mission is to accelerate and simplify the entire software development life cycle through AI.
                    </div>
                </div>
                <div className='relative z-[-1] mt-[-180px] text-[0px]'>
                    <img src="https://www.tabnine.com/wp-content/themes/tabnine/dist/images/a-shape1.svg" alt="" className='w-full' />
                </div>

            </section>

            <section className='relative bg-[#131a3a]'>
                <div className='src-line'></div>
                <div className='wrapper box-content mx-auto'>
                    <div class=" align-baseline relative pl-[57px] mb-[67px] max-w-[690px]">
                        <span class={` align-baseline text-[rgb(68,_86,_170)] ${inter.className} text-[32px] font-extrabold leading-[41.6px] absolute top-px left-[27px]`}>//</span>
                        <h2 class={` align-baseline  text-[36px] font-extrabold leading-[47px] text-[rgb(255,_255,_255)] inline bg-[rgb(12,_16,_37)] ${inter.className}`}>
                            <div class="line-number before:content-['5'] before:top-[15px]"></div>Unlike other AI code assistants, Tabnine is
                            <span class=" align-baseline text-[rgb(148,_101,_236)]"> Al that you control</span>
                        </h2>
                        <span class={` align-baseline text-[rgb(68,_86,_170)]  text-[32px] font-extrabold leading-[41.6px] absolute ml-[4px] ${inter.className} `}>//</span>
                    </div>
                    <div class=" align-baseline relative flex justify-between pb-[80px]">
                        <div class=" align-baseline max-w-[300px] mr-[20px] ml-[30px]">
                            <div class=" align-baseline">
                                <img alt="Group 1427" src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1427.svg" class=" align-baseline"></img>
                                <h2 class={` align-baseline  text-[22px] font-extrabold leading-[27px] text-[rgb(255,_255,_255)] mt-[27px] mb-[10px] ${inter.className}`}>
                                    <div class=" line-number before:content-['6'] before:top-[7px]"></div>Private
                                </h2>
                            </div>
                            <p class={`${robotomono.className} align-baseline font-['Roboto_Mono',_sans-serif] text-[16px] font-normal leading-[24px] text-[rgb(255,_255,_255)] inline bg-[rgb(12,_16,_37)]`}>Maximize control over your IP by choosing where and how to deploy Tabnine (as SaaS, on VPC, or on-premises) — and rest easily knowing that we never store or share any of your company’s code.</p>
                        </div>
                        <div class=" align-baseline max-w-[300px] mr-[20px] ml-[30px]">
                            <div class=" align-baseline">
                                <img alt="Group 1428" src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1428.svg" class=" align-baseline"></img>
                                <h2 class={` align-baseline  text-[22px] font-extrabold leading-[27px] text-[rgb(255,_255,_255)] mt-[27px] mb-[10px] ${inter.className}`}>
                                    <div class=" align-baseline absolute left-0 w-[5px] h-[54px]"></div>Personalized
                                </h2>
                            </div>
                            <p class={`${robotomono.className} align-baseline font-['Roboto_Mono',_sans-serif] text-[16px] font-normal leading-[24px] text-[rgb(255,_255,_255)] inline bg-[rgb(12,_16,_37)]`}>Take advantage of highly personalized, context-aware recommendations for every developer and engineering team through local code awareness and integration with your global codebase.</p>
                        </div>
                        <div class=" align-baseline max-w-[300px] mr-[20px] ml-[30px]">
                            <div class=" align-baseline">
                                <img alt="Group 1429" src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1429.svg" class=" align-baseline"></img>
                                <h2 class={` align-baseline  text-[22px] font-extrabold leading-[27px] text-[rgb(255,_255,_255)] mt-[27px] mb-[10px] ${inter.className}`}>
                                    <div class=" align-baseline absolute left-0 w-[5px] h-[54px]"></div>Protected
                                </h2>
                            </div>
                            <p class={`${robotomono.className} align-baseline font-['Roboto_Mono',_sans-serif] text-[16px] font-normal leading-[24px] text-[rgb(255,_255,_255)] inline bg-[rgb(12,_16,_37)] `}>Enterprise-grade security and compliance are at our core. Tabnine is trained exclusively on code with permissive licenses, ensuring that our customers are never exposed to legal liability.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative'>
                <div className='src-line'></div>
                <div className='relative text-[0px]'>
                    <img src="https://www.tabnine.com/wp-content/themes/tabnine/dist/images/a-shape3.svg" alt="" />
                </div>
                <div className='wrapper box-content mx-auto'>
                    <div class=" align-baseline pl-[40px] relative inline-block pr-[10px]">
                        <span class={` align-baseline  text-[22px] font-extrabold leading-[29px] text-[rgb(255,_34,_16)] absolute top-[2px] left-[18px] ${inter.className}`}>//</span>
                        <h2 class={` align-baseline  text-[25px] font-extrabold leading-[33px] text-[rgb(19,_26,_58)] inline bg-[rgb(240,_245,_255)] mr-[5px] ${inter.className}`}>
                            <div class=" line-number before:content-['7'] before:top-[10px]"></div>Tabnine is{' '}
                            <span class=" align-baseline text-[rgb(31,_70,_193)]">privately held</span> and backed by top-tier investors
                        </h2>
                        <span class={` align-baseline  text-[22px] font-extrabold leading-[29px] text-[rgb(255,_34,_16)] absolute mt-[2px] ${inter.className}`}>//</span>
                    </div>

                    <div class=" align-baseline relative">
                        <div class=" line-number before:content-['8'] before:top-[15px]"></div>
                        <div className=" align-baseline block">
                            <div className=" align-baseline flex flex-wrap ml-[35px] mt-[50px] pb-[50px] justify-start items-center relative">
                                <div className=" align-baseline  text-[38.96px] font-normal leading-[47px] text-[rgb(202,_213,_238)] absolute -top-[4px] -left-[20px]">{'{'}</div>
                                <div className=" align-baseline w-1/5 mb-[35px] text-center">
                                    <img alt="Atlassian" src="https://www.tabnine.com/wp-content/uploads/2024/04/Atlassian.svg" className=" align-baseline" />
                                </div>
                                <div className=" align-baseline w-1/5 mb-[35px] text-center">
                                    <img alt="Elaia" src="https://www.tabnine.com/wp-content/uploads/2024/04/Elaia.svg" class=" align-baseline"></img>
                                </div>
                                <div class=" align-baseline w-1/5 mb-[35px] text-center">
                                    <img alt="Headline" src="https://www.tabnine.com/wp-content/uploads/2024/04/Headline.svg" class=" align-baseline"></img>
                                </div>
                                <div class=" align-baseline w-1/5 mb-[35px] text-center">
                                    <img alt="hetz" src="https://www.tabnine.com/wp-content/uploads/2024/04/hetz.svg" class=" align-baseline"></img>
                                </div>
                                <div class=" align-baseline w-1/5 mb-[35px] text-center">
                                    <img alt="khosla" src="https://www.tabnine.com/wp-content/uploads/2024/04/khosla.svg" class=" align-baseline"></img>
                                </div>
                                <div class=" align-baseline w-1/5 mb-[35px] text-center">
                                    <img alt="Qualcomm" src="https://www.tabnine.com/wp-content/uploads/2024/04/Qualcomm.svg" class=" align-baseline"></img>
                                </div>
                                <div class=" align-baseline w-1/5 mb-[35px] text-center">
                                    <img alt="telstra" src="https://www.tabnine.com/wp-content/uploads/2024/04/telstra.svg" class=" align-baseline"></img>
                                </div>
                                <div class=" align-baseline w-1/5 mb-[35px] text-center">
                                    <img alt="tpy" src="https://www.tabnine.com/wp-content/uploads/2024/04/tpy.svg" class=" align-baseline" />
                                </div>
                                <div class=" align-baseline  text-[38.96px] font-normal leading-[47px] text-[rgb(202,_213,_238)] relative -top-[20px]">{'}'}</div>
                            </div>
                        </div>
                        <div class=" align-baseline hidden">
                            <div class=" align-baseline flex flex-wrap ml-[35px] mt-[50px] pb-[50px] justify-start items-center relative">
                                <img alt="about - icons image on mobile" src="https://www.tabnine.com/wp-content/uploads/2024/06/about-icons-image-on-mobile.svg" class=" align-baseline w-full"></img>
                            </div>
                        </div>
                    </div>
                </div>



            </section>


            <section className='relative bg-[#f4f7ff]'>
                <div className='src-line'></div>
                <div className=' right-0 left-auto relative max-w-[290px] text-right float-right h-[70px]'>
                    <img src="https://www.tabnine.com/wp-content/themes/tabnine/dist/images/a-shape4.svg" alt="" />
                </div>
                <div className='wrapper box-content mx-auto'>
                    <div class=" align-baseline pl-[40px] relative pt-[60px] max-w-[1000px] mb-[40px] pr-[15px]">
                        <span class={` align-baseline  text-[22px] font-extrabold leading-[29px] text-[rgb(255,_34,_16)] absolute left-[18px] mt-px ${inter.className}`}>//</span>
                        <h2 class={` align-baseline  text-[25px] font-extrabold leading-[33px] text-[rgb(19,_26,_58)] inline bg-[rgb(240,_245,_255)] ${inter.className}`}>
                            <div class="line-number before:content-['9'] before:top-[10px]"></div>We help dev teams of all sizes use AI to
                            <span class=" align-baseline text-[rgb(31,_70,_193)]">deliver better software, faster</span> —
                            <br></br>without sacrificing privacy, security, or compliance
                        </h2>
                        <span class={` align-baseline  text-[22px] font-extrabold leading-[29px] text-[rgb(255,_34,_16)] absolute ml-[4px] mt-0 ${inter.className}`}>//</span>
                    </div>
                    <div class=" align-baseline relative flex flex-wrap ml-px pb-[70px] justify-between">
                        <div class="m-0 pt-[38px] pr-[35px] pb-[76px] pl-[52px] border-[0px] [font:inherit] align-baseline w-full box-content bg-[rgb(252,_253,_255)] max-w-[483px] mb-[57px]">
                            <div class=" align-baseline box-content flex mb-[23px]">
                                <img alt="Vector (2)" src="https://www.tabnine.com/wp-content/uploads/2024/04/Vector-2.svg" class=" align-baseline mt-[4px]"></img>
                                <div class=" align-baseline ml-[8px]">
                                    <h2 className={`align-baseline   text-[22px] font-extrabold leading-[27px] text-[rgb(31,_70,_193)] ${inter.className}`}>
                                        <div className=" line-number before:content-['10'] before:top-[17px] before:left-[-30px]"></div>
                                        <span className={`${inter.className} align-baseline text-[rgb(161,_177,_216)]  text-[30px] font-normal leading-[47px] text-left`}>&#123;</span>
                                        Innovation and collaboration
                                        <span className={`${inter.className} align-baseline text-[rgb(161,_177,_216)]  text-[30px] font-normal leading-[47px] text-left`}>&#125;</span>
                                    </h2>
                                </div>
                            </div>
                            <div class={` align-baseline font-['Roboto_Mono',_sans-serif] text-[16px] font-normal leading-[24px] text-[rgb(19,_26,_58)] ${robotomono.className}`}>
                                <div class=" line-number before:content-['11'] before:top-[4px] before:left-[-30px]"></div>We’re pioneers in the AI-assisted development space, but we can’t do it alone. The millions of professional developers who use our technology every day help us push forward to keep innovating and give organizations the edge they need in an increasingly competitive landscape.
                            </div>
                        </div>
                        <div class="m-0 pt-[38px] box-content pr-[35px] pb-[76px] pl-[52px] border-[0px] [font:inherit] align-baseline w-full bg-[rgb(252,_253,_255)] max-w-[483px] mb-[57px]">
                            <div class=" align-baseline flex mb-[23px]">
                                <img alt="Vector (3)" src="https://www.tabnine.com/wp-content/uploads/2024/04/Vector-3.svg" class=" align-baseline mt-[4px]"></img>
                                <div class=" align-baseline ml-[8px]">
                                    <h2 className={` align-baseline  text-[22px] font-extrabold leading-[27px] text-[rgb(31,_70,_193)] ${inter.className}`}>
                                        <div className=" align-baseline relative"></div>
                                        <span className={` ${inter.className} align-baseline text-[rgb(161,_177,_216)]  text-[30px] font-normal leading-[47px] text-left`}>&#123;</span>
                                        Privacy and compliance
                                        <span className={`${inter.className} align-baseline text-[rgb(161,_177,_216)]  text-[30px] font-normal leading-[47px] text-left`}>&#125;</span>
                                    </h2>
                                </div>
                            </div>
                            <div class={` align-baseline font-['Roboto_Mono',_sans-serif] text-[16px] font-normal leading-[24px] text-[rgb(19,_26,_58)] ${robotomono.className}`}>
                                <div class=" align-baseline relative"></div>With on-premises, private, and public cloud hosting options, you can choose the Tabnine deployment that works best for your organization. We don’t store or share any of your code or AI data, providing you and your team complete control and custody over your data.
                            </div>
                        </div>
                        <div class="m-0 pt-[38px] box-content pr-[35px] pb-[76px] pl-[52px] border-[0px] [font:inherit] align-baseline w-full bg-[rgb(252,_253,_255)] max-w-[483px] mb-[57px]">
                            <div class=" align-baseline flex mb-[23px]">
                                <img alt="Group 1645" src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1645.svg" class=" align-baseline mt-[4px]"></img>
                                <div class=" align-baseline ml-[8px]">
                                    <h2 class={` align-baseline  text-[22px] font-extrabold leading-[27px] text-[rgb(31,_70,_193)] ${inter.className}`}>
                                        <div class="line-number before:content-['12'] before:top-[17px] before:left-[-30px]"></div>
                                        <span className={` align-baseline text-[rgb(161,_177,_216)]  text-[30px] font-normal leading-[47px] text-left ${inter.className}`}>&#123;</span>
                                        Community
                                        <span className={` align-baseline text-[rgb(161,_177,_216)]  text-[30px] font-normal leading-[47px] text-left ${inter.className}`}>&#125;</span>
                                    </h2>
                                </div>
                            </div>
                            <div className={` align-baseline font-['Roboto_Mono',_sans-serif] text-[16px] font-normal leading-[24px] text-[rgb(19,_26,_58)] ${robotomono.className}`}>
                                <div class="line-number before:content-['13'] before:top-[4px] before:left-[-30px]"></div>As proud members of the open source community, we know how companies treat the community’s code is critical — and we take that responsibility seriously. That’s why Tabnine only trains on code with permissive licenses for our AI models (MIT, Apache 2.0, BSD-2-Clause, BSD-3-Clause).
                            </div>
                        </div>
                        <div class="m-0 pt-[38px] box-content pr-[35px] pb-[76px] pl-[52px] border-[0px] [font:inherit] align-baseline w-full bg-[rgb(252,_253,_255)] max-w-[483px] mb-[57px]">
                            <div class=" align-baseline flex mb-[23px]">
                                <img alt="Group 1646" src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1646.svg" class=" align-baseline mt-[4px]"></img>
                                <div class=" align-baseline ml-[8px]">
                                    <h2 class={` align-baseline  text-[22px] font-extrabold leading-[27px] text-[rgb(31,_70,_193)] ${inter.className}`}>
                                        <div class=" align-baseline relative"></div>
                                        <span class={` align-baseline text-[rgb(161,_177,_216)]  text-[30px] font-normal leading-[47px] text-left ${inter.className}`}>&#123;</span>
                                        Education
                                        <span class={` align-baseline text-[rgb(161,_177,_216)]  text-[30px] font-normal leading-[47px] text-left ${inter.className}`}>&#125;</span>
                                    </h2>
                                </div>
                            </div>
                            <div class={`  align-baseline font-['Roboto_Mono',_sans-serif] text-[16px] font-normal leading-[24px] text-[rgb(19,_26,_58)] ${robotomono.className}`}>
                                <div class=" align-baseline relative"></div>Tabnine is all about fostering future programming stars. With Tabnine Pro, you get a personalized Al pal that takes the hassle out of learning to code for students and new developers. It's not just an assistant; it's your ticket to fast-track your way to coding mastery.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative '>
                <div className='src-line'></div>

                <div className='relative w-max max-w-[40%] left-auto text-right float-right h-[130px] '>
                    <img src="https://www.tabnine.com/wp-content/themes/tabnine/dist/images/a-shape5.svg" alt="" />
                </div>
                <div className='wrapper box-content mx-auto'>
                    <div class=" align-baseline pl-[40px] relative pt-[100px] max-w-[1000px] mb-[20px]">
                        <span class={` align-baseline font-[Inter,_sans-serif] text-[32px] font-extrabold leading-[29px] text-[rgb(255,_34,_16)] absolute left-[8px] mt-[6px] ${inter.className}`}>//</span>
                        <h2 class={` align-baseline font-[Inter,_sans-serif] text-[36px] font-extrabold leading-[47px] text-[rgb(19,_26,_58)] inline bg-[rgb(240,_245,_255)] ${inter.className}`}>
                            <div class=" line-number before:content-['14'] before:top-[14px] before:left-[-30px]"></div>Want to
                            <span class=" align-baseline text-[rgb(31,_70,_193)]"> be a part</span> of Tabnine?
                        </h2>
                        <span class={` ${inter.className} align-baseline font-[Inter,_sans-serif] text-[32px] font-extrabold leading-[29px] text-[rgb(255,_34,_16)] absolute ml-[4px] mt-[6px]`}>//</span>
                    </div>
                    <div class={` align-baseline relative font-['Roboto_Mono',_sans-serif] text-[16px] font-normal leading-[26px] text-[rgb(19,_26,_58)] max-w-[630px] pl-[44px] mb-[20px] ${robotomono.className}`}>
                        <div class=" line-number before:content-['15'] before:top-[4px] before:left-[-30px]"></div>If you’re a passionate, open-minded thinker who wants to
                        <br></br>build the future with us, we want to hear from you.
                    </div>
                    <div class=" align-baseline box-content relative w-max pb-[20px] button-line-hor-wrapper after:absolute after:content-[''] after:left-[0px] after:w-[51px] after:h-[122px]  after:top-[4px] after:bg-no-repeat after:bg-[50%] after:bg-contain after:bg-[url('./assets/tabninehalfbox.svg')]">
                        <div class=" line-number before:content-['16'] before:top-[-10px] top-[50%] translate-y-[-50%] before:left-[-30px]"></div>
                        <a href="/careers/" target="" class={` m-0 pt-[12px] box-content px-[24px] pb-[11px] align-baseline hover:bg-[#df1a0a] bg-[rgb(255,_34,_16)] rounded-[13px] text-center no-underline font-['Roboto_Mono',_sans-serif] font-bold text-[16px] leading-[27px] text-[rgb(255,_255,_255)] inline-block relative mt-[40px] mb-[80px] ml-[104px]  ${robotomono.className}`}>View open positions</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page