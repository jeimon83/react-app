import {AppBar, Toolbar, Typography, Grid} from "@material-ui/core";
import useStyles from './useStyles';

const TestBar = () => {

  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Grid container spacing={4} justify="center">
          
            <Typography variant="h6" className={classes.title}>
              Home
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Paddles
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Sneakers
            </Typography>

          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default TestBar;