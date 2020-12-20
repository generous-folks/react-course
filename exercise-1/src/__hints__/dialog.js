/* eslint-disable react/prop-types */

import React from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import CodeIcon from '@material-ui/icons/Code';
import { makeStyles } from '@material-ui/styles';
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  position: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

function SimpleDialog({ onClose, open, instructions = [] }) {
  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Exercise Hints: Fetch and display list</DialogTitle>
      <List>
        {instructions.map((instruction, i) => (
          <ListItem key={i}>
            <ListItemAvatar>
              <Avatar>
                <CodeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={instruction} />
          </ListItem>
        ))}

        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <CodeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Something about the exercise you need to know" />
        </ListItem>
      </List>
    </Dialog>
  );
}

export function SeeHints({ instructions }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.position}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Help
      </Button>
      <SimpleDialog instructions={instructions} open={open} onClose={handleClose} />
    </div>
  );
}

export const ExerciseContainer = ({ children, instructions }) => (
  <>
    {children}
    <SeeHints instructions={instructions} />
  </>
);
