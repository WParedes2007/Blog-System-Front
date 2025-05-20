import { useEffect, useState } from "react";
import { Box, Heading, Text, IconButton, Flex, VStack, Collapse, Badge } from "@chakra-ui/react";
import { FaHeart, FaRegHeart, FaComment } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { getPostById, getCommentsByPostId, deleteComment, updateComment } from "../../services/api.jsx"; // Asegúrate de tener estas funciones
import CommentForm from "../comments/CommentForm.jsx";
import CommentList from "../comments/CommentList.jsx";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const fetchComments = async () => {
      const response = await getCommentsByPostId(id);
      if (!response.error) {
        setComments(response.data);
      } else {
        console.error("Error al obtener los comentarios:", response.e);
      }
  };

  const fetchPost = async () => {
      const response = await getPostById(id);
      if (!response.error) {
        setPost(response.data);
        setLikes(response.data.likes || 0);
      } else {
        console.error("Error al obtener la publicación:", response.e);
      }
    };

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [id]);

  const handleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleCommentAdded = () => {
    fetchComments();
  };

  const handleDelete = async (commentId) => {
    try {
      // Implementar la lógica para eliminar el comentario en el backend
      const response = await deleteComment(commentId);
      if (!response.error) {
        setComments(comments.filter((comment) => comment._id !== commentId)); // Actualiza el estado de los comentarios
      }
    } catch (error) {
      console.error("Error al eliminar el comentario:", error);
    }
  };

  const handleEdit = async (commentId) => {
    const newContent = prompt("Edita tu comentario:"); // Aquí se podría reemplazar por un modal
    if (!newContent) return;

    try {
      // Llamada para actualizar el comentario en el backend
      const response = await updateComment(commentId, newContent);
      if (!response.error) {
        setComments(comments.map((comment) =>
          comment._id === commentId ? { ...comment, content: newContent } : comment
        ));
      }
    } catch (error) {
      console.error("Error al editar el comentario:", error);
    }
  };

  return (
    <Box p={8} maxW="600px" mx="auto" borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white">
      <Flex align="center" mb={4}>
        <Box bg="orange.400" w="40px" h="40px" borderRadius="full" mr={3}></Box>
        <Heading as="h3" size="md">{post.title}</Heading>
      </Flex>

      <Text mb={4}>{post.description}</Text>
      <Flex align="center" mb={4}>
        <Text fontWeight="bold" mr={2}>Curso:</Text>
        <Badge bg="cyan.700" px={2} py={1} borderRadius="md" color="white">
          {post.course?.name || "No especificado"}
        </Badge>
      </Flex>

      <Flex align="center" gap={4} mb={4}>
        <IconButton
          icon={<FaHeart />}
          aria-label="Like"
          variant="ghost"
          colorScheme="orange.400" 
        />

        <IconButton
          icon={<FaComment />}
          onClick={() => setShowComments(!showComments)}
          aria-label="Comments"
          variant="ghost"
        />
        <Text>{comments.length} comentarios</Text>
      </Flex>

      <Collapse in={showComments} animateOpacity>
        <VStack spacing={4} align="stretch">
          <CommentList 
            comments={comments} 
            handleDelete={handleDelete} 
            handleEdit={handleEdit} 
          />
          <CommentForm postId={id} onCommentAdded={handleCommentAdded} />
        </VStack>
      </Collapse>
    </Box>
  );
};

export default PostDetails;
