import React, { Component } from 'react';
import List from '../components/List';
import axios from 'axios';
import AppNav from '../components/AppNav';
import './_shared.scss';
import {createClient} from 'marvel-api';

class HerosListContainer extends Component{

    
    constructor (){
        super();
        this.state ={
            herosData:[],
            min:0,
            max:1480,
            pos:0,
            cantidad_traer:0,
            desde_donde_traer:0,
            
        };
         //esto deberia ir en <button> pero para una buena practica va en el constructor
         this.handleCountClick=this.handleCountClick.bind(this);         
    }  

    
    handleCountClick(e){
        console.log("PRIMER CLICK!")
        this.setState({
          pos:this.state.pos+20
        })
        ;
      }
    

    
    componentDidMount(){
        var api= createClient({
            publicKey: 'eb21a48643b2901fea305523c0c44e18',
            privateKey: '0e3a61991d39296e0a077cc5d72cfb52017aa85d',
        });
        console.log({pos:this.state.pos})
        api.characters.findAll(0,this.state.pos)
        .then(res =>{
            //aqui se subdivide hasta llegar  a results (que es lo que busco)
            const herosData= res.data;
            this.setState({
                herosData
            })
        })
        .fail(error =>{
            console.log(error)
        })
        
    }




    //Aqui esta la magia
    /* componentDidMount(){
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
    }*/



    render() {
        const {herosData}=this.state;
        return (
            <div className="List__background">
            <AppNav key={Math.random()}/>
            <button id="add" onClick={this.handleCountClick}>Anterior</button>
            <button id="reset" onClick={console.log(this.state.pos)}>Siguiente</button>
            <List key={Math.random()} herosdata={herosData} />
            </div>
        );
    }
}

export default HerosListContainer;











/*
 * import React,{Component} from 'react';
import axios from 'axios';

class HerosContainer extends Component{
    componentDidMount(){
        axios.get('https://gateway.marvel.com/v1/public/characters/1017100?apikey=eb21a48643b2901fea305523c0c44e18')
        .then(result =>{
            console.log(result)
        }).catch()
    }

    render(){
        return(
            <h1>hola mundo</h1>
        );
    }
}

export default HerosContainer; */