import React from 'react'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='bg-[#1C1E53] py-[16px]'> 
      {/* absolute top-[0] left-[0] w-full */}
        <div className='w-[1280px] mx-auto'>
          <div className='flex justify-between items-center'>
            <div className='w-[20%]'>
              <img src={Logo} alt="" />
            </div>
            <div className='flex item-center gap-x-[32px] w-[60%] justify-end'>
              <Link to="/" className='text-[#BBBBCB] font-medium' href="">Home</Link>
              <Link to="/About" className='text-[#BBBBCB] font-medium' href="">About Us</Link>
              <Link to="/Features" className='text-[#BBBBCB] font-medium' href="">Features</Link>
              <Link to="/Pricing" className='text-[#BBBBCB] font-medium' href="">Pricing</Link>
              <Link to="/FAQ" className='text-[#BBBBCB] font-medium' href="">FAQ</Link>
              <Link to="/Blog" className='text-[#BBBBCB] font-medium' href="">Blog</Link>
            </div>
            <div className='w-[20%] flex items-center justify-end'>
              <button className='py-[16px] px-[48px] border-[1px] rounded-[41px] text-white font-medium'>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar