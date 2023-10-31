

// import { FaShoppingCart } from 'react-icons/fa';
import { DeleteIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, Icon, Image} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import './Nav.css'


export const Nav=()=>{
    return <Box className='navbar' >

     <Box className='navPart1'>
       
     <Box className='imagebar'>
     <Image
    border={'1px solid'}
  borderRadius='full'
  boxSize='40px'
  src='https://png.pngtree.com/png-clipart/20211116/original/pngtree-cute-cartoon-image-of-female-chef-png-image_6939410.png'
  alt='Dan Abramov'
/>
<Heading size={'md'}>Food<span>Zone</span></Heading>
     </Box>
     <Box className='pagebar'>
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/about us'}>About Us</NavLink></li>
      <li><NavLink to={'/contacts'}>Contacts</NavLink></li>

       <li><NavLink to={'/pages'}>Pages</NavLink></li>
       <li><NavLink to={'/restaurants'}>Restaurants</NavLink></li>
     </Box>

     </Box>

     <Box className='navPart2'>
      <Button className='cart' colorScheme='white'><i style={{color:"#f29f05",}} class="fa-solid fa-bag-shopping"></i></Button>
      <Button bg={'#f29f05'} borderRadius={'10px'} color={'white'}>ORDER NOW</Button>
     </Box>

    </Box>
}