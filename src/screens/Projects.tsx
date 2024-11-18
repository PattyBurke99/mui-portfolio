import { Link } from 'react-router-dom';
import {
    Box,
    Button,
    Typography
} from '@mui/material'

import CardGroup from '../components/CardGroup';

const portfolioCard = {
    title: 'Portfolio',
    sections:
    [
            <Typography sx={{padding: '0.4rem'}}>
                The site you are currently viewing was designed/created entirely by me from 
                scratch. Technologies used during the creation of this site include TypeScript,
                React, and Material UI. It features basic CI/CD in the form of GitHub actions 
                deploying it to GitHub pages.
            </Typography>,

            <Typography sx={{padding: '0.4rem'}}>
                This site has been designed to display correctly on a variety of screen/device
                sizes, with good performance and some reactivity to justify the production ready
                technologies that were used in it's creation.
            </Typography>,
            
            <Typography sx={{padding: '0.4rem'}}>
                The source code for this site can be viewed on my GitHub below
            </Typography>,
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
    ]
}

const placeholderCard = {
    title: 'Coming Soon',
    sections: []
}


function Projects() {
    return (
         <CardGroup cards={[portfolioCard, placeholderCard]} />
    )
}

export default Projects;