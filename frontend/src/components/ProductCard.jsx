import { Box, Image, Text, Button, Flex } from '@chakra-ui/react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';

const ProductCard = ({ product, setProducts }) => {
  const deleteProduct = async () => {
    await axios.delete(`http://localhost:5000/api/products/${product._id}`);
    const res = await axios.get('http://localhost:5000/api/products');
    setProducts(res.data);
  };

  return (
    <Box bg='gray.700' p={4} rounded='md'>
      <Image src={product.image} h='200px' w='100%' objectFit='cover' rounded='md' mb={3} />
      <Text fontWeight='bold'>{product.title}</Text>
      <Text mb={3}>${product.price.toFixed(2)}</Text>
      <Flex gap={2}>
        <Button leftIcon={<FaEdit />} colorScheme='blue'>
          Edit
        </Button>
        <Button leftIcon={<FaTrash />} colorScheme='pink' onClick={deleteProduct}>
          Delete
        </Button>
      </Flex>
    </Box>
  );
};
export default ProductCard;