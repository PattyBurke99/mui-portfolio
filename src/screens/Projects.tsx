import {
    Box
} from '@mui/material'

import CardGroup from '../components/CardGroup';

const portfolioCard = {
    title: 'Portfolio',
}


function Projects() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <CardGroup cards={[portfolioCard]} />
        </Box>
    )
}

export default Projects;