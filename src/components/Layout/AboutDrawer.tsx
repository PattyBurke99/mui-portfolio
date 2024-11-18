import {
    Box,
    Card,
    Drawer,
    IconButton,
    Tooltip,
    useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import About from '../../screens/About';
import { aboutDrawerWidth, appbarHeightMd } from '../../constants';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-end',
}));

interface IAboutDrawerProps {
    handleDrawerOpen: () => void;
    handleDrawerClose: () => void;
    isOpen: boolean;
}

function AboutDrawer({ isOpen, handleDrawerOpen, handleDrawerClose }: IAboutDrawerProps) {
    const theme = useTheme();

    return (
    <>
        <Drawer 
            variant="persistent"
            anchor="left"
            open={isOpen}
            sx={{
                display: {xs: "none", md: "block"},
                boxSizing: 'border-box',
            }}
        >
            <Box sx={{
                width: aboutDrawerWidth,
                height: "100%",
                marginTop: appbarHeightMd,
                overflow: 'hidden'
            }}>
                <Card elevation={6} sx={{
                    height: theme.palette.mode === 'light' ? '99%' : '100%',
                    width: theme.palette.mode === 'light' ? '99%' : '100%',
                    overflowY: 'auto'
                }}>
                    <DrawerHeader>
                        <Tooltip title="Close Sidebar" placement="left">
                            <IconButton onClick={() => handleDrawerClose()}>
                                <ChevronLeft />
                            </IconButton>
                        </Tooltip>
                    </DrawerHeader>
                    <About />
                </Card>
            </Box>
        </Drawer>
        {!isOpen &&
            <Box sx={{
                position: "absolute",
                top: appbarHeightMd,
                display: {xs: "none", md: "block"}
            }}>
                <Tooltip title="Open Sidebar" placement="right">
                    <IconButton onClick={() => handleDrawerOpen()}>
                        <ChevronRight />
                    </IconButton>
                </Tooltip>
            </Box>

        }
    </>
    )
}

export default AboutDrawer;