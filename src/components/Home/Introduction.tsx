import {
    Avatar,
    Box,
    Fade,
    Grid2 as Grid,
    Slide,
    Typography
} from '@mui/material';

function Introduction() {
    return (
        <Grid container sx={{
            marginY: "4rem"
        }}>
            <Grid size={{xs: 12, md: 8}}>
                <Slide in direction="right" timeout={300}>
                    <Box>
                        <Typography display="inline" variant="h5" color="secondary">Hello,</Typography>
                        <Typography display="inline" variant="h5"> I'm Patrick!</Typography>
                    </Box>
                </Slide>
                <Slide in direction="right" timeout={600}>
                    <Typography variant="h3">Full Stack Developer</Typography>
                </Slide>
                <Slide in direction="right" timeout={900}>
                    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                </Slide>
            </Grid>
            <Grid size={{xs: 12, md: 4}}>
                <Fade in timeout={1500}>
                    <Avatar sx={{height: 196, width: 196, margin: "auto"}} />
                </Fade>
            </Grid>
        </Grid>
    )
}

export default Introduction;