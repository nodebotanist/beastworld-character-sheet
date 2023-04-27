import {Component, ReactPropTypes} from "react"

export default class HealthBlock extends Component {
    constructor(props: ReactPropTypes) {
        super(props)
        this.state = {
            currentHP: this.props.currentHP || 10,
            maxHP: this.props.maxHP || 10,
            tempHP: this.props.tempHP || 0,
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
