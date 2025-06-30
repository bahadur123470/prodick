import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data));
  }, []);

  return (
    <Box p={6}>
      <Heading mb={4} color='blue.400'>Current Products 🚀</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {products.map(product => (
          <ProductCard key={product._id} product={product} setProducts={setProducts} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
export default HomePage;
