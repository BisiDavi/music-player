import Image from 'next/image';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid, Card } from '@material-ui/core';
import VolumeSlider from '../volumemixer/volume';
import { Imagecard } from '../card';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mediacard: {
      backgroundColor: '#232323',
      borderRadius: '18px',
      color: 'white',
      fontFamily: 'Poppins',
      padding: theme.spacing(3),
      height: '385px'
    },
    control: {
      display: 'flex'
    },
    ctrlImg: {
      margin: '0px 25px'
    },
    button: {
      color: 'white',
      borderRadius: '10px'
    },
    controls: {
      marginLeft: '10px',
      height: '40px',
      alignItems: 'center',
      display: 'flex'
    },
    grp: {
      display: 'flex',
      justifyContent: 'space-between',
      color: 'white',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '7px',
      lineHeight: '10px'
    },
    imageplaceholder: {
      width: '90px',
      height: '80px'
    },
    pauseIcon: {
      background: 'linear-gradient(180deg, #FA5C03 0%, #E12A2A 100%)',
      padding: '20px 15px 10px 15px;',
      borderRadius: '50%',
      margin: '0px 10px'
    },
    text: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      marginLeft: '10px',
      '& h3': {
        fontSize: '30px',
        lineHeight: '50px',
        margin: '0px'
      },
      '& p': {
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '21px',
        color: '#5F5F5F',
        margin: '0px'
      }
    }
  })
);

const Mediaplayer = (): JSX.Element => {
  const controls = [
    { id: 1, image: '/shuffle.svg' },
    { id: 2, image: '/prev.png' },
    { id: 3, image: '/pause.png' },
    { id: 4, image: '/next.png' },
    { id: 5, image: '/repeat.png' }
  ];
  const classes = useStyles();
  return (
    <Card className={classes.mediacard}>
      <Grid container>
        <Grid className={classes.imageplaceholder} xs={3} item>
          <Imagecard
            width={90}
            height={80}
            imgsrc="/imageplaceholder1.png"
            play={false}
          />
        </Grid>
        <Grid xs={7} className={classes.text} item>
          <p>Travel and adventure</p>
          <h3>Radio station</h3>
        </Grid>
        <Grid xs={12} item>
          <Image src="/wave.png" height={200} width={500} />
        </Grid>
        <Grid xs={12} item>
          <VolumeSlider color="linear-gradient(89.98deg, rgba(250, 92, 3, 0.69) -37.51%, #E12A2A 92.61%);" width="350px" />
          <div className={classes.grp}>
            <p>07:00</p>
            <p>20:32</p>
          </div>
          <div className={classes.controls}>
            {controls.map(control => {
              const controlIcon = control.image.includes('/pause.png')
                ? classes.pauseIcon
                : classes.ctrlImg;
              return (
                <div key={control.id} className={controlIcon}>
                  <Image height={20} width={20} src={control.image} />
                </div>
              );
            })}
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Mediaplayer;
