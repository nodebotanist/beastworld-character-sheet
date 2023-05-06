import {Component, ReactPropTypes} from "react"

export default class BottomBlock extends Component {
    constructor(props: ReactPropTypes) {
        super(props)
        this.state = {
            profsAndLangs: props.profsAndLangs,
            equipment: props.equipment,
            classFeatures: props.classFeatures,
            traitsBackground: props.traitsBackground,
            traitsSpecies: props.traitsSpecies,
            traitsHomeland: props.traitsHomeland,
        }
    }

    render() {
        return <div id="bottom-block">
            <textarea name="profsAndLangs" cols="30" rows="10" value={this.state.profAndLangs} onChange={this.onChangeTrait.bind(this)} ></textarea>
            <textarea name="equipment" cols="30" rows="10" value={this.state.equipment} onChange={this.onChangeTrait.bind(this)} ></textarea>
            <textarea name="classFeatures" cols="30" rows="10" value={this.state.classFeatures} onChange={this.onChangeTrait.bind(this)} ></textarea>
            <textarea name="traitsBackground" cols="30" rows="10" value={this.state.traitsBackground} onChange={this.onChangeTrait.bind(this)} ></textarea>
            <textarea name="traitsSpecies" cols="30" rows="10" value={this.state.traitsSpecies} onChange={this.onChangeTrait.bind(this)} ></textarea>
            <textarea name="traitsHomeland" cols="30" rows="10" value={this.state.traitsHomeland} onChange={this.onChangeTrait.bind(this)} ></textarea>
        </div>
    }

    onChangeTrait(event) {
        let type = event.target.name
        this.setState({
            [type]: event.target.value
        })
    }
}