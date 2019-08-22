import React, { PureComponent } from "react"
import { popularMoviesUrl, getSearchMoviesUrl } from '../../urls'
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
            this.fetchInitialMovies().then(movies => {
                this.setState({ isFetching: false })
                this.setState({ movies })
            });
        }

        fetchInitialMovies = () => {
            return fetch(popularMoviesUrl)
                .then(response => response.json())
                .then(data => data.results) 
        };

        searchMovies = query => {
            this.setState({ isFetching: true });
            fetch(getSearchMoviesUrl(query))
                .then(response => response.json())
                .then(data => data.results) 
                .then(movies => { 
                    this.setState({ isFetching: false })
                    this.setState({ movies }) 
                })
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
