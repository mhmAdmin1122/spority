import React, { useState } from 'react'
import DropdownMenu from './DropdownMenu'
import ImageBox from './ImageBox'
import { FaSun, FaMoon } from 'react-icons/fa'
import { BiSolidFoodMenu } from 'react-icons/bi'
import Link from 'next/link'

const Navbar = () => {

  const [dark, setDark] = useState(false)
  const [mobMenu, setMobMenu] = useState(false)

  const darkClick = () => {
    setDark(current => !current)
  }
  const mobMenuClick = () => {
    setMobMenu(current => !current)
  }

  return (
    <nav className={dark ? `dark transition-all duration-1000` : `navbar transition-all duration-1000`}>
      <div className="logoBox w-[50px] h-[50px]">
        <Link href={"/"}><ImageBox sourceImg={"/img/Logo.png"} picName="logo" /></Link>
      </div>
      <ul className='Tabs_site desktop-menu-part'>
        <li>Home</li>
        <li>About</li>
        <li className="dropdown-trigger">
          Services
          <DropdownMenu />
        </li>
        <li>Contact</li>
      </ul>
      <div className='sign_in_up_btn flex items-center gap-3 tab-lab-menu-part'>
        <button className='dark_Light' onClick={darkClick}>{dark ? <FaSun /> : <FaMoon />}</button>
        <button className='reg_log_btn'>Register</button>
      </div>
      <div className='mobile-menu-part dropdown-trigger grid relative'>
        <BiSolidFoodMenu onClick={mobMenuClick} />
        {mobMenu && <div className='absolute bg-gray-200 grid px-4 py-2 border-2 border-gray-300 right-[8px] top-[48px] text-[20px] font-bold rounded-md text-[#000]'>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Services</Link>
          <Link href={"/"}>Contact</Link>
        </div>}
      </div>
    </nav>
  )
}

export default Navbar
