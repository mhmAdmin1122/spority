import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const BlogCard = ({cardPic, postUrl, cardTitle, cardDescription}:any) => {
  return (
    <div className="blogCard-section-box">
      <div className="imageBox-blogCard w-full">
        <Image src={cardPic} alt="" />
      </div>
      <div className="contentBox-blogCard flex flex-col justify-center items-center gap-3">
        <Link
          href={`${postUrl}`}
          className="blogCard-title-line"
        >
          {cardTitle}
        </Link>
        <p className='text-justify'>{cardDescription.slice(0, 100)}.....</p>
        <button className='bg-[#000] text-[#fff] font-bold px-[20px] py-[8px] rounded-lg'>Read Now &rarr;</button>
      </div>
    </div>
  )
}

export default BlogCard
