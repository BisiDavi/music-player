import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Slider } from '@material-ui/core';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles({
  root: (width) => {
    width: width;
  },
  volumeSLider: (color) =>{
    color: color;
    
  }
});

export default function VolumeSlider({ color, width }) {
  const classes = useStyles({ color, width });
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider
            value={value}
            className={classes.volumeSLider}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
    </div>
  );
}
