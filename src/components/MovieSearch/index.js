import React from "react";
import withMoviesManager from "./with-movies-manager";
import SearchInput from "./SearchInput";

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem"
};

const MovieSearch = ({ searchMovies }) => {
    return (
        <div style={containerStyle}>
            <strong>Movie Search</strong>
            <SearchInput searchMovies={searchMovies} />
        </div>
    );
};

export default withMoviesManager(MovieSearch);
