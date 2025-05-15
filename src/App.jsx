import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbars/Navbar";
import AppRoutes from "./routes";

// Define un tema predeterminado (puedes personalizarlo si es necesario)
const theme = extendTheme({});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <div className="layout d-flex flex-column">
          <Navbar />
          <div className="content p-3 flex-grow-1">
            <AppRoutes />
          </div>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;