import React, { Component } from "react";
import { getMovies } from "../src/services/fakeMovieService"

class Movies extends Component {
    state = { 
        movies: getMovies()
     } 

     handleDelete = movie =>{
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies})
     }

    render() { 
        // if(this.state.movies.length === 0) return <p>There is no movies in the database</p>
        const {length : count } = this.state.movies
        if(count === 0) return <p>There is no movies in the database</p>
        return (
            <div>
                <p>Showing {count} movies in the database</p>
                <table className="table">
                    <thead>
                        <tr>
                            {/* <th>Id</th> */}
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie => (
                             <tr key={movie._id}>
                             {/* <td>{movie._id}</td> */}
                             <td>{movie.title}</td>
                             <td>{movie.genre.name}</td>
                             <td>{movie.numberInStock}</td>
                             <td>{movie.dailyRentalRate}</td>
                             <td>
                                <button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">DELETE</button>
                             </td>
                         </tr>
                        ))}
                       
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default Movies;