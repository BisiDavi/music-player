import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Imagecard } from '../card';

const useStyles = makeStyles({
  root: {
    height: '145px',
    width: '100%',
    padding: '15px 40px 25px 40px',
    background: ' #292929',
    borderRadius: '15px'
  }
});
const SongHistory = () => {
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
      {images.map(img => <Imagecard src={img} />}
    </Grid>
  );
};

export default SongHistory;
