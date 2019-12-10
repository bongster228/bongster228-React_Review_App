import React, { Component } from 'react'
import { connect } from 'react-redux'

const SongDetail = (props) => {
    console.log(props.song)
    return <div>SongDetail</div>
}


const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail)