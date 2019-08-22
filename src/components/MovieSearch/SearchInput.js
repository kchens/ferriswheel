import React, { Component } from "react";

const formStyle = {
    marginTop: "1rem"
};

class SearchInput extends Component {
    state = {
        value: ""
    };

    handleChange = e => this.setState({ value: e.target.value })

    handleSubmit = e => {
        e.preventDefault();
        this.props.searchMovies(this.state.value);
    }

    render() {
        return (
            <form
                style={formStyle}
                onSubmit={this.handleSubmit}
            >
                <input onChange={this.handleChange} value={this.state.value} />
            </form>
        );
    }
}

export default SearchInput;
