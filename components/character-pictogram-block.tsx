import React, { useState } from 'react'

const CharacterPictogramBlock = ({ pictogram }) => {
    const [ pictogramSrc, setPictogramSrc ] = useState(pictogram)

    const renderPreview = (eventTarget) => {
        let resultImage = (eventTarget && eventTarget.files && eventTarget.files[0]) ? eventTarget.files[0] : pictogramSrc  

        let reader = new FileReader()
        reader.addEventListener("load", (event) => {
             let previewDiv = document.querySelector("#character-pictogram-block .pictogram-preview")
             previewDiv?.setAttribute('src', event.target.result)
             setPictogramSrc(event.target.result)
        })

        reader.readAsDataURL(resultImage)
    }

    return <div id="character-pictogram-block">
        <img className="pictogram-preview" src={pictogramSrc} />
        <input type="file" id="pictogram-picker" accept=".jpeg, .jpg, .png" onInput={(e) => renderPreview(e.target)} />
    </div>
}

export default CharacterPictogramBlock
