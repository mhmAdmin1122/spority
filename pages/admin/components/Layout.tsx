import React, { useState, useEffect } from "react";
import ill1 from "@/public/img/Vectortopillustrate.svg";
import ill2 from "@/public/img/Vectorbottomill.svg";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { GrChannel } from "react-icons/gr";
import { BsPostcard } from "react-icons/bs";
import {
  MdManageSearch,
  MdOutlineEmojiEvents,
  MdOutlineHome,
} from "react-icons/md";
import { TbDeviceDesktopAnalytics, TbLogout2 } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import Login from "../components/Login";

const Layout = ({ children }: any) => {
  const [dropdown, setDropdown] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    if (auth === "true") {
      setIsAuthenticated(true);
      setAvatar(localStorage.getItem("avatar") || "");
      setUsername(localStorage.getItem("username") || "");
    }

    const handleBeforeUnload = () => {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("avatar");
      localStorage.removeItem("username");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setAvatar(localStorage.getItem("avatar") || "");
    setUsername(localStorage.getItem("username") || "");
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("avatar");
    localStorage.removeItem("username");
    setIsAuthenticated(false);
  };

  const opendropDown = () => {
    setDropdown((current) => !current);
  };

  return (
    <>
      {isAuthenticated ? (
        <div>
          <div className="bg-gray-900 text-[#fff] h-screen overflow-hidden relative">
            <div className="absolute z-40 w-full flex h-full justify-center items-center">
              <div className="w-[95%] h-[94vh] rounded-lg p-6">
                <div className="flex gap-8 items-start justify-start h-full">
                  <div className="side-bar-admin justify-between flex flex-col">
                    <div className="flex flex-col">
                      <Link href="/admin">Spority Live</Link>
                      
                      <div className="pt-8 flex flex-col gap-2">
                        <Link href="/admin" className="flex items-center gap-2">
                          <MdOutlineHome className="text-xl" />
                          <h2 className="hover:underline">Overview</h2>
                        </Link>
                        <div className="admin-Content-Management-dropdown">
                          <div
                            className="flex items-center gap-2"
                            onClick={opendropDown}
                          >
                            <MdManageSearch className="text-xl" />
                            <h3 className="cursor-pointer">
                              Content Management
                            </h3>
                            {dropdown ? (
                              <FaAngleDown className="cursor-pointer" />
                            ) : (
                              <FaAngleRight className="cursor-pointer" />
                            )}
                          </div>
                          {dropdown && (
                            <div className="admin-drop-down-tabs flex flex-col gap-2 pt-2 pl-4">
                              <Link
                                href="/admin/channels"
                                className="flex items-center gap-2"
                              >
                                <GrChannel className="text-base" />
                                <h2 className="hover:underline">Channels</h2>
                              </Link>
                              <Link
                                href="/admin/post"
                                className="flex items-center gap-2"
                              >
                                <BsPostcard className="text-base" />
                                <h2 className="hover:underline">Post</h2>
                              </Link>
                            </div>
                          )}
                        </div>
                        <Link
                          href="/admin/events"
                          className="flex items-center gap-2"
                        >
                          <MdOutlineEmojiEvents className="text-xl" />
                          <h2 className="hover:underline">Events</h2>
                        </Link>
                        <Link
                          href="/admin/analytics"
                          className="flex items-center gap-2"
                        >
                          <TbDeviceDesktopAnalytics className="text-xl" />
                          <h2 className="hover:underline">Analytics</h2>
                        </Link>
                      </div>

                      <div className="flex items-center gap-4 pt-8">
                        {avatar && (
                          <img
                            src={avatar}
                            alt={`${username}`}
                            title={`${username}`}
                            className="w-12 h-12 rounded-full"
                          />
                        )}
                        <span className="select-none">{username}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 justify-between">
                      <Link
                        href="/admin/setting"
                        className="flex items-center gap-2"
                      >
                        <IoSettingsOutline className="text-xl" />
                        <h2 className="hover:underline">Setting</h2>
                      </Link>
                      <button
                        onClick={handleLogout}
                        title="Logout"
                        className="hover:opacity-100 transition-all duration-500 ease-in-out text-white px-4 py-2 text-xl"
                      >
                        <TbLogout2 />
                      </button>
                    </div>
                  </div>
                  <div className="admin-child-body-box">{children}</div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 z-10">
              <Image src={ill1} alt="top-left-ill" className="w-full h-full" />
            </div>
            <div className="w-[1540px] absolute z-10 flex items-start justify-end top-28 -left-2">
              <Image src={ill2} alt="bottom-ill" className="w-full h-full" />
            </div>
          </div>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
};

export default Layout;
