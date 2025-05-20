import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:3000/blogSystem/",
  timeout: 10000,
});

// Métodos relacionados con publicaciones
export const getPosts = async () => {
  try {
    return await apiClient.get("/posts");
  } catch (e) {
    if (e.code === "ECONNABORTED") {
      console.error("La solicitud tardó demasiado en responder.");
    } else {
      console.error("Error al obtener las publicaciones:", e.message);
    }
    return { error: true, e };
  }
};

export const getPostById = async (postId) => {
  try {
    const response = await apiClient.get(`/posts/${postId}`);
    console.log("Datos de la publicación:", response.data); // Verifica los datos aquí
    return response;
  } catch (e) {
    console.error("Error al obtener la publicación:", e.message);
    return { error: true, e };
  }
};

// Métodos relacionados con comentarios
export const getCommentsByPostId = async (postId) => {
  try {
    return await apiClient.get(`/comments/${postId}`);
  } catch (e) {
    return { error: true, e };
  }
};

export const addComment = async (data) => {
  try {
    return await apiClient.post("/comments", data);
  } catch (e) {
    return { error: true, e };
  }
};


export const deleteComment = async (commentId) => {
  try {
    return await apiClient.delete(`/comments/${commentId}`);
  } catch (e) {
    console.error("Error al eliminar el comentario:", e.message);
    return { error: true, e };
  }
};

export const updateComment = async (commentId, content) => {
  try {
    return await apiClient.put(`/comments/${commentId}`, { content });
  } catch (e) {
    console.error("Error al editar el comentario:", e.message);
    return { error: true, e };
  }
};