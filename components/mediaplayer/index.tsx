import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card } from '@material-ui/core';
import Slider from '../volumemixer/volume';
import { Imagecard } from '../card';

const useStyles = makeStyles({
  mediacard: {
    backgroundColor: '#232323',
    borderRadius: '18px',
    color: 'white',
    fontFamily: 'Poppins'
  },
  control:{
  display: 'flex'
  },
  ctrlImg:{
 margin: '5px 10px'
  },
  button: {
    backgroundColor: props => props.bg,
    color: 'white',
    borderRadius: '10px'
  },
  grp:{
    display:'flex',
    justifyContent:'space-around',
    color:'white',
  }
});

interface IButtonProps {
  bg: string;
  text: string;
}

const Mediaplayer = (props: IButtonProps): JSX.Element => {
  const controls = [
    { id: 1, image: '/shuffle.svg' },
    { id: 2, image: '/prev.png' },
    { id: 3, image: '/pause.png' },
    { id: 4, image: '/next.png' },
    { id: 5, image: '/repeat.png' }
  ];
  const classes = useStyles(props);
  return (
    <Card className={classes.mediacard}>
      <Grid container>
        <Grid xs={3} item>
          <Imagecard imgsrc="/imageplaceholder1.png" />
        </Grid>
        <Grid xs={9} item>
          <p>Travel and adventure</p>
          <h3>Radio station</h3>
        </Grid>
        <Grid xs={12} item>
          <Image src="/wave.png" height={250} width={500} />
        </Grid>
        <Grid xs={12} item>
          <Slider />
          <div className={classes.grp}>
            <p>07:00</p>
            <p>20:32</p>
          </div>
          <div className={classes.controls}>
            {controls.map(control => (
              <Image
                key={control.id}
                className={classes.ctrlImg}
                height={50}
                width={50}
                src={control.image}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Mediaplayer;
