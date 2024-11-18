import {
    Box,
    Card,
    List,
    ListItem,
    ListItemText,
    Slide,
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material'
import { Assignment, Engineering, List as ListIcon } from '@mui/icons-material';    
import CardGroup from '../components/CardGroup';
import About from './About';

const overviewCard = {
    title: 'Overview',
    icon: <ListIcon />,
    sections: 
    [
        (<Typography sx={{padding: '0.4rem'}}>
            Full Stack Developer who has completed a Diploma in Engineering (2020),
            and a Graduate Certificate in Full Stack Development (2024). 
        </Typography>),
        (<Typography sx={{padding: '0.4rem'}}>
            Recent education/experience has revolved around Javascript (specifically the React
            ecosystem). Solid understanding of data structures, algorithms, and other language 
            agnostic CS principles from previous engineering education.
        </Typography>),
        (<Typography sx={{padding: '0.4rem'}}>
            Strong problem solving and communication skills. Experience working in a 
            professional development environment, and with the workflows/techology you will
            find there (Git, Agile, Azure Dev Ops, etc.).
        </Typography>)

    ]
}

const experienceCard = {
    title: "Experience",
    icon: <Assignment />,
    sections: 
    [
        (<List>
            <ListItemText 
                sx={{paddingX: '0.3rem', marginTop: 0}}
                primary="Education:"
                primaryTypographyProps={{variant: 'h6'}}
            />
            <ListItem>
                Diploma in Engineering (2018-2020)<br />
                St. Francis Xavier University
            </ListItem>
            <ListItem>
                Full Stack Development (2023-2024)<br />
                Nova Scotia Community College
            </ListItem>
        </List>),
        (<List>
            <ListItemText 
                sx={{paddingX: '0.3rem', marginTop: 0}}
                primary="Work Experience:"
                primaryTypographyProps={{variant: 'h6'}}
            />
            <ListItem>
                Truverus Inc.<br />
                Full Stack Developer (Intern)<br />
                May 2024 - Sep. 2024<br />
            </ListItem>

        </List>)
    ]
}

const skillsCard = {
    title: "Skills",
    icon: <Engineering />,
    sections:
    [
        (<List sx={{ display: 'flex', flexDirection: 'column'}}>
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
        </List>),
        (<List>
            <ListItemText 
                sx={{paddingX: '0.3rem', marginTop: '0.4rem'}}
                primary="Soft Skills:"
                primaryTypographyProps={{variant: 'h6'}}
            />
            <ListItem>Problem Solving</ListItem>
            <ListItem>Self-Learning</ListItem>
            <ListItem>Communiation</ListItem>
        </List>)
    ]
}

function Home() {
    const theme = useTheme();

    const isMdBreakpoint: boolean = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <>
            {!isMdBreakpoint &&
                <Slide in direction="right" timeout={300}>
                    <Card elevation={3} sx={{
                        paddingY: '1rem',
                        marginBottom: '1rem'
                    }}>
                        <About />
                    </Card>
                </Slide>
            }
            <CardGroup 
                cards={[overviewCard, experienceCard, skillsCard]}
                animationOffset={isMdBreakpoint ? 0 : 300} 
            />
        </>
    )
}

export default Home;