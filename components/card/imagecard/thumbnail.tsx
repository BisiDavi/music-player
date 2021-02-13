import Image from 'next/image';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  paper: {
    borderRadius: '10px',
    position: 'relative'
  },
  text: {
    left: '15px',
    bottom: '20px',
    position: 'absolute'
  }
});

const Thumbnailcard = ({ imgsrc }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Image src={imgsrc} width={200} height={200} />
      <div className={classes.text}>
        <p>Travel and adventure</p>
        <h4>Radio station</h4>
      </div>
    </Paper>
  );
};

export default Thumbnailcard;
