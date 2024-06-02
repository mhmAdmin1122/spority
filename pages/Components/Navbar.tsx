import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/img/LogoReal.svg";
import { MdMenu } from "react-icons/md";
import LinkBtn from "./LinkBtn";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <nav className={`navbar fixed top-0 w-full left-0 z-[999] bg-transparent ${isSticky ? '!bg-[#0B0704]' : ''}`}>
      <Link href="/" className="navbar-logoBox">
        <Image src={logo} alt="logo-pic" className="w-full h-full" />
      </Link>
      <div className="destop-tabsview-tabs-authBtn">
        <div className="destop-tabsview-tabsBox">
          <Link href="/">Home</Link>
          <Link href="/Live-Channels">Live Channels</Link>
          <Link href="/Events">Events</Link>
          <Link href="/Blog">Blog</Link>
          <Link href="/Contact">Contact</Link>
        </div>
        <LinkBtn title="Set Reminder" url="#newslatter" />
      </div>
      <div className="mobileview-tabs2view-dropdown">
        <MdMenu />
      </div>
    </nav>
  );
};

export default Navbar;
