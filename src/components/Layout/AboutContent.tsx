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

function AboutContent() {
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

export default AboutContent;