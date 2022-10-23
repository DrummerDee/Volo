import * as React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { Link } from 'react-router-dom';
import { useState } from 'react'

export default function SideBar () {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <>
    <IconButton   edge='start'   color='primary' 
    aria-label='sidebar menu' onClick={() => setIsDrawerOpen(true)}>
      <MenuOpenRoundedIcon sx={{ fontSize: 40 }}  />
    </IconButton>
    <Drawer
      anchor='left'
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
    >
      <Box p={2} width='250px' textAlign='center' role='presentation'>
        <Typography variant="h6" component='div'>
          Friends
        </Typography>
        <List >
            {['Requests', 'My friends', 'Add friend'].map((text, index) => (
              <ListItem  className="drawerList" key={text}   disablePadding>
                <ListItemButton component={Link} to={index == 0 ? "/friendRequests" : index == 1 ? "/myFriends" : "/addFriends"}>
                  <ListItemIcon >
                    {index === 0 ? <InboxIcon /> : index == 1 ? <Diversity3Icon /> : <PersonAddIcon/>}
                  </ListItemIcon>
                  <ListItemText className="drawerText" primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
      </Box>
    </Drawer>
    </>
   
  )
}