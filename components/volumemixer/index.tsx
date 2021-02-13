import Image from 'next/image';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VolumeSlider from './volume';
import { Button } from '../../imports';

const useStyles = makeStyles({
  paper: {
    width: '100%',
    height: '208px',
    background: '#FF8A00',
    borderRadius: '18px',
    '& p': {
      color: 'white',
      fontFamily: ' Poppins',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '21px',
    }
  },
  playIcon: {
    left: '45%',
    position: 'absolute'
  },
  volume: {
    display: 'flex',
    color: 'white',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  group: {
    display: 'flex',
    width: '150px',
    justifyContent:'space-between'
  },
  sound:{
  display:'flex',
  flexDirection:'column'
  }
});

const Volumemixer = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={12} className={classes.volume}>
          <p>Volume mixer</p>
          <VolumeSlider color="white !important" width="360px" />
        </Grid>

        <Grid item>
          <Grid container>
            <Grid item xs={6} className={classes.sound}>
              <p>Quality sounds</p>
              <div className={classes.group}>
                <Image src="/play.png" height={30} width={30} />
                <Button text="64KBPS" />
              </div>
            </Grid>
            <Grid item xs={6} className={classes.playIcon}>
              <p>Playlist song</p>
              <div className={classes.group}>
                <Button text="Download" />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Volumemixer;
