import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import { IndustriesCard } from '../components/IndustriesCard'
import Dex from '../assets/ind1.png'
import Nex from '../assets/ind2.png'
import Fex from '../assets/ind3.png'
import Lex from '../assets/ind4.png'
import Mex from '../assets/ind5.png'
import Rex from '../assets/ind6.png'

const Industries = () => {
  return (
   <section className='pt-[113px] pb-[120px]'>
        <Container>
                <Heading className='text-center pb-14' text="Industries in focus"/>
                <Flex className='justify-between flex-wrap gap-7'>
                    <IndustriesCard src={Dex} title="FinTech" text="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."/>
                    <IndustriesCard src={Nex} title="Telecom" text="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."/>
                    <IndustriesCard src={Fex} title="Retail" text="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."/>
                    <IndustriesCard src={Lex} title="Transportation" text="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."/>
                    <IndustriesCard src={Mex} title="eLearning" text="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."/>
                    <IndustriesCard src={Rex} title="Artificial Intelligence" text="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."/>
                </Flex>
        </Container>
   </section>
  )
}

export default Industries