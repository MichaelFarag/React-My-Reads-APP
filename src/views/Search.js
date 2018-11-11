import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { search } from '../api/BooksAPI'
import { Book } from '../components/Book';

export class Search extends Component {
    
  constructor(props){
    super(props);
    this.state = {
      searchQuery : "",
      books : []
    }
      }

  handlechange = async e => {
    // console.log(e.target.value)
    try {
      const searchQuery = e.target.value;
      // const book = this.props;
      this.setState({searchQuery})
      const searchResult  = await search (searchQuery)
      if (searchResult.error){
        this.setState({books : []});
      }else {
        this.setState ({books : searchResult})
      }
      // console.log(searchResult)
      // this.props.moveBook(book,shelf,result);
      
    }catch (error){
      console.log(error)
    }
  }


  
  render() {
    return (
        <div className="search-books">
            <div className="search-books-bar">
              {/* <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a> */}
              <Link className="close-search" to={"/"}>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={this.handlechange} value={this.state.searchQuery}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.books.length > 0 && this.state.books.map(book => <Book {...book} moveBook={this.props.moveBook} key={book.id}/>)}
              </ol>
            </div>
          </div>
    )
  }
}

export default Search
