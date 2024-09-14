import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from './TextField'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing(props) {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={2}>
          <Item>{props.name}</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>{props.reason}</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>{props.startDate}</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>{props.endDate}</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>{props.yes}</Item>
        </Grid>
        <Grid item xs="auto">
          <Item>{props.denialreason}</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>{props.no}</Item>
        </Grid>
        
      </Grid>
    </Box>
  );
}