import {
    Box,
    Card,
    Divider,
    List,
    ListItem,
    ListItemText,
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material'
import { Assignment, Engineering, List as ListIcon } from '@mui/icons-material';    
import CardGroup from '../components/CardGroup';
import AboutContent from '../components/Layout/AboutContent';

const overviewCard = {
    title: 'Overview',
    icon: <ListIcon />,
    content:
    (
        <Box>
            <Typography sx={{padding: '0.4rem'}}>
                Full Stack Developer who has completed a Diploma in Engineering (2020),
                and a Graduate Certificate in Full Stack Development (2024). 
            </Typography>
            <Divider sx={{marginY: '0.4rem'}}/>
            <Typography sx={{padding: '0.4rem'}}>
                Recent education/experience has revolved around Javascript (specifically the React
                ecosystem). Solid understanding of data structures, algorithms, and other language 
                agnostic CS principles from previous engineering education.
            </Typography>
            <Divider sx={{marginY: '0.4rem'}}/>
            <Typography sx={{padding: '0.4rem'}}>
                Strong problem solving and communication skills. Experience working in a 
                professional development environment, and with the workflows/techology you will
                find there (Git, Agile, Azure Dev Ops, etc.).
            </Typography>
        </Box>
    )
}

const experienceCard = {
    title: "Experience",
    icon: <Assignment />,
    content: (
        <List>
            <ListItemText 
                sx={{paddingX: '0.3rem', marginTop: 0}}
                primary="Education:"
                primaryTypographyProps={{variant: 'h6'}}
            />
            <Divider />
            <ListItem divider>
                <Box>
                    <Typography>Diploma in Engineering (2018-2020)</Typography>
                    <Typography>St. Francis Xavier University</Typography>
                </Box>
            </ListItem>
            <ListItem divider>
                <Box>
                    <Typography>Full Stack Development (2023-2024)</Typography>
                    <Typography>Nova Scotia Community College</Typography>
                </Box>
            </ListItem>
            <ListItemText 
                sx={{paddingX: '0.3rem'}}
                primary="Work Experience:"
                primaryTypographyProps={{variant: 'h6'}}
            />
            <Divider />
            <ListItem>
                <Box>
                    <Typography>Truverus Inc.</Typography>
                    <Typography>Full Stack Developer (Intern)</Typography>
                    <Typography>May 2024 - Sep. 2024</Typography>
                </Box>
            </ListItem>
        </List>
    )
}

const skillsCard = {
    title: "Skills",
    icon: <Engineering />,
    content: (
            <List sx={{ display: 'flex', flexDirection: 'column'}}>
                <ListItemText 
                    sx={{paddingX: '0.3rem', marginTop: 0}}
                    primary="Technical Skills:"
                    primaryTypographyProps={{variant: 'h6'}}
                />
                <Box  sx={{display: 'flex'}}>
                    <Box>
                        <ListItem>JavaScript</ListItem>
                        <ListItem>React</ListItem>
                        <ListItem>MySQL</ListItem>
                        <ListItem>Responsive Design</ListItem>
                        <ListItem>Agile Methodologies</ListItem>
                    </Box>
                    <Box>
                        <ListItem>HTML/CSS</ListItem>
                        <ListItem>Node.js</ListItem>
                        <ListItem>Git</ListItem>
                        <ListItem>DevOps</ListItem>
                    </Box>
                </Box>
                <ListItemText 
                    sx={{paddingX: '0.3rem', marginTop: '0.4rem'}}
                    primary="Soft Skills:"
                    primaryTypographyProps={{variant: 'h6'}}
                />
                <ListItem>Problem Solving</ListItem>
                <ListItem>Self-Learning</ListItem>
                <ListItem>Communiation</ListItem>
            </List>
    )
}

function Home() {
    const theme = useTheme();

    const isMdBreakpoint: boolean = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
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