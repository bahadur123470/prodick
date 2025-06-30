import { Box, Input, Button, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePage = () => {
  const [product, setProduct] = useState({ title: '', price: '', image: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/products', product);
    navigate('/');
  };

  return (
    <Box p={6} maxW='500px' mx='auto'>
      <VStack spacing={4} as='form' onSubmit={handleSubmit}>
        <Input placeholder='Title' onChange={e => setProduct({ ...product, title: e.target.value })} />
        <Input placeholder='Price' type='number' onChange={e => setProduct({ ...product, price: e.target.value })} />
        <Input placeholder='Image URL' onChange={e => setProduct({ ...product, image: e.target.value })} />
        <Button colorScheme='blue' type='submit'>Add Product</Button>
      </VStack>
    </Box>
  );
};
export default CreatePage;
