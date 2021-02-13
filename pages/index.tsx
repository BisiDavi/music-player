import Head from 'next/head';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Videocard } from '../components/card';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: 'black',
      padding: theme.spacing(3),
      height: '100vh'
    },
    paper: {
      padding: theme.spacing(1)
    }
  })
);

const LandingPage = (): JSX.Element => {
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
          <Paper className={classes.paper}></Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
