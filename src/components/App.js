import React from 'react'
import styled from 'styled-components'
import '../master-styles/App.css';
import { Route } from 'react-router-dom'

import waves from '../assets/wave-short.svg'


import Home from './home/Home'
import Header from './header/Header'
// import Blobs from './Blobs'


function App() {



  


  return (
    <StyledApp className="App">
      <Header />
      {/* <Blobs /> */}
      <img
        src={waves}
        alt="waves"
        className="waves"
       />

      <div className = 'body-container'>
        <Route exact path='/'>
          <Home />
        </Route>
      </div>
    </StyledApp>
  );
}


export default App;

const StyledApp = styled.div`

  .waves {
    position: absolute;
    top: 4.8em;
    left: 0;
    width: 100%;
    height: auto;
    z-index: -1;
    rotate: (180deg);
  }


`
