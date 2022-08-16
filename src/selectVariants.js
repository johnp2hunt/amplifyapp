//import * as React from 'react';
import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import dateList from './birdDates';

function SelectVariants ({childToParent}) {
  const [imgnum, setImgnum] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setImgnum(event.target.value);
    childToParent(event.target.value);
  };
  return (
    <div className="img-select-div">
      <FormControl className="img-select-form" variant="standard">
        <InputLabel id="demo-simple-select-standard-label">Choose a starting date</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={imgnum}
          onChange={handleChange}
          label="Date"
        >
          {dateList.map(({dateImgnum, datelabel}) => (
            <MenuItem key={dateImgnum} value={dateImgnum}>{datelabel}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
export default SelectVariants;
