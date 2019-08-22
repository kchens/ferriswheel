import React, { PureComponent } from "react";

const formStyle = {
    margin: '1rem'
}
const inputStyle = {
    border: '1px solid black',
    borderRadius: '30px',
    padding: '0 0 0 20px',
    height: '50px',
    boxSizing: 'content-box',
    width: '100%',
    outline: 'none',
    textAlign: 'center,'
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
                <input 
                    style={inputStyle}
                    onChange={this.handleChange} 
                    value={this.state.value} 
                    placeholder={'Search a movie or tv show'}
                />
            </form>
        );
    }
}

export default SearchInput;
