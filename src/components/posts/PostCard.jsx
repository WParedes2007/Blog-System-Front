import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => (
  <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
    <Heading as="h3" size="md">{post.title}</Heading>
    <Text mt={2}>{post.description}</Text>
    <Text mt={2} fontStyle="italic" color="gray.600">
      Curso: {post.course?.name || "No especificado"} {/* Accede al campo `name` */}
    </Text>
    <Button as={Link} to={`/posts/${post._id}`} mt={4} colorScheme="teal">
      Ver Detalles
    </Button>
  </Box>
);

export default PostCard;