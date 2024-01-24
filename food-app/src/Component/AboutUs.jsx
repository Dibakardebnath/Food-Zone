
import { Box, Heading,Image,Text } from '@chakra-ui/react'
import './About.css'

export const AboutUs=()=>{
    return <Box  background-color= {"linear-gradient(135deg,#ffeaea, rgb(255,255,255),#ffeaea, rgb(255,255,255))"}>

      <Box className='aboutFirstBox' display={'flex'}>

      <Box className='aboutFirstBox1'>
        <Text color={'gray'} mb={'5%'}>Home <i style={{color:"#f29f05"}} class="fa-solid fa-arrow-right"></i> <span style={{color:"black",  fontWeight:"bold"}}>About Us</span></Text>
        <Heading mb={'2%'}   w={"70%"} as='h2' size='2xl'>Nothing to worry</Heading>
        <Heading mb={'5%'}    as='h2' size='2xl'>about with Quickeat</Heading>
        
        <Text  w={"70%"} color={"gray"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Text>
      </Box>
      <Box className='aboutFirstBox2'>
        <Image   borderRadius={"100px"}  transform="rotate(15deg)"  src="https://quickeat-react.vercel.app/assets/img/photo-9.jpg"></Image>
      </Box>

      </Box>

      <Box className='aboutSecondBox'>Ill continue this box for next day</Box>

    </Box>
}

