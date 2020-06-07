import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './_shared.scss';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const Home = () => {
  return (
    <div className="App">
      <div className="App-header">
        
        <Link to='/heros'
          style={{color: '#ffc6d2',
          }}>       
          <div className="App-button"><h2 style={{color: '#5B051C'}}>#MarvelApp</h2></div>
        </Link>
        
      </div>
    </div>
  );
}

export default Home;




