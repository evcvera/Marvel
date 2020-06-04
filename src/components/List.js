import React,{Fragment} from 'react';
import HeroCard from './HeroCard';
import {Grid} from '@material-ui/core';


function List ({herosdata}){
    return(
        <div >
        <Fragment key={Math.random()}>
        <h1 className="List__titulo">SUPER HEROES</h1>
            <Grid key={Math.random()} container spacing={24} justify="center">
                {herosdata.map((heroe,index )=>{
                    console.log(heroe)
                    return (
                    <HeroCard 
                    to={`/hero-info/${heroe.id}`}
                    name={heroe.name} 
                    imagen={heroe.thumbnail.path+'/portrait_uncanny'+'.jpg'} />
                    );
                })}
            </Grid>
        </Fragment>
        </div>
    )
}

export default List;
