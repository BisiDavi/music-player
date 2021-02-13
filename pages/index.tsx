import Head from 'next/head';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Videocard, Thumbnailcard } from '../components/card';
import { Banner, Volumemixer, Mediaplayer, Songhistory } from '../imports';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: 'black',
      padding: theme.spacing(8),
      height: '100%'
    },
    paper: {
      backgroundColor: 'black',
      margin: '10px',
      padding: '0px'
    },
    playlist: {
      padding: theme.spacing(1),
      overflowY: 'auto',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'black',
      margin: '10px',
      padding: '0px',
      '& p': {
        marginBottom: '4px'
      },
      '& img': {
        margin: '5px'
      },
      '& h3': {
        color: 'white',
        fontFamily: 'Poppins',
        marginLeft:'10px'
      },
      '& ::-webkit-scrollbar': {
        width: '6px',
        height: '126px',
        borderRadius: '21px'
      },
      '& ::-webkit-scrollbar-thumb': {
        backgroundColor: '#FF8A00'
      },
      '& ::-webkit-scrollbar-track': {
        backgroundColor: '#292929',
        borderRadius: '21px',
        width: '6px'
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
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={12}>
              <Banner />
            </Grid>
            <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Videocard video="/videoplaceholder.png" />
          </Paper>
          </Grid>
<Grid item xs={6}>
  <Mediaplayer />
</Grid>
<Grid item xs={6}>
  <Songhistory />
  <Volumemixer />
</Grid>
        </Grid>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.playlist}>
            <h3>Other Playlist</h3>
            {playlists.map(playlist => (
              <Thumbnailcard key={playlist.id} imgsrc={playlist.image} />
            ))}
          </Paper>
        </Grid>

      </Grid>
    </div>
  );
};

export default LandingPage;
