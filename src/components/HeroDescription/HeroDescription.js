import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './_shared.scss';
import { withStyles } from '@material-ui/core/styles'



function HeroDescription({ heroImage, heroName, heroDescrip, classes }) {
  if (heroDescrip === '') {
    return (
      <>
        <Grid container className={classes.centerContainer}>
            <img src={heroImage} className="HeroDescription__image" alt="hero" ></img>
          <Grid item md={5} >
            <div className={classes.descriptionContainer}>
              <Paper className={classes.descriptionBox}>
                <h1>
                  {heroName}
                </h1>
                <Typography variant="body1" component="p" className={classes.descriptionText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisl elit, viverra et sodales egestas,
                  fringilla vitae felis. Duis gravida eget diam a aliquet. Quisque vel lobortis arcu. Ut feugiat pulvinar
                  mattis. Proin congue leo et fermentum malesuada. In hac habitasse platea dictumst. Nulla a scelerisque
                  nibh, sit amet posuere ipsum. In sed ex sit amet diam laoreet fermentum. Duis vel mauris mattis,
                  placerat orci aliquam, accumsan risus. Integer at maximus leo.
            </Typography>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </>);
  } else {
    return (
      <>
        <Grid container className={classes.centerContainer}>
            <img src={heroImage} className="HeroDescription__image" alt="hero" ></img>
          <Grid item md={5} >
            <div className={classes.descriptionContainer}>
              <Paper className={classes.descriptionBox}>
                <h1>
                  {heroName}
                </h1>
                <Typography variant='body1' component="p" className={classes.descriptionText} >
                  {heroDescrip}
                </Typography>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </>);
  }
}

export default withStyles({
  centerContainer: {
    padding: '100px 0 0 0px',
    margin: '0 auto',
    width: '70% !important'
  },
  descriptionContainer: {
    margin: '2em',
  },
  descriptionBox: {
    padding: '2em',
    height: 'auto',
  },
  descriptionText: {
    fontSize: '1em',
    textAlign: 'justify',
    fontFamily: 'Verdana',
  }
})(HeroDescription);