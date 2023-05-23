import React, { useState } from 'react'

import StatsBlock from './stats-block'
import SkillsBlock from './skills-block'

const StatsProfsLevelsBlock = ({ str, dex, con, int, wis, cha, skills, levels, name, profBonus, inspiration, passivePerception}) => {

    const [strength, setStrength] = useState(str)
    const [dexterity, setDexterity] = useState(dex)
    const [constitution, setConstitution] = useState(con)
    const [intelligence, setIntelligence] = useState(int)
    const [wisdom, setWisdom] = useState(wis)
    const [charisma, setCharisma] = useState(cha)
    const [charSkills, setCharSkills] = useState(skills)
    const [charLevels, setCharLevels] = useState(levels)
    const [charName, setCharName] = useState(name)
    const [profBonusAmt, setProfBonusAmt] = useState(profBonus)
    const [inspo, setInspo] = useState(inspiration)
    const [passPerception, setPassPerception] = useState(passivePerception)

    return <div id="stats-profs-levels-block">
        <StatsBlock str={strength} dex={dexterity} con={constitution} int={intelligence} wis={wisdom} cha={charisma} />
        <SkillsBlock skillsInitialState={charSkills} />
    </div>
}

export default StatsProfsLevelsBlock

// import {Component, ReactPropTypes} from "react"
// import StatsBlock from "./stats-block"
// import SkillsBlock from "./skills-block"

// export default class StatsProfsLevelsBlock extends Component {
//     constructor(props: ReactPropTypes) {
//         super(props)
//         this.state = {
//             str: props.str,
//             dex: props.dex,
//             con: props.con,
//             int: props.int,
//             wis: props.wis,
//             cha: props.cha,
//             skills: props.skills,
//             levels: props.levels,
//             name: props.name,
//             profBonus: props.profBonus,
//             inspiration: props.inspiration,
//             passivePerception: props.passivePerception,
//         }
//     }

//     render() {
//         return <div id="stats-profs-levels-block">
//             <StatsBlock str={this.state.str} dex={this.state.dex} con={this.state.con} int={this.state.int} wis={this.state.wis} cha={this.state.cha} />
//             <SkillsBlock skillsInitialState={this.state.skills} />
//         </div>
//     }
// }