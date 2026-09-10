import React from 'react'
import { FaCheck } from "react-icons/fa";
import SubHeading from './SubHeading'
import Flex from './Flex'

const PricingItem = ({itemtext,}) => {
  return (
    <Flex className='items-center gap-x-5'>
               <FaCheck className='text-secondary'/> <SubHeading className='!text-new' text={itemtext}/>
             </Flex>
  )
}

export default PricingItem