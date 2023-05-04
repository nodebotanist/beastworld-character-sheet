import { Readex_Pro } from "next/font/google"
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
            <input type="file" id="portrait-picker" accept=".jpeg, .jpg, .png" onInput={this.renderPreview} />
        </div>
    }

    renderPreview(event) {
        console.log(event.target.files)
        if(event.target.files && event.target.files[0]){
            let reader = new FileReader()
            reader.addEventListener("load", (event) => {
                let previewDiv = document.querySelector("#character-portrait-block .portrait-preview")
                previewDiv?.setAttribute('src', event.target.result)
            })

            reader.readAsDataURL(event.target.files[0])
        }
    }
}
