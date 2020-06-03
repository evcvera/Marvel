import React,{Component} from 'react';
import HeroDescription from '../components/HeroDescription';
import axios from 'axios';
import {Grid} from '@material-ui/core';
import List from '../components/List';
import HeroCard from '../components/HeroCard';
import {Card, CardMedia, CardContent, Typography} from '@material-ui/core';
import AppNav from '../components/AppNav';
import './_shared.scss';

class HeroInfoDescription extends Component{

    state={
        herosData:[]
    }
    
    componentDidMount(){
        axios.get('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=eb21a48643b2901fea305523c0c44e18&hash=a0b7380879d2c74103055e0d057338f0')
        .then(res =>{
            //aqui se subdivide hasta llegar  a results (que es lo que busco)
            const herosData= res.data.data.results;
            this.setState({
                herosData
            })
        })
        .catch(error =>{
            console.log(error)
        })
    }
    

    render(){

        const {match} = this.props;
        const heroId=match.params.heroIndex;
        const {herosData}=this.state;


        return (
            <>
            <div className="List__background">
                <AppNav></AppNav>
                 <  Grid container spacing={24} justify="center">
                     {herosData.map((heroe,index )=>{
                    if (index==heroId){
                    return (
                        <>
                    {/*<p>{heroe.description}</p>*/}
                    <HeroDescription
                    heroImage={heroe.thumbnail.path+'/portrait_uncanny'+'.jpg'} 
                    heroName={heroe.name}
                    heroDescrip={heroe.description}
                    
                    />
                        </>
                    );}
                   })}
                </Grid>
            </div>
            </>
        )

    }
}

export default HeroInfoDescription;

