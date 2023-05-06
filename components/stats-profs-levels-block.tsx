import {Component, ReactPropTypes} from "react"
import StatsBlock from "./stats-block"
import SkillsBlock from "./skills-block"

export default class StatsProfsLevelsBlock extends Component {
    constructor(props: ReactPropTypes) {
        super(props)
        this.state = {
            str: props.str || 10,
            dex: props.dex || 10,
            con: props.con || 10,
            int: props.int || 10,
            wis: props.wis || 10,
            cha: props.cha || 10,
            skills: {
                "strSavingThrowProf": false,
                "strSavingThrow": 0,
                "athleticsProf": false,
                "athletics": 0,
                "dexSavingThrowProf": false,
                "dexSavingThrow": 0,
                "acrobaticsProf": false,
                "acrobatics": 0,
                "sleightOfHandProf": false,
                "sleightOfHand": 0,
                "stealthProf": false,
                "stealth": 0,
                "conSavingThrowProf": false,
                "conSavingThrow": 0,
                "intSavingThrowProf": false,
                "intSavingThrow": 0,
                "arcanaProf": false,
                "arcana": 0,
                "historyProf": false,
                "history": 0,
                "investigationProf": false,
                "investigation": 0,
                "natureProf": false,
                "nature": 0,
                "religionProf": false, 
                "religion": 0,
                "wisSavingThrowProf": false,
                "wisSavingThrow": 0,
                "animalHandlingProf": false,
                "animalHandling": 0,
                "insightProf": false,
                "insight": 0,
                "medicineProf": false,
                "medicine": 0,
                "perceptionProf": false,
                "perception": 0,
                "survivalProf": false,
                "survival": 0,
                "chaSavingThrowProf": false,
                "chaSavingThrow": 0,
                "deceptionProf": false,
                "deception": 0,
                "intimidationProf": false,
                "intimidation": 0,
                "performanceProf": false,
                "performance": 0,
                "persuasionProf": false,
                "persuasion": 0,
            },
            levels: props.levels || [],
            name: props.name || "",
            profBonus: props.profBonus || 0,
            inspiration: props.inspiration || false,
            passivePerception: props.passivePerception  || 10,
        }
    }

    render() {
        return <div id="stats-profs-levels-block">
            <StatsBlock str={this.state.str} dex={this.state.dex} con={this.state.con} int={this.state.int} wis={this.state.wis} cha={this.state.cha} />
            <SkillsBlock skills={this.state.skills} />
        </div>
    }
}