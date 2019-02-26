import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getCharacter, getPosts } from '../../actions/index'

import './_character-select.scss'

class CharacterSelect extends Component {
    state = {
        character: 0
    }
    componentWillReceiveProps(newProps) {
      if (newProps.character !== this.props.character) {
        this.props.history.push(`/${newProps.character.name}`)
      }
    }
    handleChange = e => {
        e.preventDefault()
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    getQuotations = e => {
      e.preventDefault()
      this.props.getCharacter(this.state.character)
    }
  render() {
    if (this.props.isLoading) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="character-select">
          <form>
  
  
            <select
                value={this.state.character}
                name="character"
                onChange={this.handleChange}
            >
                <option value="">-- Choose a character --</option>
                <option value={1}>Frodo Baggins</option>
                <option value={2}>Samwise Gamgee</option>
                <option value={3}>Meriadoc Brandybuck</option>
                <option value={4}>Peregrin Took</option>
                <option value={5}>Mithrandir</option>
                <option value={6}>Boromir</option>
                <option value={7}>Legolas</option>
                <option value={8}>Gimly</option>
                <option value={9}>Aragorn</option>
            </select>
            <button onClick={this.getQuotations}>View Quotations</button>
          </form>
        </div>
      )
    }
  }
}


const mapStateToProps = state => ({
  isLoading: state.isLoading,
  posts: state.posts,
  character: state.character
})

export default connect(mapStateToProps, { getCharacter, getPosts })(CharacterSelect)