import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles({
    root: {
        minWidth: '100%',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    score: {
        fontSize: "20pt",
        textAlign: "center",
        marginTop: "10px"
    },
    teams: {
        textAlign: "center",
    }
});


const MatchDetail = ({match, teamNum}) => {

    const isRed = match.teamsRed.includes(teamNum)
    const wonMatch = (isRed && match.scoreRed > match.scoreBlue) || (!isRed && match.scoreBlue > match.scoreRed)

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                Match {match.matchNum} ({wonMatch ? "W" : "L"})
                </Typography>
                <Typography className={classes.score}>
                <span style={{color: 'red'}}>{match.scoreRed}</span> - <span style={{color: 'blue'}}>{match.scoreBlue}</span>
                </Typography>
                <Typography className={classes.teams}>
                <span style={{color: 'red'}}>{match.teamsRed[0]} - {match.teamsRed[1]} - {match.teamsRed[2]}</span> | <span style={{color: 'blue'}}>{match.teamsBlue[0]} - {match.teamsBlue[1]} - {match.teamsBlue[2]}</span>
                </Typography>
            </CardContent>
            <CardActions>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                    See More (: Silly
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
            </CardActions>
        </Card>
    )
}

export default MatchDetail;