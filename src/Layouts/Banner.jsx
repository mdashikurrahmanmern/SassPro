import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'
import Image from '../components/Image'
import Nine from '../assets/banner1.png'
import Button from '../components/Button'

const Banner = () => {
  return (
    <section className='bg-third pt-4 md:pt-40 pb-11 md:pb-[200px] relative'>
        <Container>
          <Flex className='!block md:!flex pr-[830px] md:pr-0 text-center md:text-start px-3 md:px-0'>
            <div className='md:w-1/2'>
            <h5 className='text-lg text-offwhite font-bold font-rel'>Business & Technologies</h5>
            <h2 className='leading-[53px] md:leading-[61px] pt-3 pb-11 text-[48px] md:text-[52px] text-offwhite font-bold font-rel'>We help tech companies deliver great software</h2> 
            <SubHeading className='md:w-[536px]' text="Since 1999. For millions of users. We transform businesses with powerful and "/>
            <SubHeading text="adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow."/>

           <div className='md:w-[561px] relative mt-11'>
              <input className='w-[90%] md:w-full p-2 md:p-4 rounded-md' type="text" />
              <Button className="mr-4 md:mr-0 py-3 md: md: text-xs md:text-base absolute top-1/2 -translate-y-1/2 right-0 px-2 md:px-5 py-2 md:!py-4 rounded-l-none" text="Request for Demo"/>
           </div>
            </div>
            <div className='md:w-1/2 static md:absolute top-1/2 static md:-translate-y-1/2  right-0'>
            <Image className='w-[90%] md:w-auto mx-auto md:mx-0 mt-10 md:mt-0' src={Nine} alt="banner image"/>
            </div>
          </Flex>
        </Container>
    </section>

  )
}

export default Banner