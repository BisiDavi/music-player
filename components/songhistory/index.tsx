import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Imagecard } from '../card';

const useStyles = makeStyles({
  root: {
    height: '145px',
    width: '100%',
    padding: '15px 40px 25px 40px',
    background: ' #292929',
    borderRadius: '15px',
    display: 'flex',
    '& h3': {
      color: 'white',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '116.5%'
    }
  },
  imgGrp: {
    marginLeft: '20px',
    display: 'flex'
  },
  historyImg: {
    margin: '10px'
  }
});
const Songhistory = () => {
  const classes = useStyles();
  const images = [
    { id: 1, image: '/imageplaceholder8.png' },
    { id: 2, image: '/imageplaceholder7.png' },
    { id: 3, image: '/imageplaceholder6.png' }
  ];
  return (
    <Grid className={classes.root}>
      <h3>
        Song <br /> History
      </h3>
      <span className={classes.imgGrp}>
        {images.map(img => (
          <div key={img.id} className={classes.historyImg}>
            <Imagecard imgsrc={img.image} height={70} width={70} play />
          </div>
        ))}
      </span>
    </Grid>
  );
};

export default Songhistory;
