import React, { Component } from 'react';
import './App.css';
import Welcome from './component/welcome';
import Navebar from './component/navbar';
import Pageundef from './component/pageundef';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {



  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navebar />
            <Switch>
              <Route exact path="/" render={(props) => <Welcome />} />
              <Route exact path="*">
                <Pageundef />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
