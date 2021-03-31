import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import MainPart from './pages/Main';


function App() {
  return (
    <div>
      <Home>
        <Switch>
          <Route path="/" component={MainPart} />
        </Switch>        
      </Home>
    </div>
  );
}

export default App;
