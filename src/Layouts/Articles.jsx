import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import ArticlesCard from '../components/ArticlesCard'
import Pds from '../assets/articles1.png'
import Card from '../assets/articles2.png'
import Sds from '../assets/articles3.png'
import Ftf from '../assets/Ftfn1.png'
import Heading from '../components/Heading'



const Articles = () => {
  return (
    <section className='pt-10 md:pt-[110px] pb-14 md:pb-[120px] bg-[#F3F3F3]'>
          <Container>
                    <Heading className='pr-[830px] md:pr-0  text-center pb-14' text="Recent News & Articles"/>
                 <Flex className='flex-col md:flex-row pl-3 md:pl-0 justify-between'>
                     <ArticlesCard date="24/ 08/2021" crs={Ftf} src={Pds}  items="Carter Rosser" title="Where Should I Buy Next?" text="From romantic getaways to adventurous hikes, find your next..."/>
                     <ArticlesCard date="24/ 08/2021" crs={Ftf} src={Card} items="Carter Rosser"  title="Malesuada Fermentum Tortor" text="From romantic getaways to adventurous hikes, find your next..."/>
                     <ArticlesCard date="24/ 08/2021" crs={Ftf} src={Sds}  items="Carter Rosser" title="Magna Malesuada" text="From romantic getaways to adventurous hikes, find your next..."/>

                 </Flex>
          </Container>
    </section>
  )
}

export default Articles