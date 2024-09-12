import { useState } from 'react';
import { useColorScheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LightMode from '@mui/icons-material/LightModeOutlined';
import DarkMode from '@mui/icons-material/DarkModeOutlined';

const pages = ['Home', 'Projects', 'Contact'];
enum themeModes { Light = 'light', Dark = 'dark' }

function ResponsiveAppBar() {
    const { mode, setMode } = useColorScheme();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
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
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
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
                    {mode && mode === themeModes.Light &&
                        <IconButton size="large" color='inherit' onClick={() => setMode(themeModes.Dark)}>
                            <DarkMode sx={{
                                alignSelf: 'center'
                            }} />
                        </IconButton>
                    }
                    {mode && mode === themeModes.Dark &&
                        <IconButton size="large" color='inherit' onClick={() => setMode(themeModes.Light)}>
                            <LightMode sx={{
                                alignSelf: 'center'
                            }} />
                        </IconButton>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;