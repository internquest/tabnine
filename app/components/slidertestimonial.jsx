'use client'


import React, { Component, useEffect, useRef } from "react";
import Slider from "react-slick";
import { inter, robotomono } from "../fonts/font";







const SwipeToSlide = () => {

    const sliderref = useRef(null)
    const settings = {
        dots: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        autoplay: true,
        swipeToSlide: true,
        speed: 1200,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };





    return (

        <Slider {...settings} className={`relative slider-container h-[inherit] [&_.slick-slide]:testimonial-item ${robotomono.className} `}>


            <div className={` testimonial_box ${robotomono.className} `}>
                <div class=" align-baseline pb-[40px] box-content">
                    <div class={`${robotomono.className} align-baseline font-['Roboto_Mono',_sans-serif] font-normal text-[14px] leading-[25px] text-[rgb(255,_255,_255)]`}>
                        <span class=" align-baseline !text-[rgb(148,_101,_236)]">//</span>Impressive results! I am webGL developer.
                        <span class=" align-baseline text-[rgb(42,_213,_231)]">This add-on helps me a lot.</span> I use it to get any function I need. Even my 11 yo daughter uses it to create little simple projects.
                        <span class=" align-baseline !text-[rgb(148,_101,_236)]">//</span>
                    </div>
                </div>
                <div class=" align-baseline relative">
                    <div class=" align-baseline absolute right-0 -top-[30px]">
                        <img alt="star" width="69" height="10" src="https://www.tabnine.com/wp-content/themes/tabnine/dist/images/star.svg" class=" align-baseline block"></img>
                    </div>
                    <div class=" align-baseline flex items-center justify-between relative">
                        <div class=" align-baseline w-4/5">
                            <div class={` align-baseline font-['Roboto_Mono',_sans-serif] font-bold text-[12px] leading-[17px] text-[rgb(148,_101,_236)] relative ${robotomono.className}`}>Мухаммет</div>
                            <div class={` align-baseline font-['Roboto_Mono',_sans-serif] font-normal text-[10px] leading-[14px] text-[rgb(255,_255,_255)] ${robotomono.className}`}>VS Code Marketplace review</div>
                        </div>
                        <div className={`align-baseline flex ${inter.className}`}>
                            <span className="align-baseline  text-[25px] text-[rgb(31,_70,_193)] mr-[4px]">&#123;</span>
                            <img alt="image 57" src="https://www.tabnine.com/wp-content/uploads/2024/04/image-57-1.svg" className="align-baseline block" />
                            <span className="align-baseline  text-[25px] text-[rgb(31,_70,_193)] ml-[4px]">&#125;</span>
                        </div>
                    </div>
                </div>
            </div>



            <div className={` testimonial_box ${robotomono.className} `}>
                <div class=" align-baseline pb-[40px] box-content">
                    <div class={`${robotomono.className} align-baseline font-['Roboto_Mono',_sans-serif] font-normal text-[14px] leading-[25px] text-[rgb(255,_255,_255)]`}>
                        <span class=" align-baseline !text-[rgb(148,_101,_236)]">//</span>Impressive results! I am webGL developer.
                        <span class=" align-baseline text-[rgb(42,_213,_231)]">This add-on helps me a lot.</span> I use it to get any function I need. Even my 11 yo daughter uses it to create little simple projects.
                        <span class=" align-baseline !text-[rgb(148,_101,_236)]">//</span>
                    </div>
                </div>
                <div class=" align-baseline relative">
                    <div class=" align-baseline absolute right-0 -top-[30px]">
                        <img alt="star" width="69" height="10" src="https://www.tabnine.com/wp-content/themes/tabnine/dist/images/star.svg" class=" align-baseline block"></img>
                    </div>
                    <div class=" align-baseline flex items-center justify-between relative">
                        <div class=" align-baseline w-4/5">
                            <div class={` align-baseline font-['Roboto_Mono',_sans-serif] font-bold text-[12px] leading-[17px] text-[rgb(148,_101,_236)] relative ${robotomono.className}`}>Мухаммет</div>
                            <div class={` align-baseline font-['Roboto_Mono',_sans-serif] font-normal text-[10px] leading-[14px] text-[rgb(255,_255,_255)] ${robotomono.className}`}>VS Code Marketplace review</div>
                        </div>
                        <div className={`align-baseline flex ${inter.className}`}>
                            <span className="align-baseline  text-[25px] text-[rgb(31,_70,_193)] mr-[4px]">&#123;</span>
                            <img alt="image 57" src="https://www.tabnine.com/wp-content/uploads/2024/04/image-57-1.svg" className="align-baseline block" />
                            <span className="align-baseline  text-[25px] text-[rgb(31,_70,_193)] ml-[4px]">&#125;</span>
                        </div>
                    </div>
                </div>
            </div>



            <div className={` testimonial_box ${robotomono.className} `}>
                <div class=" align-baseline pb-[40px] box-content">
                    <div class={`${robotomono.className} align-baseline font-['Roboto_Mono',_sans-serif] font-normal text-[14px] leading-[25px] text-[rgb(255,_255,_255)]`}>
                        <span class=" align-baseline !text-[rgb(148,_101,_236)]">//</span>Impressive results! I am webGL developer.
                        <span class=" align-baseline text-[rgb(42,_213,_231)]">This add-on helps me a lot.</span> I use it to get any function I need. Even my 11 yo daughter uses it to create little simple projects.
                        <span class=" align-baseline !text-[rgb(148,_101,_236)]">//</span>
                    </div>
                </div>
                <div class=" align-baseline relative">
                    <div class=" align-baseline absolute right-0 -top-[30px]">
                        <img alt="star" width="69" height="10" src="https://www.tabnine.com/wp-content/themes/tabnine/dist/images/star.svg" class=" align-baseline block"></img>
                    </div>
                    <div class=" align-baseline flex items-center justify-between relative">
                        <div class=" align-baseline w-4/5">
                            <div class={` align-baseline font-['Roboto_Mono',_sans-serif] font-bold text-[12px] leading-[17px] text-[rgb(148,_101,_236)] relative ${robotomono.className}`}>Мухаммет</div>
                            <div class={` align-baseline font-['Roboto_Mono',_sans-serif] font-normal text-[10px] leading-[14px] text-[rgb(255,_255,_255)] ${robotomono.className}`}>VS Code Marketplace review</div>
                        </div>
                        <div className={`align-baseline flex ${inter.className}`}>
                            <span className="align-baseline  text-[25px] text-[rgb(31,_70,_193)] mr-[4px]">&#123;</span>
                            <img alt="image 57" src="https://www.tabnine.com/wp-content/uploads/2024/04/image-57-1.svg" className="align-baseline block" />
                            <span className="align-baseline  text-[25px] text-[rgb(31,_70,_193)] ml-[4px]">&#125;</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={` testimonial_box ${robotomono.className} `}>
                <div class=" align-baseline pb-[40px] box-content">
                    <div class={`${robotomono.className} align-baseline font-['Roboto_Mono',_sans-serif] font-normal text-[14px] leading-[25px] text-[rgb(255,_255,_255)]`}>
                        <span class=" align-baseline !text-[rgb(148,_101,_236)]">//</span>Impressive results! I am webGL developer.
                        <span class=" align-baseline text-[rgb(42,_213,_231)]">This add-on helps me a lot.</span> I use it to get any function I need. Even my 11 yo daughter uses it to create little simple projects.
                        <span class=" align-baseline !text-[rgb(148,_101,_236)]">//</span>
                    </div>
                </div>
                <div class=" align-baseline relative">
                    <div class=" align-baseline absolute right-0 -top-[30px]">
                        <img alt="star" width="69" height="10" src="https://www.tabnine.com/wp-content/themes/tabnine/dist/images/star.svg" class=" align-baseline block"></img>
                    </div>
                    <div class=" align-baseline flex items-center justify-between relative">
                        <div class=" align-baseline w-4/5">
                            <div class={` align-baseline font-['Roboto_Mono',_sans-serif] font-bold text-[12px] leading-[17px] text-[rgb(148,_101,_236)] relative ${robotomono.className}`}>Мухаммет</div>
                            <div class={` align-baseline font-['Roboto_Mono',_sans-serif] font-normal text-[10px] leading-[14px] text-[rgb(255,_255,_255)] ${robotomono.className}`}>VS Code Marketplace review</div>
                        </div>
                        <div className={`align-baseline flex ${inter.className}`}>
                            <span className="align-baseline  text-[25px] text-[rgb(31,_70,_193)] mr-[4px]">&#123;</span>
                            <img alt="image 57" src="https://www.tabnine.com/wp-content/uploads/2024/04/image-57-1.svg" className="align-baseline block" />
                            <span className="align-baseline  text-[25px] text-[rgb(31,_70,_193)] ml-[4px]">&#125;</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className={` testimonial_box ${robotomono.className} `}>
                <div class=" align-baseline pb-[40px] box-content">
                    <div class={`${robotomono.className} align-baseline font-['Roboto_Mono',_sans-serif] font-normal text-[14px] leading-[25px] text-[rgb(255,_255,_255)]`}>
                        <span class=" align-baseline !text-[rgb(148,_101,_236)]">//</span>Impressive results! I am webGL developer.
                        <span class=" align-baseline text-[rgb(42,_213,_231)]">This add-on helps me a lot.</span> I use it to get any function I need. Even my 11 yo daughter uses it to create little simple projects.I use it to get any function I need. Even my 11 yo daughter uses it to create little simple projects.I use it to get any function I need. Even my 11 yo daughter uses it to create little simple projects.
                        <span class=" align-baseline !text-[rgb(148,_101,_236)]">//</span>
                    </div>
                </div>
                <div class=" align-baseline relative">
                    <div class=" align-baseline absolute right-0 -top-[30px]">
                        <img alt="star" width="69" height="10" src="https://www.tabnine.com/wp-content/themes/tabnine/dist/images/star.svg" class=" align-baseline block"></img>
                    </div>
                    <div class=" align-baseline flex items-center justify-between relative">
                        <div class=" align-baseline w-4/5">
                            <div class={` align-baseline font-['Roboto_Mono',_sans-serif] font-bold text-[12px] leading-[17px] text-[rgb(148,_101,_236)] relative ${robotomono.className}`}>Мухаммет</div>
                            <div class={` align-baseline font-['Roboto_Mono',_sans-serif] font-normal text-[10px] leading-[14px] text-[rgb(255,_255,_255)] ${robotomono.className}`}>VS Code Marketplace review</div>
                        </div>
                        <div className={`align-baseline flex ${inter.className}`}>
                            <span className="align-baseline  text-[25px] text-[rgb(31,_70,_193)] mr-[4px]">&#123;</span>
                            <img alt="image 57" src="https://www.tabnine.com/wp-content/uploads/2024/04/image-57-1.svg" className="align-baseline block" />
                            <span className="align-baseline  text-[25px] text-[rgb(31,_70,_193)] ml-[4px]">&#125;</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className={` testimonial_box ${robotomono.className} `}>
                <div class=" align-baseline pb-[40px] box-content">
                    <div class={`${robotomono.className} align-baseline font-['Roboto_Mono',_sans-serif] font-normal text-[14px] leading-[25px] text-[rgb(255,_255,_255)]`}>
                        <span class=" align-baseline !text-[rgb(148,_101,_236)]">//</span>Impressive results! I am webGL developer.Impressive results! I am webGL developer.Impressive results! I am webGL developer.Impressive results! I am webGL developer.Impressive results!
                        <span class=" align-baseline text-[rgb(42,_213,_231)]">This add-on helps me a lot.</span> I use it to get any function I need. Even my 11 yo daughter uses it to create little simple projects.
                        <span class=" align-baseline !text-[rgb(148,_101,_236)]">//</span>
                    </div>
                </div>
                <div class=" align-baseline relative">
                    <div class=" align-baseline absolute right-0 -top-[30px]">
                        <img alt="star" width="69" height="10" src="https://www.tabnine.com/wp-content/themes/tabnine/dist/images/star.svg" class=" align-baseline block"></img>
                    </div>
                    <div class=" align-baseline flex items-center justify-between relative">
                        <div class=" align-baseline w-4/5">
                            <div class={` align-baseline font-['Roboto_Mono',_sans-serif] font-bold text-[12px] leading-[17px] text-[rgb(148,_101,_236)] relative ${robotomono.className}`}>Мухаммет</div>
                            <div class={` align-baseline font-['Roboto_Mono',_sans-serif] font-normal text-[10px] leading-[14px] text-[rgb(255,_255,_255)] ${robotomono.className}`}>VS Code Marketplace review</div>
                        </div>
                        <div className={`align-baseline flex ${inter.className}`}>
                            <span className="align-baseline  text-[25px] text-[rgb(31,_70,_193)] mr-[4px]">&#123;</span>
                            <img alt="image 57" src="https://www.tabnine.com/wp-content/uploads/2024/04/image-57-1.svg" className="align-baseline block" />
                            <span className="align-baseline  text-[25px] text-[rgb(31,_70,_193)] ml-[4px]">&#125;</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className={` testimonial_box ${robotomono.className} `}>
                <div class=" align-baseline pb-[40px] box-content">
                    <div class={`${robotomono.className} align-baseline font-['Roboto_Mono',_sans-serif] font-normal text-[14px] leading-[25px] text-[rgb(255,_255,_255)]`}>
                        <span class=" align-baseline !text-[rgb(148,_101,_236)]">//</span>Impressive results! I am webGL developer.
                        <span class=" align-baseline text-[rgb(42,_213,_231)]">This add-on helps me a lot.</span> I use it to get any function I need. Even my 11 yo daughter uses it to create little simple projects.
                        <span class=" align-baseline !text-[rgb(148,_101,_236)]">//</span>
                    </div>
                </div>
                <div class=" align-baseline relative">
                    <div class=" align-baseline absolute right-0 -top-[30px]">
                        <img alt="star" width="69" height="10" src="https://www.tabnine.com/wp-content/themes/tabnine/dist/images/star.svg" class=" align-baseline block"></img>
                    </div>
                    <div class=" align-baseline flex items-center justify-between relative">
                        <div class=" align-baseline w-4/5">
                            <div class={` align-baseline font-['Roboto_Mono',_sans-serif] font-bold text-[12px] leading-[17px] text-[rgb(148,_101,_236)] relative ${robotomono.className}`}>Мухаммет</div>
                            <div class={` align-baseline font-['Roboto_Mono',_sans-serif] font-normal text-[10px] leading-[14px] text-[rgb(255,_255,_255)] ${robotomono.className}`}>VS Code Marketplace review</div>
                        </div>
                        <div className={`align-baseline flex ${inter.className}`}>
                            <span className="align-baseline  text-[25px] text-[rgb(31,_70,_193)] mr-[4px]">&#123;</span>
                            <img alt="image 57" src="https://www.tabnine.com/wp-content/uploads/2024/04/image-57-1.svg" className="align-baseline block" />
                            <span className="align-baseline  text-[25px] text-[rgb(31,_70,_193)] ml-[4px]">&#125;</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className={` testimonial_box ${robotomono.className} `}>
                <div class=" align-baseline pb-[40px] box-content">
                    <div class={`${robotomono.className} align-baseline font-['Roboto_Mono',_sans-serif] font-normal text-[14px] leading-[25px] text-[rgb(255,_255,_255)]`}>
                        <span class=" align-baseline !text-[rgb(148,_101,_236)]">//</span>Impressive results! I am webGL developer.
                        <span class=" align-baseline text-[rgb(42,_213,_231)]">This add-on helps me a lot.</span> I use it to get any function I need. Even my 11 yo daughter uses it to create little simple projects.
                        <span class=" align-baseline !text-[rgb(148,_101,_236)]">//</span>
                    </div>
                </div>
                <div class=" align-baseline relative">
                    <div class=" align-baseline absolute right-0 -top-[30px]">
                        <img alt="star" width="69" height="10" src="https://www.tabnine.com/wp-content/themes/tabnine/dist/images/star.svg" class=" align-baseline block"></img>
                    </div>
                    <div class=" align-baseline flex items-center justify-between relative">
                        <div class=" align-baseline w-4/5">
                            <div class={` align-baseline font-['Roboto_Mono',_sans-serif] font-bold text-[12px] leading-[17px] text-[rgb(148,_101,_236)] relative ${robotomono.className}`}>Мухаммет</div>
                            <div class={` align-baseline font-['Roboto_Mono',_sans-serif] font-normal text-[10px] leading-[14px] text-[rgb(255,_255,_255)] ${robotomono.className}`}>VS Code Marketplace review</div>
                        </div>
                        <div className={`align-baseline flex ${inter.className}`}>
                            <span className="align-baseline  text-[25px] text-[rgb(31,_70,_193)] mr-[4px]">&#123;</span>
                            <img alt="image 57" src="https://www.tabnine.com/wp-content/uploads/2024/04/image-57-1.svg" className="align-baseline block" />
                            <span className="align-baseline  text-[25px] text-[rgb(31,_70,_193)] ml-[4px]">&#125;</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={` testimonial_box ${robotomono.className} `}>
                <div class=" align-baseline pb-[40px] box-content">
                    <div class={`${robotomono.className} align-baseline font-['Roboto_Mono',_sans-serif] font-normal text-[14px] leading-[25px] text-[rgb(255,_255,_255)]`}>
                        <span class=" align-baseline !text-[rgb(148,_101,_236)]">//</span>Impressive results! I am webGL developer.
                        <span class=" align-baseline text-[rgb(42,_213,_231)]">This add-on helps me a lot.</span> I use it to get any function I need. Even my 11 yo daughter uses it to create little simple projects.
                        <span class=" align-baseline !text-[rgb(148,_101,_236)]">//</span>
                    </div>
                </div>
                <div class=" align-baseline relative">
                    <div class=" align-baseline absolute right-0 -top-[30px]">
                        <img alt="star" width="69" height="10" src="https://www.tabnine.com/wp-content/themes/tabnine/dist/images/star.svg" class=" align-baseline block"></img>
                    </div>
                    <div class=" align-baseline flex items-center justify-between relative">
                        <div class=" align-baseline w-4/5">
                            <div class={` align-baseline font-['Roboto_Mono',_sans-serif] font-bold text-[12px] leading-[17px] text-[rgb(148,_101,_236)] relative ${robotomono.className}`}>Мухаммет</div>
                            <div class={` align-baseline font-['Roboto_Mono',_sans-serif] font-normal text-[10px] leading-[14px] text-[rgb(255,_255,_255)] ${robotomono.className}`}>VS Code Marketplace review</div>
                        </div>
                        <div className={`align-baseline flex ${inter.className}`}>
                            <span className="align-baseline  text-[25px] text-[rgb(31,_70,_193)] mr-[4px]">&#123;</span>
                            <img alt="image 57" src="https://www.tabnine.com/wp-content/uploads/2024/04/image-57-1.svg" className="align-baseline block" />
                            <span className="align-baseline  text-[25px] text-[rgb(31,_70,_193)] ml-[4px]">&#125;</span>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>


    )
}

export default SwipeToSlide