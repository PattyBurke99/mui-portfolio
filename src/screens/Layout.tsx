import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import ResponsiveAppBar from "../components/Layout/ResponsiveAppBar";
import AboutDrawer from "../components/Layout/AboutDrawer";
import { appbarHeightMd, appbarHeightXs } from "../constants/Layout";

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
                <Outlet />
            </Box>
        </>
    )
}

export default Layout;