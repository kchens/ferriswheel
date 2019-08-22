import React, { PureComponent } from "react";

const withMoviesManager = WrappedComponent => {
    return class extends PureComponent {
        constructor(props) {
            super(props);

            this.state = {
                isFetching: false,
                movies: []
            };
        }

        componentDidMount() {
            this.setState({ isFetching: true });
            this.fetchInitialMovies().then(data => {
                this.setState({
                    isFetching: false
                });
                this.setState({ movies: data });
            });
        }

        fetchInitialMovies = () => {
            return fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8a3f121040d1d586b2c62b76991833c9')
                .then(response => response.json())
                .then(data => console.log(data)) 
        };

        searchMovies = query => {
            return fetch(`https://api.themoviedb.org/3/search/movie?api_key=8a3f121040d1d586b2c62b76991833c9&query=${query}&language=en-US&include_adult=false`)
                .then(response => response.json())
                .then(data => console.log(data)) 
        };

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    {...this.state}
                    searchMovies={this.searchMovies}
                />
            );
        }
    };
};

export default withMoviesManager;
