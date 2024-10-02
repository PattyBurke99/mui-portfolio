import {
    Avatar,
    Box,
    Button,
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
                width: { xs: '192px', md: '128px', xl: '256px' },
                height: { xs: '192px', md: '128px', xl: '256px' },
                margin: 'auto',
                marginTop: { lg:'1rem' }
            }}/>
            <Box sx={{
                padding: '1rem',
                paddingBottom: '0.4rem',
                flexGrow: 1,
            }}>
                <Typography variant='h6' sx={{
                    paddingY: '0.5rem',
                    display: 'flex',
                    justifyContent: 'center',
                    textDecoration: 'underline'
                }}>
                    Welcome to my Portfolio!
                </Typography>
                <Typography>
                    My name is Patrick Burke and I am a Full Stack Developer with an 
                    engineering background. I have created this Portfolio site both as an online 
                    resume, and as an example of the type of responsive, reactive, and accessible
                    web applications that I love to create.
                </Typography>
            </Box>
            <Box sx={{
                flexGrow: 0,
                display: 'flex',
                flexDirection: 'column',
                margin: 'auto'
            }}>
                <Button size='small' sx={{
                    backgroundColor: 'secondary.light',
                    color: '#fff'
                }}>
                    My Resume
                </Button>
                <Box>
                    <IconButton size='large'>
                        <GitHub />
                    </IconButton>
                    <IconButton size='large'>
                        <LinkedIn />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}

export default AboutContent;