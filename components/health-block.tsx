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
        return <div id="hp-block">
            <input type="number" min="-50" max="50" id="current-hp" value={this.state.currentHP} onChange={this.onChangeHealth.bind(this)} />
            <input type="number" min="0" max="50" id="max-hp" value={this.state.maxHP} onChange={this.onChangeHealth.bind(this)} />
            <input type="number" min="-50" max="50" id="temp-hp" value={this.state.tempHP} onChange={this.onChangeHealth.bind(this)} />
        </div>
    }

    onChangeHealth(event) {
        let field = event.target.id.replace('-hp', 'HP')
        this.setState({
            [field]: event.target.value
        })
    }
}
