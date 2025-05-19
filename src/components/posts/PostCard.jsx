import { Box, Heading, Text, Button, Flex, IconButton, Badge } from "@chakra-ui/react";
import { FaLaptopCode } from "react-icons/fa"; 
import { Link } from "react-router-dom";

const PostCard = ({ post }) => (
  <Box
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    bg="cyan.50"
    _hover={{ boxShadow: "lg" }}
    transition="0.3s"
    w="250px" 
    h="300px" 
  >
    <Box bg="orange.400" h="50%" position="relative">
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        color="white"
        fontSize="2rem"
      >
        <FaLaptopCode /> 
      </Box>
    </Box>

    <Box p={4}>
      <Flex justify="space-between" align="center" mb={2}>
        <Heading as="h3" size="sm" color="cyan.800">
          {post.title}
        </Heading>
        <Badge colorScheme="orange" fontSize="0.7em">
          {post.course?.name || "Sin curso"}
        </Badge>
      </Flex>
      <Text
        fontSize="xs"
        color="gray.600"
        mb={4}
        noOfLines={2} 
      >
        {post.description}
      </Text>

      <Flex justify="space-between" align="center">
        <Button
          as={Link}
          to={`/posts/${post._id}`}
          size="xs"
          colorScheme="cyan"
          variant="outline"
        >
          Leer más →
        </Button>
        <IconButton
          icon={<FaLaptopCode />}
          aria-label="Like"
          size="sm"
          color="orange.400"
          variant="ghost"
        />
      </Flex>
    </Box>
  </Box>
);

export default PostCard;