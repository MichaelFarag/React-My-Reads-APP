import React, { Component } from 'react'
import { update } from '../api/BooksAPI';
// import { Shelf } from './Shelf';

export class Book extends Component {


  handlechange = async e => {
      // console.log(e.target.value)
      e.persist();
      try {
        const shelf = e.target.value;
        const book = this.props;
        const result  = await update (book,shelf)
        // this.props.shelf = e.target.value;
        this.props.moveBook(book,shelf,result);
        // console.log(shelfStatusUpdate)
      }catch (error){
        console.log(error)
      }
    }

    render() {
    return (
        <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${
                              this.props.imageLinks ? this.props.imageLinks.thumbnail : ""                              
                              })`}}>
                              
                              </div>
                            <div className="book-shelf-changer">
                              <select onChange={this.handlechange} value={this.props.shelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{this.props.title ? this.props.title : "Title not available"}</div>
                          <div className="book-authors">{this.props.authors ? this.props.authors[0] : "Author name not available"}</div>
                        </div>
                      </li>
    )
  }
}

export default Book