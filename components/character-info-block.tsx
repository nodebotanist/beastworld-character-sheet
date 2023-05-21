import React, {useState} from "react"

const CharacterInfoBlock = ({ species, alignment, homeland, background}) => {

    const [ speciesText, setSpeciesText ] = useState(species)
    const [ alignmentText, setAlignmentText ] = useState(alignment)
    const [ homelandText, setHomelandText ] = useState(homeland)
    const [ backgroundText, setBackgroundText ] = useState(background)

    return <div id="character-info-block">
            <input type="text" name="species" id="species" value={speciesText || ""} onChange={(e) => setSpeciesText(e.target.value)} />
            <input type="text" name="alignment" id="alignment" value={alignmentText || ""} onChange={(e) => setAlignmentText(e.target.value)} />
            <input type="text" name="homeland" id="homeland" value={homelandText || ""} onChange={(e) => {setHomelandText(e.target.value)}} />
            <input type="text" name="background" id="background" value={backgroundText || ""} onChange={(e) => setBackgroundText(e.target.value)} />
        </div>
}

export default CharacterInfoBlock
