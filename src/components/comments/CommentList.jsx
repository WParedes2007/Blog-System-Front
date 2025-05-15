import { Box, Text } from "@chakra-ui/react";

const CommentList = ({ comments }) => {
  return (
    <Box mt={6}>
      {comments.map((comment) => (
        <Box key={comment._id} borderWidth="1px" borderRadius="lg" p={4} mb={4}>
          <Text fontWeight="bold">{comment.name || "Anónimo"}</Text>
          <Text mt={2}>{comment.content}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default CommentList;