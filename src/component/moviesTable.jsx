import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
    { key: "delete", content: (movie) => ( <td>
      <button
        onClick={() => this.props.onDelete(movie)}
        className="btn btn-danger btn-sm"
      >
        DELETE
      </button>
    </td>) },
  ];
  render() {
  const {movies, sortColumn, onSort } = this.props;

    return (
      <Table columns={this.columns} data={movies} sortColumn={sortColumn} onSort={onSort}/>
    )
      // <table className="table">
      //   <TableHeader
      //     columns={this.columns}
      //     sortColumn={sortColumn}
      //     onSort={onSort}
      //   />
      //   <TableBody columns={this.columns} data={movies} />
      // </table>
    ;
  }
}

export default MoviesTable;
