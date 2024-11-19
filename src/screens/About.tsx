import { Link } from 'react-router-dom';
import {
    Avatar,
    Box,
    Button,
    IconButton,
    Tooltip,
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
            <Avatar src='https://patrickburke.dev/Headshot.jpg' sx={{
                width: { xs: '192px', lg: '128px', xl: '256px' },
                height: { xs: '192px', lg: '128px', xl: '256px' },
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
                    web applications that I take pride in developing.
                </Typography>
            </Box>
            <Box sx={{
                flexGrow: 0,
                display: 'flex',
                flexDirection: 'column',
                margin: 'auto'
            }}>
                <Box>
                    <Tooltip title="Github" placement="top">
                        <IconButton 
                            component={Link}
                            to="https://github.com/pattyBurke99/"
                            target="_blank"
                            size='large'
                        >
                            <GitHub />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="LinkedIn" placement="top">
                        <IconButton 
                            component={Link}
                            to="https://www.linkedin.com/in/patrick-burke-97b592214/"
                            target="_blank"
                            size='large'
                        >
                            <LinkedIn />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    )
}

export default About;