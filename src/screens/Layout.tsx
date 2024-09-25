import { Outlet } from "react-router-dom";

import ResponsiveAppBar from "../components/Layout/ResponsiveAppBar";
import AboutDrawer from "../components/Layout/AboutDrawer";

function Layout() {
    return (
        <>
            <ResponsiveAppBar />
            <AboutDrawer />
            <Outlet />
        </>
    )
}

export default Layout;