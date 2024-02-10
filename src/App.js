import './App.css';
import TeamsTable from './TeamsTable';
import SillyAppBar from './SillyAppBar';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { ThemeProvider, createTheme, Box } from '@mui/material';
import TeamGrid from './TeamGrid';
import * as React from 'react';


const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    },
    primary: {
      main: "#FFDF2E"
    },
  }
});

const Item = styled(Paper)(({ themeDark }));

export default function App() {
  
  const [selectedTeamNum, setSelectedTeamNum] = React.useState(-1)

  const updateSelectedTeam = (teamNum) => {
    setSelectedTeamNum(teamNum)
  }

  return (
    <div className="App">
      <SillyAppBar />
      <Box>
        <Grid2 container spacing={0}>
          <Grid2 item xs={12} md={9}>
            <Item>
              <TeamsTable onTeamSelected={updateSelectedTeam}/>
            </Item>
          </Grid2>
          <Grid2 item xs={12} md={3}>
            <Item>
              <Box style={{maxHeight: '98vh', overflow: 'auto'}}>
                <TeamGrid teamNum={selectedTeamNum}/>
              </Box>
            </Item>
          </Grid2>
        </Grid2>
      </Box>
    </div>
  );
}
