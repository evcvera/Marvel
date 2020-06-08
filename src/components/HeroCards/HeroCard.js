import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Card, CardMedia} from '@material-ui/core'
import {Link} from 'react-router-dom'


function HeroCard({name,imagen,to,classes}){
    return(
        <div>
        <Link  to={to}><h4 className="HeroCard_h2">{name}</h4></Link>
        <Card  className={classes.item}>
        <a href={to}>   <CardMedia className={classes.media} image={imagen}></CardMedia></a>
        </Card>
        </div>
    )
}

export default withStyles({
    
    item:{
        minWidth: "336px",
        maxWidth: "336px",
        margin: "1em",
        boxSizing: "border-box",
        textAling: "center",
        border: "solid 3px",
    },

    media:{
        minHeight: "420px",
        maxHeight: "420px",
        width: "100%",
    }
})(HeroCard);