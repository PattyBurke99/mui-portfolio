import {
    Box,
    Card,
    Drawer,
    IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import AboutContent from './AboutContent';
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
                    height: "99%",
                    width: "99%",
                    overflowY: 'auto'
                }}>
                    <DrawerHeader>
                        <IconButton onClick={() => handleDrawerClose()}>
                            <ChevronLeft />
                        </IconButton>
                    </DrawerHeader>
                    <AboutContent />
                </Card>
            </Box>
        </Drawer>
        {!isOpen &&
            <Box sx={{
                position: "absolute",
                top: appbarHeightMd,
                display: {xs: "none", md: "block"}
            }}>
                <IconButton onClick={() => handleDrawerOpen()}>
                    <ChevronRight />
                </IconButton>
            </Box>
        }
    </>
    )
}

export default AboutDrawer;