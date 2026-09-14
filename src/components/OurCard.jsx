import React from 'react'
import Image from './Image'
import Flex from './Flex'
import { BiSolidQuoteAltRight } from 'react-icons/bi'

const OurCard = ({text,src,item}) => {
  return (
   <div className='mt-11 md:mt-0 w-[315px] bg-offwhite rounded-lg shadow-2xl relative'>
   <div className='w-[70px] h-[70px] bg-offwhite rounded-full absolute top-[-30px] right-[125px]'><BiSolidQuoteAltRight className='m-5 text-4xl text-secondary' /></div>
      <div className='px-[30px] pb-[30px] pt-12'>
     <p className='text-base text-[#495E6C] font-roboto font-normal leading-[27px] pt-5 pb-6'>{text}</p>
     <Flex>
        <div className='w-[50px] h-[50px]'><Image src={src}/></div>
            <div>
                 <h4 className='text-lg text-fourth font-rel font-semibold pl-5'>{item}</h4>
                 <h6 className='text-sm text-new font-normal font-roboto pl-5 pt-1'>CEO of Fashionon</h6>
            </div>
       </Flex>
      </div>
      
    </div>
  )
}

export default OurCard