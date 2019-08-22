import React from "react";
import ReactDOM from "react-dom";
import MovieSearch from "./components/MovieSearch";

import "./styles.css";

function App() {
    return (
        <div className="App">
            <MovieSearch />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
