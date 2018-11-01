import React, { Component } from 'react';
import axios from 'axios';

class PostShow extends Component {
  constructor(props) {
    super(props);
    this.state = { player: null };
    this.getPlayer();
  }

  getPlayer() {
    const { id } = this.props.match.params;
    axios.get(`http://person.eu-central-1.elasticbeanstalk.com/showOnePlayer/${id}`)
      .then(response => this.setState({ player: response.data }));
  }

  render() {
    const { player } = this.state;
    console.log(player, 'player');
    if (!player) return <div></div>
    return (
      <div>
        <h1>{player.first_name} {player.last_name}</h1>
      </div>
    );
  }
}

export default PostShow;