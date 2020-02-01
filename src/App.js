import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
