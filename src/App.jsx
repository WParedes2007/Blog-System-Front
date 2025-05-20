import React from "react";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbars/Navbar";
import AppRoutes from "./routes";
import "./index.css"; // ✅ Aquí importas index.css

const theme = extendTheme({});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Box
          minHeight="100vh"
          bgGradient="linear(to-r, cyan.50, orange.400, rgba(255, 87, 34, 0.7))"
          backgroundAttachment="fixed"
          backgroundSize="cover"
          animation="gradientBG 15s ease-in-out infinite"
        >
          <div className="layout d-flex flex-column">
            <Navbar />
            <div className="content p-3 flex-grow-1">
              <AppRoutes />
            </div>
          </div>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
