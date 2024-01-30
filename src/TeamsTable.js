import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Dialog, DialogContent, DialogTitle, Typography, DialogActions, Button } from '@mui/material';
import TeamDetailDialog from './TeamDetailDialog';

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
];

const rows = [
  { id: 175, teamName: 'Buzz Robotics', rankingPoints: 80, averageScore: 14, offensivePowerRanking: 17.2 },
  // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function TeamsTable() {

  const [open, setOpen] = React.useState(false);
  const [detailTeam, setDetailTeam] = React.useState(0);

  const handleClose = () => {
    setOpen(false);
  }
  
  const handleRowClick = (params, event, details) => {
    setOpen(true)
    setDetailTeam(params.row.id);
  }

  return (
    <>
      <DataGrid
          rows={rows}
          columns={columns}
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
      <TeamDetailDialog team={detailTeam} open={open} onClose={handleClose}/>
    </>
  );
}