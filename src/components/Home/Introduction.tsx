import {
    Box,
    Slide,
    Typography
} from '@mui/material';

function Introduction() {
    return (
        <Box>
            <Slide in direction="up" timeout={300}>
                <Box>
                    <Typography display="inline" variant="h5" color="secondary">Hello,</Typography>
                    <Typography display="inline" variant="h5"> I'm Patrick!</Typography>
                </Box>
            </Slide>
            <Slide in direction="up" timeout={600}>
                <Typography variant="h3">Full Stack Developer</Typography>
            </Slide>
        </Box>
    )
}

export default Introduction;