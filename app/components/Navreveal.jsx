import React from 'react'
import { robotomono } from '../fonts/font'

const Navreveal = ({ isOpen }) => {
    return (
        <nav class={` align-top flex [text-indent:0px] [clip:auto] fixed bg-none normal-case [box-shadow:none] box-border leading-[1.3em] rounded-none pointer-events-auto h-auto w-screen max-h-[-webkit-fill-available] min-h-0 text-left clear-both  text-[12px] text-[rgb(136,_136,_136)]  bg-[rgb(19,_26,_58)] visible top-0 left-0 max-w-[100vw] flex-col justify-start overscroll-contain scale-100 duration-100 [transition-property:all] z-[9999999] ${isOpen ? 'mt-[90px] pb-[30px] h-auto bg-[#131a3a]' : 'overflow-hidden opacity-0 scale-[.9] bg-white h-screen invisible'}`}>
            <ul class="box-border m-0 pt-0 px-0 pb-[18px]  align-top [list-style:none] [text-indent:0px] [clip:auto] static bg-[0px_0px] normal-case !overflow-visible [box-shadow:none] leading-[1.3em] rounded-none pointer-events-auto h-auto w-auto max-h-[none] min-h-0 [text-align:inherit] block flex-1 overscroll-contain !overflow-y-auto">
                <li d="menu-item-3389" class="m-0 p-0  align-bottom [text-indent:0px] [clip:auto] static bg-[0px_0px] normal-case overflow-visible z-10 [box-shadow:none] box-border leading-[1.3em] rounded-none pointer-events-auto h-auto w-1/2 max-h-[none] min-h-0 text-left block [backface-visibility:visible] float-none max-w-full min-w-[50%] clear-both">
                    <a href="#" tabindex="0" class={` m-0 p-[18px]  align-top [text-indent:0px] [clip:auto] relative bg-[0px_0px] normal-case overflow-hidden z-10 [box-shadow:none] box-border leading-[22px] rounded-none pointer-events-auto h-auto w-auto max-h-[none] min-h-0 cursor-pointer border-l-[none] flex no-underline pr-[25px] text-[rgb(255,_255,_255)] font-normal font-['Roboto_Mono',_sans-serif] items-center text-[16px] ${robotomono.className}`}>
                        <img src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1427-1.svg" width="41" height="21" alt="" class="ml-0 mr-[16px] my-0 p-0  align-top [text-indent:0px] [clip:auto] static bg-[0px_0px] normal-case overflow-visible z-10 [box-shadow:none] box-border leading-[1.3em] rounded-none pointer-events-auto [backface-visibility:hidden] [transform:translateZ(0px)] block max-w-full [transition:opacity_1s] opacity-100 h-auto  min-w-[44px]"></img>
                        <span data-rocket-lazy-bg-5504ba9f-e22c-419f-8bde-13a917c693e9="loaded" data-rocket-lazy-bg-39db41a7-164e-4dc9-b63a-b5106d502e26="loaded" class="m-0 p-0 border-[0px] [font:inherit] align-baseline block [font-family:inherit] [font-weight:inherit] [color:inherit] clear-none">Why Tabnine?</span>

                    </a>

                </li>
                <li id="menu-item-3431" class="m-0 p-0  align-bottom [text-indent:0px] [clip:auto] static bg-[0px_0px] normal-case overflow-visible z-10 [box-shadow:none] box-border leading-[1.3em] rounded-none pointer-events-auto h-auto w-1/2 max-h-[none] min-h-0 text-left block [backface-visibility:visible] float-none max-w-full min-w-[50%]">
                    <a href="https://www.tabnine.com/pricing/" tabindex="0" class={`m-0 p-[18px]  align-top [text-indent:0px] [clip:auto] relative bg-[0px_0px] normal-case overflow-hidden z-10 [box-shadow:none] box-border leading-[22px] rounded-none pointer-events-auto h-auto w-auto max-h-[none] min-h-0 cursor-pointer flex no-underline text-[rgb(255,_255,_255)] font-normal border-l-[none] font-['Roboto_Mono',_sans-serif] items-center text-[16px] ${robotomono.className}`}>
                        <img src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1773.svg" width="41" height="22" alt="" class="ml-0 mr-[16px] my-0 p-0  align-top [text-indent:0px] [clip:auto] static bg-[0px_0px] normal-case overflow-visible z-10 [box-shadow:none] box-border leading-[1.3em] rounded-none pointer-events-auto [backface-visibility:hidden] [transform:translateZ(0px)] block max-w-full [transition:opacity_1s] opacity-100 h-auto  min-w-[44px]"></img>
                        <span data-rocket-lazy-bg-5504ba9f-e22c-419f-8bde-13a917c693e9="loaded" data-rocket-lazy-bg-39db41a7-164e-4dc9-b63a-b5106d502e26="loaded" class="m-0 p-0 border-[0px] [font:inherit] align-baseline block [font-family:inherit] [font-weight:inherit] [color:inherit] clear-none">Plans & Pricing</span>
                    </a>
                </li>
                <li class="m-0 p-0  align-bottom [text-indent:0px] [clip:auto] static bg-[0px_0px] normal-case overflow-visible z-10 [box-shadow:none] box-border leading-[1.3em] rounded-none pointer-events-auto h-auto w-1/2 max-h-[none] min-h-0 text-left block [backface-visibility:visible] float-none max-w-full min-w-[50%] clear-both">
                    <a href="/install/" tabindex="0" class={`m-0 p-[18px]  align-top [text-indent:0px] [clip:auto] relative bg-[0px_0px] normal-case overflow-hidden z-10 [box-shadow:none] box-border leading-[22px] rounded-none pointer-events-auto h-auto w-auto max-h-[none] min-h-0 cursor-pointer flex no-underline pr-[25px] text-[rgb(255,_255,_255)] font-normal border-l-[none] font-['Roboto_Mono',_sans-serif] items-center text-[16px] ${robotomono.className}`}>
                        <img src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1776.svg" width="41" height="21" alt="" class="ml-0 mr-[16px] my-0 p-0  align-top [text-indent:0px] [clip:auto] static bg-[0px_0px] normal-case overflow-visible z-10 [box-shadow:none] box-border leading-[1.3em] rounded-none pointer-events-auto [backface-visibility:hidden] [transform:translateZ(0px)] block max-w-full [transition:opacity_1s] opacity-100 h-auto  min-w-[44px]"></img>
                        <span data-rocket-lazy-bg-5504ba9f-e22c-419f-8bde-13a917c693e9="loaded" data-rocket-lazy-bg-39db41a7-164e-4dc9-b63a-b5106d502e26="loaded" class="m-0 p-0  align-baseline block [font-family:inherit] [font-weight:inherit] [color:inherit] clear-none">Supported IDEs</span>

                    </a>

                </li>
                <li id="menu-item-3392" class="m-0 p-0  align-bottom [text-indent:0px] [clip:auto] static bg-[0px_0px] normal-case overflow-visible z-10 [box-shadow:none] box-border leading-[1.3em] rounded-none pointer-events-auto h-auto w-1/2 max-h-[none] min-h-0 text-left block [backface-visibility:visible] float-none max-w-full min-w-[50%]">
                    <a target="_blank" href="https://docs.tabnine.com/main" tabindex="0" class={`m-0 p-[18px]  align-top [text-indent:0px] [clip:auto] relative bg-[0px_0px] normal-case overflow-hidden z-10 [box-shadow:none] box-border leading-[22px] rounded-none pointer-events-auto h-auto w-auto max-h-[none] min-h-0 cursor-pointer flex no-underline text-[rgb(255,_255,_255)] font-normal border-l-[none] font-['Roboto_Mono',_sans-serif] items-center text-[16px] ${robotomono.className}`}>
                        <img src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1775.svg" width="41" height="21" alt="" class="ml-0 mr-[16px] my-0 p-0  align-top [text-indent:0px] [clip:auto] static bg-[0px_0px] normal-case overflow-visible z-10 [box-shadow:none] box-border leading-[1.3em] rounded-none pointer-events-auto [backface-visibility:hidden] [transform:translateZ(0px)] block max-w-full [transition:opacity_1s] opacity-100 h-auto  min-w-[44px]"></img>
                        <span data-rocket-lazy-bg-5504ba9f-e22c-419f-8bde-13a917c693e9="loaded" data-rocket-lazy-bg-39db41a7-164e-4dc9-b63a-b5106d502e26="loaded" class="m-0 p-0  align-baseline block [font-family:inherit] [font-weight:inherit] [color:inherit] clear-none">Docs</span>
                    </a>
                </li>
                <li id="menu-item-3393" class="m-0 p-0  align-bottom [text-indent:0px] [clip:auto] static bg-[0px_0px] normal-case overflow-visible z-10 [box-shadow:none] box-border leading-[1.3em] rounded-none pointer-events-auto h-auto w-1/2 max-h-[none] min-h-0 text-left block [backface-visibility:visible] float-none max-w-full min-w-[50%] clear-both">
                    <a href="/blog/" tabindex="0" class={`m-0 p-[18px]  align-top [text-indent:0px] [clip:auto] relative bg-[0px_0px] normal-case overflow-hidden z-10 [box-shadow:none] box-border leading-[22px] rounded-none pointer-events-auto h-auto w-auto max-h-[none] min-h-0 cursor-pointer flex no-underline pr-[25px] text-[rgb(255,_255,_255)] font-normal border-l-[none] font-['Roboto_Mono',_sans-serif] items-center text-[16px] ${robotomono.className}`}>
                        <img src="https://www.tabnine.com/wp-content/uploads/2024/04/Group-1774.svg" width="41" height="21" alt="" class="ml-0 mr-[16px] my-0 p-0  align-top [text-indent:0px] [clip:auto] static bg-[0px_0px] normal-case overflow-visible z-10 [box-shadow:none] box-border leading-[1.3em] rounded-none pointer-events-auto [backface-visibility:hidden] [transform:translateZ(0px)] block max-w-full [transition:opacity_1s] opacity-100 h-auto  min-w-[44px]"></img>
                        <span data-rocket-lazy-bg-5504ba9f-e22c-419f-8bde-13a917c693e9="loaded" data-rocket-lazy-bg-39db41a7-164e-4dc9-b63a-b5106d502e26="loaded" class="m-0 p-0 border-[0px] [font:inherit] align-baseline block [font-family:inherit] [font-weight:inherit] [color:inherit] clear-none">Blog</span>

                    </a>

                </li>
            </ul>

        </nav>
    )
}

export default Navreveal