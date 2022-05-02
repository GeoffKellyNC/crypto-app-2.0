import React from 'react'
import '../master-styles/App.css';
import { Route } from 'react-router-dom'

import Home from './home/Home'
import Header from './header/Header'


function App() {



  


  return (
    <div className="App">
      <Header />
      <div className = 'body-container'>
        <Route exact path='/'>
          <Home />
        </Route>
      </div>
    </div>
  );
}


export default App;
