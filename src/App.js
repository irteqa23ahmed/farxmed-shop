import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.components.jsx';
import ShopPage from './pages/shop/shop.components.jsx';

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route  exact path='/' component={HomePage} />
        <Route  exact path='/shop' component={ShopPage} />
      </Switch>
    </Router>  
    </div>
  );
}

export default App;
