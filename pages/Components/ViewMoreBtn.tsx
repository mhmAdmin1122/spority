import Link from "next/link";
import React from "react";

const ViewMoreBtn = ({ btnText, btnUrl }: any) => {
  return (
    <div className="viewmore-btn">
      <Link href={`${btnUrl}`}>{btnText}...</Link>
    </div>
  );
};

export default ViewMoreBtn;
