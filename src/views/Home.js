import React, { Component } from 'react'
import { Shelf } from '../components/Shelf';
import { ShowSearch } from '../components/ShowSearch';
import { getAll } from '../api/BooksAPI';

export class Home extends Component {

    async componentDidMount() {
        try{
            const books = await getAll();
            console.log(books)
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
               <Shelf title="Currently Reading"/>
               <Shelf  title="Want to Read"/>
               <Shelf  title="Read"/>
            </div>
            <ShowSearch/>
          </div>

    )
  }
}

export default Home