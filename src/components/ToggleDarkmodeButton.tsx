import useMediaQuery from '@mui/material/useMediaQuery';
import { useColorScheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import LightMode from '@mui/icons-material/LightModeOutlined';
import DarkMode from '@mui/icons-material/DarkModeOutlined';

enum ThemeModes { Light = 'light', Dark = 'dark', System = 'system' }

function ToggleDarkmodeButton() {
    const { mode, setMode } = useColorScheme();

    //might be bad
    if (mode === ThemeModes.System) {
        const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
        setMode(prefersDarkMode ? 'dark' : 'light');
    }

    return ( 
        <>
            {mode && mode === ThemeModes.Light &&
                <IconButton size="large" color='inherit' onClick={() => setMode(ThemeModes.Dark)}>
                    <DarkMode sx={{
                        alignSelf: 'center'
                    }} />
                </IconButton>
            }
            {mode && mode === ThemeModes.Dark &&
                <IconButton size="large" color='inherit' onClick={() => setMode(ThemeModes.Light)}>
                    <LightMode sx={{
                        alignSelf: 'center'
                    }} />
                </IconButton>
            }
        </>
    )
}

export default ToggleDarkmodeButton;