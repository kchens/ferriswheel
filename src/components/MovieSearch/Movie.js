import React from "react";

const listItemStyle = {
    display: "flex",
    alignItems: "center",
    margin: "1rem"
};

const Movie = (props) => (
    <div style={listItemStyle}>
        <div>{JSON.stringify(props)}</div>
    </div>
);

export default Movie;
