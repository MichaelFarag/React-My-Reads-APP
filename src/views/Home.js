import React, { Component } from 'react'
import { Shelf } from '../components/Shelf';
import { ShowSearch } from '../components/ShowSearch';
import { getAll } from '../api/BooksAPI';

export class Home extends Component {

    async componentDidMount() {
        try{
            const books = await getAll();
            //read from provider
            this.props.readingStatus(books);
            // console.log(books)
        }
        catch(error){
            console.log(error)
        }
    }
  render() {
    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
               <Shelf title="Currently Reading" books={this.props.currentlyReading}  moveBook={this.props.moveBook} />
               <Shelf  title="Want to Read" books={this.props.wantToRead}  moveBook={this.props.moveBook}  />
               <Shelf  title="Read" books={this.props.read}  moveBook={this.props.moveBook}  />
            </div>
            <ShowSearch/>
          </div>

    )
  }
}

export default Home
