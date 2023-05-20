import React, {useState} from "react"

const BottomBlock = ({ classFeatures, equipment, profsAndLangs, traitsBackground, traitsHomeland, traitSpecies }) => {

    const [ profsAndLangsText, setProfsAndLangsText] = useState(profsAndLangs)
    const [ equipmentText, setEquipmentText ] = useState(equipment)
    const [ classFeaturesText, setClassFeaturesText] = useState(classFeatures)
    const [ traitsBackgroundText, setTraitsBackgroundText ] = useState(traitsBackground)
    const [ traitsSpeciesText, setTraitsSpeciesText ] = useState(traitSpecies)
    const [ traitsHomelandText, setTraitsHomelandText ] = useState(traitsHomeland)

    return <div id="bottom-block">
        <textarea name="profsAndLangs" cols="30" rows="10" value={profsAndLangsText} onChange={(e) => setProfsAndLangsText(e.target.value)} ></textarea>
        <textarea name="equipment" cols="30" rows="10" value={equipmentText} onChange={(e) => setEquipmentText(e.target.value)} ></textarea>
        <textarea name="classFeatures" cols="30" rows="10" value={classFeaturesText} onChange={(e) => setClassFeaturesText(e.target.value)} ></textarea>
        <textarea name="traitsBackground" cols="30" rows="10" value={traitsBackgroundText} onChange={(e) => setTraitsBackgroundText(e.target.value)} ></textarea>
        <textarea name="traitsSpecies" cols="30" rows="10" value={traitsSpeciesText} onChange={(e) => setTraitsSpeciesText(e.target.value)} ></textarea>
        <textarea name="traitsHomeland" cols="30" rows="10" value={traitsHomelandText} onChange={(e) => setTraitsHomelandText(e.target.value)} ></textarea>
    </div>  
}

export default BottomBlock
