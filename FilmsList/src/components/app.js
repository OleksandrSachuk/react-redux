import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import FilmsList from '../containers/films_list';

export default class App extends Component {
  render() {
    return (
     <div className="container">
         <h1 className="text-center">Films list:</h1>
         <div className="row">
             <div className="col-xs-offset-5 col-xs-4">
                 <SearchBar/>
             </div>
         </div>
         <br/>
         <div className="row">
             <FilmsList/>
         </div>
     </div>
    );
  }
}
