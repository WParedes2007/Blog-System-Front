import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import PostDetails from "../components/posts/PostDetails.jsx";
import Footer from "../components/footer/Footer.jsx";

const PostDetailsPage = () => {
  const { id } = useParams();

  return (
    <>
    <Box p={0} bg="transparent">
      <PostDetails postId={id} />
    </Box>
    <Footer />
    </>
  );
};

export default PostDetailsPage;