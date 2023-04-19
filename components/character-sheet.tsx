import React, { Component } from 'react'
import StatsBlock from './stats-block'

export default class CharacterSheet extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return <div className="character-sheet-background">
            <StatsBlock />
        </div>
    }
}