import { Box, Heading, Image, Button, Select, Text } from "@chakra-ui/react";
import "./Restaurants.css";
import { useEffect, useState } from "react";

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

  // truy    ...........................................
  // const [state, setState] = useState([]);
  // const [list, setList] = useState([]);

  // const [filterRestaurant, setFilterRestaurant] = useState(list);
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  //   // const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.2893144&lng=80.4604643&is-seo-homepage-enabled=true');
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667"
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   console.log("yes");
  //   // console.log("apiData", json?.data.cards[3]);

  //   // console.log("text", json?.data?.cards);
  //   setList(
  //     json?.data?.cards[11]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   console.log(setList);
  //   // setFilterRestaurant(
  //   //   json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   // );
  // };






  return (
    <Box mb={'2%'}>
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
     <Heading className="image-Heading" size={'2xl'} mt={'2%'}>Choose 2 lunches</Heading>
      <Heading className="image-Heading2" size={'2xl'} mt={'2%'}>pay for one</Heading> 
      <Button className="image-button" mt={'4%'}> ORDER NOW <i style={{marginLeft:"10px"}} class="fa-solid fa-arrow-right"></i></Button>
       
     </Box>
       
        </Box>

     
      </Box>
    
    </Box>
  );
};
