import {
    Avatar,
    Box,
    IconButton,
    Typography
} from '@mui/material';
import {
    LinkedIn,
    GitHub
} from '@mui/icons-material';

function About() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100% - 3rem)'
        }}>
            <Avatar sx={{
                width: '192px',
                height: '192px',
                margin: 'auto',
                marginTop: '2rem'
            }}/>
            <Box sx={{
                padding: '1rem',
                flexGrow: 1,
            }}>
                <Typography variant='h5' sx={{
                    paddingY: '0.5rem',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    Welcome to my Portfolio!
                </Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Box>
            <Box sx={{
                flexGrow: 0,
                margin: 'auto'
            }}>
                <IconButton size='large'>
                    <GitHub />
                </IconButton>
                <IconButton size='large'>
                    <LinkedIn />
                </IconButton>
            </Box>
        </Box>
    )
}

export default About;