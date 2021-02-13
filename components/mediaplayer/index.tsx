import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Imagecard } from '../card';

const useStyles = makeStyles({
  button: {
    backgroundColor: props => props.bg,
    color: 'white',
    borderRadius: '10px'
  }
});

interface IButtonProps {
  bg: string;
  text: string;
}

const Mediaplayer = (props: IButtonProps): JSX.Element => {
  const classes = useStyles(props);
  return (
    <Grid container>
      <Grid xs={3} item>
        <Imagecard imgsrc="/imageplaceholder1.png" />
      </Grid>
      <Grid xs={9} item>
        <p>Travel and adventure</p>
        <h3>Radio station</h3>
      </Grid>
      <Grid xs={12} item>
        <Image src="/wave.png" />        
      </Grid>      
      <Grid xs={12} item>
      </Grid>      
    </Grid>
  );
};

export default Mediaplayer;
