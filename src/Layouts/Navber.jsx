import React from 'react'
import Container from '../components/Container'
import  Flex from '../components/Flex'
import  ListItem from '../components/ListItem'
import  Button from '../components/Button'
import  Image from '../components/Image'
import  logo from '../assets/ten.png'





const Navber = () => {
  return (
    
         
         <nav className='bg-third py-6'>
           <Container>
           <Flex className='justify-between items-center'>
            <Image src={logo} alt="logo"/>

             <Flex className="items-center gap-x-[34px]">
               <ul className='flex gap-x-[30px]'>
                <ListItem type={true} text="Home"/>
                <ListItem type={true} text="Pages"/>
                <ListItem text="About Us"/>
                <ListItem text="Services"/>
                <ListItem text="Blog"/>
                <ListItem text="Contact"/>
              </ul>
                  <Button text="Let's talk"/>
             </Flex>
           </Flex>
          </Container>
         </nav>
        
       
  )
}

export default Navber