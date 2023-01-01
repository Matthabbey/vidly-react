import React, { Component } from 'react';
import Like from './common/like'
import TableHeader from './common/tableHeader';

class MoviesTable extends Component {
    columns = [
        {path: 'title', label: 'Title'},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        { key: "like"},
        {key: "delete" }
    ]
    raiseSort = path =>{
        const sortColumn = {...this.props.sortColumn}
    if (sortColumn.path === path)
      sortColumn.order = (sortColumn.order === 'asc') ? 'desc': 'asc'
      else{
        sortColumn.path = path
        sortColumn.order = 'asc'
      }
      this.props.onSort(sortColumn);
    }
    render() { 
        const {movies, onDelete, onLike, sortColumn, onSort, columns } = this.props
    return ( <table className="table">
        <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort}/>
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
              onClick={() => onLike(movie)}
            />
          </td>
          <td>
            <button
              onClick={() => onDelete(movie)}
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
}

 
export default MoviesTable;