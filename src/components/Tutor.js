import React, { Component } from 'react'

export default class Tutor extends Component {
    render() {
        return (
            <div>
                <p>Introduction</p>
                <p>pic</p>
                <p>Name: {this.props.name}</p>
                <p>Major: {this.props.major}</p>
                <p>Intro: {this.props.intro}</p>
             </div>
        )
    }
}

