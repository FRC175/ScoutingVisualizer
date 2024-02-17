import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Dialog, DialogContent, DialogTitle, Typography, DialogActions, Button, Box } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'Team #', type: 'number', width: 90 },
  {
    field: 'teamName',
    headerName: 'Team Name',
    width: 150,
    editable: false,
  },
  {
    field: 'rankingPoints',
    headerName: 'RP',
    type: 'number',
    width: 20,
    editable: false,
  },
  {
    field: 'averageScore',
    headerName: 'Avg. Score',
    type: 'number',
    width: 80,
    editable: false,
  },
  {
    field: 'offensivePowerRanking',
    headerName: 'OPR',
    width: 30,
    type: 'number',
    editable: false
    // valueGetter: (params) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'defensivePowerRanking',
    headerName: 'DPR',
    type: 'number',
    width: 80,
    editable: false,
  },
  {
    field: 'averageAutoScore',
    headerName: 'Avg. A. Score',
    type: 'number',
    width: 100,
    editable: false,
  },
  {
    field: 'elo',
    headerName: 'ELO',
    type: 'number',
    width: 80,
    editable: false,
  },
  {
    field: 'teamBasedPowerRanking',
    headerName: 'Power Ranking',
    type: 'number',
    width: 150,
    editable: false,
  },
  {
    field: 'carried',
    headerName: 'Carry',
    type: 'number',
    width: 80,
    editable: false,
  },
];

const rows = [
  { id: 175, teamName: 'Buzz Robotics', rankingPoints: 80, averageScore: 14, offensivePowerRanking: 17.2, defensivePowerRanking: 1000, averageAutoScore: 3, elo: 1000, teamBasedPowerRanking: 254, carried: 0.54 },
  { id: 230, teamName: 'Robo Dogs', rankingPoints: 0, averageScore: 131.38, offensivePowerRanking: 14.24, defensivePowerRanking: 10.7, averageAutoScore: 1.23, elo: 97.94, teamBasedPowerRanking: 2193.62200, carried: 0.63 },
  { id: 2288, teamName: 'Techno Monarch Butterfly', rankingPoints: 35, averageScore: 86.58, offensivePowerRanking: 14.97, defensivePowerRanking: 19.97, averageAutoScore: 15.66, elo: 337.14, teamBasedPowerRanking: 2728.08200, carried: 0.78 },
  { id: 4163, teamName: 'Bionic Exfectorum', rankingPoints: 35, averageScore: 8.13, offensivePowerRanking: 10.01, defensivePowerRanking: 19.22, averageAutoScore: 25.22, elo: 882.39, teamBasedPowerRanking: 2330.18200, carried: 0.36 },
  { id: 2433, teamName: 'Robo Sea Anemone', rankingPoints: 30, averageScore: 130.13, offensivePowerRanking: 7.21, defensivePowerRanking: 13.53, averageAutoScore: 9.91, elo: 377.42, teamBasedPowerRanking: 2178.44200, carried: 0.58 },
  { id: 698, teamName: 'Electro Ferrets', rankingPoints: 12, averageScore: 158.0, offensivePowerRanking: 12.48, defensivePowerRanking: 9.2, averageAutoScore: 27.24, elo: 1003.79, teamBasedPowerRanking: 1533.25200, carried: 0.21 },
  { id: 1096, teamName: 'Bionic Jellyfish', rankingPoints: 13, averageScore: 152.91, offensivePowerRanking: 2.01, defensivePowerRanking: 3.47, averageAutoScore: 28.93, elo: 1767.69, teamBasedPowerRanking: 2485.24200, carried: 0.73 },
  { id: 2814, teamName: 'Advance Monarch Butterfly', rankingPoints: 27, averageScore: 67.64, offensivePowerRanking: 8.4, defensivePowerRanking: 7.29, averageAutoScore: 21.85, elo: 11.34, teamBasedPowerRanking: 1381.74200, carried: 0.61 },
  { id: 3506, teamName: 'Mecha Exfectorum', rankingPoints: 32, averageScore: 21.37, offensivePowerRanking: 14.67, defensivePowerRanking: 7.79, averageAutoScore: 29.9, elo: 1816.49, teamBasedPowerRanking: 2252.58200, carried: 0.73 },
  { id: 572, teamName: 'Robo Sea Anemone', rankingPoints: 22, averageScore: 175.17, offensivePowerRanking: 6.97, defensivePowerRanking: 14.31, averageAutoScore: 27.19, elo: 546.96, teamBasedPowerRanking: 898.27200, carried: 0.39 },
  { id: 4474, teamName: 'Robo Ferrets', rankingPoints: 16, averageScore: 56.18, offensivePowerRanking: 5.86, defensivePowerRanking: 14.11, averageAutoScore: 6.46, elo: 1543.83, teamBasedPowerRanking: 2323.43200, carried: 0.09 },
  { id: 1683, teamName: 'Techno Tapeworm', rankingPoints: 28, averageScore: 83.27, offensivePowerRanking: 18.5, defensivePowerRanking: 5.09, averageAutoScore: 18.16, elo: 1661.61, teamBasedPowerRanking: 2266.93200, carried: 0.32 },
  { id: 3845, teamName: 'Advance Exfectorum', rankingPoints: 27, averageScore: 120.58, offensivePowerRanking: 9.62, defensivePowerRanking: 15.72, averageAutoScore: 28.87, elo: 1515.82, teamBasedPowerRanking: 3061.55200, carried: 0.15 },
  { id: 1583, teamName: 'Advance Jellyfish', rankingPoints: 4, averageScore: 142.93, offensivePowerRanking: 0.39, defensivePowerRanking: 4.89, averageAutoScore: 9.98, elo: 1750.0, teamBasedPowerRanking: 586.0200, carried: 0.39 },
  { id: 3632, teamName: 'Advance Monarch Butterfly', rankingPoints: 10, averageScore: 60.63, offensivePowerRanking: 18.42, defensivePowerRanking: 14.32, averageAutoScore: 20.59, elo: 1450.49, teamBasedPowerRanking: 501.44200, carried: 0.61 },
  { id: 3041, teamName: 'Sparko Jellyfish', rankingPoints: 34, averageScore: 83.23, offensivePowerRanking: 13.87, defensivePowerRanking: 5.32, averageAutoScore: 9.15, elo: 1497.81, teamBasedPowerRanking: 2642.62200, carried: 0.17 },
  { id: 564, teamName: 'Techno Dogs', rankingPoints: 19, averageScore: 70.99, offensivePowerRanking: 8.77, defensivePowerRanking: 6.37, averageAutoScore: 21.91, elo: 1794.68, teamBasedPowerRanking: 3211.86200, carried: 0.5 },
  { id: 4693, teamName: 'Robo Exfectorum', rankingPoints: 29, averageScore: 40.88, offensivePowerRanking: 3.17, defensivePowerRanking: 9.2, averageAutoScore: 29.91, elo: 700.6, teamBasedPowerRanking: 953.1200, carried: 0.36 },
  { id: 1095, teamName: 'Sparko Platypus', rankingPoints: 39, averageScore: 85.47, offensivePowerRanking: 2.57, defensivePowerRanking: 5.41, averageAutoScore: 20.33, elo: 8.1, teamBasedPowerRanking: 3610.44200, carried: 0.45 },
  { id: 3091, teamName: 'Electro Sea Anemone', rankingPoints: 2, averageScore: 42.63, offensivePowerRanking: 4.11, defensivePowerRanking: 4.89, averageAutoScore: 17.96, elo: 1062.51, teamBasedPowerRanking: 917.6200, carried: 0.85 },
  { id: 4981, teamName: 'Bionic Sea Anemone', rankingPoints: 9, averageScore: 104.16, offensivePowerRanking: 17.49, defensivePowerRanking: 10.37, averageAutoScore: 23.56, elo: 1796.51, teamBasedPowerRanking: 1479.55200, carried: 0.23 },
  { id: 945, teamName: 'Deus Jellyfish', rankingPoints: 20, averageScore: 131.11, offensivePowerRanking: 16.09, defensivePowerRanking: 10.4, averageAutoScore: 21.02, elo: 821.9, teamBasedPowerRanking: 1654.16200, carried: 0.54 },
  { id: 658, teamName: 'Pnumatic Tapeworm', rankingPoints: 8, averageScore: 67.79, offensivePowerRanking: 13.19, defensivePowerRanking: 10.26, averageAutoScore: 27.21, elo: 199.92, teamBasedPowerRanking: 2461.54200, carried: 0.38 },
  { id: 1185, teamName: 'Advance Platypus', rankingPoints: 25, averageScore: 37.74, offensivePowerRanking: 3.59, defensivePowerRanking: 5.45, averageAutoScore: 15.85, elo: 1078.63, teamBasedPowerRanking: 3770.82200, carried: 0.76 },
  { id: 2255, teamName: 'Sparko Exfectorum', rankingPoints: 23, averageScore: 79.59, offensivePowerRanking: 18.14, defensivePowerRanking: 18.93, averageAutoScore: 14.67, elo: 797.68, teamBasedPowerRanking: 729.52200, carried: 0.74 },
  { id: 766, teamName: 'Electro Jellyfish', rankingPoints: 3, averageScore: 13.27, offensivePowerRanking: 16.89, defensivePowerRanking: 7.54, averageAutoScore: 24.15, elo: 1405.55, teamBasedPowerRanking: 1124.96200, carried: 0.88 },
  { id: 4894, teamName: 'Bionic Sea Anemone', rankingPoints: 28, averageScore: 81.16, offensivePowerRanking: 18.96, defensivePowerRanking: 3.95, averageAutoScore: 10.03, elo: 716.9, teamBasedPowerRanking: 1839.91200, carried: 0.33 },
  { id: 517, teamName: 'Advance Exfectorum', rankingPoints: 40, averageScore: 116.95, offensivePowerRanking: 1.61, defensivePowerRanking: 2.94, averageAutoScore: 25.33, elo: 203.14, teamBasedPowerRanking: 2628.92200, carried: 0.35 },
  { id: 2462, teamName: 'Pnumatic Monarch Butterfly', rankingPoints: 15, averageScore: 173.77, offensivePowerRanking: 17.26, defensivePowerRanking: 2.16, averageAutoScore: 25.23, elo: 344.78, teamBasedPowerRanking: 155.26200, carried: 0.62 },
  { id: 2990, teamName: 'Electro Ferrets', rankingPoints: 17, averageScore: 139.27, offensivePowerRanking: 12.1, defensivePowerRanking: 12.43, averageAutoScore: 21.1, elo: 1378.87, teamBasedPowerRanking: 1465.25200, carried: 0.46 },
  { id: 433, teamName: 'Deus Monarch Butterfly', rankingPoints: 19, averageScore: 92.09, offensivePowerRanking: 9.93, defensivePowerRanking: 6.62, averageAutoScore: 23.83, elo: 213.39, teamBasedPowerRanking: 1088.72200, carried: 0.17 },
  { id: 3836, teamName: 'Deus Jellyfish', rankingPoints: 36, averageScore: 112.62, offensivePowerRanking: 10.53, defensivePowerRanking: 0.25, averageAutoScore: 8.03, elo: 1477.71, teamBasedPowerRanking: 853.49200, carried: 0.09 },
  { id: 1317, teamName: 'Electro Dogs', rankingPoints: 12, averageScore: 163.38, offensivePowerRanking: 9.82, defensivePowerRanking: 9.81, averageAutoScore: 25.76, elo: 1355.24, teamBasedPowerRanking: 1751.87200, carried: 0.79 },
  { id: 751, teamName: 'Sparko Baboons', rankingPoints: 35, averageScore: 30.04, offensivePowerRanking: 12.7, defensivePowerRanking: 15.74, averageAutoScore: 16.25, elo: 1123.14, teamBasedPowerRanking: 2593.49200, carried: 0.24 },
  { id: 3765, teamName: 'Mecha Baboons', rankingPoints: 13, averageScore: 59.36, offensivePowerRanking: 5.25, defensivePowerRanking: 2.5, averageAutoScore: 28.98, elo: 1272.37, teamBasedPowerRanking: 199.46200, carried: 0.51 },
  { id: 189, teamName: 'Techno Tapeworm', rankingPoints: 32, averageScore: 79.23, offensivePowerRanking: 2.05, defensivePowerRanking: 3.65, averageAutoScore: 10.79, elo: 1411.81, teamBasedPowerRanking: 1234.38200, carried: 0.41 },
  { id: 1112, teamName: 'Deus Jellyfish', rankingPoints: 37, averageScore: 28.43, offensivePowerRanking: 16.97, defensivePowerRanking: 12.83, averageAutoScore: 15.35, elo: 1615.24, teamBasedPowerRanking: 2551.41200, carried: 0.63 },
  { id: 3891, teamName: 'Bionic Jellyfish', rankingPoints: 31, averageScore: 169.7, offensivePowerRanking: 6.65, defensivePowerRanking: 0.68, averageAutoScore: 10.82, elo: 1193.39, teamBasedPowerRanking: 870.51200, carried: 0.81 },
  { id: 190, teamName: 'Robo Tapeworm', rankingPoints: 32, averageScore: 165.81, offensivePowerRanking: 7.26, defensivePowerRanking: 14.69, averageAutoScore: 23.61, elo: 670.86, teamBasedPowerRanking: 2954.41200, carried: 0.15 },
  { id: 2195, teamName: 'Advance Sea Anemone', rankingPoints: 23, averageScore: 91.7, offensivePowerRanking: 1.32, defensivePowerRanking: 12.03, averageAutoScore: 20.18, elo: 510.22, teamBasedPowerRanking: 337.64200, carried: 0.78 },
];

export default function TeamsTable({tableData, onTeamSelected}) {  

  const handleRowClick = (params, event, details) => {
    onTeamSelected(params.row.id);
  }

  React.useEffect(() => {
    console.log("re-rendering table")
  }, [])

  return (
    <>
      <Box sx={{height: '100%', width: '100%'}}>
        <DataGrid
          rows={(tableData && tableData.length != 0) ? tableData : rows}
          columns={columns}
          sx={{
            // boxShadow: 20,
            border: 2,
            // borderColor: 'primary.main',
            // '& .MuiDataGrid-cell:hover': {
            //   color: 'primary.main',
            // },
            // accentColor: 'text.primary'
            // backgroundColor: 'background.default',
            // accentColor: 'primary.main'
          }}
          checkboxSelection={false}
          initialState={{
            pagination: {
                paginationModel: {
                pageSize: 15,
                },
            },
          }}
          pageSizeOptions={[5]}
          onRowClick={handleRowClick}
        />
      </Box>
    </>
  );
}