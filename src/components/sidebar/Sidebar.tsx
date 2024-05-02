import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { CSSObject, Theme, styled } from "@mui/material/styles";
import * as React from "react";
import { LowerSidebarItems, UpperSidebarItems } from "./sidebarItems";

const drawerWidth = 260;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));



export default function Sidebar() {
  const [open, setOpen] = React.useState<boolean>(true);
  const [selected, setSelected] = React.useState<number>(); // Define selected state

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          style: {
            backgroundColor: "#37146B",
            color: "white",
            padding: " 0 0.75rem"
          },
        }}
        
      >
        <DrawerHeader sx={{ justifyContent: open ? "start" : "center", alignItems: "center" }}>
          <IconButton onClick={handleDrawerOpen}>
            <svg
              width="35"
              height="32"
              viewBox="0 0 35 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.7848 3.99267C27.3574 1.52397 24.7198 0 21.8683 0H12.6176C9.76274 0 7.1251 1.52397 5.70111 3.99267L1.07057 12.0056C-0.356858 14.4778 -0.356858 17.5223 1.07057 19.9944L5.69766 28.0073C7.1251 30.4795 9.76274 32 12.6142 32H21.8649C24.7198 32 27.3574 30.476 28.7814 28.0073L33.4085 19.9944C34.8359 17.5223 34.8359 14.4778 33.4085 12.0056L28.7814 3.99267H28.7848ZM31.0984 23.1734C31.0984 23.6837 30.826 24.156 30.3847 24.4077L17.955 31.5828C17.5136 31.838 16.9689 31.838 16.5275 31.5828L4.09784 24.4112C3.6565 24.156 3.38412 23.6837 3.38412 23.1768V8.82319C3.38412 8.3129 3.6565 7.84053 4.09784 7.58884L16.5275 0.410301C16.9689 0.155156 17.5136 0.155156 17.955 0.410301L30.3847 7.58539C30.826 7.84054 31.0984 8.3129 31.0984 8.81974V23.1734Z"
                fill="white"
              />
            </svg>
          </IconButton>
          {open && <Typography variant="h5">Kapstan</Typography>}
        </DrawerHeader>
        <Divider />
        <List>
          {UpperSidebarItems?.map((item, index) => (
            <ListItem 
            key={index} 
            disablePadding 
            sx={{ display: "block" }}  
            onClick={() => setSelected(index)}
             >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  "&.Mui-selected": { 
                    backgroundColor: "#4D1B95",
                    borderRadius: "0.5rem",
                  }
                  
                }}
                selected={selected === index}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                 {<item.icon />}
                </ListItemIcon>
                <ListItemText
                  primary={item?.label}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <List sx={{ alignItems: "flex-end" }}>
            {LowerSidebarItems?.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    {<item.icon />}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <IconButton onClick={handleDrawerClose} sx={{ color: "white" }}>
                <KeyboardDoubleArrowLeftOutlinedIcon />
          </IconButton>
        </Box>
      </Drawer>
    </Box>
  );
}
