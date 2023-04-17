import {Component, ReactPropTypes} from "react"

export class StatsBlock extends Component {
    constructor(props: ReactPropTypes) {
        super(props)
        this.state = {
            str: props.str || 0,
            dex: props.dex || 0,
            con: props.con || 0,
            int: props.int || 0,
            wis: props.wis || 0,
            cha: props.cha || 0
        }
    }

    render() {   
        const { str, dex, con, int, wis, cha } = this.state 
        return <> 
            <form id="stats">
                <label htmlFor="str">Strength:</label>
                <input type="number" id="stats-str" name="str" value={str} min="0" max="50" onChange={this.onStatsChange}/>
                <label htmlFor="dex">Dexterity:</label>
                <input type="number" id="stats-dex" name="dex" value={dex} min="0" max="50" onChange={this.onStatsChange} />
                <label htmlFor="con">Constitution:</label>
                <input type="number" id="stats-con" name="con" value={con} min="0" max="50" onChange={this.onStatsChange} />
                <label htmlFor="int">Intelligence:</label>
                <input type="number" id="stats-int" name="int" value={int} min="0" max="50" onChange={this.onStatsChange} />
                <label htmlFor="wis">Wisdom:</label>
                <input type="number" id="stats-wis" name="wis" value={wis} min="0" max="50" onChange={this.onStatsChange} />
                <label htmlFor="cha">Charisma:</label>
                <input type="number" id="stats-cha" name="cha" value={cha} min="0" max="50" onChange={this.onStatsChange} />
            </form>
            <div id="modifiers">
                <span id="modifiers-str">+0</span>
                <span id="modifiers-dex">+0</span>
                <span id="modifiers-con">+0</span>
                <span id="modifiers-int">+0</span>
                <span id="modifiers-wis">+0</span>
                <span id="modifiers-cha">+0</span>
            </div>
        </>
    }

    onStatsChange(event) {
        let statToChange = event.target.id.split('-')[1]
        let modifier = (event.target.value - 10) / 2

        
    }
}