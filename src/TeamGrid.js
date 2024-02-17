import * as React from 'react';
import { ListItem, Typography, Paper, List, Box } from '@mui/material';
import MatchDetail from './MatchDetail';

const TeamGrid = ({ teamNum }) => {
    const matches = [
        {matchNum: 1, scoreRed: 50, scoreBlue: 110,  teamsRed: [175, 189, 230], teamsBlue: [1, 189, 230]},
        {matchNum: 10, scoreRed: 150, scoreBlue: 90, teamsRed: [900, 189, 230], teamsBlue: [175, 189, 230]},
        {matchNum: 26, scoreRed: 150, scoreBlue: 90, teamsRed: [175, 189, 230], teamsBlue: [190, 189, 230]},
        {matchNum: 37, scoreRed: 150, scoreBlue: 90, teamsRed: [800, 189, 230], teamsBlue: [175, 189, 230]},
        {matchNum: 39, scoreRed: 150, scoreBlue: 90, teamsRed: [175, 189, 230], teamsBlue: [1000, 189, 230]},
        {matchNum: 41, scoreRed: 150, scoreBlue: 90, teamsRed: [175, 189, 230], teamsBlue: [200, 189, 230]},
        {matchNum: 52, scoreRed: 150, scoreBlue: 90, teamsRed: [100, 189, 230], teamsBlue: [175, 189, 230]},
        {matchNum: 61, scoreRed: 150, scoreBlue: 90, teamsRed: [80, 189, 230], teamsBlue: [175, 189, 230]},
        {matchNum: 67, scoreRed: 150, scoreBlue: 90, teamsRed: [2, 189, 230], teamsBlue: [175, 189, 230]},
    ]

    return (
        <Paper scrollable={false} style={{maxHeight: '100%', overflow: 'auto', minWidth: '100%'}}>
            <List>
            {matches.map((match, index) => (
                <ListItem key={index}>
                    <MatchDetail match={match} teamNum={teamNum} />
                </ListItem>
            ))}
            </List>
        </Paper>
    )
}

export default TeamGrid