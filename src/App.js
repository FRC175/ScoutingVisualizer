import './App.css';
import TeamsTable from './TeamsTable';
import SillyAppBar from './SillyAppBar';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { ThemeProvider, createTheme, Box } from '@mui/material';
import TeamGrid from './TeamGrid';
import * as React from 'react';
import axios from "axios";


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
  const [tableData, setTableData] = React.useState([]);

  const updateSelectedTeam = (teamNum) => {
    setSelectedTeamNum(teamNum)
  }

  const refreshTableData = async () => {
    console.log("fetching table data")
    await axios.get("http://localhost:7070/team-data/")
        .then(response => {
            console.log(`Success: ${response.status}`)
            // console.log(response.data)
            setTableData(response.data)
        })
        .catch(error => {
            console.log(`Error: ${error.status}`)
        });
  }

  return (
    <div className="App">
      <SillyAppBar onRefreshButtonPressed={refreshTableData}/>
      <Box>
        <Grid2 container spacing={0}>
          <Grid2 item xs={12} md={9}>
            <Item>
              <TeamsTable data={tableData} onTeamSelected={updateSelectedTeam}/>
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
