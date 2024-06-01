import Link from "next/link";
import React from "react";
import PlayIcon from '@/public/img/playIcon.png';
import Image from "next/image";

const WatchBtn = () => {
  return (
    <Link
      href="/Live-Channels"
      className="relative inline-flex gap-4 items-center justify-center px-4 py-2  group overflow-hidden home-btn"
    >
      <span className="transition-all duration-300 ease-in-out group-hover:mr-5">
        Watch Now
      </span>
      <span className="absolute right-4 flex items-center justify-center w-6 h-6 transform translate-x-12 transition-transform duration-300 ease-in-out group-hover:translate-x-0">
        <Image src={PlayIcon} alt="play-icon-watch-btn" />
      </span>
    </Link>
  );
};

export default WatchBtn;
