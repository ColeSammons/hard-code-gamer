import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import GetAPI from './pages/API.jsx';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Chat from './components/Chat'

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/API" component={GetAPI} />
        </Switch>
        <Chat />
      </div>
    </Router>
  );
}

export default App;
