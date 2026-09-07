import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

const listitem = ({text,type,design}) => {
  return (
     <li className={`text-base text-primary font-medium font-inter cursor-pointer ${design}`}>{text} 
        {
            type && <FaAngleDown className='inline ml-1'/>
        }
     </li>
  )
}

export default listitem