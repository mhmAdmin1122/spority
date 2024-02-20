import Link from "next/link";
import React from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const PricingCard = ({
  title,
  cardPrice,
  pricedesc,
  cardDescription,
  btnlink,
  featuredMap,
}: any) => {
  return (
    <div className="shadow-md shadow-gray-300 border-2 border-gray-200 px-[40px] py-[20px] w-[360px] rounded-lg">
      <div className="flex flex-col justify-center items-center pb-[20px]">
        <h2 className="text-[30px] font-medium">{title}</h2>
        <h4>
          <b>$ </b><b className="text-[36px]">{cardPrice}</b>
        </h4>
        <p className="font-medium">{pricedesc}</p>
      </div>

      <div className="font-medium text-center py-[20px] border-y-2 border-gray-300">
        <p>{cardDescription}</p>
      </div>

      <ul className="py-[20px]">
        <div className="flex items-center justify-start gap-3">
          <IoCheckmarkDoneSharp className="text-[#103010]" /> <li>Lorem ipsum dolor sit amet.</li>
        </div>
        <div className="flex items-center justify-start gap-3">
          <IoCheckmarkDoneSharp className="text-[#103010]" /> <li>Lorem ipsum dolor sit amet.</li>
        </div>
        <div className="flex items-center justify-start gap-3">
          <IoCheckmarkDoneSharp className="text-[#103010]" /> <li>Lorem ipsum dolor sit amet.</li>
        </div>
        <div className="flex items-center justify-start gap-3">
          <IoCheckmarkDoneSharp className="text-[#103010]" /> <li>Lorem ipsum dolor sit amet.</li>
        </div>
        <div className="flex items-center justify-start gap-3">
          <IoCheckmarkDoneSharp className="text-[#103010]" /> <li>Lorem ipsum dolor sit amet.</li>
        </div>
      </ul>

      <div className="bg-[#ff4500] text-[#000] text-center py-[10px] rounded-md font-medium px-[40px]">
        <Link href="/Live-Channels">Buy Now</Link>
      </div>
    </div>
  );
};

export default PricingCard;
