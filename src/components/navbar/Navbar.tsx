import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { Avatar, Box, IconButton } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Dropdown from '../dropdown/Dropdown';

function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: '#FFD07B',
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  
export default function Navbar() {
  return (
    <React.Fragment>
      <CssBaseline />
        <AppBar position="static" sx={{background: '#FFF'}}>
          <Toolbar sx={{display: 'flex', justifyContent: 'space-between' }}>
            <Box display='flex' flexDirection='column'>
               <Typography variant='caption' sx={{color: '#595959'}}>
                    Application
               </Typography>
               <Box>
               <Dropdown />
               </Box>
            </Box>
            <Box display='flex' alignItems='center' gap='1rem'>
            <Avatar {...stringAvatar('John Doe')} />
            <Typography component='span' color='black'>
                John Doe
            </Typography>
            <IconButton>
                <KeyboardArrowDownOutlinedIcon />
            </IconButton>
            
            </Box>
          </Toolbar>
        </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
