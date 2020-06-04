import React from 'react';
import  Grid from '@material-ui/core/Grid';
import HeroCard from './HeroCard';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './_shared.scss';
import {withStyles} from '@material-ui/core/styles'



function HeroDescription({heroImage,heroName,heroDescrip}){
if(heroDescrip === ''){
    return (
      <>
      <h1>{heroName}</h1>
      <Grid key={Math.random()} container>
        <img src={heroImage} className="HeroDescription__image" alt="hero" ></img>
      </Grid>
    <h2 className="HeroDescription__descrip">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisl elit, viverra et sodales egestas, 
      fringilla vitae felis. Duis gravida eget diam a aliquet. Quisque vel lobortis arcu. Ut feugiat pulvinar 
      mattis. Proin congue leo et fermentum malesuada. In hac habitasse platea dictumst. Nulla a scelerisque 
      nibh, sit amet posuere ipsum. In sed ex sit amet diam laoreet fermentum. Duis vel mauris mattis, placerat
       orci aliquam, accumsan risus. Integer at maximus leo.</h2>
       </>);
   }else
   {
    return (
      <>
      <h1>{heroName}</h1>
      <Grid key={Math.random()} container>
        <img src={heroImage} className="HeroDescription__image" alt="hero" ></img>
      </Grid>
    <h2 className="HeroDescription__descrip">{heroDescrip}</h2>
    </>);
   }

  }

export default HeroDescription;


/*return (
  <Grid container>
    <Grid item md={6}>
      <PokeCard image={pokeImage} name={name}/>

    </Grid>
  </Grid>
)
}*/



