import Image from 'next/image';
import { Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Imagecard } from '../card';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  favourite: {
    padding: '15px',
    width: '52px',
    height: '40px',
    border: '1px solid #FF8A00',
    boxSizing: 'border-box',
    borderRadius: '8px'
  }
});

const Banner = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>
        <Grid item xs={1}>
          <Imagecard imgsrc="/imageplaceholder1.png" />
        </Grid>
        <Grid item xs={3}>
          <h5>Radio station playlist</h5>
          <p>Travel and adventure</p>
        </Grid>
      </Grid>
      <Grid>
        <div className={classes.favourite}>
          <Image src="/heart.png" height={20} width={20} />
        </div>
      </Grid>
    </Grid>
  );
};

export default Banner;
