
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

      <Box className='aboutSecondBox'>

        <Box className='aboutSecondBox1'>
          <Image src={"https://quickeat-react.vercel.app/assets/img/illustration-5.png"}></Image>
        </Box>

        <Box className='aboutSecondBox2'>
          <Heading as='h2' size='2xl'>Our mission is to</Heading>
          <Heading as='h2' size='2xl' mt={'3%'}>save your time</Heading>
          <Text mt={'7%'} color={'#797979'} letterSpacing={'1px'}>Viverra vitae congue eu consequat ac felis. Imperdiet</Text>
          <Text letterSpacing={'1px'} color={'#797979'}>massa tincidunt nunc pulvinar sapien et ligula.</Text>
          <Text letterSpacing={'1px'} color={'#797979'}>ullamcorper. Velit ut tortor pretium viverra suspendisse </Text>
          <Text letterSpacing={'1px'} color={'#797979'}>potenti nullam ac tortor.</Text>
          <Text letterSpacing={'1px'} color={'#797979'} mt={'6%'}>Eget egestas purus viverra accumsan in nisl nisi </Text>
          <Text letterSpacing={'1px'} color={'#797979'}>scelerisque. Tincidunt augue interdum velit euismod </Text>
          <Text letterSpacing={'1px'} color={'#797979'}>pellentesque </Text>
        </Box>
      </Box>

      <Box className='aboutThirdBox'>

        <Box className='aboutThirdBox1' backgroundColor={'gray.300'}>
          <Image width={'50%'}  src='https://quickeat-react.vercel.app/assets/img/service-icon-1.svg'></Image>
          <Heading mt={'8%'}>Free Delivery</Heading>
          <Text mt={'8%'} w={'80%'}>Cras fermentum odio eu feugiat pretium nibh ipsum. Ut faucibus pulvinar elementum consequat integer enim neque volutpat.</Text>
        </Box>
           <Box className='aboutThirdBox2' backgroundColor={'gray.300'}>
           <Image  width={'50%'} src='https://quickeat-react.vercel.app/assets/img/service-icon-4.svg'></Image>
          <Heading mt={'8%'}>Save Your Time</Heading>
          <Text mt={'8%'} w={'80%'}>Vulputate dignissim suspendisse in est ante in nibh mauris. Pretium nibh ipsum consequat nisl vel pretium lectus quam id.</Text>
        </Box>  
               <Box className='aboutThirdBox3' backgroundColor={'gray.300'}>
               <Image  width={'50%'} src='https://quickeat-react.vercel.app/assets/img/service-icon-6.svg'></Image>
          <Heading mt={'8%'}>Regular Discounts</Heading>
          <Text mt={'8%'} w={'80%'}>Molestie a iaculis at erat pellentesque. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.</Text>
        </Box>
              
              
               <Box className='aboutThirdBox4' backgroundColor={'gray.300'}>
               <Image  width={'50%'} src='https://quickeat-react.vercel.app/assets/img/service-icon-8.svg'></Image>
          <Heading mt={'8%'}>Variety Food</Heading>
          <Text mt={'8%'} w={'80%'}>Cras fermentum odio eu feugiat pretium nibh ipsum. Ut faucibus pulvinar elementum consequat integer enim neque volutpat.</Text>
        </Box>   </Box>

    </Box>
}

