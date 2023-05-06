import React, { Component } from 'react'
import HealthBlock from './health-block'
import ACEtcBlock from './ac-etc-block'
import CharacterPortraitBlock from './character-portrait-block'
import AttacksSpellcastingBlock from './attacks-spellcasting-block'
import MoneyBlock from './money-block'
import CharacterInfoBlock from './character-info-block'
import BottomBlock from './bottom-block'
import StatsProfsLevelsBlock from './stats-profs-levels-block'

export default class CharacterSheet extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return <div className="character-sheet-background">
            <CharacterInfoBlock />
            <StatsProfsLevelsBlock />
            <HealthBlock />
            <ACEtcBlock />
            <CharacterPortraitBlock />
            <AttacksSpellcastingBlock />
            <MoneyBlock />
            <BottomBlock />
        </div>
    }
}