import React, { Component } from 'react'
export const MyContext = React.createContext();

export class index extends Component {

  constructor(){
    super();
    this.state = {
      books : [],
      currentlyReading : [],
      wantToRead : [],
      read : [],
      readingStatus : books => {
        const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
        const wantToRead = books.filter( book => book.shelf === "wantToRead");
        const read = books.filter(book => book.shelf === "read");
        this.setState({books,currentlyReading,wantToRead,read})
      }
    }
  }
  render() {
    return ( 
    <MyContext.Provider value={{ ...this.state }}>
              
              {this.props.children}

            </MyContext.Provider>
    )
  }
}

export default index
