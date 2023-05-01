import {Component, ReactPropTypes} from "react"

export default class BottomBlock extends Component {
    constructor(props: ReactPropTypes) {
        super(props)
        this.state = {
            profAndLangs: props.profAndLangs || "",
            equipment: props.equipment || "",
            classFeatures: props.classFeatures || "",
            traitsBackground: props.traitsBackground || "",
            traitsSpecies: props.traitsSpecies || "",
            traitsHomeland: props.traitsHomeland || ""
        }
    }

    render() {
        return <div id="bottom-block">
            <textarea name="profs-and-langs" cols="30" rows="10"></textarea>
            <textarea name="equipment" cols="30" rows="10"></textarea>
            <textarea name="class-features" cols="30" rows="10"></textarea>
            <textarea name="traits-background" cols="30" rows="10"></textarea>
            <textarea name="traits-species" cols="30" rows="10"></textarea>
            <textarea name="traits-homeland" cols="30" rows="10"></textarea>
        </div>
    }
}