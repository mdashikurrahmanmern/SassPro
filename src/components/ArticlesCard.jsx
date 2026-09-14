import React from 'react'
import Image from '../components/Image'
import Flex from '../components/Flex';
import { IoIosArrowForward } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";

const ArticlesCard = ({src,title,text,crs,items,date}) => {
  return (
    <div className='mt-8 md:mt-0 w-[330px] md:w-[366px] bg-offwhite raunded-full shadow-2xl'>
       <div className='w-[320px] md:w-[346px] h-[175px] md:h-[189px] mx-auto mt-2.5'>
            <Image src={src}/>
       </div>
      <div className='p-[30px]'>
         <h4 className='text-lg text-fourth font-rel font-bold'>{title}</h4>
         <Flex>
            <Flex className='items-center gap-x-3 pt-5'><div className='w-[30px] h-[30px]'><Image src={crs}/></div><h4 className='text-sm text-fourth font-roboto font-bold'>{items}</h4></Flex>
            <Flex className='items-center gap-x-3 pt-5 pl-5'> <FaRegCalendarAlt /><h4 className='text-sm text-fourth font-roboto font-normal'>{date}</h4></Flex>

         </Flex>
     <p className='text-base text-new font-roboto font-normal leading-[27px] pt-5 pb-6'>{text}</p>
     <a className='text-base text-secondary font-rel font-semibold' href="">See More <IoIosArrowForward  className='inline text-lg'/></a>
      </div>

    </div>
  )
}

export default ArticlesCard