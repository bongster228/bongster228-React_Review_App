import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

class SongList extends Component {

    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.selectSong(song)}>Select</button>
                    </div>
                    <div className="content">
                        <h4 className="header">{song.title}</h4>
                        <p className="description">{song.duration}</p>
                    </div>
                </div>
            );
        })
    }

    render() {
        return <div className="ui relaxed divided list">
            {this.renderList()}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs,
    }
}

export default connect(mapStateToProps, { selectSong })(SongList);