import { Box, Heading, Image, Button, Select, Text } from "@chakra-ui/react";
import "./Restaurants.css";

export const Restaurants = () => {
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
  return (
    <Box>
      <Box className="restFirstBox">
        <Box className="restFirstBox1">
          <Text color={"#7883a3"} mt={"4%"}>
            Home{" "}
            <i style={{ color: "#f29f05" }} class="fa-solid fa-arrow-right"></i>{" "}
            <span style={{ color: "black", fontWeight: "normal", letterSpacing:"1px" }}>
              Restaurants
            </span>
          </Text>
          <Heading mt={"5%"} size={"2xl"} fontStyle={'oblique'}>
            Restaurants
          </Heading>
          <Text mt={"6%"} w={"90%"} color={'#7883a3'}>
            Egestas sed tempus urna et pharetra pharetra massa. Fermentum
            posuere urna nec tincidunt praesent semper.
          </Text>
          <Select
            mt={"10%"}
            placeholder="Choose a Restaurants"
            h={"3.5em"}
            w={"90%"}
          >
            <option value="option1">Restaurants no 1</option>
            <option value="option2">Restaurants no 2</option>
            <option value="option3">Restaurants no 3</option>
            <option value="option3">Restaurants no 3</option>
          </Select>
        </Box>
        <Box className="restFirstBox2">
          <Image
            w={"90%"}
            // border={"1px solid"}
            margin={"auto"}
            src="https://quickeat-react.vercel.app/assets/img/photo-11.png"
          ></Image>
        </Box>
      </Box>
      <Box className="restSecondBox">

      <Box className="image-SecondBox">
        <Box className="image-SecondBox1">

          <Box className="image-HeadingBox">
            <Heading size={'md'}> Restraunt of the month</Heading>
         
          </Box>
        <Box className="image-SecondBox2">
          <Image borderRadius={'5px'} src="https://quickeat-react.vercel.app/assets/img/logo-s.jpg"></Image>
           <Heading size={'md'}>The Wilmington</Heading>
        </Box>

        </Box>
      
     <Box className="chooseImg-Box">
     <Heading className="image-Heading">Choose 2 lunches</Heading>
      <Heading className="image-Heading2">pay for one</Heading> 
      <Button className="image-button"> ORDER NOW <i style={{marginLeft:"10px"}} class="fa-solid fa-arrow-right"></i></Button>
       
     </Box>
       
        </Box>

        <Box>
        <Image className="restSecondBox-img" src="https://st2.depositphotos.com/3591429/12544/i/450/depositphotos_125445028-stock-photo-women-hanging-and-eating-together.jpg"></Image>
        </Box>
     
      </Box>

    </Box>
  );
};
