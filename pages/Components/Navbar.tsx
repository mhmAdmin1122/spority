import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import logo from "@/public/img/LogoReal.svg";
import AuthBtn from "./AuthBtn";
import { MdMenu } from "react-icons/md";
import LinkBtn from "./LinkBtn";

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
          <Link href="/Blog">Blog</Link>
          <Link href="/Contact">Contact</Link>
        </div>
        <LinkBtn title="Set Reminder" url="/" />
      </div>
      <div className="mobileview-tabs2view-dropdown">
        <MdMenu />
      </div>
    </nav>
  );
};

export default Navbar;
