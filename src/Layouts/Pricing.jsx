import React, {useState} from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import PricingCard from '../components/PricingCard'


const Pricing = () => {
    let [change,setChange]=useState(false)

    
  return (
   <section className='pt-[100px] pb-[120px]'>
        <Container>
              <Heading className='text-center pb-14' text="Affordable Pricing"/>
              <Flex className='justify-center items-center gap-x-6 my-9'>
                  <SubHeading className='!text-[#5A7184]' text="Monthly"/>
                   <div onClick={()=>setChange(!change)} className={`w-[90px] h-[40px] bg-secondary rounded-[100px] flex items-center px-2 ${change? "justify-start":"justify-end" }`}>
                      <div className='w-[30px] h-[30px] bg-white rounded-full'></div>
                   </div>
                  <SubHeading className='!text-[#5A7184]' text="Annualy"/>
              </Flex>
              {change 
                 ?
                <Flex className='justify-between'>
                <PricingCard plan="Free Plan" free="0" year="monthly" buttontext="Try for Free"/>
                <PricingCard plan="Premium Plan" free="55.5" year="monthly" buttontext="Buy Plan"/>
                <PricingCard plan="Business Plan" free="125" year="monthly" buttontext="Buy Plan"/>
                </Flex>

                 :
                 <Flex className='justify-between'>
                <PricingCard plan="Basic Plan" free="199" year="year" buttontext="Buy Plan"/>
                <PricingCard plan="Premium Plan" free="599" year="year" buttontext="Buy Plan"/>
                <PricingCard plan="Business Plan" free="999" year="year" buttontext="Buy Plan"/>
                </Flex>

              }
             

        </Container>
   </section>
  )
}

export default Pricing