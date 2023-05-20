import {Component, ReactPropTypes} from "react"
import StatsBlock from "./stats-block"
import SkillsBlock from "./skills-block"

export default class StatsProfsLevelsBlock extends Component {
    constructor(props: ReactPropTypes) {
        super(props)
        this.state = {
            str: props.str,
            dex: props.dex,
            con: props.con,
            int: props.int,
            wis: props.wis,
            cha: props.cha,
            skills: props.skills,
            levels: props.levels,
            name: props.name,
            profBonus: props.profBonus,
            inspiration: props.inspiration,
            passivePerception: props.passivePerception,
        }
    }

    render() {
        return <div id="stats-profs-levels-block">
            <StatsBlock str={this.state.str} dex={this.state.dex} con={this.state.con} int={this.state.int} wis={this.state.wis} cha={this.state.cha} />
            <SkillsBlock skillsInitialState={this.state.skills} />
        </div>
    }
}