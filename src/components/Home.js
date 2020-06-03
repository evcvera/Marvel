import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import './_shared.scss';


const Home =() =>{
        return(
            <div className="App">
            <header className="App-header">
            <img className='Home__eureka_labs' src={process.env.PUBLIC_URL + '/images/eureka_labs.png' }  alt='eureka_labs'/>
            <Link to='/heros'>Ver heroes</Link>
            </header>
          </div>
        );
}

export default Home;



  
