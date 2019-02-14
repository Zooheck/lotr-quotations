import React, { Component } from 'react'

import './_character-select.scss'

export default class CharacterSelect extends Component {
    state = {
        character: ''
    }
    handleChange = e => {
        e.preventDefault()
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
  render() {
    return (
      <div className="character-select">
        <select
            value={this.state.character}
            name="character"
            onChange={this.handleChange}
        >
            <option value="">-- Choose a character --</option>
            <option value="1">Frodo Baggins</option>
            <option value="2">Samwise Gamgee</option>
            <option value="3">Meriadoc Brandybuck</option>
            <option value="4">Peregrin Took</option>
            <option value="5">Mithrandir</option>
            <option value="6">Boromir</option>
            <option value="7">Legolas</option>
            <option value="8">Gimly</option>
            <option value="9">Aragorn</option>
        </select>
      </div>
    )
  }
}
