import React from 'react'
import Flex from '../components/Flex'
import Image from '../components/Image'

const AboutCard = ({src,title,text}) => {
  return (
    <Flex className="items-center gap-x-5">
                    <Image src={src} alt=""/>
                    <div>
                        <h2 className='text-[30px] text-secondary font-bold font-inter pb-3'>{title}</h2>
                        <p className='text-base text-[#495E6C] font-semibold font-rel'>{text}</p>
                    </div>
                </Flex>
  )
}

export default AboutCard