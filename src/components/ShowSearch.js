import React, { Component } from 'react'

export class ShowSearch extends Component {
  render() {
    return (
      <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
    )
  }
}

export default ShowSearch
