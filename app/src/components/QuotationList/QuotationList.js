import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getPosts } from '../../actions/index.js'

import Quotation from '../Quotation/Quotation.js'

class QuotationList extends Component {
  componentDidMount() {
    this.props.getPosts(this.props.character.id)
  }
  render() {
    return (
      <div>
        {this.props.posts.map(post => {
          return(
            <Quotation post={post} />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  character: state.character,
  isLoading: state.isLoading
})

export default connect(mapStateToProps, { getPosts } )(QuotationList)