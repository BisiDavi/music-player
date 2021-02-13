import Image from 'next/image';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  paper: {
    width: '500px',
    height: '208px',
    background: '#FF8A00',
    borderRadius: '18px'
  },
  playIcon: {
    left: '45%',
    position: 'absolute'
  },
  volume: {
    display: 'flex',
    color: 'white',
    justifyContent: 'flex-start'
  }
});

const Volumemixer = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={12} className={classes.volume}>
          <p>Volume mixer</p>
          <Image src="/" alt="controls" />
        </Grid>
      </Grid>
      <div className={classes.playIcon}>
        <Image src="/play.png" height={70} width={70} />
        <Button text="64KBPS" />
        <Button text="Download" />
      </div>
    </Paper>
  );
};

export default Volumemixer;
