import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import PostCard from "./PostCard.jsx";
import { getPosts } from "../../services/api.jsx";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      if (!response.error) {
        console.log("Publicaciones obtenidas:", response.data); // Verifica los datos aquí
        setPosts(response.data);
      } else {
        console.error("Error al obtener las publicaciones:", response.e);
      }
    };
    fetchPosts();
  }, []);

  return (
    <Box p={8}>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </Box>
  );
};

export default PostList;