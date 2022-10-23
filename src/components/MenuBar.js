import * as React from "react";
import { AppBar, Stack, Button, Link} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import PlaylistAddCircleIcon from "@mui/icons-material/PlaylistAddCircle";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';

export default function MenuBar() {
  const navigate = useNavigate();
  const [hideMobileMenu, setHideMobileMenu] = useState(true);


  const handleSubmit = () => {
    const response = fetch("http://localhost:1212/logout", {
      method: "GET",
      withCredentials: true,
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.removeItem("VoloLoggedIn");
    localStorage.removeItem("VoloUser");
    navigate("/login");
  };

  const showMobileMenu = () => {
    hideMobileMenu ? setHideMobileMenu(false) : setHideMobileMenu(true); 
  }

  return (
      <>
          <AppBar position="static" style={{zIndex: 1400}}>
      <Toolbar>
        <IconButton size="large" edge="start" variant="link" href="/dashboard" color="inherit" aria-label="logo">
          <FeaturedPlayListIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          VOLO
        </Typography>
        <Stack direction="row" spacing={2}>
          <div class="hambergurMenuIcon hidden" onClick={showMobileMenu}>
            <MenuIcon />
          </div>
          
          <div class="desktopMenu">
            <Button color="inherit">
              <PlaylistAddCircleIcon />
            </Button>
            <Button 
              variant="link"
              color="default"
              href="/friendRequests"
              aria-label="friends"
            >
              <Badge badgeContent={4} color="secondary">
                  <PeopleIcon />
              </Badge>            
            </Button>
            <Button color="inherit">Settings</Button>
            <Button color="inherit" onClick={handleSubmit}>
              Logout
            </Button>
          </div>
        </Stack>
        
      </Toolbar>
    </AppBar>
    <div className={`hambergurMenu${hideMobileMenu ?' hidden' : ''}`} >
            <List>
              <ListItem  disablePadding>
                <ListItemButton >
                  <ListItemIcon>
                    <PlaylistAddCircleIcon style={{ color: "white" }}/>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <ListItem  disablePadding>
              <Button 
                variant="link"
                color="default"
                href="/friendRequests"
                aria-label="friends"
              >
                  <Badge badgeContent={4} color="secondary">
                      <PeopleIcon />
                  </Badge>
              </Button>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={handleSubmit}>
                <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            </List>
          </div>
      </>

  );
}
