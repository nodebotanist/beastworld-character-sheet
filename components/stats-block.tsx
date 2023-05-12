import {Component, ReactPropTypes} from "react"

export default class StatsBlock extends Component {
    constructor(props: ReactPropTypes) {
        super(props)
        this.state = {
            str: props.str,
            dex: props.dex,
            con: props.con,
            int: props.int,
            wis: props.wis,
            cha: props.cha,
            str_mod: `+${Math.floor((props.str - 10)/2)}`,
            dex_mod: `+${Math.floor((props.dex - 10)/2)}`,
            con_mod: `+${Math.floor((props.con - 10)/2)}`,
            int_mod: `+${Math.floor((props.int - 10)/2)}`,
            wis_mod: `+${Math.floor((props.wis - 10)/2)}`,
            cha_mod: `+${Math.floor((props.cha - 10)/2)}`,
        }
    }

    render() {   
        const { str, dex, con, int, wis, cha, str_mod, dex_mod, con_mod, int_mod, wis_mod, cha_mod } = this.state 
        return <> 
            <form id="stats" onSubmit={(e) => e.preventDefault()}>
                <input type="number" id="stats-str" name="str" value={str} min="0" max="50" onChange={this.onStatsChange}/>
                <input type="number" id="stats-dex" name="dex" value={dex} min="0" max="50" onChange={this.onStatsChange} />
                <input type="number" id="stats-con" name="con" value={con} min="0" max="50" onChange={this.onStatsChange} />
                <input type="number" id="stats-int" name="int" value={int} min="0" max="50" onChange={this.onStatsChange} />
                <input type="number" id="stats-wis" name="wis" value={wis} min="0" max="50" onChange={this.onStatsChange} />
                <input type="number" id="stats-cha" name="cha" value={cha} min="0" max="50" onChange={this.onStatsChange} />
            </form>
            <div id="modifiers">
                <div id="modifiers-str">{str_mod}</div>
                <div id="modifiers-dex">{dex_mod}</div>
                <div id="modifiers-con">{con_mod}</div>
                <div id="modifiers-int">{int_mod}</div>
                <div id="modifiers-wis">{wis_mod}</div>
                <div id="modifiers-cha">{cha_mod}</div>
            </div>
        </>
    }

    onStatsChange = (event) => {
        let statToChange = event.target.id.split('-')[1]
        let modifier = Math.floor((event.target.value - 10) / 2).toString()
        let modifierKey = statToChange + "_mod"
        modifier = parseInt(modifier, 10) >= 0 ? `+${modifier}`: modifier.toString()
        this.setState({
            [statToChange]: event.target.value,
            [modifierKey]: modifier
        })
        
    }
}