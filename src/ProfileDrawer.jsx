import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CodeIcon from '@mui/icons-material/Code';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export function ProfileDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // Drawer List Component with custom styles
  const DrawerList = (
    <Box 
      sx={{ 
        width: 250, 
        backgroundColor: '#222222', // Background color of the Drawer
        height: '100%', // Make Drawer fill the full height
        display: 'flex', 
        flexDirection: 'column', // Ensure items are aligned in column
        justifyContent: 'space-evenly', // Center the content vertically
      }} 
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {['Home', 'Projects', 'Experince', 'Contact'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton 
              component="a"  
              href={
                text === 'Home' ? '#header' :
                text === 'Projects' ? '#projects' :
                text === 'Experince' ? '#experience' :
                text === 'Contact' ? '#contact' : null
              }  
              sx={{ padding: '16px 0' }}
            > 
              <ListItemIcon sx={{ minWidth: '40px' }}>
                {
                text === 'Home' ? <HomeIcon  sx={{ color: 'white' }}  /> : 
                text === 'Projects' ? <CodeIcon sx={{ color: 'white' }} /> :
                text === 'Experince' ? <WorkIcon sx={{ color: 'white' }} /> :
                text === 'Contact' ? <MailIcon sx={{ color: 'white' }} /> : null
                }
              </ListItemIcon>
              <ListItemText primary={text} sx={{ color: 'white' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button  style={{color: 'white'}}
        className='drawer-button' 
        onClick={toggleDrawer(true)} 
        sx={{
          position: 'static',   // Keep the button fixed
          top: { xs: '5px', sm: '10px' }, // Adjust for mobile and desktop
          left: '10px',        // Distance from the left side
          zIndex: 1300,        // Make sure it's above other content
          width: '50px',       // Set width for the button
          height: '50px',      // Set height for the button
          borderRadius: '50%', // Make it circular if neede
          margin: '0',         // Ensure no margin
          padding: '0',        // Ensure no padding
          boxShadow: 'none',   // Optional: Remove box shadow if there is any
        }}
      >
        <MenuIcon />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
