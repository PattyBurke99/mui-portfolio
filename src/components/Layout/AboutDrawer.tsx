import {
    Drawer,
    Paper
} from '@mui/material';
import { aboutDrawerWidth, appbarHeightMd } from '../../constants/Layout';

function AboutDrawer() {
    return (
    <Drawer 
        variant="permanent"
        anchor="left"
        open
        sx={{
            display: {xs: "none", md: "block"}
        }}
    >
        <Paper square sx={{
            width: aboutDrawerWidth,
            height: "100%",
            marginTop: appbarHeightMd,
            background: "primary.light"
        }}>
            Test
        </Paper>
    </Drawer>
    )
}

export default AboutDrawer;