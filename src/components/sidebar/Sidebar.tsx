import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CSSObject, Theme, styled, useTheme } from '@mui/material/styles';
import * as React from 'react';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const SidebarItems = [
    {
        label:  'Application',
        icon:   < InboxIcon />
    },
    {
        label:  'Connection',
        icon:   < InboxIcon />
    },
    {
        label:  'Cost',
        icon:   < InboxIcon />
    },
    {
        label:  'Security',
        icon:   < InboxIcon />
    },
    {
        label:  'Inbox',
        icon:   < InboxIcon />
    },
]

const SidebarItems2 = [
    {
        label:  'Admin',
        icon:   < InboxIcon />
    },
    {
        label:  'Docs',
        icon:   < InboxIcon />
    },
]

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{justifyContent: "start"}}>
        <svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.7848 3.99267C27.3574 1.52397 24.7198 0 21.8683 0H12.6176C9.76274 0 7.1251 1.52397 5.70111 3.99267L1.07057 12.0056C-0.356858 14.4778 -0.356858 17.5223 1.07057 19.9944L5.69766 28.0073C7.1251 30.4795 9.76274 32 12.6142 32H21.8649C24.7198 32 27.3574 30.476 28.7814 28.0073L33.4085 19.9944C34.8359 17.5223 34.8359 14.4778 33.4085 12.0056L28.7814 3.99267H28.7848ZM31.0984 23.1734C31.0984 23.6837 30.826 24.156 30.3847 24.4077L17.955 31.5828C17.5136 31.838 16.9689 31.838 16.5275 31.5828L4.09784 24.4112C3.6565 24.156 3.38412 23.6837 3.38412 23.1768V8.82319C3.38412 8.3129 3.6565 7.84053 4.09784 7.58884L16.5275 0.410301C16.9689 0.155156 17.5136 0.155156 17.955 0.410301L30.3847 7.58539C30.826 7.84054 31.0984 8.3129 31.0984 8.81974V23.1734Z" fill="white"/>
        </svg>

            <Typography variant="h6" noWrap component="div" >
                Kapstan
            </Typography>
        </DrawerHeader>
        <Divider />
        <List>
          {SidebarItems?.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item?.icon}
                </ListItemIcon>
                <ListItemText primary={item?.label} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{height: "100%",display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
            <List sx={{alignItems: "flex-end"}}>
            {SidebarItems2?.map((item, index) => (
                <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    }}
                >
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                    >
    {item?.icon}
                    
                    </ListItemIcon>
                    <ListItemText primary={item.label} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
                </ListItem>
            ))}
            </List>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
        </Box>
      </Drawer> 
    </Box>
  );
}
