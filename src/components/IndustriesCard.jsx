import React from 'react'
import Image from '../components/Image'
import { IoIosArrowForward } from "react-icons/io";

export const IndustriesCard = ({src,title,text}) => {
  return (
    <div className='w-[330px] md:w-[366px] bg-offwhite raunded-lg shadow-2xl'>
       <div className='w-[320px] md:w-[346px] h-[200px] md:h-[220px] mx-auto mt-2.5'>
            <Image src={src}/>
       </div>
      <div className='p-[30px]'>
         <h4 className='text-[22px] text-fourth font-rel font-bold'>{title}</h4>
     <p className='text-base text-[#495E6C] font-roboto font-normal leading-[27px] pt-5 pb-6'>{text}</p>
     <a className='text-base text-secondary font-rel font-semibold' href="">See More <IoIosArrowForward  className='inline text-lg'/></a>
      </div>

    </div>
  )
}
export default IndustriesCard