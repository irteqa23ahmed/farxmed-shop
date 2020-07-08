import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.components.jsx';
import ShopPage from './pages/shop/shop.components.jsx';
import SignPage from './pages/sign-in-up/sign-in-up.page.jsx'
import Header from './components/header/header.component.jsx';
import {auth} from './components/firebase/firebase.utils.js';
class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser: null
    };
  }
  
  unsubscribeFromAuth = null;
   
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=> {
      this.setState({currentUser: user});
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
    console.log('Logged Out');
  }
  render(){
    return (
      <div>
      <Router>
      <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route  exact path='/' component={HomePage} />
          <Route  exact path='/shop' component={ShopPage} />
          <Route exact path='/sign' component={SignPage} />
        </Switch>
      </Router>  
      </div>
    );
  }
  
}

export default App;
