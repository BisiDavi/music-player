import Image from 'next/image';
import { Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Imagecard } from '../card';

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '0px 10px'
  },
  favourite: {
    padding: '15px',
    width: '52px',
    height: '40px',
    border: '1px solid #FF8A00',
    boxSizing: 'border-box',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    color: 'white',
    marginLeft: '10px',
    '& h5': {
      fontWeight: '500',
      fontSize: '18px',
      margin: '0px',
      lineHeight: '27px'
    },
    '& p': {
      fontSize: '12px',
      lineHeight: '18px',
      color: '#484848'
    }
  }
});

const Banner = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={7}>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={3}>
            <Imagecard
              height={120}
              width={150}
              imgsrc="/imageplaceholder1.png"
              play={false}
            />
          </Grid>
          <Grid item className={classes.text} xs={5}>
            <h5>Radio station playlist</h5>
            <p>Travel and adventure</p>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <div className={classes.favourite}>
          <Image src="/heart.png" height={20} width={20} />
        </div>
      </Grid>
    </Grid>
  );
};

export default Banner;
