import {Component, ReactPropTypes} from "react"

export default class ACEtcBlock extends Component {
    constructor(props: ReactPropTypes) {
        super(props)
        this.state = {
            AC: props.AC,
            init: props.init,
            walkingSpeed: props.walkingSpeed,
            hitDice: props.hitDice
        }
    }

    render() {
        return <div id="ac-etc-block">
            <input type="number" min="9" max="100" id="AC" value={this.state.AC} onChange={this.onAcEtcChange.bind(this)} />
            <input type="number" min="9" max="100" id="init" value={this.state.init} onChange={this.onAcEtcChange.bind(this)} />
            <input type="text" id="walkingSpeed" value={this.state.walkingSpeed} onChange={this.onAcEtcChange.bind(this)} />
            <input type="text" id="hitDice" value={this.state.hitDice} onChange={this.onAcEtcChange.bind(this)} />
        </div>
    }

    onAcEtcChange(event) {
        let target=event.target.id
        let value= event.target.value

        this.setState({
            [target]: value
        })
    }
}