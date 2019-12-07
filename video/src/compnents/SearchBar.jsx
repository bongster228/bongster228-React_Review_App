import React, { Component } from 'react'

class SearchBar extends Component {

    state = { term: '' }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.handleSearchBar(this.state.term);
    }

    handleInputChange = (e) => {
        this.setState({ term: e.target.value });
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit} >
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" name="video-search" placeholder="Search" value={this.state.term} onChange={this.handleInputChange} />
                    </div>
                </form>
            </div >
        )
    }
}

export default SearchBar;