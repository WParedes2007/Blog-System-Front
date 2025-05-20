import { Box, Button, Input, Textarea, VStack, Text, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { addComment, updateComment } from "../../services/api.jsx"; 

const CommentForm = ({ postId, onCommentAdded, commentToEdit, onCancelEdit }) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const toast = useToast();

  useEffect(() => {
    if (commentToEdit) {
      setName(commentToEdit.name || "");
      setContent(commentToEdit.content || "");
    }
  }, [commentToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content) {
      setError("El comentario no puede estar vacío.");
      return;
    }

    setLoading(true);
    setError(""); 

    try {
      if (commentToEdit) {
        const response = await updateComment(commentToEdit._id, { name, content });
        if (!response.error) {
          setName("");
          setContent("");
          onCommentAdded();
          toast({
            title: "Comentario actualizado",
            description: "Tu comentario fue actualizado exitosamente.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        } else {
          setError("Error al actualizar el comentario. Intenta nuevamente.");
          toast({
            title: "Error",
            description: "Hubo un problema al actualizar tu comentario.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      } else {
        const response = await addComment({ postId, name, content });
        if (!response.error) {
          setName("");
          setContent("");
          onCommentAdded(); 
          toast({
            title: "Comentario agregado",
            description: "Tu comentario fue agregado exitosamente.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        } else {
          setError("Error al agregar el comentario. Intenta nuevamente.");
          toast({
            title: "Error",
            description: "Hubo un problema al agregar tu comentario.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Error al agregar o actualizar el comentario. Intenta nuevamente.");
      toast({
        title: "Error",
        description: "Hubo un problema al agregar o actualizar tu comentario.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
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
        {error && <Text color="red.500">{error}</Text>}
        <Button type="submit" colorScheme="teal" isLoading={loading}>
          {loading ? "Enviando..." : commentToEdit ? "Actualizar Comentario" : "Agregar Comentario"}
        </Button>
        {commentToEdit && (
          <Button onClick={onCancelEdit} colorScheme="gray" mt={2}>
            Cancelar
          </Button>
        )}
      </VStack>
    </Box>
  );
};

export default CommentForm;
