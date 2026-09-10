import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import What from '../assets/what1.png'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import OurCard from '../components/OurCard'
import Dsl from '../assets/our1.png'
import Dsm from '../assets/our2.png'



const Whatour = () => {
  return (
   <section className='pt-[120px] pb-[160px] bg-[#F3F3F3]'>
      <Container>
            <Flex>
               <div className='w-2/5'>
                <Image src={What}/>
                <Heading className='py-5' text="What our clients say about us"/>
                <SubHeading className='!text-new' text="Nunc tortor vel tincidunt id massa congue. Varius risus lorem vestibulum velit."/>
               
               </div>
               <Flex className='w-3/5 gap-x-6 pl-7'>

                 <OurCard src={Dsl} item="Davis Lubin" text="Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis. Accumsan sit amet nulla facilisi."/>
                <OurCard src={Dsm} item="Leslie Alexander" text="Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis. Accumsan sit amet nulla facilisi."/>


                </Flex>
            </Flex>
      </Container>
   </section>
  )
}

export default Whatour