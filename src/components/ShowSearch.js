import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class ShowSearch extends Component {
  render() {
    return (
      <div className="open-search">
             <Link to={"/Search"}>
             Add a book
             </Link>
             {/* <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>        */}
       </div>
    )
  }
}

export default ShowSearch
