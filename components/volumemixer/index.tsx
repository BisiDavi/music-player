import Image from 'next/image';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VolumeSlider from './volume';
import { DropdownButton, ShadeButton } from '../../imports';

const useStyles = makeStyles({
  paper: {
    width: '100%',
    height: '208px',
    background: '#FF8A00',
    borderRadius: '18px',
    padding: '10px 25px',
    '& p': {
      color: 'white',
      fontFamily: ' Poppins',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '21px'
    }
  },
  container: {
    display: 'flex',
    width: '350px',
    justifyContent: 'space-around'
  },
  playlist: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  volume: {
    display: 'flex',
    color: 'white',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  group: {
    display: 'flex',
    width: '150px',
    justifyContent: 'space-between'
  },
  sound: {
    display: 'flex',
    flexDirection: 'column'
  }
});

const Volumemixer = () => {
  const buttonOptions = [
    '320kbps MP3',
    '256Kbps MP3',
    '192Kbps MP3',
    '128Kbps MP3',
    '64Kbps Mp3 '
  ];
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={12} className={classes.volume}>
          <p>Volume mixer</p>
          <VolumeSlider />
        </Grid>

        <Grid item>
          <Grid container className={classes.container}>
            <Grid item xs={6} className={classes.sound}>
              <p>Quality sounds</p>
              <div className={classes.group}>
                <Image src="/play-min.png" height={20} width={20} />
                <DropdownButton text="64KBPS" options={buttonOptions} />
              </div>
            </Grid>
            <Grid item xs={6} className={classes.playlist}>
              <p>Playlist song</p>
              <div className={classes.group}>
                <ShadeButton text="Download" icon="/download.png" />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Volumemixer;
