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
    <section className='bg-[#F3F3F3] pt-[113px] pb-[70px]'>
          <Container>
                     <Heading className='mx-auto text-center w-[369px]' text="All product work with several devices."/>
                  <SubHeading className='pt-7 pb-9 mx-auto text-center !text-[#495E6C] w-[455px]' text="A great SaaS UI/UX design can make your product addictive and uncomfortable to give up."/>
                  <Flex className='justify-center gap-x-5 mb-14'>
                     <Image src={Win}/>
                     <Image src={App}/>
                  </Flex>
                     <Image src={Banner}/>
          </Container>
    </section>
  )
}

export default Product