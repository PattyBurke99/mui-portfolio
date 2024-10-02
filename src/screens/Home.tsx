import {
    Box,
    Card,
    useMediaQuery,
    useTheme
} from '@mui/material'
import { Assignment, Engineering, List } from '@mui/icons-material';    
import CardGroup from '../components/CardGroup';
import AboutContent from '../components/Layout/AboutContent';

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
    const theme = useTheme();

    const isMdBreakpoint: boolean = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100%',
        }}>
            {!isMdBreakpoint &&
                <Card elevation={3} sx={{
                    paddingY: '1rem',
                    marginBottom: '1rem'
                }}>
                    <AboutContent />
                </Card>
            }
            <CardGroup cards={[overviewCard, experienceCard, skillsCard]}/>
        </Box>
    )
}

export default Home;