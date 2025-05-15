import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import PostDetails from "../components/posts/PostDetails.jsx";

const PostDetailsPage = () => {
  const { id } = useParams();

  return (
    <Box p={8}>
      <PostDetails postId={id} />
    </Box>
  );
};

export default PostDetailsPage;