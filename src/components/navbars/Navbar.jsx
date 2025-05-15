import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" color="white" px={6} py={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          <RouterLink to="/home">Blog System</RouterLink>
        </Heading>
        <Flex gap={4}>
          <Link as={RouterLink} to="/home" color="white">Home</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;