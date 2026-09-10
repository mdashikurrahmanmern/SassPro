import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import WorkCard from '../components/WorkCard'
import Lead from '../assets/work1.png'
import Mead from '../assets/work2.png'
import Read from '../assets/work3.png'


const WorkPart = () => {
  return (
   <section className='bg-[#F3F3F3] pt-[113px] pb-[177px]'>
        <Container>
                <Heading className='text-center pb-14' text="The Product we work with."/>
                <Flex className='justify-between flex-wrap gap-5'>
                    <WorkCard src={Lead} title="Consulting" text="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."/>
                    <WorkCard src={Mead} title="Security" text="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."/>
                    <WorkCard src={Read} title="Management & support" text="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."/>

                  
                </Flex>
        </Container>
   </section>
  )
}

export default WorkPart