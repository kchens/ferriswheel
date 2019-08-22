import React from "react";

const listItemStyle = {
    display: "flex",
    alignItems: "center",
    margin: "1rem"
};

const Movie = ({title, overview, release_date, poster_path }) => (
    <div style={listItemStyle}>
        <h3>{title}</h3>
        <div>{release_date}</div>
        <div>{overview}</div>
        <img 
            srcSet={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path} 1x, https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path} 2x`} 
            sizes="auto" 
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`}
            alt={title}
        />
    </div>
);

export default Movie;
