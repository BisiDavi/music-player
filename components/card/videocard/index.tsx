import Image from 'next/image';
import { Paper } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import {Button,IconButton} from '../../../imports';

const useStyles = makeStyles({
  paper:{
    borderRadius: '10px',
    position: 'relative',

  },
  playIcon:{
    left: '45%',
    position:'absolute'
  },
  btnGrp: {
    position: 'absolute',
    top: '30px',
    left: '40px',
    display: 'flex'
  }
});

const Videocard = ({ video }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Image src={video} width={900} height={400} />
      <div className={classes.btnGrp}>
        <Button text="Live" bg="red" />
        <IconButton text="8/10" />
      </div>
      <div className={classes.playIcon}>
        <Image src="/play.png" height={70} width={70} />
      </div>
    </Paper>
  );
};

export default Videocard;
