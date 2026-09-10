import React from 'react'
import PricingItem from './PricingItem'
import Flex from './Flex'
import Button from './Button'


const PricingCard = ({buttontext,year,free,plan}) => {
  return (
    <div className='w-[366px] bg-[#F3F3F3] rounded-[10px] pt-[50px] px-[30px] pb-[40px]'>
     <h4 className='text-[22px] text-fourth font-rel font-bold'>{plan}</h4>
     <h2 className='text-5xl text-fourth font-inter font-bold pt-1.5 pb-9 border-b border-[rgba(44,131,187,0.25)]'>${free} <span className='text-base text-[#6E8393] font-roboto font-semibold'>/ {year}</span></h2>
     
         <Flex className='flex-col gap-y-7 py-9'>
            <PricingItem itemtext="Access to editing all blocks"/>
            <PricingItem itemtext="Editing blocks together"/>
            <PricingItem itemtext="Access to all premium icons"/>
            <PricingItem itemtext="A dedicated domain"/>
         </Flex>
         <Button text={buttontext}/>
    </div>
  )
}

export default PricingCard