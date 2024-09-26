import { useState } from 'react';
import {
    Box,
    Card,
    Drawer,
    IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
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

    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };

    return (
    <>
        <Drawer 
            variant="persistent"
            anchor="left"
            open={open}
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
                        <IconButton onClick={() => handleDrawerClose()}>
                            <ChevronLeft />
                        </IconButton>
                    </DrawerHeader>
                </Card>
            </Box>
        </Drawer>
        {!open &&
            <Box sx={{
                marginTop: appbarHeightMd
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