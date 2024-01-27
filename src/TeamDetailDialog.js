import * as React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, DialogActions, Button, Divider } from '@mui/material';
import { grey } from '@mui/material/colors';

const style = {
    py: 0,
    width: '100%',
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    // backgroundColor: grey[400],
  };

export default function TeamDetailDialog({team, open, onClose}) {

// TODO read data from server based on team num

    return (
        <Dialog open={open}>
          <DialogTitle>
            Team {team} Detail
          </DialogTitle>
          <Divider component="li" sx={style} variant='middle'>
            <DialogContent>
                <Typography>
                Testing 1, 2, 3...
                </Typography>
            </DialogContent>
          </Divider>
          <DialogActions>
            <Button onClick={onClose}>
              Close
            </Button>
          </DialogActions>
      </Dialog>
    )
}