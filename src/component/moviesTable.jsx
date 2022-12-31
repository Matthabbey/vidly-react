import React from 'react';
import Like from './like'

const MoviesTable = props => {
    const {movies, onDelete, onLike } = props
    return ( <table className="table">
    <thead>
      <tr>
        {/* <th>Id</th> */}
        <th>Title</th>
        <th>Genre</th>
        <th>Stock</th>
        <th>Rate</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {movies.map((movie) => (
        <tr key={movie._id}>
          {/* <td>{movie._id}</td> */}
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>
            <Like
              liked={movie.liked}
              onClick={() => this.onLike(movie)}
            />
          </td>
          <td>
            <button
              onClick={() => this.onDelete(movie)}
              className="btn btn-danger btn-sm"
            >
              DELETE
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table> );
}
 
export default MoviesTable;