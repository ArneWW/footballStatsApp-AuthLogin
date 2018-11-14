import React, { Component } from 'react';
import axios from 'axios';
import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';

class landingPage extends Component {

  state = {news: []}

  componentWillMount() {
    axios.get("https://case-users.herokuapp.com/getNews").then(response => {
      this.setState({news: response.data});
    });
  }

  changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  render() {
    const { t } = this.props;

    console.log(this.state, 'state');
    return (
      <div className='main-container'>
        <section className='header'>
          <p>THE</p>
          <h1>Intergalactic Football League</h1>
        </section>
        <section className='latest-news'>
          <h3>{t('News')}</h3>
          <ul>
            {this.state.news.map(news => <li>{news}</li>)}
          </ul>
        </section>
      </div>
    )
  }
}

export default withNamespaces()(landingPage);