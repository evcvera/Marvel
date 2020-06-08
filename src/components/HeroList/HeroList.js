import React, { Fragment } from 'react';
import HeroCard from '../HeroCards/HeroCard';
import { Grid } from '@material-ui/core';


function HeroList({ herosdata }) {
    return (
        <div >
            <Fragment>
                <Grid container spacing={0} justify="center">
                    {herosdata.map((heroe, index) => {
                        return (
                            <HeroCard
                                to={`/hero-info/${heroe.id}`}
                                name={heroe.name}
                                imagen={heroe.thumbnail.path + '/portrait_uncanny' + '.jpg'} />
                        );
                    })}
                </Grid>
            </Fragment>
        </div>
    )
}

export default HeroList;
