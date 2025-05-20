import {
  Box,
  Text,
  Avatar,
  Flex,
  IconButton,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";

const CommentList = ({ comments, handleDelete, handleEdit }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const [selectedCommentObj, setSelectedCommentObj] = useState(null);
  const cancelRef = useRef();

  const openDeleteDialog = (commentId) => {
    setSelectedCommentId(commentId);
    setIsDeleteOpen(true);
  };

  const confirmDelete = () => {
    handleDelete(selectedCommentId);
    setIsDeleteOpen(false);
    setSelectedCommentId(null);
  };

  const openEditDialog = (comment) => {
    setSelectedCommentObj(comment);
    setIsEditOpen(true);
  };

  const confirmEdit = () => {
    handleEdit(selectedCommentObj);
    setIsEditOpen(false);
    setSelectedCommentObj(null);
  };

  return (
    <Box mt={6}>
      {comments.map((comment) => (
        <Box key={comment._id} borderWidth="1px" borderRadius="lg" p={4} mb={4}>
          <Flex align="center" justify="space-between" gap={3}>
            <Flex align="center" gap={3}>
              <Avatar bg="orange.400" size="sm" name={comment.name || "Anónimo"} />
              <Text fontWeight="bold">{comment.name || "Anónimo"}</Text>
            </Flex>
            <Flex gap={2}>
              <IconButton
                icon={<EditIcon />}
                aria-label="Editar comentario"
                size="sm"
                colorScheme="teal"
                onClick={() => openEditDialog(comment._id)} 
              />

              <IconButton
                icon={<DeleteIcon />}
                aria-label="Eliminar comentario"
                size="sm"
                colorScheme="red"
                onClick={() => openDeleteDialog(comment._id)} 
              />
            </Flex>
          </Flex>
          <Text mt={2}>{comment.content}</Text>
        </Box>
      ))}

      {/* Confirmación de eliminación */}
      <AlertDialog
        isOpen={isDeleteOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => setIsDeleteOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Eliminar Comentario
            </AlertDialogHeader>
            <AlertDialogBody>
              ¿Estás seguro? Esta acción eliminará el comentario de forma permanente.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => setIsDeleteOpen(false)}>
                Cancelar
              </Button>
              <Button colorScheme="red" onClick={confirmDelete} ml={3}>
                Confirmar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      {/* Confirmación de edición */}
      <AlertDialog
        isOpen={isEditOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => setIsEditOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Editar Comentario
            </AlertDialogHeader>
            <AlertDialogBody>
              ¿Quieres editar este comentario?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => setIsEditOpen(false)}>
                Cancelar
              </Button>
              <Button colorScheme="teal" onClick={confirmEdit} ml={3}>
                Confirmar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default CommentList;

