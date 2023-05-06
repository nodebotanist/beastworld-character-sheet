import {Component, ReactPropTypes} from "react"

import './money-block.module.css'

export default class MoneyBlock extends Component {
    constructor(props: ReactPropTypes) {
        super(props)
        this.state = {
            copper: props.copper,
            silver: props.silver,
            gold: props.gold,
            platinum: props.platinum,
        }
    }
    render() {
        return <div id="money-block">
            <input type="number" name="copper" id="copper" min={0} value={this.state.copper} onChange={this.onChangeMoney.bind(this)} />
            <input type="number" name="silver" id="silver" min={0} value={this.state.silver} onChange={this.onChangeMoney.bind(this)} />
            <input type="number" name="gold" id="gold" min={0} value={this.state.gold} onChange={this.onChangeMoney.bind(this)} />
            <input type="number" name="platinum" id="platinum" min={0} value={this.state.platinum} onChange={this.onChangeMoney.bind(this)} />
        </div>
    }
    
    onChangeMoney(event) {
        let type = event.target.id
        this.setState({
            [type]: event.target.value
        })
    }
}