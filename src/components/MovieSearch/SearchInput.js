import React, { PureComponent } from "react";

const formStyle = {
    marginTop: "1rem"
};

class SearchInput extends PureComponent {
    state = {
        value: ""
    };

    handleChange = e => {
        let value = e.target.value
        this.setState({ value: value })
        if (!value) return this.handleSubmit()
    }

    handleSubmit = e => {
        if (e) e.preventDefault()
        this.props.searchMovies(this.state.value)
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
