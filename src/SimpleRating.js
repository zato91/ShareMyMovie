import React from 'react';
import  Rating  from 'material-ui-rating'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function SimpleRating() {
  const [value, setValue] = React.useState(10);

  return (
    <div>
     
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">10 stars</Typography>
        <Rating name="size-large" defaultValue={2} size="large" value={value} max={10} />
      </Box>

      
      
    </div>
  );
}