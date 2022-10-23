import * as React from 'react';
import { Button, Card } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

export default function UserCard(props) {
  // return console.log(props)
  return (
    <Card className="userCard" >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.name[0].toUpperCase()}
          </Avatar>
        }
       
        title={ props.name }
        // subheader="September 14, 2016"
       
      />
      <CardContent>
      {  !props.isFriend ? 
          <IconButton aria-label="remove friend">
            <PersonAddIcon />
          </IconButton> : 
          <IconButton aria-label="add friend">
          <PersonRemoveIcon />
        </IconButton> 

        }
      </CardContent>
     
    </Card>
  );
}
