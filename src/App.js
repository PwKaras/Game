import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import WelcomeView from './views/WelcomeView';
import GameView from './views/GameView';

function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={WelcomeView} />
      <Route path="/game" component={GameView} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;