import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.components.jsx';
import ShopPage from './pages/shop/shop.components.jsx';
import SignPage from './pages/sign-in-up/sign-in-up.page.jsx'
import Header from './components/header/header.component.jsx';

function App() {
  return (
    <div>
    <Router>
    <Header />
      <Switch>
        <Route  exact path='/' component={HomePage} />
        <Route  exact path='/shop' component={ShopPage} />
        <Route exact path='/sign' component={SignPage} />
      </Switch>
    </Router>  
    </div>
  );
}

export default App;
