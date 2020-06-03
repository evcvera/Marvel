import React,{Component} from 'react';
import List from '../components/List';
import axios from 'axios';
import AppNav from '../components/AppNav';
import './_shared.scss';


class HerosListContainer extends Component{

    state={
        herosData:[]
    }

    //Aqui esta la magia
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

    render() {
        const {herosData}=this.state;
        return (
            <div className="List__background">
            <AppNav></AppNav>
            <List herosdata={herosData} />
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