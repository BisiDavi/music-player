import Head from 'next/head';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Videocard, Thumbnailcard } from '../components/card';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: 'black',
      padding: theme.spacing(3),
      height: '100vh'
    },
    paper:{
      backgroundColor:'white'
    },
    playlist: {
      padding: theme.spacing(1),
      overflowY: 'auto',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      '& p': {
        marginBottom: '4px'
      },
      '& img': {
        margin: '5px'
      },
      '& playlist::-webkit-scroll': {
        backgroundColor: '#FF8A00',
        width: '6px',
        height: '126px',
        borderRadius: '21px'
      }
    }
  })
);

const LandingPage = (): JSX.Element => {
  const playlists = [
    { id: 1, image: '/imageplaceholder5.png' },
    { id: 2, image: '/imageplaceholder4.png' },
    { id: 3, image: '/imageplaceholder3.png' },
    { id: 4, image: '/imageplaceholder2.png' },
    { id: 5, image: '/imageplaceholder5.png' },
    { id: 6, image: '/imageplaceholder4.png' },
    { id: 7, image: '/imageplaceholder3.png' },
    { id: 8, image: '/imageplaceholder2.png' }
  ];
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Bali's Finest | Awesome Music App</title>
      </Head>
      <Grid container className={classes.root}>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <Videocard video="/videoplaceholder.png" />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.playlist}>
            <h3>Other Playlist</h3>
            {playlists.map(playlist => (
              <Thumbnailcard 
              key={playlist.id} 
              imgsrc={playlist.image} 
              />
            ))}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
