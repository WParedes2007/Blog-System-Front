import { Box, Text, Avatar, Flex } from "@chakra-ui/react";

const CommentList = ({ comments }) => {
  return (
    <Box mt={6}>
      {comments.map((comment) => (
        <Box key={comment._id} borderWidth="1px" borderRadius="lg" p={4} mb={4}>
          <Flex align="center" gap={3}>
            <Avatar bg="orange.400" size="sm" name={comment.name || "Anónimo"} />
            <Text fontWeight="bold">{comment.name || "Anónimo"}</Text>
          </Flex>
          <Text mt={2}>{comment.content}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default CommentList;