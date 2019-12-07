import React, { Component } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import YoutubeApi from './api/YoutubeApi'
import VideoDetail from './VideoDetail'

class App extends Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.handleSearchBar('news');
    }


    //  call back fundtion passed down to SearchBar to get the search term
    handleSearchBar = async (searchTerm) => {

        const response = await YoutubeApi.get('/search', {
            params: {
                q: searchTerm
            }
        });
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
    }

    onVideoSelect = (selectedVideo) => {
        this.setState({ selectedVideo })
    }


    render() {
        return (
            <div className="ui container">
                <SearchBar handleSearchBar={this.handleSearchBar} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;