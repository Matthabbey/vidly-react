import React, { Component } from "react";
import { getMovies } from "../src/services/fakeMovieService";
import Pagination from "./component/pagination";
import { paginate } from "./utils/paginate";
import ListGroup from "./component/listGroup";
import { getGenres } from "./services/fakeGenreService";
import MoviesTable from "./component/moviesTable";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 5,
    currentPage: 1,
  };

  componentDidMount() {
    const genres = [{name: "All Genres"}, ...getGenres()]
    this.setState({ movies: getMovies(), genres});
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    // console.log(page);
    this.setState({ currentPage: page });
  };
  handleGenreSelect = (genre) => {
    this.setState({selectedGenre: genre, currentPage: 1})
  };

  render() {
    // if(this.state.movies.length === 0) return <p>There is no movies in the database</p>
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, selectedGenre,  movies: allMovies } = this.state;
    if (count === 0) return <p>There is no movies in the database</p>;

    const filtered =  selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies

    const movies = paginate(filtered, currentPage, pageSize);
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.genres}
            selectedItem = {this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Showing {filtered.length} movies in the database</p>
          <MoviesTable movies = {movies} onLike={this.handleLike} onDelete={this.handleDelete}/>
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
