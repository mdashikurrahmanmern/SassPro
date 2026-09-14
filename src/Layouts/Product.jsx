import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Image from '../components/Image'
import Win from '../assets/new1.png'
import App from '../assets/new2.png'
import Banner from '../assets/new3.png'




const Product = () => {
  return (
    <section className='bg-[#F3F3F3] pt-[50px] md:pt-[113px] pb-[56px] md:pb-[70px]'>
          <Container>
                     <Heading className='pr-[830px] md:pr-0 mx-5 md:mx-auto text-center md:w-[369px]' text="All product work with several devices."/>
                  <SubHeading className='pr-[830px] md:pr-0 pt-7 pb-9 mx-5 md:mx-auto text-center !text-[#495E6C] md:w-[455px]' text="A great SaaS UI/UX design can make your product addictive and uncomfortable to give up."/>
                  <Flex className='pr-[830px] md:pr-0 justify-center gap-x-5 mb-14'>
                     <Image src={Win}/>
                     <Image src={App}/>
                  </Flex>
                     <Image className='w-[29%] md:w-full pl-3 md:pl-0' src={Banner}/>
          </Container>
    </section>
  )
}

export default Product