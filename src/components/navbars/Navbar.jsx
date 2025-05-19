import { Box, Flex, IconButton, Heading, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaHome, FaLaptopCode } from "react-icons/fa"; 

const Navbar = () => {
  return (
    <Box bg="teal.500" color="white" px={6} py={4} boxShadow="md">
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center" gap={2}>
          <FaLaptopCode fontSize="1.5rem" color="white" /> 
          <Heading as="h1" size="lg" fontWeight="bold">
              <Text as="span" display="inline" color="white">
                Tecno Blog
              </Text>
          </Heading>
        </Flex>

        <Flex gap={4} alignItems="center">
          <IconButton
            as={RouterLink}
            to="/home"
            icon={<FaHome />}
            aria-label="Home"
            color="white"
            variant="ghost"
            fontSize="1.5rem"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;