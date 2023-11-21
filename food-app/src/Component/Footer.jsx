import { Box, Heading, Image, Text } from "@chakra-ui/react"
import './Footer.css'

export const Footer=()=>{

    return (
        <Box className="footer">

            <Box className="footer1">
            <Box className="fooFirstBox">
                <Box className="fooImg">
                <Image border={'1px solid'} borderRadius='full' boxSize='40px'
                   src='https://png.pngtree.com/png-clipart/20211116/original/pngtree-cute-cartoon-image-of-female-chef-png-image_6939410.png'/>
             <Heading size={'md'}>Food<span>Zone</span></Heading>
                </Box>
           
         <Heading  mt={'2%'} size={'2xl'}>The Best</Heading>
         <Heading  mt={'2%'} size={'2xl'}>Restaurants in</Heading>
         <Heading  mt={'2%'} size={'2xl'}>Your Home</Heading>
         <Text mt={'3%'} >Vitae congue mauris rhoncus aenean. Enim nulla aliquet porttitor
             lacus luctus accumsan tortor posuere. Tempus egestas sed sed
              risus pretium quam.</Text>
          </Box>


                <Box className="fooSecondBox">
                    <Heading mb={'10%'}>MENU</Heading>
                    <Text>Home</Text>
                    <Text mt={'2%'}>About Us</Text>
                    <Text mt={'2%'}>Restaurants</Text>
                    <Text mt={'2%'}>Contacts</Text>

                </Box>

                <Box className="fooThirdBox">
                    <Heading mb={'5%'} >CONTACTS</Heading>
                <Text mt={'3%'}><i class="fa-solid fa-location-dot"></i> 1717 Harrison St, San Francisco, CA 94103, United States</Text>
                  <hr style={{width:"80%", border:"1px solid", margin:"20px 0px"}}/>
                  <Text mt={'3%'}><i class="fa-solid fa-envelope"></i>dibakardeb956@gmail.com</Text>
                  <Text mt={'3%'}><i class="fa-solid fa-phone"></i>+91 8787455034</Text>
                </Box>

            </Box>
            <hr style={{marginTop:"10px"}}/>
            <Box>
                <Text>Copyright © 2023. FoodZone. All rights reserved.</Text>
                <Text>Privacy Policy     Terms & Services</Text>
            </Box>
        </Box>
    )
}