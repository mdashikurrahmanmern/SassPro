import React from 'react'

const button = ({text,className}) => {
  return (
   <button className={`py-5 px-12 bg-secondary taxt-base text-offwhite font-semibold font-rel rounded-md border border-transparent hover:bg-transparent hover:text-secondary hover:border-secondary duration-300 ${className}`}>{text}</button>
  )
}

export default button