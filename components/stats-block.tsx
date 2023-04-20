import {Component, ReactPropTypes} from "react"

export default class StatsBlock extends Component {
    constructor(props: ReactPropTypes) {
        super(props)
        this.state = {
            str: props.str || 10,
            dex: props.dex || 10,
            con: props.con || 10,
            int: props.int || 10,
            wis: props.wis || 10,
            cha: props.cha || 10,
            str_mod: props.str_mod || '+0',
            dex_mod: props.dex_mod || '+0',
            con_mod: props.con_mod || '+0',
            int_mod: props.int_mod || '+0',
            wis_mod: props.wis_mod || '+0',
            cha_mod: props.cha_mod || '+0',
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