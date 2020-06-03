import React from 'react';
import {AppBar,Toolbar,Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom'


function AppNav(props){
    const {classes} =props;

    return (
    <AppBar className={classes.NavColor}position='static'>
        <Toolbar variant='dense'>
        <a href="https://www.marvel.com/"><img className='Home__eureka_labs' src={process.env.PUBLIC_URL + '/images/Marvel.png' }  alt='Marvel'/></a>
        </Toolbar>
    </AppBar>
    );
}

export default withStyles({
    NavColor:{
        backgroundColor: '#5A061D'
    }
}) (AppNav)