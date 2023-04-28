import {Component, ReactPropTypes} from "react"

import './money-block.module.css'

export default class MoneyBlock extends Component {
    constructor(props: ReactPropTypes) {
        super(props)
        this.state = {
            copper: this.props.copper || 0,
            silver: this.props.silver || 0,
            gold: this.props.gold || 0,
            platinum: this.props.platinum || 0,
        }
    }
    render() {
        return <div id="money-block">
            <input type="number" name="copper" id="copper" min={0} value={this.state.copper} />
            <input type="number" name="silver" id="silver" min={0} value={this.state.silver} />
            <input type="number" name="gold" id="gold" min={0} value={this.state.gold} />
            <input type="number" name="platinum" id="platinum" min={0} value={this.state.platinum} />
        </div>
    }
}