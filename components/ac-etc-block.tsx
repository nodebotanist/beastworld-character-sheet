import {Component, ReactPropTypes} from "react"

export default class ACEtcBlock extends Component {
    constructor(props: ReactPropTypes) {
        super(props)
        this.state = {
            AC: props.AC || 0,
            init: props.init || 0,
            walkingSpeed: props.walkingSpeed || "0ft",
            hitDice: props.hitDice || "d6"
        }
    }

    render() {
        return <div id="ac-etc-block">
            <span className="ac">{this.state.AC}</span>
            <span className="init">{this.state.init}</span>
            <span className="speed">{this.state.walkingSpeed}</span>
            <span className="hit-dice">{this.state.hitDice}</span>
        </div>
    }
}