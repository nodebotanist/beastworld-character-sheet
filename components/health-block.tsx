import {Component, ReactPropTypes} from "react"

export default class HealthBlock extends Component {
    constructor(props: ReactPropTypes) {
        super(props)
        console.log(props)
        this.state = {
            currentHP: props.currentHP,
            maxHP: props.maxHP,
            tempHP: props.tempHP,
        }
    }

    render () {
        return <div className="hp-block">
            <div className="current-hp">{this.state.currentHP}</div>
            <div className="max-hp">{this.state.maxHP}</div>
            <div className="temp-hp">{this.state.tempHP}</div>
        </div>
    }
}
