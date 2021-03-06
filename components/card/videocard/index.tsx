import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import { Button, IconButton } from '../../../imports';

const useStyles = makeStyles({
  paper: {
    borderRadius: '10px',
    position: 'relative',
    background: 'none',
    '& img':{
      margin:'auto',
      display: 'flex'
    }
  },
  playIcon: {
    left: '45%',
    top: '40%',
    position: 'absolute'
  },
  btnGrp: {
    position: 'absolute',
    top: '30px',
    left: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '150px'
  }
});

const Videocard = ({ video }) => {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <Image src={video} width={900} height={350} />
      <div className={classes.btnGrp}>
        <Button  text="Live" />
        <IconButton text="8/10" />
      </div>
      <div className={classes.playIcon}>
        <Image src="/play.png" height={70} width={70} />
      </div>
    </div>
  );
};

export default Videocard;
