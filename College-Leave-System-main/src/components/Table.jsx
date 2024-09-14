import * as React from 'react';
import { useState } from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Alert,Collapse } from '@mui/material';
// import Title from './Title';

// Generate Order Data
function createData(id, reason,startdate, enddate, classper, hodper, jdper,) {
  return { id, reason,startdate, enddate, classper, hodper, jdper, };
}



function preventDefault(event) {
  event.preventDefault();
}

export default function Orders(props) {
    const [alert,setalert]=useState(false);
    const rows = [
        createData(
          0,
          props.reason,
          props.startDate,
          props.enddate,      
          props.classper, 
          'Tupelo, MS',
          'VISA ⠀•••• 3719',
          312.44,
        ),
       
      ];
  return (
    <React.Fragment>
      {/* <Title>Recent Orders</Title> */}
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Reason</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Status</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.reason}</TableCell>
              <TableCell>{row.startdate}</TableCell>
              <TableCell>{row.enddate}</TableCell>
            {/* {!props.classper_once ?<TableCell><Alert severity='info'>Not seen by class authority</Alert></TableCell> : <TableCell>{!row.classper ?<Alert severity='error'>No </Alert>:<Alert severity='success'>YES</Alert>}</TableCell>} */}
   
             <TableCell>{!props.denail=="" ? <Alert severity='info'>{props.denail}</Alert>:<Alert>To be seen by class authority</Alert>}</TableCell>
              {/* <TableCell>{!row.classper ?<Alert severity='error'>No</Alert>:<Alert severity='success'>{props.denail}</Alert>}</TableCell>
              <TableCell>{!props.hodper ?<Alert severity='error'>No</Alert>:<Alert severity='success'>YES</Alert>}</TableCell> */}
             {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
            </TableRow>

          ))}
          {/* <TableRow><Alert severity='error'>{props.denial}</Alert></TableRow> */}
        </TableBody>
      </Table>
    
    </React.Fragment>
  );
}