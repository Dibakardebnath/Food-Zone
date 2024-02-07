import { Box, Button, Drawer, Heading, Icon, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { DrawerPage } from "./DrawerPage";
import "./Nav.css";
import { useState } from "react";

export const Nav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <Box className="navbar">
      <Box className="navPart1">
        <Box className="imagebar">
          <Image
            border={"1px solid"}
            borderRadius="full"
            boxSize="40px"
            src="https://png.pngtree.com/png-clipart/20211116/original/pngtree-cute-cartoon-image-of-female-chef-png-image_6939410.png"
            alt="Dan Abramov"
          />
          <Heading size={"md"}>
            Food<span>Zone</span>
          </Heading>
        </Box>
        <Box className="pagebar">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about us"}>About Us</NavLink>
          </li>
          <li className="dropdown">
            <NavLink to={"/restaurants"}>Restaurants</NavLink>
            <div className="dropdown-content">
              <p>Restaurant</p>
              <p>Restaurants Card</p>
              <p>Checkout</p>
            </div>
          </li>
          <li>
            <NavLink to={"/pages"}>Pages</NavLink>
          </li>
          <li>
            <NavLink to={"/contacts"}>Contacts</NavLink>
          </li>
        </Box>
      </Box>

      <Box className="navPart2">
        <Button onClick={toggleDrawer} className="cart" colorScheme="white">
          <i style={{ color: "#f29f05" }} class="fa-solid fa-bag-shopping"></i>

          <Drawer
        isOpen={isDrawerOpen}
        placement="right"
        onClose={toggleDrawer}
      >
        <DrawerPage />
      </Drawer>
        </Button>
        <Button bg={"#f29f05"} borderRadius={"10px"} color={"white"}>
          ORDER NOW
        </Button>
      </Box>
    </Box>
  );
};
