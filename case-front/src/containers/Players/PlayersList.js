import React, { Component } from 'react';
import axios from 'axios';


class PlayersList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
    this.getPlayers();
  }

  getPlayers() {
    axios.get('http://case-person.herokuapp.com/showPlayers')
      .then(response => this.setState({ players: response.data }))
  }

  render() {
    
    let players = this.state.players;
    return (
      <div>
      {
        players.map((player) => {
          return (
            <h1>{player.first_name}</h1>
          );
        })
      }
    </div>
    )
  }
}

export default (null, PlayersList);