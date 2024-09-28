import {
    Box,
} from '@mui/material'

import Introduction from '../components/Home/Introduction';

function Home() {
    return (
        <>
            <Box sx={{
                padding: "2rem",
            }}>
                <Introduction />
            </Box>
        </>
    )
}

export default Home;