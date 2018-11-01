import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import auth0Client from './Auth';
import NavBar from './NavBar/NavBar';
import Callback from './Callback';
//import SecuredRoute from './SecuredRoute/SecuredRoute';


class App extends Component {
  async componentDidMount() {
    if (this.props.location.pathname === '/callback') return;
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error === 'login_required') return;
      console.log(err.error);
    }
  }

  render() {
    return (
      <div className='main-section landing-page'>
        <NavBar/>
        <Route exact path='/callback' component={Callback}/>
        <img src={window.location.origin + '/galaxy.png'} />
        <h1>Intergalactic Football League</h1>
      </div>
      
    );
  }
}

export default withRouter(App);
