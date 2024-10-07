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
} from '../../constants';

interface IPage {
    name: string,
    path: string
}

const pages: IPage[] = [
    {name: 'Home', path: '/'},
    {name: 'Projects', path: '/projects'},
    {name: 'Contact', path: '/contact'}
];

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
                    <Typography fontSize={44} fontWeight={8} sx={{ 
                        marginRight: '0.4rem',
                        display: {xs: 'none', md: 'block'}
                    }}>
                        &#123;
                    </Typography>
                    <Box sx={{
                        display: { xs: 'none', md: 'flex' },
                        flexDirection: 'column',
                        color: 'inherit',
                    }}>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                fontWeight: 700,
                                letterSpacing: '.2rem',
                            }}
                        >
                            PATRICK BURKE
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
                    <Typography fontSize={44} fontWeight={8} sx={{ 
                        display: {xs: 'none', md: 'block'},
                        marginLeft: '0.4rem'
                    }}>
                        &#125;
                    </Typography>
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            // aria-label="account of current user"
                            // aria-controls="menu-appbar"
                            // aria-haspopup="true"
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
                            {pages.map((page: IPage) => (
                                <Fragment  key={page.name}>
                                    <ListItem disablePadding>
                                        <ListItemButton 
                                            component={Link}
                                            to={page.path}
                                            onClick={handleCloseNavMenu}
                                        >
                                            <ListItemText primary={page.name} />
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider key={`${page.name}-divider-mobile`}/>
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
                                PATRICK BURKE
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
                            {pages.map((page: IPage) => (
                                <Button
                                    component={Link}
                                    to={page.path}
                                    key={page.name}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.name}
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