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

const router = createBrowserRouter([
  {
    path: "/mui-portfolio/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      }
    ]
  },
]);

const theme = createTheme({
  palette: {
    primary: { main: '#3f4360' },
    secondary: { main: '#f50057' }
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
