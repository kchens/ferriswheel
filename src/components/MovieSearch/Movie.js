import React from "react"
import moment from 'moment'

const listItemStyle = {
    display: "flex",
    alignItems: "center",
    margin: "1rem",
};

const rightDetail = {
    backgroundColor: "black",
    opacity: "0.7",
    width: "300px",
    height: "450px",
    color: "white",
}

const Movie = ({title, overview, release_date, poster_path }) => (
    <div style={listItemStyle}>
        <img
            srcSet={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path} 1x, https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path} 2x`}
            sizes="auto"
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`}
            alt={title}
        />
        <div style={rightDetail}>
            <h2>{title}</h2>
            <div style={{ fontSize: "12px", marginBottom: "0.5rem" }}>{moment(release_date).format('LL')}</div>
            <div style={{margin: "1rem", textAlign: "justify"}}>{overview}</div>
        </div>
    </div>
);

export default Movie;
