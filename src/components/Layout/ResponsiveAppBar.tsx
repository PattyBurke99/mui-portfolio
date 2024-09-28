import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Box,
    Divider,
    IconButton,
    Toolbar,
    Typography,
    Container,
    Button,
    SwipeableDrawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

import { 
    mobileDrawerWidth,
    appbarHeightXs,
    appbarHeightMd
} from '../../constants/Layout';

const pages = ['Home', 'Projects', 'Contact'];

function ResponsiveAppBar() {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);

    const handleOpenNavMenu = () => {
        setMobileDrawerOpen(true);
    };

    const handleCloseNavMenu = () => {
        setMobileDrawerOpen(false)
    };

    return (
        <AppBar position="fixed" color="primary" sx={{
             zIndex: (theme) => theme.zIndex.drawer + 1,
            height: {xs: appbarHeightXs, md: appbarHeightMd}
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{
                        display: { xs: 'none', md: 'flex' },
                        flexDirection: 'column',
                        color: 'inherit',
                        mr: 2
                    }}>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                fontWeight: 700,
                                letterSpacing: '.2rem',
                            }}
                        >
                            PATRICK BURKE:
                        </Typography>
                        <Typography
                            variant='subtitle2'
                            noWrap
                            sx={{
                                fontWeight: 400,
                                alignSelf: 'center'
                            }}
                        >
                            FULL STACK DEVELOPER
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <SwipeableDrawer
                            anchor="left"
                            open={mobileDrawerOpen}
                            onOpen={() => {}}
                            onClose={handleCloseNavMenu}
                        >
                        <Box
                            sx={{ width: mobileDrawerWidth, paddingTop: appbarHeightXs }}
                            role="presentation"
                        >
                            <List>
                            {pages.map((page: string) => (
                                <Fragment  key={page}>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary={page} />
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider key={`${page}-divider-mobile`}/>
                                </Fragment>
                            ))}
                            </List>   
                        </Box>
                        </SwipeableDrawer>
                    </Box>
                    <Box sx={{
                        flexGrow: 1,
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Box sx={{
                            display: { xs: 'flex', md: 'none' },
                            flexDirection: 'column',
                            color: 'inherit',
                            width: 'fit-content',
                        }}>
                            <Typography
                                variant="h6"
                                noWrap
                                sx={{
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    letterSpacing: '.2rem',
                                }}
                            >
                                PATRICK BURKE:
                            </Typography>
                            <Typography
                                variant='subtitle2'
                                noWrap
                                sx={{
                                    fontWeight: 400,
                                    fontSize: '.6rem',
                                    alignSelf: 'center'
                                }}
                            >
                                FULL STACK DEVELOPER
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }} >
                            {pages.map((page) => (
                                <Button
                                    component={Link}
                                    // Big time change this next line -- define routes in some constants file
                                    to={page === 'Home' ? '/mui-portfolio/' : `/mui-portfolio/${page}`}
                                    key={page}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Box>
                    <Box sx={{
                        display: {md: "none"},
                        flexBasis: 48,
                        flexGrow: 0
                    }}/>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;