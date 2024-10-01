import {
    Box,
    Slide,
    Typography
} from '@mui/material'
import { Assignment, Engineering, List } from '@mui/icons-material';    
import CardGroup from '../components/CardGroup';

const overviewCard = {
    title: 'Overview',
    icon: <List />,
}

const experienceCard = {
    title: "Experience",
    icon: <Assignment />,
}

const skillsCard = {
    title: "Skills",
    icon: <Engineering />
}

function Home() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100%',
        }}>
            {/* <Slide in direction="right" timeout={600}>
                <Box>
                    <Typography display="inline" variant="h5" color="secondary">Hey,</Typography>
                    <Typography display="inline" variant="h5"> I'm Patrick!</Typography>
                </Box>
            </Slide>
            <Slide in direction="right" timeout={600}>
                <Typography variant="h4">Full Stack Developer</Typography>
            </Slide> */}
            <CardGroup cards={[overviewCard, experienceCard, skillsCard]}/>
        </Box>
    )
}

export default Home;