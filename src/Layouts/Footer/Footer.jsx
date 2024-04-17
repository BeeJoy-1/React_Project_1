import React from 'react'
import Logo from "../../assets/images/logo.png"
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';




const Footer = () => {
  return (
    <>
      <div className='bg-[#1C1E53] pt-[100px]'>
        <div className='w-[1280px] mx-auto'>
          <div className='flex gap-x-[120px]'>
            <div className="">
              <img className='pb-[25px]' src={Logo} alt="" />
              <p className='w-[396px] text-white pb-[85px]'>We are always open to discuss your project and improve your online presence.</p>
              <div className=' bg-[#FCD980] w-[517px] h-[95px] flex gap-x-[29px] pt-[20px] pl-[37px]'>
                <div>
                  <h2 className='text-[#282938] text-[18px] pb-[2px] font-medium'>Email me at</h2>
                  <h3>contact@website.com</h3>
                </div>
                <div>
                  <h2 className='text-[#282938] text-[18px] pb-[2px] font-medium'>Call us</h2>
                  <h3>0927 6277 28525</h3>
                </div>
              </div>
            </div>
            <div className=''>
              <h2 className='text-white text-[40px] font-medium pb-[14px]'>Lets Talk!</h2>
              <p className='w-[369px] text-[#F4F6FC] pb-[28px]'>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
              <div className='flex gap-x-[27px] items-center'>
                <a href="" className='text-white'><FaFacebook /></a>
                <a href="" className='text-white'><FaTwitter /></a>
                <a href="" className='text-white'><FaInstagram /></a>
                <a href="" className='text-white'><FaLinkedin /></a>
              </div>
            </div>
          </div>
        </div>
          <div className='py-[32px] bg-white'>
            <div className='w-[1280px] mx-auto'>
              <div className='flex items-center'>
                <div className='w-[20%] text-left'>
                  <h2 className='text-[#282938] font-medium'>Copyright 2022, Finsweet.com</h2>
                </div>
                <div className='flex item-center gap-x-[32px] w-[80%] justify-end'>
                  <Link to="/" className='text-[#282938] font-medium'>Home</Link>
                  <Link to="/About" className='text-[#282938] font-medium'>About Us</Link>
                  <Link to="/Features" className='text-[#282938] font-medium'>Features</Link>
                  <Link to="/Pricing" className='text-[#282938] font-medium'>Pricing</Link>
                  <Link to="/FAQ" className='text-[#282938] font-medium'>FAQ</Link>
                  <Link to="/Blog" className='text-[#282938] font-medium'>Blog</Link>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Footer