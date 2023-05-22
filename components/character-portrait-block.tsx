import React, { useState } from 'react'

const CharacterPortraitBlock = ({ portrait }) => {
    const [ portraitSrc, setPortraitSrc ] = useState(portrait)

    const renderPreview = (eventTarget) => {
        let resultImage = (eventTarget && eventTarget.files && eventTarget.files[0]) ? eventTarget.files[0] : portraitSrc  

        let reader = new FileReader()
        reader.addEventListener("load", (event) => {
             let previewDiv = document.querySelector("#character-portrait-block .portrait-preview")
             previewDiv?.setAttribute('src', event.target.result)
             setPortraitSrc(event.target.result)
        })

        reader.readAsDataURL(resultImage)
    }

    return <div id="character-portrait-block">
        <img className="portrait-preview" src={portraitSrc} />
        <input type="file" id="portrait-picker" accept=".jpeg, .jpg, .png" onInput={(e) => renderPreview(e.target)} />
    </div>
}

export default CharacterPortraitBlock
