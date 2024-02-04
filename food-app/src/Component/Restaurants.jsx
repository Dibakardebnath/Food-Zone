
import { Box, Heading, Image, Select, Text } from '@chakra-ui/react'
import './Restaurants.css'


export const Restaurants=()=>{
  if ("geolocation" in navigator) {
    console.log("Geolocation is supported");
  } else {
    // Geolocation is not supported
    console.log("Geolocation is not supported in this browser");
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      // Handle successful location retrieval
      const { latitude, longitude } = position.coords;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    },
    (error) => {
      // Handle error (e.g., user denied permission)
      console.error("Error getting location:", error.message);
    }
  );
    return <Box>

     <Box className='restFirstBox'>
      <Box className='restFirstBox1'>
      <Text color={"gray"} mt={"4%"}>
            Home{" "}
            <i style={{ color: "#f29f05" }} class="fa-solid fa-arrow-right"></i>{" "}
            <span style={{ color: "black", fontWeight: "bold" }}>Restaurants</span>
          </Text>
          <Heading mt={'5%'} size={'2xl'}>Restaurants</Heading>
          <Text mt={'6%'}  w={'90%'} >Egestas sed tempus urna et pharetra pharetra massa.
             Fermentum posuere urna nec tincidunt praesent semper.</Text>
             <Select mt={'10%'}  placeholder='Choose a Restaurants' h={'3.5em'} w={'90%'}>
  <option value='option1'>Restaurants no 1</option>
  <option value='option2'>Restaurants no 2</option>
  <option value='option3'>Restaurants no 3</option>
  <option value='option3'>Restaurants no 3</option>
  <option value='option3'>Restaurants no 3</option>
  <option value='option1'>Restaurants no 1</option>
  <option value='option2'>Restaurants no 2</option>
  <option value='option3'>Restaurants no 3</option>
  <option value='option3'>Restaurants no 3</option>
  <option value='option3'>Restaurants no 3</option>
</Select>
      </Box>
      <Box className='restFirstBox2'>
        <Image w={'90%'} border={'1px solid'} margin={'auto'} src='https://quickeat-react.vercel.app/assets/img/photo-11.png'></Image>
      </Box>
     </Box>
    </Box>
}