import {
    Box,
    Card,
    Divider,
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material'
import { Assignment, Engineering, List } from '@mui/icons-material';    
import CardGroup from '../components/CardGroup';
import AboutContent from '../components/Layout/AboutContent';

const overviewCard = {
    title: 'Overview',
    icon: <List />,
    content:
    (
        <>
            <Typography>
                Full Stack Developer who has completed a Diploma in Engineering (2020),
                and a Graduate Certificate in Full Stack Development (2024). 
            </Typography>
            <Divider sx={{marginY: '0.4rem'}}/>
            <Typography>
                Recent education/experience has revolved around Javascript (React ecosystem). 
                Solid understanding of data structures, algorithms, and other language agnostic 
                CS principles from previous engineering education.
            </Typography>
            <Divider sx={{marginY: '0.4rem'}}/>
            <Typography>
                Strong problem solving and communication skills. Experience working in a 
                professional development environment, and with the workflows/techology you will
                find there (Git, Agile, Azure Dev Ops, etc.).
            </Typography>
        </>
    )
}

const experienceCard = {
    title: "Experience",
    icon: <Assignment />,
    content: (
        <Box sx={{
            display: 'flex'
        }}>
            <Box sx={{flexGrow: 1}}>
                <Typography >Education:</Typography>
            </Box>
            <Box sx={{flexGrow: 1}}>

            </Box>
        </Box>
    )
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