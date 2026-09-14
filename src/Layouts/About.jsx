import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import { FaStar } from "react-icons/fa";
import Image from '../components/Image'
import One from '../assets/logo1.png'
import Two from '../assets/logo2.png'
import Three from '../assets/logo3.png'
import AboutCard from '../components/AboutCard'

const About = () => {
  return (
  <section>
    <Container>
           <div className=' bg-offwhite p-8 md:p-[50px] rounded-lg shadow-2xl mt-10'>
                <Flex className="flex-col md:flex-row text-center md:text-start pr-[830px] md:pr-0 border-b border-[rgba(17,47,66,0.10)] pb-10 mb-6 items-center md:items-start justify-between">
             <div>
                 <h5 className='text-sm text-secondary font-rel font-bold pb-4'>Who we are?</h5>
                 <Heading className="leading-[48px] md:w-[750px]" text="More than 5,000 users around the world are already using STDEV actively"/>
             </div>
             <div className='mt-8 md:mt-0 flex flex-col items-center justify-center gap-y-2 w-[186px] h-[178px] bg-[#CFDDDB] rounded-md'>
                <h2 className='text-[50px] text-fourth font-bold font-inter'>4.8</h2>
                <ul className='flex gap-x-1'>
                    <li><FaStar className='text-[#FF7282] font-base' /></li>
                    <li><FaStar className='text-[#FF7282] font-base' /></li>
                    <li><FaStar className='text-[#FF7282] font-base' /></li>
                    <li><FaStar className='text-[#FF7282] font-base' /></li>
                    <li><FaStar className='text-[#FF7282] font-base' /></li>

                </ul>
                <p className='text-base text-[#495E6C] font-normal font-roboto'>35 Reviews</p>

             </div>
         </Flex>
               <Flex className='flex-col md:flex-row justify-between gap-y-8 md:gap-y-0'>
                   <AboutCard src={One} title="70+" text="Professionals"/>
                   <AboutCard src={Two} title="22 Years" text="Year of experience"/>
                   <AboutCard src={Three} title="$40+M" text="Fundraised by customers"/>
               </Flex>
           </div>
    </Container>
  </section>
  )
}

export default About