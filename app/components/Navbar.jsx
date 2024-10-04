'use client'
import React, { useState, useEffect } from 'react'
import { robotomono } from '../fonts/font';

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // 
    // console.log(scrollPosition);
    return (
        <header className={`${scrollPosition > 10 ? 'fixed pt-[19px] pb-[11px] w-full bg-white opacity-100 z-[99] top-0' : 'pt-[39px] relative z-[99]'} ${robotomono.className}`}>
            <div className='src-line box-content '></div>
            <div className='wrapper box-content'>
                <div className='flex justify-between items-center'>
                    <div className='mr-[15px] relative'>
                        <div className=' line-number absolute  left-0 w-[5px] h-[54px] z-[99] before:top-[19px] before:content-["1"] before:absolute before:left-[-20px] before:text-[14px] before:font-normal before:leading-[15px] before:text-[#7584a6]  '></div>
                        <a href="https://www.tabnine.com">
                            <svg xmlns="http://www.w3.org/2000/svg" width="180" height="54" fill="none">
                                <link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-custom-link"></link>
                                <link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-general-link"></link>
                                <style xmlns="" lang="en" type="text/css" id="dark-mode-custom-style"></style>
                                <style xmlns="" lang="en" type="text/css" id="dark-mode-native-style"></style>
                                <style xmlns="" lang="en" type="text/css" id="dark-mode-native-sheet"></style>
                                <script xmlns=""></script>
                                <g clip-path="url(#clip0_673_15046)">
                                    <path className="logo__mainBlock" d="M0 0h163.446C172.586 0 180 7.382 180 16.483v21.034C180 46.618 172.586 54 163.446 54H0V0z" fill="#131A3A"></path>
                                    <path className="logo__icon" d="M42.226 27.973l-15.823 8.862m15.823-8.862l-15.87-8.827m15.87 8.827v-5.9l-10.544-5.901-5.327 2.986m15.871 8.815v5.9l-10.544 5.9-5.279-2.95m0 .012l-.06-17.689-5.218 2.926v11.813l5.278 2.95z" stroke="#FF2210" stroke-width="1.551" stroke-linejoin="round"></path>
                                    <path className="logo__text" d="M60.16 36.67c3.167 0 5.35-1.768 5.35-5.34v-.298H63.7v.299c0 2.496-1.428 3.643-3.54 3.643-2.11 0-3.526-1.183-3.526-3.655v-6.88l8.11.012v-1.673l-8.098-.012v-4.801h-1.86l-.023 13.354c0 3.559 2.183 5.35 5.386 5.363l.012-.012zm14.238.037c2.676 0 4.955-1.278 5.939-3.691v3.344h1.715v-6.688c.024-4.276-2.999-7.215-7.342-7.227-4.342-.012-7.413 2.974-7.413 7.203 0 4.228 3.239 7.059 7.114 7.059h-.013zm.276-1.708c-3.287 0-5.506-2.317-5.494-5.447.012-3.13 2.243-5.422 5.518-5.422s5.507 2.317 5.495 5.446C80.18 32.706 77.949 35 74.674 35zm17.456 1.743c4.367 0 7.438-2.998 7.45-7.167.012-4.168-3.071-7.083-7.114-7.095-2.615 0-4.762 1.195-5.794 3.25l.024-8.828h-1.86l-.023 12.613c0 4.36 3.07 7.215 7.33 7.227h-.013zm.036-1.696c-3.31 0-5.506-2.318-5.494-5.447.012-3.13 2.207-5.423 5.518-5.423 3.31 0 5.506 2.318 5.494 5.447-.012 3.13-2.243 5.423-5.518 5.423zm9.584 1.361h1.859l.012-7.071c0-3.345 1.956-5.124 4.943-5.112 2.987.012 4.918 1.791 4.918 5.136v7.07h1.847v-7.07c.024-4.503-2.699-6.832-6.753-6.844-4.055-.012-6.79 2.317-6.802 6.808v7.07l-.024.013zm17.779-16.151c.804 0 1.416-.597 1.428-1.398.012-.8-.612-1.397-1.416-1.397-.804 0-1.416.597-1.428 1.397-.012.8.612 1.398 1.416 1.398zm-.948 16.184h1.86l.024-13.544h-1.86l-.024 13.544zm5.099.014h1.859l.012-7.071c0-3.345 1.955-5.124 4.93-5.112 2.975.011 4.919 1.791 4.919 5.136v7.07h1.847v-7.07c.024-4.503-2.699-6.832-6.766-6.845-4.066-.011-6.789 2.318-6.801 6.809v7.083zm23.139.405c3.203 0 5.71-1.637 6.766-4.12h-2.027c-.9 1.552-2.568 2.424-4.739 2.424-3.083 0-5.23-2.019-5.47-4.838l12.824.024v-.597c0-4.109-2.987-7.13-7.33-7.143-4.342-.012-7.413 2.998-7.413 7.12 0 4.12 3.047 7.13 7.389 7.142v-.012zm-5.398-8.194c.42-2.663 2.567-4.383 5.434-4.371 2.867.011 4.955 1.66 5.386 4.395l-10.82-.024z" fill="#fff"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_673_15046">
                                        <path fill="#fff" d="M0 0h180v54H0z"></path>
                                    </clipPath>
                                </defs>
                                <script xmlns=""></script>
                            </svg>
                        </a>
                    </div>
                    <div className=" min-w-[680px]">
                        <button tabindex="0" aria-label="Toggle Main Menu" className="m-0 px-[20px] py-[15px] [text-indent:0px] [clip:auto] static bg-transparent normal-case overflow-visible z-10 [box-shadow:none] box-border align-top leading-[1.3em] border-[none] rounded-none pointer-events-auto h-auto w-full max-h-[none] min-h-0 hidden no-underline cursor-pointer max-w-full text-left text-[12px] text-[rgb(51,_51,_51)] font-normal">
                            <span data-rocket-lazy-bg-94cbe1f5-c25b-4295-8b8c-37765d7299a3="loaded" data-rocket-lazy-bg-c1248af7-1976-420c-b732-76f7d8096514="loaded" className="m-0 p-0 border-[0px] align-baseline w-[1.3em] text-center mr-[0.6em] antialiased inline-block not-italic [font-variant:normal] leading-none font-['Font_Awesome_5_Free'] font-black"></span>Menu
                        </button>
                        <nav className=" align-top !block  relative  leading-[1.3em] rounded-none pointer-events-auto h-auto w-auto max-h-[none] min-h-0 text-left clear-both  text-[12px] text-[rgb(136,_136,_136)]">
                            <ul className=" align-top [list-style:none]  bg-[0px_0px] normal-case !overflow-visible [box-shadow:none]  leading-[1.3em] rounded-none pointer-events-auto h-auto w-auto max-h-[none] min-h-0 [text-align:inherit] block">
                                <li className="group align-bottom   normal-case overflow-visible z-10 leading-[1.3em] rounded-none pointer-events-auto h-auto w-auto  text-left inline-block [backface-visibility:visible] float-none max-w-full">
                                    <a href="#" tabindex="0" className="m-0 px-[20px] py-[15px] border-[none] align-top border-t-[1px_solid_transparent] group-hover:border-[#1f46c1] border-r-[1px_solid_transparent] border-l-[1px_solid_transparent] [text-indent:0px] [clip:auto] relative bg-[0px_0px] normal-case overflow-hidden z-10 [box-shadow:none] box-border leading-[1.3em] rounded-none pointer-events-auto h-auto w-auto max-h-[none] min-h-0 cursor-pointer outline-[0px] block no-underline pr-[25px] text-[rgb(51,_51,_51)] font-normal">
                                        <img src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1427-1.svg" width="41" height="21" alt="" className=" align-top hidden [text-indent:0px] [clip:auto] static bg-[0px_0px] normal-case overflow-visible z-10 [box-shadow:none] box-border leading-[1.3em] rounded-none pointer-events-auto [backface-visibility:hidden] [transform:translateZ(0px)] max-w-full [transition:opacity_1s] opacity-100 h-auto mb-[10px]"></img>
                                        <span className="m-0 p-0 border-[0px] align-baseline text-[14px] leading-[18px] [font-family:inherit] [font-weight:inherit] [color:inherit] block clear-none">Why Tabnine?</span>


                                    </a>

                                </li>
                                <li id="menu-item-3431" className="group align-bottom [text-indent:0px] [clip:auto] static bg-[0px_0px] normal-case overflow-visible z-10 [box-shadow:none] box-border leading-[1.3em] rounded-none pointer-events-auto h-auto w-auto max-h-[none] min-h-0 text-left inline-block [backface-visibility:visible] float-none max-w-full">
                                    <a href="https://www.tabnine.com/pricing/" tabindex="0" className="m-0 px-[20px] py-[15px] border-[none] align-top [text-indent:0px] [clip:auto] relative bg-[0px_0px] normal-case overflow-hidden z-10 [box-shadow:none] box-border leading-[1.3em] group-hover: rounded-none pointer-events-auto h-auto w-auto max-h-[none] min-h-0 cursor-pointer outline-[0px] block no-underline text-[rgb(51,_51,_51)] font-normal border-l-[none]">
                                        <img src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1773.svg" width="41" height="22" alt="" className=" align-top hidden [text-indent:0px] [clip:auto] static bg-[0px_0px] normal-case overflow-visible z-10 [box-shadow:none] box-border leading-[1.3em] rounded-none pointer-events-auto [backface-visibility:hidden] [transform:translateZ(0px)] max-w-full [transition:opacity_1s] opacity-100 h-auto mb-[10px]"></img>
                                        <span data-rocket-lazy-bg-94cbe1f5-c25b-4295-8b8c-37765d7299a3="loaded" data-rocket-lazy-bg-c1248af7-1976-420c-b732-76f7d8096514="loaded" className="m-0 p-0 border-[0px] align-baseline text-[14px] leading-[18px] [font-family:inherit] [font-weight:inherit] [color:inherit] block clear-none">Plans & Pricing</span>
                                    </a>
                                </li>
                                <li id="menu-item-3391" className="group align-bottom [text-indent:0px] [clip:auto] static bg-[0px_0px] normal-case overflow-visible z-10 [box-shadow:none] box-border leading-[1.3em] rounded-none pointer-events-auto h-auto w-auto max-h-[none] min-h-0 text-left inline-block [backface-visibility:visible] float-none max-w-full">
                                    <a href="/install/" tabindex="0" className="m-0 px-[20px] py-[15px] border-[none] align-top border-t-[1px_solid_transparent] group-hover:border-[#1f46c1] border-r-[1px_solid_transparent] border-l-[1px_solid_transparent] [text-indent:0px] [clip:auto] relative bg-[0px_0px] normal-case overflow-hidden z-10 [box-shadow:none] box-border leading-[1.3em] rounded-none pointer-events-auto h-auto w-auto max-h-[none] min-h-0 cursor-pointer outline-[0px] block no-underline pr-[25px] text-[rgb(51,_51,_51)] font-normal">
                                        <img src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1776.svg" width="41" height="21" alt="" className=" align-top hidden [text-indent:0px] [clip:auto] static bg-[0px_0px] normal-case overflow-visible z-10 [box-shadow:none] box-border leading-[1.3em] rounded-none pointer-events-auto [backface-visibility:hidden] [transform:translateZ(0px)] max-w-full [transition:opacity_1s] opacity-100 h-auto mb-[10px]"></img>
                                        <span className="m-0 p-0 border-[0px] align-baseline text-[14px] leading-[18px] [font-family:inherit] [font-weight:inherit] [color:inherit] block clear-none">Supported IDEs</span>

                                    </a>

                                </li>
                                <li id="menu-item-3392" className=" align-bottom [text-indent:0px] [clip:auto] static bg-[0px_0px] normal-case overflow-visible z-10 [box-shadow:none] box-border leading-[1.3em] rounded-none pointer-events-auto h-auto w-auto max-h-[none] min-h-0 text-left inline-block [backface-visibility:visible] float-none max-w-full">
                                    <a target="_blank" href="https://docs.tabnine.com/main" tabindex="0" className="m-0 px-[20px] py-[15px] border-[none] align-top [text-indent:0px] [clip:auto] relative bg-[0px_0px] normal-case overflow-hidden z-10 [box-shadow:none] box-border leading-[1.3em] rounded-none pointer-events-auto h-auto w-auto max-h-[none] min-h-0 cursor-pointer outline-[0px] block no-underline text-[rgb(51,_51,_51)] font-normal border-l-[none]">
                                        <img src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1775.svg" width="41" height="21" alt="" className=" align-top hidden [text-indent:0px] [clip:auto] static bg-[0px_0px] normal-case overflow-visible z-10 [box-shadow:none] box-border leading-[1.3em] rounded-none pointer-events-auto [backface-visibility:hidden] [transform:translateZ(0px)] max-w-full [transition:opacity_1s] opacity-100 h-auto mb-[10px]"></img>
                                        <span data-rocket-lazy-bg-94cbe1f5-c25b-4295-8b8c-37765d7299a3="loaded" data-rocket-lazy-bg-c1248af7-1976-420c-b732-76f7d8096514="loaded" className="m-0 p-0 border-[0px] align-baseline text-[14px] leading-[18px] [font-family:inherit] [font-weight:inherit] [color:inherit] block clear-none">Docs</span>
                                    </a>
                                </li>
                                <li id="menu-item-3393" className=" align-bottom [text-indent:0px] [clip:auto] static bg-[0px_0px] normal-case overflow-visible z-10 [box-shadow:none] box-border leading-[1.3em] rounded-none pointer-events-auto h-auto w-auto max-h-[none] min-h-0 text-left inline-block [backface-visibility:visible] float-none max-w-full">
                                    <a href="/blog/" tabindex="0" className="m-0 px-[20px] py-[15px] border-[none] align-top border-t-[1px_solid_transparent] border-r-[1px_solid_transparent] border-l-[none] [text-indent:0px] [clip:auto] relative bg-[0px_0px] normal-case overflow-hidden z-10 [box-shadow:none] box-border leading-[1.3em] rounded-none pointer-events-auto h-auto w-auto max-h-[none] min-h-0 cursor-pointer outline-[0px] block no-underline pr-[25px] text-[rgb(51,_51,_51)] font-normal">
                                        <img src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1774.svg" width="41" height="21" alt="" className=" align-top hidden [text-indent:0px] [clip:auto] static bg-[0px_0px] normal-case overflow-visible z-10 [box-shadow:none] box-border leading-[1.3em] rounded-none pointer-events-auto [backface-visibility:hidden] [transform:translateZ(0px)] max-w-full [transition:opacity_1s] opacity-100 h-auto mb-[10px]"></img>
                                        <span data-rocket-lazy-bg-94cbe1f5-c25b-4295-8b8c-37765d7299a3="loaded" data-rocket-lazy-bg-c1248af7-1976-420c-b732-76f7d8096514="loaded" className="m-0 p-0 border-[0px] align-baseline text-[14px] leading-[18px] [font-family:inherit] [font-weight:inherit] [color:inherit] block clear-none">Blog</span>

                                    </a>

                                </li>
                            </ul>
                            <div aria-hidden="true" className="m-0 p-0 border-[0px] align-baseline hidden">
                                <button data-faitracker-form-bind="true">
                                    <i className="m-0 p-0 border-[0px] align-baseline antialiased inline-block not-italic [font-variant:normal] leading-none font-['Font_Awesome_5_Free'] font-black"></i> Close
                                </button>
                            </div>
                        </nav>
                    </div>
                    <div className="m-0 p-0 border-[0px] align-baseline">
                        <a href="https://app.tabnine.com/signin" target="_blank" className={`m-0 px-[22px] py-[10px] border-[2px] border-[solid] border-[rgb(255,34,16)] align-baseline  text-[11px] font-bold leading-[17px] text-center no-underline rounded-[15px] inline-block text-[rgb(19,_26,_58)] min-w-[auto] relative bg-[rgb(255,_255,_255)] mr-[10px] before:absolute before:right-0  before:bottom-[0px]  before:content-[''] before:h-full before:w-full  before:rounded-[12px] before:transition-all before:duration-[.6s] before:ease-linear hover:before:[border:2px_solid_#df1a0a] before:[border:2px_solid_transparent]  ${robotomono.className}`}>Log in</a>
                        <a href="/pricing/" className={`m-0 px-[22px] hover:bg-[#df1a0a] py-[10px] border-[none] align-baseline  text-[11px] font-bold leading-[17px] text-center no-underline rounded-[15px] inline-block text-[rgb(255,_255,_255)] min-w-[auto] bg-[rgb(255,_34,_16)] relative pt-[12px] pb-[12px] mr-0 ${robotomono.className}`}>Get started for free</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar