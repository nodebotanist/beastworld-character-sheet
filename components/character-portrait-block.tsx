import {Component, ReactPropTypes} from "react"

export default class CharacterPortraitBlock extends Component {
    constructor(props: ReactPropTypes) {
        super(props)
        this.state = {
            portrait: this.props.portrait || undefined
        }
    }

    render() {
        return <div id="character-portrait-block">
            <img className="portrait-preview" />
            <input type="file" id="portrait-picker" accept=".jpeg, .jpg, .png" onInput={this.renderPreview.bind(this)} />
        </div>
    }

    renderPreview(event) {
        let resultImage = (event && event.target && event.target.files && event.target.files[0]) ? event.target.files[0] : this.state.portrait  
        this.setState({
            portrait: resultImage
        })

        let reader = new FileReader()
        reader.addEventListener("load", (event) => {
            let previewDiv = document.querySelector("#character-portrait-block .portrait-preview")
            previewDiv?.setAttribute('src', event.target.result)
        })

        reader.readAsDataURL(resultImage)
    }
}
