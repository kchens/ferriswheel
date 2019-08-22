import React, { Component } from "react";

const formStyle = {
    marginTop: "1rem"
};

class SearchInput extends Component {
    state = {
        value: ""
    };

    handleChange = e => this.setState({ value: e.target.value });

    render() {
        return (
            <form
                style={formStyle}
                onSubmit={e => {
                    e.preventDefault();
                    this.props.searchMovies(this.state.value);
                }}
            >
                <input onChange={this.handleChange} value={this.state.value} />
            </form>
        );
    }
}

export default SearchInput;
