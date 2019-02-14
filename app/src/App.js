import React, { Component } from 'react';

import { Route, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'


import CharacterSelect from './components/CharacterSelect/CharacterSelect'


import './Main-Styles/App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <CharacterSelect {...props}/>}/>
      </div>
    );
  }
}

export default withRouter(App);