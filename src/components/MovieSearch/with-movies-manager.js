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
            this.searchMovies()
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
                />
            );
        }
    };
};

export default withMoviesManager;
