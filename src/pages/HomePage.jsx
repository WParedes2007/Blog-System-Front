import { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import PostList from "../components/posts/PostList.jsx";

const HomePage = () => {
  return (
    <Box p={8}>
      <Heading as="h2" size="lg" mb={6}></Heading>
      <PostList />
    </Box>
  );
};

export default HomePage;