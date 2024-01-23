
import { Box, Heading,Image,Text } from '@chakra-ui/react'


export const AboutUs=()=>{
    return <Box>

      <Box className='aboutFirstBox' display={'flex'}>

      <Box>
        <Heading>Nothing to worry about with Quickeat</Heading>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Text>
      </Box>
      <Box>
        <Image src="https://quickeat-react.vercel.app/assets/img/photo-9.jpg"></Image>
      </Box>

      </Box>

    </Box>
}