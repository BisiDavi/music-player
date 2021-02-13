import Image from 'next/image';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  paper: {
    borderRadius: '10px',
    position: 'relative',
    background: 'transparent'
  },
  playIcon: {
    left: '30%',
    position: 'absolute',
    top: '20px',
    height: '25px',
    width: '25px'
  }
});

const Imagecard = ({ imgsrc, width, height, play }) => {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <Image src={imgsrc} width={width} height={height} />
      {play ? (
        <div className={classes.playIcon}>
          <Image src="/play.png" height={70} width={70} />
        </div>
      ) : null}
    </div>
  );
};

export default Imagecard;
