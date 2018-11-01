import React, { Component } from 'react';
import axios from 'axios';

class TeamPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
    this.getPlayers();
  }

  getPlayers() {
    const { id } = this.props.match.params;
    axios.get(`http://person.eu-central-1.elasticbeanstalk.com/showPlayersInTeam/${id}`)
      .then(response => this.setState({ players: response.data }));
  }

  renderTeam() {
    return this.state.players.map(player => {
      return (
        <li className='team-list-item'>
          <a href='#'>{player.first_name} {player.last_name}</a>
        </li>
      )
    })
  }

  render() {
    return (
      <ul className='team-list'>
        {this.renderTeam()}
      </ul>
    )
  }
}

export default TeamPage;