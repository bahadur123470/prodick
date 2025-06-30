import { Box, Flex, Text, Spacer, IconButton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaSun, FaPlus } from 'react-icons/fa';

const Navbar = () => (
    <Box bg='gray.800' p={4} color='white'>
        <Flex align='center'>
        <Text fontSize='xl' fontWeight='bold' color='blue.300'>PRODUCT STORE</Text>
        <Spacer />
        <Link to='/create'>
            <IconButton icon={<FaPlus />} mr={2} />
        </Link>
        <IconButton icon={<FaSun />} />
        </Flex>
    </Box>
);
export default Navbar;
