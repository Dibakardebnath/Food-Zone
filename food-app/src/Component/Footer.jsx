import { Box, Heading, Image, Text, Button } from "@chakra-ui/react"
import './Footer.css'

export const Footer=()=>{

    return (
        <Box className="footer">

            <Box className="footer1">
            <Box className="fooFirstBox">
                <Box className="fooImg">
                <Image border={'1px solid'} color={'white'} borderRadius='full' boxSize='40px'
                   src='https://png.pngtree.com/png-clipart/20211116/original/pngtree-cute-cartoon-image-of-female-chef-png-image_6939410.png'/>
             <Heading size={'md'} color={'white'}>Food<span>Zone</span></Heading>
                </Box>
           
         <Heading  mt={'2%'} size={'2xl'} color={'white'}>The Best</Heading>
         <Heading  mt={'2%'} size={'2xl'} color={'white'}>Restaurants in</Heading>
         <Heading  mt={'2%'} size={'2xl'} color={'white'}>Your Home</Heading>
         <Text mt={'3%'} color={'#cfcfcf'}>Vitae congue mauris rhoncus aenean. Enim nulla aliquet porttitor
             lacus luctus accumsan tortor posuere. Tempus egestas sed sed
              risus pretium quam.</Text>
          </Box>


                <Box className="fooSecondBox">
                    <Heading as='h3' size='lg' color='gray' mb={'10%'}>MENU</Heading>
                    <Text  color={'#cfcfcf'}>Home <i class="fa-solid fa-arrow-right"></i></Text>
                    <Text  color={'#cfcfcf'} mt={'4%'}>About Us <i class="fa-solid fa-arrow-right"></i></Text>
                    <Text  color={'#cfcfcf'} mt={'4%'}>Restaurants <i class="fa-solid fa-arrow-right"></i></Text>
                    <Text  color={'#cfcfcf'} mt={'4%'}>Contacts <i class="fa-solid fa-arrow-right"></i></Text>

                </Box>

                <Box className="fooThirdBox">
                    <Heading as='h3' size='lg' color='gray' mb={'5%'} >CONTACTS</Heading>
                <Text  color={'#cfcfcf'} mt={'3%'}><i class="fa-solid fa-location-dot"></i>  143 Pyar Nagar, Agartala,
Tripura,
PIN Code: 799004,
India.
</Text>
                  <hr style={{ margin:"20px 0px",  color:'#cfcfcf'}}/>
                  <Text  color={'#cfcfcf'} mt={'3%'}><i class="fa-solid fa-envelope"></i> dibakardeb956@gmail.com</Text>
                  <Text  color={'#cfcfcf'} mt={'3%'}><i class="fa-solid fa-phone"></i> +91 8787455034</Text>
                
                <Box display={'flex'} gap={'30px'} mt={'10%'}>
                  <li>
                    <a href=""><i style={{borderRadius:"50%",border:"1px solid white", color:'#cfcfcf',padding:"10px",backgroundColor:"#363636"}} class="fa-brands fa-facebook"></i></a>
                  </li>
                  <li>
                    <a href=""><i style={{borderRadius:"50%",border:"1px solid white", color:'#cfcfcf',padding:"10px",backgroundColor:"#363636"}}  class="fa-brands fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href=""><i style={{borderRadius:"50%",border:"1px solid white", color:'#cfcfcf',padding:"10px",backgroundColor:"#363636"}}class="fa-brands fa-linkedin"></i></a>
                  </li>
                </Box>
                
                </Box>

            </Box>
            <hr style={{margin:"50px 0px 30px 0px"}}/>
            <Box display={'flex'} justifyContent={'space-between'}>
                <Text color={'#627878'}>Copyright © 2023. FoodZone. All rights reserved.</Text>
                <Text color={'#627878'}>Privacy Policy <span style={{marginLeft:"15px",color:"#627878"}}>Terms & Services</span> </Text>
            </Box>
        </Box>
    )
}