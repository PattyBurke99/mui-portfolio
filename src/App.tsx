import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { 
  createTheme, 
  ThemeProvider ,
  CssBaseline
} from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Layout from "./screens/Layout";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
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
  colorSchemes: {
    dark: {
      palette: {
        secondary: { main: '#F02D3A' }
      }
    }
  },
  palette: {
    primary: { main: '#273043' },
    secondary: { main: '#F02D3A' }
  },
  components: {
    MuiCardHeader: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...(theme.palette.mode === 'light' ? 
          { 
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText
          } : {} ),
        }),
      },
    }
  },
  typography: {
    // fontSize: 16
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
