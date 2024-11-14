import { Link } from 'react-router-dom';
import {
    Box,
    Button,
    Divider,
    Typography
} from '@mui/material'

import CardGroup from '../components/CardGroup';

const portfolioCard = {
    title: 'Portfolio',
    content: (
        <Box >
            <Typography sx={{padding: '0.4rem'}}>
                The site you are currently viewing was designed/created entirely by me from 
                scratch. Technologies used during the creation of this site include TypeScript,
                React, and Material UI. It features basic CI/CD in the form of GitHub actions 
                deploying it to GitHub pages.
            </Typography>
            <Divider />
            <Typography sx={{padding: '0.4rem'}}>
                This site has been designed to display correctly on a variety of screen/device
                sizes, with good performance and some reactivity to justify the production ready
                technologies that were used in it's creation.
            </Typography>
            <Divider />
            <Typography sx={{padding: '0.4rem'}}>
                The source code for this site can be viewed on my GitHub below
            </Typography>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Button 
                    component={Link}
                    to="https://github.com/PattyBurke99/mui-portfolio"
                    target="_blank"
                    sx={{
                        marginTop: '2rem',
                        backgroundColor: 'secondary.main',
                        color: '#fff'
                    }}
                >
                    Source
                </Button>
            </Box>
        </Box>
    )
}

const placeholderCard = {
    title: 'Coming Soon'
}


function Projects() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <CardGroup cards={[portfolioCard, placeholderCard]} />
        </Box>
    )
}

export default Projects;