import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getPosts, resetCharacter } from '../../actions/index.js'

import Quotation from '../Quotation/Quotation.js'

class QuotationList extends Component {
  state = {
    currentPost: 0
  }
  componentDidMount() {
    this.props.getPosts(this.props.character.id)
  }
  nextQuotation = e => {
    e.preventDefault()
    console.log(this.props.posts[0].text)
  }
  back = e => {
    e.preventDefault()
    this.props.history.push('/')
    this.props.resetCharacter()
  }
  render() {
      return (
        <div>
          {this.props.posts.map(post => {
            return(
              <Quotation post={post} />
            )
          })}
          <button onClick={this.back}>Return to Character Selection</button>
        </div>
      )
    }
}

const mapStateToProps = state => ({
  posts: state.posts,
  character: state.character,
  isLoading: state.isLoading
})

export default connect(mapStateToProps, { getPosts, resetCharacter } )(QuotationList)