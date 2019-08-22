import React from "react";
import withMoviesManager from "./with-movies-manager";

const MovieSearch = ({ searchMovies }) => {
    return (
        <div style={containerStyle}>
            <strong>Movie Search</strong>
            {/* <SearchInput searchMovies={searchMovies} /> */}
        </div>
    );
};

export default withMoviesManager(MovieSearch);
