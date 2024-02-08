import {
  Box,
  Button,
  Drawer,
  Heading,
  Input,
  Image,
  useDisclosure,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import React from "react";

export const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box className="navbar">
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton className="custom-close-button" fontSize={"2xl"} fontWeight={"bold"}/>
          <DrawerHeader fontSize={"2xl"} fontWeight={"bold"}>Your Order:</DrawerHeader>

          <DrawerBody border={'1px solid'} >
            <Box className="drawer-firstBox">
              <Box className="drawer-firstBox1">
              <Image borderRadius={'10px'} src="https://quickeat-react.vercel.app/assets/img/logo-s.jpg"></Image>
           <Heading size={'md'}>Restraunt Name</Heading>

              </Box>
            
           <Box className="drawer-Remove">
              <Heading size={'md'}>remove</Heading>
              <i class="fa-solid fa-trash"></i>
            </Box>
            </Box>
          
            <Box className="drawer-SecondBox">
              <Image src="https://quickeat-react.vercel.app/assets/img/order-1.png"></Image>
              <Heading size={'md'}  w={'50%'}>Egg, kiwi and sauce chilli</Heading>
              <Heading color={'orange'}>$39</Heading>
            </Box>
            <Box  className="drawer-ThirddBox">
            <Heading>$39</Heading>
            <Box className="button_Box">
              <Button  colorScheme='orange' variant='outline'>-</Button>
              <Button variant={'ghost'} size={'lg'}>1</Button>
              <Button  colorScheme='orange' variant='outline'>+</Button>
            </Box>
            </Box>
            <Box  className="drawer-FourthBox">
            <Heading size={'md'}>sum</Heading>
    
            <Heading size={'md'} mr={'6%'}>quantity</Heading>
           
            </Box>
            <hr style={{border:"1px solid", marginTop:"3%"}}/>
          </DrawerBody>

          <DrawerFooter border={'1px solid'}>
           <Box>
            <Heading>Total order:</Heading>
            <Heading>$45.23</Heading>
           </Box>
           <Box>
            <Heading>To pay:</Heading>
            <Heading>$45.23</Heading>
           </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

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
        <Button
          ref={btnRef}
          onClick={onOpen}
          className="cart"
          colorScheme="white"
        >
          <i style={{ color: "#f29f05" }} class="fa-solid fa-bag-shopping"></i>
        </Button>
        <Button bg={"#f29f05"} borderRadius={"10px"} color={"white"}>
          ORDER NOW
        </Button>
      </Box>
    </Box>
  );
};
