import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './teamsList.css';

class TeamsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
    }
    this.getTeams();
  }

  getTeams() {
    axios.get('http://case-team.herokuapp.com/showTeams')
    .then(response => this.setState({ teams: response.data }));
  }

  renderTeams() {
    return this.state.teams.map(team => {
      return (
        <li className='team-list-item' key={team.team_id}>
          <Link to={`/teams/${team.team_id}`}>
            {team.association_name}
          </Link>
        </li>
      )
    })
  }

  render() {
    return (
      <ul className='team-list'>
        {this.renderTeams()}
      </ul>
    );
  }
}

export default TeamsList;