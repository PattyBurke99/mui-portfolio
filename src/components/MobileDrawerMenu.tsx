import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

interface MobileDrawerMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

function MobileDrawerMenu({ isOpen, onClose }: MobileDrawerMenuProps) {
      const list = () => (
        <Box
          sx={{ width: 250 }}
          role="presentation"
        >
          <List>
            {['Home', 'Projects', 'Contact'].map((text) => (
            <>
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
            ))}
          </List>
        </Box>
      );
    
      return (
        <div>
            <SwipeableDrawer
            anchor="left"
            open={isOpen}
            onOpen={() => {}}
            onClose={onClose}
            >
                {list()}
            </SwipeableDrawer>
        </div>
      );
}

export default MobileDrawerMenu;