import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Divider,
    Slide,
    Typography
} from '@mui/material'
import { Assignment, Engineering, List } from '@mui/icons-material';    

function Home() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        }}>

            <Box>
                <Slide in direction="right" timeout={600}>
                    <Box>
                        <Typography display="inline" variant="h5" color="secondary">Hey,</Typography>
                        <Typography display="inline" variant="h5"> I'm Patrick!</Typography>
                    </Box>
                </Slide>
                <Slide in direction="right" timeout={600}>
                    <Typography variant="h4">Full Stack Developer</Typography>
                </Slide>
            </Box>

            <Box sx={{
                flexGrow: 1,
                marginTop: '1rem',
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'},
                gap: '1rem'
            }}>
                <Slide in direction="right" timeout={300}>
                    <Card elevation={3} sx={{
                        minWidth: {md: '320px'},
                        zIndex: 3,
                    }}>
                        <CardHeader title={
                            <Box sx={{position: 'relative'}}>
                                <List sx={{position: 'relative', top: 4}}/>
                                <Typography display="inline" variant="h5"> Overview</Typography>
                            </Box>
                        }/>
                        <Divider />
                        <CardContent>

                        </CardContent>
                    </Card>
                </Slide>

                <Slide in direction="right" timeout={600}>
                    <Card elevation={3} sx={{
                        minWidth: {md: '320px'},
                        zIndex: 2,
                    }}>
                        <CardHeader title={
                            <Box sx={{position: 'relative'}}>
                                <Assignment sx={{position: 'relative', top: 4}}/>
                                <Typography display="inline" variant="h5"> Experience</Typography>
                            </Box>
                        }/>
                        <Divider />
                        <CardContent>

                        </CardContent>
                    </Card>
                </Slide>

                <Slide in direction="right" timeout={900}>
                    <Card elevation={3} sx={{
                        minWidth: {md: '320px'},
                        zIndex: 3,
                    }}>
                        <CardHeader title={
                            <Box sx={{position: 'relative'}}>
                                <Engineering sx={{position: 'relative', top: 4}}/>
                                <Typography display="inline" variant="h5"> Skills</Typography>
                            </Box>
                        }/>
                        <Divider />
                        <CardContent>

                        </CardContent>
                    </Card>
                </Slide>
            </Box>
        </Box>
    )
}

export default Home;