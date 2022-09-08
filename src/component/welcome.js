import React, { Component } from 'react';
import logo from '../logo.svg';


class Welcome extends Component {

  render() {

    const mysql = require('mysql')
    const db = mysql.createConnection({
      host: "20.150.203.188",
      user: "user_mysql",
      password: "jessaydi",
      database: "school"
    })

  

    console.log(db);

    return (

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    )
  }
}


export default Welcome