import * as React from 'react';
import { ListItem, Typography, Paper, List, Box } from '@mui/material';
import MatchDetail from './MatchDetail';

const TeamGrid = ({ teamNum }) => {

    const matches = [
        {matchNum: 10, scoreRed: 50, scoreBlue: 110},
        {matchNum: 15, scoreRed: 150, scoreBlue: 90},
        {matchNum: 15, scoreRed: 150, scoreBlue: 90},
        {matchNum: 15, scoreRed: 150, scoreBlue: 90},
        {matchNum: 15, scoreRed: 150, scoreBlue: 90},
        {matchNum: 15, scoreRed: 150, scoreBlue: 90},
        {matchNum: 15, scoreRed: 150, scoreBlue: 90},
        {matchNum: 15, scoreRed: 150, scoreBlue: 90},
        {matchNum: 15, scoreRed: 150, scoreBlue: 90},
    ]

    return (
        <Paper scrollable={false} style={{maxHeight: '100%', overflow: 'auto', minWidth: '100%'}}>
            <List>
            {matches.map((match, index) => (
                <ListItem key={index}>
                    <MatchDetail match={match} />
                </ListItem>
            ))}
            </List>
        </Paper>
    )
}

export default TeamGrid