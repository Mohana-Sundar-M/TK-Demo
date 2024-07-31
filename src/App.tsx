import Box from "@mui/material/Box";
import "./App.css";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

function App() {
  const content = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <Box className="flex flex-col min-h-screen">
        <Header />
        <Box className="flex-1 mt-28 sm:mt-20">{content}</Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
