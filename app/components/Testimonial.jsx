import React from 'react'
import swipeToSlide from './slidertestimonial';
import SwipeToSlide from './slidertestimonial';
import { inter } from '../fonts/font';


const Testimonial = () => {




    return (
        <section className="testimonial t767px:pb-0 t767px:bg-[#1f46c1] t767px:mb-[-1px] md:before:content-[''] md:before:absolute md:before:right-0 md:before:bottom-[-100px] md:before:w-full md:before:h-full md:before:max-h-[598px] md:before:max-w-[1230px] md:before:bg-contain md:before:bg-no-repeat md:before:bg-[100%] md:before:bg-[url('./assets/tabinesliderbg.svg')] md:before:z-[1]  ">
            <div className="src-line box-content"></div>
            <div className='hidden t767px:block'>
                <img src="https://www.tabnine.com/wp-content/themes/tabnine/dist/images/home-mobile-s6.svg" alt="" className='w-full' />
            </div>
            <div className="wrapper  mx-auto">
                <div className="relative z-[2]">
                    <div className={`inline-block t767px:mt-[40px] t767px:ml-0 t767px:pl-[15px] t767px:mb-[40px] t767px:w-[90%] mt-[80px] mb-[60px] ml-[50px] ${inter.className}`}>
                        <div className="line-number before:left-[-30px] before:content-['21'] "></div>
                        <div className="relative ">
                            <span className="testimonial-red ">//</span>
                            <h2 className="t767px:text-[19px] t767px:leading-[25px] t767px:text-white t767px:bg-transparent text-[25px] font-extrabold leading-[34px] text-[#131a3a] inline bg-[#f0f5ff]">
                                <span className='t767px:text-[#2ad5e7] t767px:font-medium'>Tabnine is the <span className="text-[#1f46c1] t767px:text-[#2ad5e7] t767px:font-medium">original AI code assistant</span></span>
                                <br />
                                trusted by millions of developers and thousands of companies
                            </h2>
                            <span className="testimonial-red ml-2 ">//</span>
                        </div>
                    </div>
                    <div className=' '>
                        <div className='line-number before:left-[-30px] before:content-["22"]'></div>

                        <SwipeToSlide />

                    </div>
                </div>
            </div>

            <div className='t767px:block hidden'>
                <img src="https://www.tabnine.com/wp-content/themes/tabnine/dist/images/home-mobile-s8.svg" alt="" className='w-full' />
            </div>

        </section>
    )
}

export default Testimonial;