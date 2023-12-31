
import { Box, Button, Heading, Image, Input, Select, Text } from '@chakra-ui/react'
import './Home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


export const Home=()=>{

  useEffect(()=>{
    Aos.init();
  },[])

    return <Box>

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

<Box className='fourthBox1' >

  <Box className='fourthBox' >
  <Box  data-aos="flip-left"  data-aos-duration="1000" className='four1'>
  <Heading mt={'5px'} as='h1' size='2xl'>12 Best</Heading>
  <Heading mt={'5px'} as='h1' size='2xl'>Restaurants in</Heading>
  <Heading mt={'5px'} as='h1' size='2xl'>Your City</Heading>
  <Text className='fourText' color={'gray'}>Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus in metus vulputate.</Text>
</Box>

<Box  data-aos="flip-left"  data-aos-duration="1000" className='four2'>
<Box className='fourImage'>
  <Image borderRadius={'5px'} src='https://quickeat-react.vercel.app/assets/img/logos-2.jpg'></Image>
</Box >
<Box className='fourRight'>
  <Heading size='lg'>Kennington Lane Cafe</Heading>
  <i style={{color:"#f29f05"}} class="fa-solid fa-star"></i>
   <i style={{color:"#f29f05"}}class="fa-solid fa-star"></i> 
   <i style={{color:"#f29f05"}}class="fa-solid fa-star"></i>
    <i style={{color:"#f29f05"}}class="fa-solid fa-star"></i>
    <i class="fa-regular fa-star"></i>
     <Box className='buttonBox'>
     <Button colorScheme='white'>amerecan</Button>
  <Button colorScheme='white'>steakhouse</Button>
  <Button colorScheme='white'>seafood</Button>
     </Box>
 
  <Text className='fourRightText' color={'gray'}>Non enim praesent elementum facilisis leo vel fringilla.
     Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.</Text>
</Box>
</Box>


<Box  data-aos="flip-left"  data-aos-duration="1000" className='four2'>
<Box className='fourImage'>
  <Image borderRadius={'5px'} src='https://quickeat-react.vercel.app/assets/img/logos-2.jpg'></Image>
</Box >
<Box className='fourRight'>
  <Heading size='lg'>Kennington Lane Cafe</Heading>
  <i style={{color:"#f29f05"}} class="fa-solid fa-star"></i>
   <i style={{color:"#f29f05"}}class="fa-solid fa-star"></i> 
   <i style={{color:"#f29f05"}}class="fa-solid fa-star"></i>
    <i style={{color:"#f29f05"}}class="fa-solid fa-star"></i>
    <i class="fa-regular fa-star"></i>
     <Box className='buttonBox'>
     <Button colorScheme='white'>amerecan</Button>
  <Button colorScheme='white'>steakhouse</Button>
  <Button colorScheme='white'>seafood</Button>
     </Box>
 
  <Text className='fourRightText' color={'gray'}>Non enim praesent elementum facilisis leo vel fringilla.
     Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.</Text>
</Box>
</Box>

<Box  data-aos="flip-left"  data-aos-duration="1000" className='four3'>
<Box className='fourImage'>
  <Image borderRadius={'5px'} src='https://quickeat-react.vercel.app/assets/img/logos-2.jpg'></Image>
</Box >
<Box className='fourRight'>
  <Heading size='lg'>Kennington Lane Cafe</Heading>
  <i style={{color:"#f29f05"}} class="fa-solid fa-star"></i>
   <i style={{color:"#f29f05"}}class="fa-solid fa-star"></i> 
   <i style={{color:"#f29f05"}}class="fa-solid fa-star"></i>
    <i style={{color:"#f29f05"}}class="fa-solid fa-star"></i>
    <i class="fa-regular fa-star"></i>
     <Box className='buttonBox'>
     <Button colorScheme='white'>amerecan</Button>
  <Button colorScheme='white'>steakhouse</Button>
  <Button colorScheme='white'>seafood</Button>
     </Box>
 
  <Text className='fourRightText' color={'gray'}>Non enim praesent elementum facilisis leo vel fringilla.
     Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.</Text>
</Box>
</Box>


  </Box>


  <Button borderRadius={'10px'} color={'#f29f05'} colorScheme='white' className='seeBtn'>SEE ALL<i style={{marginLeft:"7px"}} class="fa-solid fa-arrow-right"></i></Button>



</Box>


<Box className='fifthBox'>

  <Box className='fifth1'>
  <Box className='fifthOmg'>
    <Image src='https://quickeat-react.vercel.app/assets/img/photo-3.png'></Image>
  </Box>
  <Box className='fifthOmg2'>
<Heading size={'2xl'}>Food from your</Heading>
<Heading size={'2xl'}>favorite restaurants</Heading>
<Heading size={'2xl'}>to your table</Heading>

<Text className='fifthOmgText'>Pretium lectus quam id leo in vitae turpis massa sed. 
  Lorem donec massa sapien faucibus et molestie. Vitae elementum curabitur vitae nunc.</Text>
<Button mt={'4%'} className='seeBtn'>ORDER NOW</Button>
  </Box>


  </Box>


  <Box className='fifth2'>
    <Box className='fifth2Head'>
      <Heading>Service shows good taste.</Heading>
    </Box>
    <Box className='fifth2Box'>
      <Heading color='#f4b030'>976</Heading>
      <Text className='fifthText'>Satisfied Customer</Text>
    </Box>
    <Box className='fifth2Box'>
    <Heading color='#f4b030'>12</Heading>
      <Text className='fifthText'>Best Restaurants</Text>
    </Box>
    <Box className='fifth2Box'>
    <Heading color='#f4b030'>1K+</Heading>
      <Text className='fifthText'>Food Delivered</Text>
    </Box>
  </Box>

</Box>

<Box className='sixBox'>

<Box className='sixBox1'>
  <Heading size={'2xl'}>What customers</Heading>
  <Heading size={'2xl'}>say about us</Heading>
  <Box className='sixBox2'>
    <Text className='sixText'>In literary theory, a text is any object that can be "read", whether this object is a work of literature, a street sign, an arrangement of buildings on a city block, or styles of clothing.
      kind of informative message.</Text>
        <Box className='sixSecondBox'>
          <Image width={'10%'} src='https://freepngimg.com/static/img/cat/emoji.png'></Image>
          <Box>
            <Text>Dibakar Debnath</Text>
             <i style={{color:"#f29f05"}} class="fa-solid fa-star"></i>
             <i style={{color:"#f29f05"}}class="fa-solid fa-star"></i> 
             <i style={{color:"#f29f05"}}class="fa-solid fa-star"></i>
             <i style={{color:"#f29f05"}}class="fa-solid fa-star"></i>
             <i class="fa-regular fa-star"></i>
          </Box>
        </Box>
  </Box>
  <Box className='sixThirdBox'>
    <Button><i class="fa-solid fa-arrow-right fa-rotate-180"></i></Button>
    <Button><i class="fa-solid fa-arrow-right"></i></Button>
  </Box>
</Box>
<Box className='sixImg'>
  <Image src='https://quickeat-react.vercel.app/assets/img/photo-4.png'></Image>
</Box>

</Box>

<Box className='seventhBox'>

<Box className='sevenBoxHead'>
  <Heading size={'2xl'}>Want to Join Partnership</Heading>
</Box>

<Box className='seventhBox2'>

  <Box className='container'>
    <Box className='ImgOverBox'>
    <Image borderRadius={'10px'} src='https://www.velents.com/wp-content/uploads/2023/07/633f2be19afb07633550bc82_BikeCourier_2-job-description.jpeg'></Image>

      <Heading  className='Heading-left'>Join Courier</Heading>
      <Button colorScheme='#f29f05' className='bottom-left'>LEARN MORE</Button>
    </Box>
    <Box className='borderBox'></Box>
  </Box>


  <Box className='container'>
    <Box className='ImgOverBox'>
    <Image  borderRadius={'10px'} src='https://www.velents.com/wp-content/uploads/2023/07/633f2be19afb07633550bc82_BikeCourier_2-job-description.jpeg'></Image>

      <Heading  className='Heading-left'>Join Merchant</Heading>
      <Button colorScheme='#f29f05' className='bottom-left'>LEARN MORE</Button>
    </Box>
  </Box>

</Box>
</Box>

<Box className='eightBox'>

<Box className='eightBox2'>
<Heading size={'2xl'}>Latest news and</Heading>
<Heading  size={'2xl'}>events</Heading>
</Box>

<Box className='eightBox3'>

  <Box className='eightBox31'>
    <Image borderRadius={'10px'} src='https://quickeat-react.vercel.app/assets/img/photo-8.jpg'></Image>
     <Heading mt={'3%'}>We Have Recived An Award For 
      The Quality Of Our Work</Heading>
      <Text color={'#8d8d8d'} mt={'3%'}>Donec adipiscing tristique risus nec feugiat in fermentum. Sapien eget mi proin sed libero. Et magnis dis 
        parturient montes nascetur. Praesent semper 
        feugiat nibh sed pulvinar proin gravida.</Text>
       <Text fontSize={'xl'} m={'3% 0px'} color={'#f29f05'}>Read More  <i class="fa-solid fa-arrow-right"></i></Text>
      
       <hr />
       <Box className='eightEnd'>
        <Text color={'gray'}><i class="fa-solid fa-user"></i> by FoodZone</Text>
        <Text color={'gray'}><i class="fa-solid fa-calendar-days"></i> 01.Jan.2023</Text>
        <Text color={'gray'}><i class="fa-solid fa-eye"></i> 123</Text>

       </Box>
  </Box>

  <Box className='eightBox32'>

<Box className='eightFlexBox'>

  <Box className='flexBox1'><Image borderRadius={'10px'} src='https://quickeat-react.vercel.app/assets/img/food-1.jpg'></Image></Box>
  <Box className='flexBox2'>
    <Box className='btnBox'>
  <Button size='sm' bg={'#f29f05'} color={'white'}>restaurants</Button>
  <Button size='sm' bg={'#f29f05'} color={'white'}>cooking</Button>

    </Box>
    <Heading m={'3% 0%'} size={'md'}>With Quickeat you can order food for the whole day</Heading>
    <hr />
       <Box className='eightEnd'>
        <Text color={'gray'}><i class="fa-solid fa-user"></i> by FoodZone</Text>
        <Text color={'gray'}><i class="fa-solid fa-calendar-days"></i> 01.Jan.2023</Text>
        <Text color={'gray'}><i class="fa-solid fa-eye"></i> 123</Text>

       </Box>
  </Box>

</Box>

<Box className='eightFlexBox'>

  <Box className='flexBox1'><Image borderRadius={'10px'} src='https://quickeat-react.vercel.app/assets/img/food-1.jpg'></Image></Box>
  <Box className='flexBox2'>
    <Box className='btnBox'>
  <Button size='sm' bg={'#f29f05'} color={'white'}>restaurants</Button>
  <Button size='sm' bg={'#f29f05'} color={'white'}>cooking</Button>

    </Box>
    <Heading m={'3% 0%'} size={'md'}>With Quickeat you can order food for the whole day</Heading>
    <hr />
       <Box className='eightEnd'>
        <Text color={'gray'}><i class="fa-solid fa-user"></i> by FoodZone</Text>
        <Text color={'gray'}><i class="fa-solid fa-calendar-days"></i> 01.Jan.2023</Text>
        <Text color={'gray'}><i class="fa-solid fa-eye"></i> 123</Text>

       </Box>
  </Box>

</Box>

<Box className='eightFlexBox'>

  <Box className='flexBox1'><Image borderRadius={'10px'} src='https://quickeat-react.vercel.app/assets/img/food-1.jpg'></Image></Box>
  <Box className='flexBox2'>
    <Box className='btnBox'>
  <Button size='sm' bg={'#f29f05'} color={'white'}>restaurants</Button>
  <Button size='sm' bg={'#f29f05'} color={'white'}>cooking</Button>

    </Box>
    <Heading m={'3% 0%'} size={'md'}>With Quickeat you can order food for the whole day</Heading>
    <hr />
       <Box className='eightEnd'>
        <Text color={'gray'}><i class="fa-solid fa-user"></i> by FoodZone</Text>
        <Text color={'gray'}><i class="fa-solid fa-calendar-days"></i> 01.Jan.2023</Text>
        <Text color={'gray'}><i class="fa-solid fa-eye"></i> 123</Text>

       </Box>
  </Box>

</Box>


  </Box>


</Box>



</Box>

<Box className='ninthBox'>

  <Box  className='ninthBox1'>
    <Image src='https://quickeat-react.vercel.app/assets/img/illustration-4.png'></Image>
  </Box>

  <Box  className='ninthBox2'>
    <Heading  size={'2xl'}>Get the menu of</Heading>
    <Heading size={'2xl'}  mt={'2%'}>your favorite</Heading>
    <Heading size={'2xl'}  mt={'2%'}>restaurants every</Heading>
    <Heading size={'2xl'}  mt={'2%'}>day</Heading>

    <Box  className='ninthBox3'>
      
      <Input type="email" placeholder="Enter email address"></Input>
      <Button size='lg' color={'white'} colorScheme='yellow'>SUBSCRIBE</Button>
    </Box>
  </Box>


</Box>
    

    </Box>
}