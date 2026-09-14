import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Foot from '../assets/ten.png'
import SubHeading from '../components/SubHeading'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import FooterList from '../components/FooterList'

const Footer = () => {
  return (
    <>
    <section className='bg-fourth pt-[97px] pb-[77px] border-b border-[#ffffff14]'>
         <Container>
               <Flex className='flex-col md:flex-row'>
                   <div className='md:w-4/12'>
                   <Image className='pl-[99px] md:pl-0' src={Foot}/>
                   <SubHeading className='pr-[830px] md:pr-0 text-center md:text-start pt-7 pb-9 md:w-[362px]' text="Orem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst augue amet, luctus quis gravida nulla netus ut platea."/>
                   <ul className='pr-[830px] md:pr-0 justify-center md:justify-start mb-7 md:mb-0 flex gap-x-6'> 
                      <li><FaFacebookF className='text-white' /></li>
                        <li><FaTwitter className='text-white' /></li>
                      <li><FaInstagram className='text-white' /></li>
                   </ul>
                   </div>
                   <div className='pr-[830px] md:pr-0 text-center md:text-start md:w-2/12'>
                     <FooterList text="Company"/>
                    <ul className='flex flex-col gap-y-1 mt-5 cursor-pointer'>
                         <SubHeading text="About us"/>
                         <SubHeading text="Services"/>
                         <SubHeading text="Blog"/>
                    </ul>
                   </div>
                   <div className='pr-[830px] md:pr-0 text-center md:text-start py-9 md:py-0 md:w-2/12'>
                   <FooterList text="More Links"/>
                   <ul className='flex flex-col gap-y-1 mt-5 cursor-pointer'>
                         <SubHeading text="Blog Details"/>
                         <SubHeading text="Service Details"/>
                         <SubHeading text="Contact"/>
                    </ul>
                   </div>
                   <div className='pr-[830px] md:pr-0 text-center md:text-start md:w-4/12'>
                   <FooterList text="Contact Details"/>
                   <ul className='flex flex-col gap-y-1 mt-5 cursor-pointer'>
                         <SubHeading text="Amsterdam Netherlands"/>
                         <SubHeading text="+1 62 19 22 705"/>
                         <SubHeading text="7 Days - 8am - 10pm"/>
                         <SubHeading text="info@stdev.com"/>
                    </ul>
                   </div>

                       
               </Flex>
         </Container>
    </section>
    <footer className='bg-fourth py-7 '>
        <SubHeading className='text-center' text="© 2021 All Rights Reserved"/>
    </footer>
    </>
  )
}

export default Footer