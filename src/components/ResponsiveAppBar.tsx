import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import MobileDrawerMenu from './MobileDrawerMenu';
import ToggleDarkmodeButton from './ToggleDarkmodeButton';

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
        <AppBar position="static">
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
                        <MobileDrawerMenu isOpen={mobileDrawerOpen} onClose={handleCloseNavMenu} />
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
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Box>
                    <ToggleDarkmodeButton />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;