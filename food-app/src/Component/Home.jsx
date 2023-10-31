
import { Box, Button, Heading, Image, Select, Text } from '@chakra-ui/react'
import './Home.css'

export const Home=()=>{
    return <Box>

     <Box className='firstBox'>
     <Box className='heading'>
      <Heading  as='h1' size='3xl' >The Best</Heading>
      <Heading  as='h1' size='3xl' noOfLines={1}>Restaurants</Heading>
      <Heading  as='h1' size='3xl' noOfLines={1}>In Your Home</Heading>
      <Text color={'gray'} mt={'4%'}>Lorem ipsum dolor sit amet, consectetur adipicsing elit,sed do eiusmod tempor.</Text>
      
      <Box className='selectorBox'>
      <Select size='lg' color={'gray'}  placeholder='Choose a Restaurant'>
      <option value='option1'>Option 1</option>
      <option value='option2'>Option 2</option>
      <option value='option3'>Option 3</option>
   </Select>
   <Button size='lg' bg={'#f29f05'} borderRadius={'10px'} color={'white'}>ORDER NOW</Button>
      </Box>
     </Box>

     <Box>
      <Image src='https://quickeat-react.vercel.app/assets/img/photo-1.png'></Image>
     </Box>

     </Box>

     

    </Box>
}