import React from 'react'
import Image from '../components/Image'
import { IoIosArrowForward } from "react-icons/io";

const WorkCard = ({src,title,text}) => {
  return (
   <div className='w-[325px] md:w-[362px] bg-offwhite rounded-lg shadow-2xl'>
       <div className='w-[55px] md:w-[65px] h-[56px] md:h-[66px] mt-6 ml-5'>
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

export default WorkCard