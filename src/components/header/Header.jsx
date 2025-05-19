import { Box, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="teal.500" color="white" py={4} px={8}>
      <Heading as="h1" size="lg">Blog System</Heading>
    </Box>
  );
};

export default Header;