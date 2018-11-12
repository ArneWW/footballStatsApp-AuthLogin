import React, { Component } from 'react';
import Address from './admin-components/Addresses/Address';
import Person from './admin-components/Person/Person';
import Player from './admin-components/Person/Player';
import Owner from './admin-components/Person/Owner';
import Coach from './admin-components/Person/Coach';
import Match from './admin-components/Match/Match';
import Season from './admin-components/Season/Season';
import Team from './admin-components/Team/Team';
import Result from './admin-components/Result/Result';
import Goals from './admin-components/Goals/Goals';
import GoalType from './admin-components/GoalType/GoalType';
import Contacts from './admin-components/Contacts/Contacts';
import Dashboard from './admin-components/Dashboard';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'dashBoard',
      showPeople: false
    }
  }

  renderPage() {
    switch (this.state.currentPage) {
      case 'dashBoard':
        return <Dashboard />
      case 'address':
        return <Address />;
      case 'person':
        return <Person />;
      case 'player':
        return <Player />;
      case 'coach':
        return <Coach />;
      case 'owner':
        return <Owner />;
      case 'contacts':
        return <Contacts />;
      case 'match':
        return <Match />;
      case 'season':
        return <Season />;
      case 'team':
        return <Team />;
      case 'result':
        return <Result />;
      case 'goals':
        return <Goals />;  
      case 'goalType':
        return <GoalType />;  
      default:
        break;
    }
  }

  render() {
    const { showPeople } = this.state;
    return (
      <section className='admin-page'>
        <ul className='admin-menu'>
          <h1>Admin page</h1>
          <li><button onClick={e => this.setState({currentPage: 'dashBoard'})}>Dashboard</button></li>
          <li><button onClick={e => this.setState({currentPage: 'address'})}>Address</button></li>
          <li><button onClick={e => this.setState({currentPage: 'person'})}>Person</button></li>
          <li><button onClick={e => this.setState({ showPeople: !showPeople })}>People</button></li>
          {showPeople && <li className='player-menu'><button onClick={e => this.setState({currentPage: 'player'})}>Players</button></li>}
          {showPeople && <li className='player-menu'><button onClick={e => this.setState({currentPage: 'coach'})}>Coaches</button></li>}
          {showPeople && <li className='player-menu'><button onClick={e => this.setState({currentPage: 'owner'})}>Owners</button></li>}
          <li><button onClick={e => this.setState({currentPage: 'contacts'})}>Contacts</button></li>
          <li><button onClick={e => this.setState({currentPage: 'match'})}>Matches</button></li>
          <li><button onClick={e => this.setState({currentPage: 'season'})}>Seasons</button></li>
          <li><button onClick={e => this.setState({currentPage: 'team'})}>Teams</button></li>
          <li><button onClick={e => this.setState({currentPage: 'result'})}>Result</button></li>
          <li><button onClick={e => this.setState({currentPage: 'goals'})}>Goals</button></li>
          <li><button onClick={e => this.setState({currentPage: 'goalType'})}>Goal Type</button></li>
          <li><button onClick={e => this.props.logout()}>Log out</button></li>

        </ul>
        <div className='admin-main-container'>
          {this.renderPage()}
        </div>
      </section>
    )
  }
}

export default Admin

// <h5>You are logged in!{' '}<a style={{ cursor: 'pointer' }} onClick={this.logout}>Log Out</a>.</h5>