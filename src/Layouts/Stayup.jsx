import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'
import Image from '../components/Image'
import Tesla from '../assets/date.png'
import Button from '../components/Button'

const Stayup = () => {
  return (
     <section className='pt-[110px] pb-[120px]'>
        <Container>
          <Flex>
            <div className='w-3/5'>
            <h5 className='text-lg text-secondary font-bold font-rel leading-[27px]'>OUR NEWSLETTER</h5>
            <h2 className='leading-[48px] pt-3 pb-5 text-[52px] text-fourth font-bold font-rel'>Stay up to date</h2> 
            <SubHeading className='w-[556px] pt-5 pb-12 !text-new' text="With our weekly newsletter you will stay informed about important information in the HR world, new Corona work guidelines. "/>

           <div className=''>
              <input className='w-[381px] p-4 rounded-md border border-secondary ' type="text" />
              <Button className='ml-8 rounded-[12px]' text="Subscribe"/>
           </div>

            </div>
            <div className='w-2/5'>
            <Image src={Tesla} alt="tesla image"/>
            </div>
          </Flex>
        </Container>
    </section>
  )
}

export default Stayup