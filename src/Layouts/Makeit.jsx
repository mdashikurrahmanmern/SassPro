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
   <section className=' pt-[110px] pb-[70px]'>
        <Container>
          <Flex className='items-center'>
           <div className='w-1/2'>
            <Image src={Date} alt="date image"/>
           </div>

            <div className='w-1/2 ml-7'>
            <Heading text="Don’t just engage, make it engaging"/> 
            <SubHeading className='pt-6 !text-new w-[531px]' text="Since 1999. For millions of users. We transform businesses with powerful and"/>
            <SubHeading className='!text-new'  text="adaptable digital solutions. "/>
            <SubHeading className='mt-3 !text-new' text="Psum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra purus imperdiet a. Ut nisl est at ultricies neque ornare tellus tellus enim."/>
              <Button className='mt-11' text="Read More"/>
            </div>
          </Flex>
        </Container>
    </section>
  )
}

export default Makeit