import React, { useState } from 'react'
import DropdownMenu from './DropdownMenu'
import ImageBox from './ImageBox'
import { FaSun, FaMoon } from 'react-icons/fa'

const Navbar = () => {

  const [dark, setDark] = useState(false)
  const darkClick = () => {
    setDark(current => !current)
  }

  return (
    <nav className={dark ? `dark transition-all duration-1000` : `navbar transition-all duration-1000`}>
      <div className="logoBox w-[80px] h-[80px]">
        <ImageBox sourceImg={"/img/Logo.png"} picName="logo" />
      </div>
      <ul className='Tabs_site'>
        <li>Home</li>
        <li>About</li>
        <li className="dropdown-trigger">
          Services
          <DropdownMenu />
        </li>
        <li>Contact</li>
      </ul>
      <div className='sign_in_up_btn flex items-center gap-3'>
        <button className='dark_Light' onClick={darkClick}>{dark ? <FaSun /> : <FaMoon />}</button>
        <button className='reg_log_btn'>Register</button>
      </div>
    </nav>
  )
}

export default Navbar
