import React, { Component } from 'react'

class SearchBar extends Component {

    render() {
        return (
            <div className="ui segment ui container" style={{ top: "15px" }}>
                <form className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" name="video-search" placeholder="Search" />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;