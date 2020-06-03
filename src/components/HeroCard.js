import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Card, CardMedia, CardContent, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'


function HeroCard({name,imagen,to,classes}){
    return(
        <Card className={classes.item}>
            <CardMedia className={classes.media} image={imagen}>
                <CardContent>
                    <Link to={to}><h2 className="HeroCard_h2">{name}</h2></Link>
                </CardContent>
            </CardMedia>
        </Card>
    )
}


export default withStyles({
    item:{
        minWidth: "360px",
        margin: "1em",
        boxSizing: "border-box",
        textAling: "center",
        border: "solid 3px",
    },
    media:{
        height: "360px"
    }
})(HeroCard);