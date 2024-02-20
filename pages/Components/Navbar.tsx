import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import logo from "@/public/img/logo2.png";
import AuthBtn from "./AuthBtn";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logoBox">
        <Image src={logo} alt="logo-pic" className="w-full h-full" />
      </Link>
      <div className="destop-tabsview-tabs-authBtn">
        <div className="destop-tabsview-tabsBox">
          <Link href="/">Home</Link>
          <Link href="/Live-Channels">Live Channels</Link>
          <Link href="/Events">Events</Link>
          <Link href="/">About</Link>
        </div>
        <AuthBtn />
      </div>
      <div className="mobileview-tabs2view-dropdown">
        <MdMenu />
      </div>
    </nav>
  );
};

export default Navbar;
