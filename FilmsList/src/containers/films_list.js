import React, { Component } from 'react';
import { connect } from 'react-redux';

class FilmsList extends Component{
    renderFilms(filmData){

        return(filmData.results.map(film => {
            const IMG_URL = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${film.poster_path}`;
            return(
                <tr>
                    <td>{film.title}</td>
                    <td><img src={IMG_URL} alt=""/></td>
                    {/*<td>{film.genre_ids}</td>*/}
                    <td>{film.overview}</td>
                </tr>
                )
            }))
        }
    render(){
        return(
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Poster</th>
                    {/*<th>Genre</th>*/}
                    <th>Overview</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.films.map(this.renderFilms)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({films}) {
    return{films}
}

export default connect(mapStateToProps)(FilmsList);
