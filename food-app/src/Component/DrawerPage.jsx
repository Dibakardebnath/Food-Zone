// import {
//     Drawer,
//     DrawerBody,
//     DrawerFooter,
//     DrawerHeader,
//     DrawerOverlay,
//     DrawerContent,
//     DrawerCloseButton,
//     useDisclosure,
//     Button,
//   } from '@chakra-ui/react'
// import React from 'react'

// export const DrawerPage=()=> {
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     const btnRef = React.useRef()

//     return (
//       <>
//         <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
//           Open
//         </Button>
//         <Drawer
//           isOpen={isOpen}
//           placement='right'
//           onClose={onClose}
//           finalFocusRef={btnRef}
//         >
//           <DrawerOverlay />
//           <DrawerContent>
//             <DrawerCloseButton />
//             <DrawerHeader>Create your account</DrawerHeader>
// {/*
//             <DrawerBody>
//               <Input placeholder='Type here...' />
//             </DrawerBody> */}

//             <DrawerFooter>
//               <Button variant='outline' mr={3} onClick={onClose}>
//                 Cancel
//               </Button>
//               <Button colorScheme='blue'>Save</Button>
//             </DrawerFooter>
//           </DrawerContent>
//         </Drawer>
//       </>
//     )
//   }

// CartDrawer.js
import React from "react";
import {
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerCloseButton,
  Box,
} from "@chakra-ui/react";

export const DrawerPage = () => {
    return (
      <>
      
        <DrawerHeader>Cart</DrawerHeader>
        <DrawerCloseButton />
        <DrawerBody>
          {/* Cart items go here */}
        </DrawerBody>
        <DrawerFooter>
          {/* Cart footer (e.g., total amount, checkout button) */}
        </DrawerFooter>
      </>
    );
  
};
