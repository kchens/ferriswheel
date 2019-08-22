import React, { Component } from "react"
import { popularMoviesUrl, getSearchMoviesUrl } from '../../urls'

const withMoviesManager = WrappedComponent => {
    return class extends Component {
        constructor(props) {
            super(props);

            this.state = {
                isFetching: false,
                movies: []
            };
        }

        componentDidMount() {
            this.searchMovies()
        }

        sortMovies = (filterOption) => {
            let sortedMovies
            if (filterOption === 'No Filter') {
                sortedMovies = this.state.movies.sort((a, b) => a.id - b.id)
            }

            if (filterOption === 'Most Popular') {
                sortedMovies = this.state.movies.sort((a, b) => b.vote_average - a.vote_average)
            }
            
            this.setState({ movies: sortedMovies })
        }

        searchMovies = query => {
            const url = query ? getSearchMoviesUrl(query) : popularMoviesUrl

            this.setState({ isFetching: true });
            fetch(url)
                .then(response => response.json())
                .then(data => data.results) 
                .then(movies => { 
                    this.setState({ movies }) 
                    this.setState({ isFetching: false })
                })
        };

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    {...this.state}
                    searchMovies={this.searchMovies}
                    sortMovies={this.sortMovies}
                />
            );
        }
    };
};

export default withMoviesManager;
