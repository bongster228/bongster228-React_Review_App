import React, { Component } from 'react'
import SearchBar from './SearchBar'
import YoutubeApi from './YoutubeApi'

class App extends Component {

    //  call back fundtion passed down to SearchBar to get the search term
    handleSearchBar = async (searchTerm) => {

        const response = await YoutubeApi.get('/search', {
            params: {
                part: 'snippet',
                q: searchTerm
            }
        });
    }

    render() {
        return (
            <div>
                <SearchBar handleSearchBar={this.handleSearchBar} />
            </div>
        )
    }
}

export default App;