import React from "react";
import withMoviesManager from "./with-movies-manager";
import SearchInput from "./SearchInput";
import Movie from './Movie'

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "2rem"
};

export const listStyle = {
    display: "flex",
    flex: 1,
    marginTop: "2rem",
    flexWrap: "wrap",
};


const MovieSearch = ({ searchMovies, sortMovies, isFetching, movies }) => {
    return (
        <div style={containerStyle}>
            <strong>Movie Search</strong>
            <SearchInput 
                searchMovies={searchMovies} 
                sortMovies={sortMovies}
            />
            <div style={listStyle}>
                {isFetching && <div>Loading movies...</div>}
                {!isFetching &&
                    movies.map((movie, i) => (
                        <Movie key={i} {...movie} />
                    ))}
            </div>
        </div>
    );
};

export default withMoviesManager(MovieSearch);
