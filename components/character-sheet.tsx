import React, { Component } from 'react'
import StatsBlock from './stats-block'
import SkillsBlock from './skills-block'
import HealthBlock from './health-block'
import ACEtcBlock from './ac-etc-block'
import MoneyBlock from './money-block'

export default class CharacterSheet extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return <div className="character-sheet-background">
            <StatsBlock />
            <SkillsBlock />
            <HealthBlock />
            <ACEtcBlock />
            <MoneyBlock />
        </div>
    }
}