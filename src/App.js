import React from 'react'
import { Switch, Route } from 'react-router-dom';
import  Home  from './views/Home';
import  Search  from './views/Search';
// import * as BooksAPI from './BooksAPI'
import './css/App.css'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Switch>
            <Route exact path={"/"} component={ Home }/>
            <Route exact path={"/search"} component={ Search }/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
