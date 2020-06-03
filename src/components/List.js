import React,{Fragment} from 'react';
import HeroCard from './HeroCard';
import {Grid} from '@material-ui/core';


function List ({herosdata}){
    return(
        <div >
        <Fragment>
        <h1 className="List__titulo">SUPER HEROS</h1>
            <Grid container spacing={24} justify="center">
                {herosdata.map((heroe,index )=>{
                    console.log(heroe)
                    return (
                    <HeroCard 
                    to={`/hero-info/${index}`}
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
