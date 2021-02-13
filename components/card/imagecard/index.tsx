import Image from 'next/image';
import { Paper } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '../../buttons';

const useStyles = makeStyles({
  paper:{
    borderRadius: '10px',
    position: 'relative'
  },
  playIcon:{
    left: '45%',
    position:'absolute'
  }
});

const Videocard = ({ imgsrc }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Image src={imgsrc} width={200} height={200} />      
      <div className={classes.playIcon}>
        <Image src="/play.png" height={70} width={70} />
      </div>
    </Paper>
  );
};

export default Videocard;
