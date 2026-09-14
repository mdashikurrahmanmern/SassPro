import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Image from '../components/Image'
import Date from '../assets/det.png'
import Button from '../components/Button'

const Makeit = () => {
  return (
   <section className='pt-[50px] md:pt-[110px] pb-[70px]'>
        <Container>
          <Flex className='flex-col md:flex-row md:items-center'>
           <div className='md:w-1/2'>
            <Image className='w-[30%] md:w-full pl-3 md:pl-0' src={Date} alt="date image"/>
           </div>

            <div className='md:w-1/2 ml-3 md:ml-7'>
            <Heading className='pr-[830px] md:pr-0 text-center md:text-start' text="Don’t just engage, make it engaging"/> 
            <SubHeading className='pr-[830px] md:pr-0 text-center md:text-start pt-6 !text-new md:w-[531px]' text="Since 1999. For millions of users. We transform businesses with powerful and"/>
            <SubHeading className='pr-[830px] md:pr-0 text-center md:text-start !text-new'  text="adaptable digital solutions. "/>
            <SubHeading className='pr-[830px] md:pr-0 text-center md:text-start mt-3 !text-new' text="Psum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra purus imperdiet a. Ut nisl est at ultricies neque ornare tellus tellus enim."/>
              <Button className='mt-11 ml-[76px] md:ml-0' text="Read More"/>
            </div>
          </Flex>
        </Container>
    </section>
  )
}

export default Makeit