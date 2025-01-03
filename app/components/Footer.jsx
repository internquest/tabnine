import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col items-center  relative bg-[#030014] '>
            <div className='flex flex-col items-center justify-start w-full mb-[-7rem] z-[1] relative bg-[#030014]'>
                <div className='flex flex-col justify-start items-center w-full max-w-[1200px] z-[1] bg-[#030014] flex-grow h-[771px] px-[1px] relative'>
                    <Image src={'https://cdn.prod.website-files.com/65d1e4e18eca49b7cb4a278e/65dc6ee01e67a88b3c25882b_Vector.png'} alt='footer-image' fill className='absolute text-[14px] leading-[20px] !h-min !w-min !inset-[75%_15%_auto_auto]' />
                    <Image src={'https://cdn.prod.website-files.com/65d1e4e18eca49b7cb4a278e/65dc6ee01e67a88b3c25882b_Vector.png'} alt='footer-image' fill className='absolute text-[14px] leading-[20px] !h-min !w-min !inset-[46%_auto_auto_33%]' />
                    <a href="https://www.linkedin.com/company/pythagora-gpt-pilot" target="_blank" class="social-icon">
                        <img src="https://cdn.prod.website-files.com/65d1e4e18eca49b7cb4a278e/65dc6fb2aa63992e5700e727_basil_linkedin-solid.svg" loading="lazy" width="16" height="16" alt="" class="border-[0px] box-border align-middle max-w-full flex object-contain justify-center items-center w-[24px] h-[24px] no-underline"></img>
                        <div class="box-border bg-[linear-gradient(90deg,_rgb(229,_156,_255)_0%,_rgb(186,_156,_255)_49%,_rgb(156,_178,_255)_100%)] bg-clip-text mt-0 mb-0 font-[Inconsolata,_sans-serif] text-[14px] font-semibold leading-[20px] no-underline">LinkedIn</div>
                        <img src="https://cdn.prod.website-files.com/65d1e4e18eca49b7cb4a278e/65dc6df6c929e36853545651_Vector-color.png" loading="lazy" alt="" class="border-[0px] box-border align-middle max-w-full inline-block absolute top-[114%] left-[34%]"></img>
                    </a>
                    <a href="https://discord.com/invite/HaqXugmxr9" target="_blank" class="social-icon top-[66.5%] left-[33%]">
                        <img src="https://cdn.prod.website-files.com/65d1e4e18eca49b7cb4a278e/65d8b98fd6f2c539f2d35547_dis.svg" loading="lazy" width="16" height="16" alt="" class="border-[0px] box-border align-middle max-w-full flex object-contain justify-center items-center w-[24px] h-[24px] no-underline"></img>
                        <div class="box-border bg-[linear-gradient(90deg,_rgb(229,_156,_255)_0%,_rgb(186,_156,_255)_49%,_rgb(156,_178,_255)_100%)] bg-clip-text mt-0 mb-0 font-[Inconsolata,_sans-serif] text-[14px] font-semibold leading-[20px] no-underline">Discord</div>
                        <img src="https://cdn.prod.website-files.com/65d1e4e18eca49b7cb4a278e/65dc6df6c929e36853545651_Vector-color.png" loading="lazy" alt="" class="border-[0px] box-border align-middle max-w-full inline-block absolute top-[114%] left-[34%]"></img>
                    </a>
                    <a href="https://www.youtube.com/@pythagoraa" target="_blank" class="bg-[rgba(0,_0,_0,_0)] box-border max-w-full flex text-[rgb(161,_161,_161)] font-[Inconsolata,_monospace] font-bold no-underline gap-x-[8px] backdrop-filter backdrop-blur-[3px] bg-[linear-gradient(to_right,_rgba(229,_156,_255,_0.24),_rgba(186,_156,_255,_0.24)_50%,_rgba(156,_178,_255,_0.24))] rounded-[32px] flex-initial justify-start items-center px-[10px] py-[6px] absolute top-[79%] right-[32%] [box-shadow:rgba(164,_143,_255,_0.12)_0px_-7px_11px_inset]">
                        <img src="https://cdn.prod.website-files.com/65d1e4e18eca49b7cb4a278e/65d8b9aed4119c890924ce57_you.svg" loading="lazy" width="16" height="16" alt="" class="border-[0px] box-border align-middle max-w-full flex object-contain justify-center items-center w-[24px] h-[24px] no-underline"></img>
                        <div class="box-border bg-[linear-gradient(90deg,_rgb(229,_156,_255)_0%,_rgb(186,_156,_255)_49%,_rgb(156,_178,_255)_100%)] bg-clip-text mt-0 mb-0 font-[Inconsolata,_sans-serif] text-[14px] font-semibold leading-[20px] no-underline">Youtube</div>
                        <img src="https://cdn.prod.website-files.com/65d1e4e18eca49b7cb4a278e/65dc6df6c929e36853545651_Vector-color.png" loading="lazy" alt="" class="border-[0px] box-border align-middle max-w-full inline-block absolute top-[114%] left-[34%]"></img>
                    </a>
                    <a href="https://github.com/Pythagora-io/gpt-pilot" target="_blank" class="bg-[rgba(0,_0,_0,_0)] box-border max-w-full flex text-[rgb(161,_161,_161)] font-[Inconsolata,_monospace] font-bold no-underline gap-x-[8px] backdrop-filter backdrop-blur-[3px] bg-[linear-gradient(to_right,_rgba(229,_156,_255,_0.24),_rgba(186,_156,_255,_0.24)_50%,_rgba(156,_178,_255,_0.24))] rounded-[32px] flex-initial justify-start items-center px-[10px] py-[6px] absolute top-[53.8%] right-[35.5%] [box-shadow:rgba(164,_143,_255,_0.12)_0px_-7px_11px_inset]">
                        <img src="https://cdn.prod.website-files.com/65d1e4e18eca49b7cb4a278e/65d8b86998e3b697a3f3b067_Vectors-Wrapper.svg" loading="lazy" width="16" height="16" alt="" class="border-[0px] box-border align-middle max-w-full flex object-contain justify-center items-center w-[24px] h-[24px] no-underline"></img>
                        <div class="box-border bg-[linear-gradient(90deg,_rgb(229,_156,_255)_0%,_rgb(186,_156,_255)_49%,_rgb(156,_178,_255)_100%)] bg-clip-text mt-0 mb-0 font-[Inconsolata,_sans-serif] text-[14px] font-semibold leading-[20px] no-underline">Github</div>
                        <img src="https://cdn.prod.website-files.com/65d1e4e18eca49b7cb4a278e/65dc6df6c929e36853545651_Vector-color.png" loading="lazy" alt="" class="border-[0px] box-border align-middle max-w-full inline-block absolute top-[114%] left-[34%]"></img>
                    </a>
                    <img src="https://cdn.prod.website-files.com/65d1e4e18eca49b7cb4a278e/65dc6da1111699f4094654c1_CTA.png" loading="lazy" width="1120" height="771" alt="" srcset="https://cdn.prod.website-files.com/65d1e4e18eca49b7cb4a278e/65dc6da1111699f4094654c1_CTA-p-500.png 500w, https://cdn.prod.website-files.com/65d1e4e18eca49b7cb4a278e/65dc6da1111699f4094654c1_CTA-p-800.png 800w, https://cdn.prod.website-files.com/65d1e4e18eca49b7cb4a278e/65dc6da1111699f4094654c1_CTA-p-1080.png 1080w, https://cdn.prod.website-files.com/65d1e4e18eca49b7cb4a278e/65dc6da1111699f4094654c1_CTA.png 1120w" sizes="(max-width: 1120px) 100vw, 1120px" class="z-[-1] object-cover  mx-auto  absolute top-0 "></img>
                    <div className=' gap-y-[24px] flex-col justify-start items-center no-underline flex'>
                        <div class="box-border gap-y-[20px] flex-col justify-start items-center no-underline flex">
                            <div class="box-border text-[rgb(255,_255,_255)] text-center tracking-[-0.03em] mt-0 mb-0 font-[Inconsolata,_monospace] text-[50px] font-bold leading-[100%] no-underline">Start with Pythagora today!</div>
                            <div class="box-border text-[rgb(161,_161,_161)] text-center mt-0 mb-0 font-['IBM_Plex_Sans',_sans-serif] text-[16px] font-normal leading-[150%]">Embrace the future of coding </div>
                        </div>
                        <a data-tally-auto-close="2000" data-tally-open="wQJKpY" data-tally-layout="modal" data-tally-width="600" data-tally-emoji-text="🎉" data-tally-emoji-animation="tada" href="#tally-open=wQJKpY&tally-layout=modal&tally-width=600&tally-emoji-text=🎉&tally-emoji-animation=tada&tally-auto-close=2000" class="bg-[rgba(0,_0,_0,_0)] box-border max-w-full inline-flex text-[rgb(161,_161,_161)] font-[Inconsolata,_monospace] font-bold no-underline gap-[16px] [flex-flow:row] grid-rows-[auto_auto] grid-cols-[1fr_1fr] auto-cols-[1fr] justify-center items-center">
                            <div class="box-border gap-y-[10px] cursor-pointer bg-[linear-gradient(90deg,_rgb(201,_62,_255),_rgb(64,_100,_255))] rounded-[100px] flex-col justify-center items-center h-[56px] px-[66px] py-[32px] flex [box-shadow:rgba(188,_156,_255,_0.3)_0px_14px_34px]">
                                <div class="box-border gap-x-[8px] flex-initial justify-start items-center no-underline flex">
                                    <img src="https://cdn.prod.website-files.com/65d1e4e18eca49b7cb4a278e/65d8b2cdbe9c0df79aefb55c_logo-py-white.svg" loading="lazy" width="17" height="16" alt="" class="border-[0px] box-border align-middle max-w-full flex object-cover justify-center items-center w-[17px] h-[16px] no-underline"></img>
                                    <div class="box-border text-[rgb(255,_255,_255)] tracking-[-0.02em] whitespace-pre mt-0 mb-0 font-[Inconsolata,_monospace] text-[16px] font-bold leading-[14px] no-underline">Sign up for Pythagora v1 access</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Footer