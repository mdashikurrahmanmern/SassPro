import React from 'react'

const Heading = ({text,className}) => {
  return (
     <h3 className={`text-[30px] md:text-4xl text-fourth font-rel font-bold ${className}`}>{text}</h3>
  )       
}

export default Heading