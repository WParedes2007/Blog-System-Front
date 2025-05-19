import { Box, Text, Flex } from "@chakra-ui/react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="teal.500" color="white" py={4} mt={8} boxShadow="md">
      <Flex justifyContent="center" alignItems="center" gap={2}>
        <FaRegCopyright />
        <Text fontSize="sm">WParedes-2020379 Derechos Reservados</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
