import { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { getPostById, getCommentsByPostId } from "../../services/api.jsx";
import CommentForm from "../comments/CommentForm.jsx";
import CommentList from "../comments/CommentList.jsx";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await getPostById(id);
      if (!response.error) {
        setPost(response.data);
      } else {
        console.error("Error al obtener la publicación:", response.e);
      }
    };

    const fetchComments = async () => {
      const response = await getCommentsByPostId(id);
      if (!response.error) {
        setComments(response.data);
      } else {
        console.error("Error al obtener los comentarios:", response.e);
      }
    };

    fetchPost();
    fetchComments();
  }, [id]);

  const handleCommentAdded = () => {
    fetchComments();
  };

  return (
    <Box p={8}>
      <Heading as="h2" size="lg">{post.title}</Heading>
      <Text mt={4}>{post.description}</Text>
      <Text mt={4} fontStyle="italic" color="gray.600">
        Curso: {post.course?.name || "No especificado"}
      </Text>
      <CommentForm postId={id} onCommentAdded={handleCommentAdded} />
      <CommentList comments={comments} />
    </Box>
  );
};

export default PostDetails;