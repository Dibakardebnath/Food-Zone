
import { Box, Button, Heading, Image, Select, Text } from '@chakra-ui/react'
import './Home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


export const Home=()=>{

  useEffect(()=>{
    Aos.init();
  },[])

    return <Box height={'1000vh'}>

     <Box className='firstBox'>
     <Box className='heading'>
      <Heading  as='h1' size='3xl' >The Best</Heading>
      <Heading  as='h1' size='3xl' noOfLines={1}>Restaurants</Heading>
      <Heading  as='h1' size='3xl' noOfLines={1}>In Your Home</Heading>
      <Text color={'gray'} mt={'4%'}>Lorem ipsum dolor sit amet, consectetur adipicsing elit,sed do eiusmod tempor.</Text>
      
      <Box className='selectorBox'>
      <Select className='sel' size='lg' color={'gray'}  placeholder='Choose a Restaurant'>
      <option value='option1'>Restaurant 1</option>
      <option value='option2'>Restaurant 2</option>
      <option value='option3'>Restaurant 3</option>
   </Select>
   <Button  size='lg' bg={'#f29f05'} borderRadius={'10px'} color={'white'}>ORDER NOW</Button>
      </Box>
     </Box>

     <Box>
      <Image src='https://quickeat-react.vercel.app/assets/img/photo-1.png'></Image>
     </Box>

     </Box>

  <Box className='secondBox'>
  <Heading className='secheading' as='h1' size='2xl' data-aos="fade-up"  data-aos-duration="1000">How It Works</Heading>
  <Text color={'gray'} data-aos="fade-up"  data-aos-duration="1000">Magna sit amet purus gravida quis blandit turpis cursus.
     Venenatis tellus in metus vulputateeu scelerisque felis</Text>
  </Box>

<Box className='thirdBox'>

<Box className='third1'>
    <Image data-aos="flip-left"  data-aos-duration="1000" src='https://quickeat-react.vercel.app/assets/img/Illustration-1.png'></Image>
    <Heading className='thirdhead' size='lg'><span id='spn'>01</span>Select Restaurant</Heading>
    <Text className='thirdText'>Non enim praesent elementum facilisis leo velumnik fringilla. Lectus proin nibh nislm condimentum id.
     Quis varius quam quisque id diam vel.
    </Text>
  </Box>

  <Box className='third1'>
    <Image data-aos="flip-left"  data-aos-duration="1000" src='https://quickeat-react.vercel.app/assets/img/Illustration-2.png'></Image>
    <Heading className='thirdhead' size='lg'><span id='spn'>02</span>Select menu</Heading>
    <Text className='thirdText'>Eu mi bibendum neque egestas congue quisque. Nulla facilisi morbi tempus iaculis urna id volutpat lacus.
       Odio ut sem nulla pharetra diam sit amet.
    </Text>
  </Box>

  <Box className='third1'>
    <Image data-aos="flip-left"  data-aos-duration="1000" src='https://quickeat-react.vercel.app/assets/img/illustration-3.png'></Image>
    <Heading className='thirdhead' size='lg'><span id='spn'>03</span>Wait for delivery</Heading>
    <Text className='thirdText'>Nunc lobortis mattis aliquam faucibus. Nibh ipsum consequat nisl vel pretium lectus quam id leo.
       A scelerisque purus semper eget. Tincidunt arcu non.
    </Text>
  </Box>

</Box>
 
    

    </Box>
}