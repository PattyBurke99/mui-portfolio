import {
    Box,
    Typography,
} from '@mui/material'

import Introduction from '../components/Home/Introduction';

function Home() {
    return (
        <>
            <Box sx={{
                maxWidth: "1280px",
                margin: "auto",
                padding: "1rem",
            }}>
                <Introduction />
                <Typography variant="h5">About</Typography>
            </Box>
        </>
    )
}

export default Home;