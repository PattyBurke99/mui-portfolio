import useMediaQuery from '@mui/material/useMediaQuery';
import { useColorScheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import LightMode from '@mui/icons-material/LightModeOutlined';
import DarkMode from '@mui/icons-material/DarkModeOutlined';

enum themeModes { Light = 'light', Dark = 'dark', System = 'system' }

function ToggleDarkmodeButton() {
    const { mode, setMode } = useColorScheme();

    console.log(`mode: ${mode}`);

    if (mode === themeModes.System) {
        const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
        console.log(`prefersDarkMode: ${prefersDarkMode}`);
        setMode(prefersDarkMode ? 'dark' : 'light');
        console.log(`setMode: ${prefersDarkMode ? 'dark' : 'light'}`);
    }


    return (
        <>
            {mode && mode === themeModes.Light &&
                <IconButton size="large" color='inherit' onClick={() => setMode(themeModes.Dark)}>
                    <DarkMode sx={{
                        alignSelf: 'center'
                    }} />
                </IconButton>
            }
            {mode && mode === themeModes.Dark &&
                <IconButton size="large" color='inherit' onClick={() => setMode(themeModes.Light)}>
                    <LightMode sx={{
                        alignSelf: 'center'
                    }} />
                </IconButton>
            }
        </>
    )
}

export default ToggleDarkmodeButton;