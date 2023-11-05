import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

// function valuetext(value) {
//   return `${value}°C`;
// }

export default function RangeSlider() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };

  return (
    <Box sx={{ width: 300}}>
      <Slider
        // getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={50000}
        // getAriaValueText={valuetext}
      />
    </Box>
  );
}