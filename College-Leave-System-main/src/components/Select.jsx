import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    props.fun(event.target.value);
    setAge(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: 250 ,minWidth:150,marginLeft:'10%',marginBottom:'30px',marginTop:'10px'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" >{props.title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={props.val1}>{props.val1}</MenuItem>
          <MenuItem value={props.val2}>{props.val2}</MenuItem>
          <MenuItem value={props.val3}>{props.val3}</MenuItem>
          <MenuItem value={props.val4}>{props.val4}</MenuItem>
          <MenuItem value={props.val5}>{props.val5}</MenuItem>
          <MenuItem value={props.val6}>{props.val6}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}