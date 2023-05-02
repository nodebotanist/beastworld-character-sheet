import React, { Component } from 'react'
import StatsBlock from './stats-block'
import SkillsBlock from './skills-block'
import HealthBlock from './health-block'
import ACEtcBlock from './ac-etc-block'
import AttacksSpellcastingBlock from './attacks-spellcasting-block'
import MoneyBlock from './money-block'
import CharacterInfoBlock from './character-info-block'
import BottomBlock from './bottom-block'

export default class CharacterSheet extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return <div className="character-sheet-background">
            <CharacterInfoBlock />
            <StatsBlock />
            <SkillsBlock />
            <HealthBlock />
            <ACEtcBlock />
            <AttacksSpellcastingBlock />
            <MoneyBlock />
            <BottomBlock />
        </div>
    }
}