import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Main from './component/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


function App() {
  return (
    <Router location={0}>
      <div className="App">

      <Main />
      </div>
    </Router>
    
  );
}

export default App;
