import React from "react";
import withMoviesManager from "./with-movies-manager";
import SearchInput from "./SearchInput";
import Movie from './Movie'

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem"
};

export const listStyle = {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginTop: "2rem"
};


const MovieSearch = ({ searchMovies, isFetching, movies }) => {
    return (
        <div style={containerStyle}>
            <strong>Movie Search</strong>
            <SearchInput searchMovies={searchMovies} />
            <div style={listStyle}>
                {isFetching && <div>Loading movies...</div>}
                {!isFetching &&
                    movies.map((movie, i) => (
                        <Movie {...movie} />
                    ))}
            </div>
        </div>
    );
};

export default withMoviesManager(MovieSearch);
