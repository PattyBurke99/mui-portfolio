import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';

import ResponsiveAppBar from "../components/Layout/ResponsiveAppBar";
import AboutDrawer from "../components/Layout/AboutDrawer";
import { aboutDrawerWidth, appbarHeightMd, appbarHeightXs } from "../constants/Layout";

const Main = styled('div', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
  }>(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: `${aboutDrawerWidth}`,
        },
      },
    ],
}));

function Layout() {

    const [aboutDrawerOpen, setAboutDrawerOpen] = useState<boolean>(true);

    const handleDrawerOpen = () => {
        setAboutDrawerOpen(true);
    }

    const handleDrawerClose = () => {
        setAboutDrawerOpen(false);
    }

    return (
        <>
            <ResponsiveAppBar />
            <AboutDrawer 
                isOpen={aboutDrawerOpen}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
            />
            <Box sx={{
                marginTop: {xs: appbarHeightXs, md: appbarHeightMd}
            }}>
                <Main open={aboutDrawerOpen}>
                    <Outlet />
                </Main>
            </Box>
        </>
    )
}

export default Layout;