import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { styled } from '@mui/material/styles';

import ResponsiveAppBar from "../components/Layout/ResponsiveAppBar";
import AboutDrawer from "../components/Layout/AboutDrawer";
import { aboutDrawerWidth, appbarHeightMd, appbarHeightXs } from "../constants/Layout";

const Main = styled('div')<{open?: boolean}>(({ theme }) => 
({
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
          marginLeft: aboutDrawerWidth,
        },
      },
    ],
}));

function Layout() {
    const theme = useTheme();
    const [aboutDrawerOpen, setAboutDrawerOpen] = useState<boolean>(true);

    const handleDrawerOpen = () => {
        setAboutDrawerOpen(true);
    }

    const handleDrawerClose = () => {
        setAboutDrawerOpen(false);
    }

    const isMdBreakpoint: boolean = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <>
            <ResponsiveAppBar />
            {isMdBreakpoint && 
            <AboutDrawer 
                isOpen={aboutDrawerOpen}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
            />}
            <Box sx={{
                marginTop: {xs: appbarHeightXs, md: appbarHeightMd},
                height: '100%'
            }}>
                <Main open={isMdBreakpoint && aboutDrawerOpen} sx={{
                  height: '100%',
                  overflow: 'auto',
                  padding: {xs: '1rem', md: '2rem'}
                }}>
                    <Outlet />
                </Main>
            </Box>
        </>
    )
}

export default Layout;