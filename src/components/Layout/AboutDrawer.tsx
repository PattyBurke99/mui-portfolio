import {
    Box,
    Card,
    Drawer,
    IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import { aboutDrawerWidth, appbarHeightMd } from '../../constants/Layout';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

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
        <Box sx={{
            width: aboutDrawerWidth,
            height: "100%",
            marginTop: appbarHeightMd,
        }}>
            <Card elevation={6} sx={{
                height: "99%",
                width: "99%"
            }}>
                <DrawerHeader>
                    <IconButton onClick={() => {}}>
                        <ChevronLeft />
                    </IconButton>
                </DrawerHeader>
            </Card>
        </Box>
    </Drawer>
    )
}

export default AboutDrawer;