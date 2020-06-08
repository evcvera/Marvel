import React from 'react';
import { Link } from 'react-router-dom';
import './_shared.scss';

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




