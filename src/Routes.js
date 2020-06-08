import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import HerosListContainer from './containers/HeroListContainer/HerosListContainer';
import HeroInfoContainer from './containers/HeroInfoContainer/HeroInfoContainer';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/heros' component={HerosListContainer}/>
            <Route exact path="/hero-info/:heroIndex" component={HeroInfoContainer}/>

        </Switch>
    );
}

export default Routes;