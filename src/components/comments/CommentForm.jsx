import { Box, Button, Input, Textarea, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { addComment } from "../../services/api.jsx";

const CommentForm = ({ postId, onCommentAdded }) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addComment({ postId, name, content });
      if (!response.error) {
        setName("");
        setContent("");
        onCommentAdded(); // Actualiza la lista de comentarios
      } else {
        console.error("Error al agregar el comentario:", response.e);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} mt={6}>
      <VStack spacing={4}>
        <Input
          placeholder="Tu nombre (opcional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Textarea
          placeholder="Escribe tu comentario"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <Button type="submit" colorScheme="teal">Agregar Comentario</Button>
      </VStack>
    </Box>
  );
};

export default CommentForm;