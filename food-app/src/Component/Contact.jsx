

import { Box, Heading, Image, Text } from '@chakra-ui/react'
import './Contact.css'


export const Contact=()=>{
    return <Box>

    <Box className='contactFirstBox'>
       <Box className='contactFirstBox1'>
        <Text color={'gray'}>Home <i class="fa-solid fa-arrow-right"></i> <span style={{color:"black"}}> Contacts</span></Text>
        <Heading size={'2xl'} mt={'4%'}>Contact us</Heading>
        <Text color={'gray'} mt={'3%'} w={'50%'}>Egestas sed tempus urna et pharetra pharetra massa. 
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
       <Box className='contactFirstBox2'>
        <Image src='https://quickeat-react.vercel.app/assets/img/contacts-1.png'></Image>
       </Box>
    </Box>

    </Box>
}