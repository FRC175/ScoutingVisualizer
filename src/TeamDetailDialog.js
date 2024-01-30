import * as React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, DialogActions, Button, Divider, Slide, Paper } from '@mui/material';
import { grey } from '@mui/material/colors';
import Draggable from 'react-draggable';

const style = {
    py: 0,
    width: '100%',
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    // backgroundColor: grey[400],
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }

export default function TeamDetailDialog({team, open, onClose}) {

// TODO read data from server based on team num

    return (
        <Dialog open={open} TransitionComponent={Transition} keepMounted PaperComponent={PaperComponent} aria-labelledby="draggable-dialog-title">
          <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            Team {team} Detail
          </DialogTitle>
            <DialogContent>
                <Typography>
                Testing 1, 2, 3...
                </Typography>
            </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>
              Close
            </Button>
          </DialogActions>
      </Dialog>

      
    )
}