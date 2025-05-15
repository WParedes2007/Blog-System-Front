import { useEffect, useState } from "react";
import { Box, Heading, Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Grid } from "@chakra-ui/react";
import { FaBook } from "react-icons/fa"; 
import PostCard from "./PostCard.jsx";
import { getPosts } from "../../services/api.jsx";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      if (!response.error) {
        console.log("Publicaciones obtenidas:", response.data);
        setPosts(response.data);
        setFilteredPosts(response.data);

        const uniqueCourses = [
          ...new Set(response.data.map((post) => post.course?.name || "Sin curso")),
        ];
        setCourses(uniqueCourses);
      } else {
        console.error("Error al obtener las publicaciones:", response.e);
      }
    };
    fetchPosts();
  }, []);

  const handleCourseChange = (course) => {
    setSelectedCourse(course);

    if (course === "Todos") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter((post) => post.course?.name === course));
    }
  };

  return (
    <Box p={8}>
      {/* Filtro de cursos */}
      <Flex align="center" mb={6}>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FaBook />}
            colorScheme="cyan"
            variant="outline"
            mr={2}
            aria-label="Cursos"
          />
          <MenuList>
            <MenuItem onClick={() => handleCourseChange("Todos")}>Todos</MenuItem>
            {courses.map((course) => (
              <MenuItem key={course} onClick={() => handleCourseChange(course)}>
                {course}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Heading as="h3" size="md">
          Cursos
        </Heading>
      </Flex>

      {/* Lista de publicaciones */}
      <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
        {filteredPosts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </Grid>
    </Box>
  );
};

export default PostList;