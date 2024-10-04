import React from 'react'
import swipeToSlide from './slidertestimonial';
import SwipeToSlide from './slidertestimonial';
import { inter } from '../fonts/font';


const Testimonial = () => {




    return (
        <section className="testimonial before:content-[''] before:absolute before:right-0 before:bottom-[-100px] before:w-full before:h-full before:max-h-[598px] before:max-w-[1230px] before:bg-contain before:bg-no-repeat before:bg-[100%] before:bg-[url('./assets/tabinesliderbg.svg')] before:z-[1] ">
            <div className="src-line box-content"></div>
            <div className="wrapper box-content mx-auto">
                <div className="relative z-[2]">
                    <div className={`inline-block mt-[80px] mb-[60px] ml-[50px] ${inter.className}`}>
                        <div className="line-number before:left-[-30px] before:content-['21'] "></div>
                        <div className="relative ">
                            <span className="slashes text-[26px]">//</span>
                            <h2 className="text-[25px] font-extrabold leading-[34px] text-[#131a3a] inline bg-[#f0f5ff]">
                                <span >Tabnine is the <span className="text-[#1f46c1]">original AI code assistant</span></span>
                                <br />
                                trusted by millions of developers and thousands of companies
                            </h2>
                            <span className="slashes ml-2 text-[26px]">//</span>
                        </div>
                    </div>
                    <div>
                        <div className='line-number before:left-[-30px] before:content-["22"]'></div>

                        <SwipeToSlide />

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Testimonial;