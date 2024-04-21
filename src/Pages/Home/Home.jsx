import React from 'react'
import img from "../../assets/images/Illustration.png"
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


const Home = () => {
  return (
    <>
      <div className=' pt-[218px] pb-[128px] bg-[#1C1E53]'>
        <div className='w-[1280px] mx-auto'>
          <div className='flex gap-x-[50px]'>
            <div>
              <h1 className=' w-[582px] text-white text-[55px] font-bold pb-[24px]'>Building stellar websites for early startups</h1>
              <p className='text-white opacity-70 w-[506px] pb-[48px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              <div className='flex justify-start gap-x-[8px] items-center'>
                <button className=' font-semibold text-[19px] py-[18px] px-[56px] bg-[#FCD980] rounded-[40px]'>View our work</button>
                <button className='text-white py-[18px] px-[56px] rounded-[40px] transition-all hover:bg-[#FCD980] hover:text-[#000] font-medium flex items-center gap-x-[8px]'>View Pricing <HiOutlineArrowNarrowRight /></button>
              </div>
            </div>
            <div className='w-[638px] h-full'>
              <img className=' object-cover w-full h-full' src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home