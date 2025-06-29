import { Container, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Container maxW={"1140px"} px={4}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
            base: "column",
            sm: "row",
            }}
        >
            <Text
            fontSize="4xl"
            fontWeight="bold"
            textTransform="uppercase"
            textAlign="center"
            bgGradient="linear(to-r, cyan.400 , blue.500)"
            bgClip="text"
            cursor="pointer"
            _hover={{ bgGradient: "linear(to-r, blue.400, cyan.300)" }}
            >
            <Link to="/">Listify</Link>
            </Text>

            <HStack spacing={2} alignItems={"center"}>
            <Link to={"/create"}>Create</Link>
            </HStack>
        </Flex>
        </Container>
    );
    };

export default Navbar;