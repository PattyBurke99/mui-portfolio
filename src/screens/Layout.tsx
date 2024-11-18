import { useState, WheelEvent } from "react";
import { Outlet } from "react-router-dom";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { styled } from '@mui/material/styles';

import ResponsiveAppBar from "../components/Layout/ResponsiveAppBar";
import AboutDrawer from "../components/Layout/AboutDrawer";
import { aboutDrawerWidth, appbarHeightXs, appbarHeightLg } from "../constants";

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

    const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
      // event.preventDefault(); commented out, this throws error, look into this later
      const container = event.currentTarget;
      container.scrollLeft += event.deltaY;
    };
  

    const handleDrawerOpen = () => {
        setAboutDrawerOpen(true);
    }

    const handleDrawerClose = () => {
        setAboutDrawerOpen(false);
    }

    const isLgBreakpoint: boolean = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <>
            <ResponsiveAppBar />
            {isLgBreakpoint && 
            <AboutDrawer 
                isOpen={aboutDrawerOpen}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
            />}
            <Box sx={{
                marginTop: {xs: appbarHeightXs, lg: appbarHeightLg},
                height: '100%'
            }}>
                <Main 
                  open={isLgBreakpoint && aboutDrawerOpen} 
                  onWheel={handleWheel}
                  sx={{
                    height: '100%',
                    overflow: 'auto',
                    padding: {xs: '1rem', lg: '2rem'},
                }}>
                    <Box sx={{
                      height: '100%',
                      marginLeft: {lg: !aboutDrawerOpen ? '2rem' : 0},
                      transition: theme.transitions.create('margin', {
                        easing: theme.transitions.easing.easeOut,
                        duration: theme.transitions.duration.enteringScreen,
                      })
                    }}>
                      <Outlet />
                    </Box>
                </Main>
            </Box>
        </>
    )
}

export default Layout;