import { Box, Button, Heading, Image, Input, Text } from "@chakra-ui/react";
import "./About.css";

export const AboutUs = () => {
  return (
    <Box
      background-color={
        "linear-gradient(135deg,#ffeaea, rgb(255,255,255),#ffeaea, rgb(255,255,255))"
      }
    >
      <Box className="aboutFirstBox" display={"flex"}>
        <Box className="aboutFirstBox1">
          <Text color={"gray"} mb={"5%"}>
            Home{" "}
            <i style={{ color: "#f29f05" }} class="fa-solid fa-arrow-right"></i>{" "}
            <span style={{ color: "black", fontWeight: "bold" }}>About Us</span>
          </Text>
          <Heading mb={"2%"} w={"70%"} as="h2" size="2xl">
            Nothing to worry
          </Heading>
          <Heading mb={"5%"} as="h2" size="2xl">
            about with Quickeat
          </Heading>

          <Text w={"70%"} color={"gray"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </Text>
        </Box>
        <Box className="aboutFirstBox2" >
          <Image
          // border={'1px solid'} w={'80%'}
            borderRadius={"100px"}
            transform="rotate(15deg)"
            src="https://quickeat-react.vercel.app/assets/img/photo-9.jpg"
          ></Image>
        </Box>
      </Box>

      <Box className="aboutSecondBox">
        <Box className="aboutSecondBox1">
          <Image
            src={
              "https://quickeat-react.vercel.app/assets/img/illustration-5.png"
            }
          ></Image>
        </Box>

        <Box className="aboutSecondBox2">
          <Heading as="h2" size="2xl">
            Our mission is to
          </Heading>
          <Heading as="h2" size="2xl" mt={"3%"}>
            save your time
          </Heading>
          <Text mt={"7%"} color={"#797979"} letterSpacing={"1px"}>
            Viverra vitae congue eu consequat ac felis. Imperdiet
          </Text>
          <Text letterSpacing={"1px"} color={"#797979"}>
            massa tincidunt nunc pulvinar sapien et ligula.
          </Text>
          <Text letterSpacing={"1px"} color={"#797979"}>
            ullamcorper. Velit ut tortor pretium viverra suspendisse{" "}
          </Text>
          <Text letterSpacing={"1px"} color={"#797979"}>
            potenti nullam ac tortor.
          </Text>
          <Text letterSpacing={"1px"} color={"#797979"} mt={"6%"}>
            Eget egestas purus viverra accumsan in nisl nisi{" "}
          </Text>
          <Text letterSpacing={"1px"} color={"#797979"}>
            scelerisque. Tincidunt augue interdum velit euismod{" "}
          </Text>
          <Text letterSpacing={"1px"} color={"#797979"}>
            pellentesque{" "}
          </Text>
        </Box>
      </Box>

      <Box className="aboutThirdBox">
        <Box className="aboutThirdBox1" backgroundColor={"gray.300"}>
          <Image
            width={"50%"}
            src="https://quickeat-react.vercel.app/assets/img/service-icon-1.svg"
          ></Image>
          <Heading mt={"8%"}>Free Delivery</Heading>
          <Text mt={"8%"} w={"80%"}>
            Cras fermentum odio eu feugiat pretium nibh ipsum. Ut faucibus
            pulvinar elementum consequat integer enim neque volutpat.
          </Text>
        </Box>
        <Box className="aboutThirdBox2" backgroundColor={"gray.300"}>
          <Image
            width={"50%"}
            src="https://quickeat-react.vercel.app/assets/img/service-icon-4.svg"
          ></Image>
          <Heading mt={"8%"}>Save Your Time</Heading>
          <Text mt={"8%"} w={"80%"}>
            Vulputate dignissim suspendisse in est ante in nibh mauris. Pretium
            nibh ipsum consequat nisl vel pretium lectus quam id.
          </Text>
        </Box>
        <Box className="aboutThirdBox3" backgroundColor={"gray.300"}>
          <Image
            width={"50%"}
            src="https://quickeat-react.vercel.app/assets/img/service-icon-6.svg"
          ></Image>
          <Heading mt={"8%"}>Regular Discounts</Heading>
          <Text mt={"8%"} w={"80%"}>
            Molestie a iaculis at erat pellentesque. Pulvinar neque laoreet
            suspendisse interdum consectetur libero id faucibus nisl.
          </Text>
        </Box>
        <Box className="aboutThirdBox4" backgroundColor={"gray.300"}>
          <Image
            width={"50%"}
            src="https://quickeat-react.vercel.app/assets/img/service-icon-8.svg"
          ></Image>
          <Heading mt={"8%"}>Variety Food</Heading>
          <Text mt={"8%"} w={"80%"}>
            Cras fermentum odio eu feugiat pretium nibh ipsum. Ut faucibus
            pulvinar elementum consequat integer enim neque volutpat.
          </Text>
        </Box>{" "}
      </Box>

      <Box className="aboutFourthBox">
        <Box className="aboutFourthBox1">
          <Heading as="h2" size="2xl">Wait a minute for</Heading>
          <Heading as="h2" size="2xl" mt={'1%'}>delicious</Heading>
          <Text w={'90%'}  mt={'5%'} size={'md'} color={'#9f7878'}>
            Amet massa vitae tortor condimentum lacinia quis. Elit at imperdiet
            dui accumsan sit amet nulla facilisi. Lacus laoreet non curabitur
            gravida arcu ac tortor dignissim.
          </Text>

          <Heading size='md' mt={'4%'}>Interdum varius sit amet mattis</Heading>
            <Text size={'md'} color={'#9f7878'}  mt={'5%'}> <i style={{color:"#f29f05"}} class="fa-solid fa-circle-check"></i> Sed elementum tempus egestas sed sed;</Text>
            <Text size={'md'} color={'#9f7878'} mt={'2%'}> <i style={{color:"#f29f05"}} class="fa-solid fa-circle-check"></i> Interdum varius sit amet mattis;</Text>
            <Text size={'md'} color={'#9f7878'} mt={'2%'}> <i style={{color:"#f29f05"}} class="fa-solid fa-circle-check"></i> Sit amet purus gracida quis blandit;</Text>
            <Text size={'md'} color={'#9f7878'} mt={'2%'}> <i style={{color:"#f29f05"}} class="fa-solid fa-circle-check"></i> Feugiat pretium nibh ipsum consequat nisl vel pretium</Text>
         
        </Box>

        <Box className="aboutFourthBox2" position="relative">
          <Image
            src="https://quickeat-react.vercel.app/assets/img/elements-1.jpg"
            alt="Thumbnail"
            borderRadius={'40px'}
          />

          <Box
            padding={"15px"}
            borderRadius={"50px"}
            backgroundColor={"#f29f05"}
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            cursor="pointer"
          >
            <a
              href="https://www.youtube.com/watch?v=CKnGXZxK7zs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                style={{ fontSize: "2em", color: "white" }}
                class="fa-solid fa-play"
              ></i>
            </a>
          </Box>
        </Box>

      
      </Box>

      <Box className="aboutFifthBox">
          <Box className="aboutFifthBox1" ><Image  src="https://quickeat-react.vercel.app/assets/img/photo-10.png"></Image></Box>
         
          <Box className='aboutFifthBox2'>
    <Box className='aboutFifthBox21' textAlign={'left'}>
      <Heading >Service shows good taste.</Heading>
    </Box>
    <Box display={'flex'} textAlign={'left'} gap={'8%'} w={'max-content'}  h={'max-content'} className='aboutFifthBox22'>
      <Heading size={'2xl'} color='#f4b030'>976</Heading>
      <Text  w={'50%'} className='fifthText'>Satisfied Customer</Text>
    </Box>
    <Box display={'flex'} gap={'8%'} textAlign={'left'}  w={'max-content'}  h={'max-content'}  className='aboutFifthBox22'>
    <Heading size={'2xl'} color='#f4b030'>12</Heading>
      <Text  w={'60%'} className='fifthText'>Best Restaurants</Text>
    </Box>
    <Box display={'flex'} gap={'8%'} textAlign={'left'} w={'max-content'} h={'max-content'}  className='aboutFifthBox22'>
    <Heading size={'2xl'} color='#f4b030'>1K+</Heading>
      <Text  w={'50%'} className='fifthText'>Food Delivered</Text>
    </Box>
  </Box>
        </Box>
        <Box className="aboutSixBox">
          <Heading size={'2xl'}>Our Team</Heading>
          <Text color={'#a37878'} mt={'5%'}>Enim lobortis scelerisque fermentum dui faucibus. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. 
            Magna ac placerat vestibulum lectus mauris.</Text>
        </Box>
        <Box className="aboutSevenBox">
          
          <Box className="aboutSevenBox1">
            <Image  m={'auto'} w={'80%'} src="https://quickeat-react.vercel.app/assets/img/team-1.png"></Image>
            <Heading mt={'4%'}>Kevin Adamason</Heading>
            <Text color={'#be8d78'} w={'70%'}  m={'2% auto'}>Pellentesque adipiscing commodo elit at imperdiet dui.</Text>
            <Box w={'max-content'} display={'flex'} gap={'30px'} m={'4% auto'} >
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
          <Box className="aboutSevenBox1">
            <Image  m={'auto'} w={'80%'} src="https://quickeat-react.vercel.app/assets/img/team-2.png"></Image>
            <Heading mt={'4%'}>Madam Adam</Heading>
            <Text color={'#be8d78'} w={'70%'}  m={'2% auto'}>Velit dignissim sodales ut eu sem integer vitae. Interdum varius sit amet mattis.</Text>
            <Box w={'max-content'} display={'flex'} gap={'30px'} m={'4% auto'} >
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
          <Box className="aboutSevenBox1">
            <Image  m={'auto'} w={'80%'} src="https://quickeat-react.vercel.app/assets/img/team-3.png"></Image>
            <Heading mt={'4%'}>Raju Nama</Heading>
            <Text color={'#be8d78'} w={'70%'}  m={'2% auto'}>At erat pellentesque adipiscing commodo elit.</Text>
            <Box w={'max-content'} display={'flex'} gap={'30px'} m={'4% auto'} >
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
        <Box className="aboutEightBox">
          <Heading size={'2xl'}>Our Trusted Partners</Heading>
          <Box className="aboutEightBox1">

           <Box   w={'max-content'} ><Image src="https://quickeat-react.vercel.app/assets/img/logo-1.png"></Image>
           <Heading size={'md'}>Kings Arms</Heading>
           </Box> 

           <Box  w={'max-content'} > <Image src="https://quickeat-react.vercel.app/assets/img/logo-2.png"></Image> 
           <Heading size={'md'}>Wilmington</Heading>
           </Box> 

           <Box  w={'max-content'} > <Image src="https://quickeat-react.vercel.app/assets/img/logo-3.png"></Image>
           <Heading size={'md'}>Kennington</Heading>
           </Box> 

            <Box  w={'max-content'} ><Image src="https://quickeat-react.vercel.app/assets/img/logo-4.png"></Image>
            <Heading size={'md'}>The Victoria</Heading>
            </Box> 

           <Box  w={'max-content'}  > <Image src="https://quickeat-react.vercel.app/assets/img/logo-5.png"></Image>
           <Heading size={'md'}>The Andover Arms</Heading>
           </Box> 
            
          </Box>
        </Box>
        <Box className="aboutNineBox" h={'20em'}>
          <Heading  w={'70%'} m={'auto'} size={'2xl'}>Get the menu of your favorite restaurants every day</Heading>
         <Box   w={'40%'} display={'flex'} m={'2% auto'}>
         <Input backgroundColor={'white'}  type="email" placeholder="Enter email address"></Input>
          <Button  colorScheme="yellow" >SUBSCRIBE</Button>
          </Box> 
                  </Box>
    </Box>
  );
};
