import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Divider,
    Slide,
    Typography
} from '@mui/material'

function Home() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        }}>

            <Box>
                <Slide in direction="right" timeout={300}>
                    <Box>
                        <Typography display="inline" variant="h5" color="secondary">Hey,</Typography>
                        <Typography display="inline" variant="h5"> I'm Patrick!</Typography>
                    </Box>
                </Slide>
                <Slide in direction="right" timeout={600}>
                    <Typography variant="h3">Full Stack Developer</Typography>
                </Slide>
            </Box>

            <Box sx={{
                flexGrow: 1,
                marginTop: '1rem',
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'},
                gap: '1rem'
            }}>
                <Slide in direction="right" timeout={900}>
                    <Card elevation={3} sx={{
                        minWidth: {md: '320px'},
                        zIndex: 4,
                    }}>
                        <CardHeader title='About Me' />
                        <Divider />
                        <CardContent>
                            TEST TEST TEST
                        </CardContent>
                    </Card>
                </Slide>

                <Slide in direction="right" timeout={1200}>
                    <Card elevation={3} sx={{
                        minWidth: {md: '320px'},
                        zIndex: 3,
                    }}>
                        <CardHeader title='Skills' />
                        <Divider />
                        <CardContent>
                            TEST TEST TEST
                        </CardContent>
                    </Card>
                </Slide>

                <Slide in direction="right" timeout={1200}>
                    <Card elevation={3} sx={{
                        minWidth: {md: '320px'},
                        zIndex: 2,
                    }}>
                        <CardHeader title='Test1' />
                        <Divider />
                        <CardContent>
                            TEST TEST TEST
                        </CardContent>
                    </Card>
                </Slide>

                                <Slide in direction="right" timeout={1200}>
                    <Card elevation={3} sx={{
                        minWidth: {md: '320px'},
                        zIndex: 1,
                    }}>
                        <CardHeader title='Test1' />
                        <Divider />
                        <CardContent>
                            TEST TEST TEST
                        </CardContent>
                    </Card>
                </Slide>

            </Box>
        </Box>
    )
}

export default Home;