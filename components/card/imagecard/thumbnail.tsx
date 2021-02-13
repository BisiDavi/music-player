import Image from 'next/image';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  paper: {
    borderRadius: '10px',
    position: 'relative',
    backgroundColor: 'transparent',
    margin: '10px',
    padding: '0px'
  },
  text: {
    left: '15px',
    bottom: '20px',
    position: 'absolute',
    color: 'white',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    '& p': {
      fontWeight: '500',
      fontSize: '9px',
      lineHeight: '13px'
    },
    '& h4': {
      fontWeight: 'bold',
      fontSize: '18px',
      lineHeight: '27px',
      margin:'0px',
    }
  }
});

const Thumbnailcard = ({ imgsrc }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Image src={imgsrc} width={400} height={300} />
      <div className={classes.text}>
        <p>Travel and adventure</p>
        <h4>Radio station</h4>
      </div>
    </Paper>
  );
};

export default Thumbnailcard;
