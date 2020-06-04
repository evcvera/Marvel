import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Card, CardMedia, CardContent, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'


function HeroCard({name,imagen,to,classes}){
    return(
        <div>
        <Link key={Math.random()} to={to}><h2 className="HeroCard_h2">{name}</h2></Link>
        <Card key={Math.random()} className={classes.item}>
            <CardMedia className={classes.media} image={imagen}>
            </CardMedia>
        </Card>
        </div>
    )
}


export default withStyles({
    item:{
        minWidth: "330px",
        margin: "1em",
        boxSizing: "border-box",
        textAling: "center",
        border: "solid 3px",
    },
    media:{
        minHeight: "340px"
    }
})(HeroCard);