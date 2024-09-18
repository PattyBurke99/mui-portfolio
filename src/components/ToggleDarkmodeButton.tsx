import useMediaQuery from '@mui/material/useMediaQuery';
import { useColorScheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import LightMode from '@mui/icons-material/LightModeOutlined';
import DarkMode from '@mui/icons-material/DarkModeOutlined';

enum themeModes { Light = 'light', Dark = 'dark', System = 'system' }

function ToggleDarkmodeButton() {
    const { mode, setMode } = useColorScheme();

    //might be bad
    if (mode === themeModes.System) {
        const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
        setMode(prefersDarkMode ? 'dark' : 'light');
    }

    const changeColorScheme = (isDarkMode: boolean) => {
        const statusBarMetaTag = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
        if (isDarkMode) {
            setMode(themeModes.Dark);
            if (statusBarMetaTag) {
                statusBarMetaTag.setAttribute('content', 'black-translucent');
            }
        } else {
            setMode(themeModes.Light);
            if (statusBarMetaTag) {
                statusBarMetaTag.setAttribute('content', 'default');
            }
        }
    } 

    return ( 
        <>
            {mode && mode === themeModes.Light &&
                <IconButton size="large" color='inherit' onClick={() => changeColorScheme(true)}>
                    <DarkMode sx={{
                        alignSelf: 'center'
                    }} />
                </IconButton>
            }
            {mode && mode === themeModes.Dark &&
                <IconButton size="large" color='inherit' onClick={() => changeColorScheme(false)}>
                    <LightMode sx={{
                        alignSelf: 'center'
                    }} />
                </IconButton>
            }
        </>
    )
}

export default ToggleDarkmodeButton;