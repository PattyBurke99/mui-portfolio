import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { 
  createTheme, 
  ThemeProvider ,
  CssBaseline,
  responsiveFontSizes
} from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Layout from "./screens/Layout";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
// import Contact from "./screens/Contact";
import ContactForm from "./components/ContactForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/contact",
        element: <ContactForm />
      }
    ]
  },
]);

let theme = createTheme({
  palette: {
    primary: { main: '#3f4360' },
    secondary: { main: '#f50057' }
  }
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
