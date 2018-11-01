import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// Components / Containers / Reducer
import Footer from './components/Footer/Footer';
import Players from './containers/Players/PlayersList';
import Teams from './containers/Teams/TeamsList';
import Player from './components/PlayerPage/PlayerPage';
import Team from './components/TeamPage/TeamPage';



ReactDOM.render(
  <BrowserRouter>
    <div className='container'>
    <App/>
        <Switch>
          <Route path='/teams/:id' component={Team} />
          <Route path='/teams' component={Teams} />
          <Route path='/players/:id' component={Player} />
          <Route path='/players' component={Players} />          
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
