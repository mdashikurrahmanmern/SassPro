import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'
import Image from '../components/Image'
import Tesla from '../assets/date.png'
import Button from '../components/Button'

const Stayup = () => {
  return (
     <section className='pt-11 md:pt-[110px] pb-11 md:pb-[120px]'>
        <Container>
          <Flex className='flex-col md:flex-row pr-[830px] md:pr-0 text-center md:text-start pl-3 md:pl-0'>
            <div className='md:w-3/5'>
            <h5 className='text-lg text-secondary font-bold font-rel leading-[27px]'>OUR NEWSLETTER</h5>
            <h2 className='leading-[68px] md:leading-[48px] pt-3 pb-5 text-[52px] text-fourth font-bold font-rel'>Stay up to date</h2> 
            <SubHeading className='md:w-[556px] pt-5 pb-12 !text-new' text="With our weekly newsletter you will stay informed about important information in the HR world, new Corona work guidelines. "/>

           <div className=''>
              <input className='mb-8 md:mb-0 w-[320px] md:w-[381px] p-2 md:p-4 rounded-md border border-secondary ' type="text" />
              <Button className='py-3 md:py-5 px-10 md:px-12 ml-6 md:ml-8 rounded-[12px]' text="Subscribe"/>
           </div>

            </div>
            <div className='md:w-2/5'>
            <Image className='w-[90%] md:w-full pt-8 md:pt-0 pl-3 md:pl-0' src={Tesla} alt="tesla image"/>
            </div>
          </Flex>
        </Container>
    </section>
  )
}

export default Stayup