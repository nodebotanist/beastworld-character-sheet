import {Component, ReactPropTypes} from "react"

export default class CharacterInfoBlock extends Component {
    constructor(props: ReactPropTypes) {
        super(props)
        this.state = {
            species: this.props.species || "",
            alignment: this.props.alignment || "",
            homeland: this.props.homeland || "",
            background: this.props.background || "",
        }
    }

    render() {
        return <div id="character-info-block">
            <input type="text" name="species" id="species" value={this.state.species} />
            <input type="text" name="alignment" id="alignment" value={this.state.alignment} />
            <input type="text" name="homeland" id="homeland" value={this.state.homeland} />
            <input type="text" name="background" id="background" value={this.state.background} />
        </div>
    }
}