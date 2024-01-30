

import {  Box, Button, Heading, Image, Input, Text, Textarea } from '@chakra-ui/react'
import './Contact.css'


export const Contact=()=>{
    return <Box>

    <Box className='contactFirstBox'>
       <Box className='contactFirstBox1'>
        <Text color={'gray'}>Home <i class="fa-solid fa-arrow-right"></i> <span style={{color:"black"}}> Contacts</span></Text>
        <Heading size={'2xl'} mt={'6%'}>Contact us</Heading>
        <Text color={'gray'} mt={'5%'} w={'60%'}>Egestas sed tempus urna et pharetra pharetra massa. 
          Fermentum posuere urna nec tincidunt praesent semper.</Text>
          <Box className='childContactBox'>
            <Box className='childContactBox1'>
              <Text>
              <i style={{fontSize:"3em", color:"#f29f05"}} class="fa-solid fa-location-dot"></i>
              </Text>
          
            
            <Text as={'b'} >
            1717 Harrison St, San Francisco, CA 94103, United States
            </Text>
          
            </Box>

            <Box className='childContactBox1'>
            <i style={{fontSize:"3em", color:"#f29f05"}} class="fa-solid fa-envelope"></i>
            <br />
            <Text as={'b'}  mt={'5em'}>dibakar@mail.com</Text>
            <br />
            <Text as='sup' >Lorem ipsum dolor sit.</Text>
            <br />
            <Text as={'b'}>dibakar@mail.com</Text>
            <br />
            <Text as='sup'>Dolore magna aliqua</Text>
            </Box>

            <Box className='childContactBox1'  >
              <Text>
              <i style={{fontSize:"3em", color:"#f29f05"}} class="fa-solid fa-phone"></i>
              </Text>
        
            <Text as='b'>+91 8787455034</Text>
            <br />
            <Text as={'sup'}>Et netus et malesuada</Text>
            <br />
            <Text as='b'>+91 8787455034</Text>
            <br />
            <Text as={'sup'}>Enim tortor auctor urna</Text>
            </Box>

          </Box>
       </Box>
       <Box className='contactFirstBox2' w={'100%'}>
        <Image src='https://quickeat-react.vercel.app/assets/img/contacts-1.png'></Image>
       </Box>
    </Box>

    <Box className='contactSecondBox'>

      <Box className='contactSecondBox1'>
        <Heading  w={'max'}  size={'xl'}>Get in touch with us</Heading>
        <Text color={'#a6a6a6'} w={'70%'}  m={'4% 0px'}>Magna sit amet purus gravida quis blandit turpis cursus.
           Venenatis tellus in metus vulputate eu scelerisque felis.</Text>
          <Box className='contactSecondBox2' display={'flex'} alignItems={'center'}  w={'70%'} >
          <i class="fa-solid fa-user"></i>
          <Input border={'none'} placeholder='Enter your name' type='text'></Input>
          </Box>

          <Box className='contactSecondBox2' mt={'3%'} display={'flex'} alignItems={'center'}  w={'70%'} >
          <i class="fa-solid fa-envelope"></i>
          <Input  border={'none'} placeholder='Enter your email' type='email'></Input>
          </Box>

          <Textarea border={'none'} className='contactSecondBox2' mt={'3%'}  w={'70%'} placeholder='Enter your message' type='message'></Textarea>
          <br />
          <Button display={'flex'} w={'70%'} mt={'3%'} colorScheme='yellow' color={''}>
            Submit Application
          </Button>

      </Box>
      <Box  className="map-container" >
      
  <iframe 
  title="Google Maps Embed"
    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
  />

      </Box>

    </Box>

    <Box className='contactThirdBox'>

<Box  className='contactThirdBox1'>
  <Image src='https://quickeat-react.vercel.app/assets/img/illustration-4.png'></Image>
</Box>

<Box  className='contactThirdBox2'>
  <Heading  size={'2xl'}>Get the menu of</Heading>
  <Heading size={'2xl'}  mt={'2%'}>your favorite</Heading>
  <Heading size={'2xl'}  mt={'2%'}>restaurants every</Heading>
  <Heading size={'2xl'}  mt={'2%'}>day</Heading>

  <Box  className='contactThirdBox3'>
    
    <Input type="email" placeholder="Enter email address"></Input>
    <Button size='lg' color={'white'} colorScheme='yellow'>SUBSCRIBE</Button>
  </Box>
</Box>

</Box>
    </Box>
}