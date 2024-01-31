
import { Box } from '@chakra-ui/react'


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

      <h1>Restaurenst
        Tommorow come3s your day no wory
        Today i am updatinng my website

      </h1>

    </Box>
}