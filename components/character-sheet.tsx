import React, { Component } from 'react'
import Image from 'next/image'
import HealthBlock from './health-block'
import ACEtcBlock from './ac-etc-block'
import CharacterPortraitBlock from './character-portrait-block'
import AttacksSpellcastingBlock from './attacks-spellcasting-block'
import MoneyBlock from './money-block'
import CharacterInfoBlock from './character-info-block'
import BottomBlock from './bottom-block'
import StatsProfsLevelsBlock from './stats-profs-levels-block'

import bg from '../public/images/char-sheet.jpg'

export default class CharacterSheet extends Component {
    constructor (props) {
        super(props)
        this.state = {
            str: props.str,
            dex: props.dex,
            con: props.con,
            int: props.int,
            wis: props.wis,
            cha: props.cha,
            skills: props.skills,
            name: props.name,
            levels: props.levels,
            profBonus: props.profBonus,
            inspiration: props.inspiration,
            passivePerception: props.passivePerception,
            maxHP: props.maxHP,
            currentHP: props.currentHP,
            tempHP: props.tempHP,
            copper: props.copper,
            silver: props.silver,
            gold: props.gold,
            platinum: props.platinum,
            profAndLangs: props.profAndLangs,
            equipment: props.equipment,
            classFeatures: props.classFeatures,
            traitsBackground: props.traitsBackground,
            traitsSpecies: props.traitsSpecies,
            traitsHomeland: props.traitsHomeland,
            attacksAndSpells: props.attacksAndSpells,
            AC: props.AC,
            init: props.init,
            walkingSpeed: props.walkingSpeed,
            hitDice: props.hitDice,
            species: props.species,
            alignment: props.alignment,
            homeland: props.homeland,
            background: props.background
        }
    }

    render() {
        return <div className="character-sheet-background">
            <Image class="bg" src={bg} alt="Beastworld Character Sheet page 1" />
            <CharacterInfoBlock 
                species={this.state.species}
                alignment={this.state.alignment}
                homeland={this.state.homeland}
                background={this.state.background}    
            />
            <StatsProfsLevelsBlock 
                str={this.state.str}
                dex={this.state.dex}
                con={this.state.con}
                int={this.state.int}
                wis={this.state.wis}
                cha={this.state.cha}
                skills={this.state.skills}
                name={this.state.name}
                levels={this.state.levels}
                profBonus={this.state.profBonus}
                inspiration={this.state.inspiration}
                passivePerception={this.state.passivePerception}
            />
            <HealthBlock 
                currentHP={this.state.currentHP}
                maxHP={this.state.maxHP}
                tempHP={this.state.tempHP}    
            />
            <ACEtcBlock
                AC={this.state.AC}
                init={this.state.init}
                walkingSpeed={this.state.walkingSpeed}
                hitDice={this.state.hitDice}
            />
            <CharacterPortraitBlock />
            <AttacksSpellcastingBlock 
                attacksAndSpells={this.state.attacksAndSpells}
            />
            <MoneyBlock
                copper={this.state.copper}
                silver={this.state.silver}
                gold={this.state.gold}
                platinum={this.state.platinum}
            />
            <BottomBlock 
                profAndLangs= {this.state.profAndLangs}
                equipment= {this.state.equipment}
                classFeatures= {this.state.classFeatures}
                traitsBackground= {this.state.traitsBackground}
                traitsSpecies= {this.state.traitsSpecies}
                traitsHomeland= {this.state.traitsHomeland}
            />
        </div>
    }
}