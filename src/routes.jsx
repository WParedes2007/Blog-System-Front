import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostDetailsPage from "./pages/PostDetailsPage";
import PostList from "./components/posts/PostList"; // Importa el componente PostList

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/posts" element={<PostList />} /> {/* Nueva ruta */}
      <Route path="/posts/:id" element={<PostDetailsPage />} />
    </Routes>
  );
};

export default AppRoutes;