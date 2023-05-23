import React, { useState } from 'react'

const StatsBlock = ({ str, dex, con, int, wis, cha }) => {
    const [strength, setStrength] = useState(str)
    const [strengthMod, setStrengthMod] = useState(`+${Math.floor((str - 10) / 2)}`)
    const [dexterity, setDexterity] = useState(dex)
    const [dexterityMod, setDexterityMod] = useState(`+${Math.floor((dex - 10) / 2)}`)
    const [constitution, setConstitution] = useState(con)
    const [constitutionMod, setConstitutionMod] = useState(`+${Math.floor((con - 10) / 2)}`)
    const [intelligence, setIntelligence] = useState(int)
    const [intelligenceMod, setIntelligenceMod] = useState(`+${Math.floor((int - 10) / 2)}`)
    const [wisdom, setWisdom] = useState(wis)
    const [wisdomMod, setWisdomMod] = useState(`+${Math.floor((wis - 10) / 2)}`)
    const [charisma, setCharisma] = useState(cha)
    const [charismaMod, setCharismaMod] = useState(`+${Math.floor((cha - 10) / 2)}`)

    const onStatsChange = (event) => {
        const statToUpdate = event.target.name
        switch (statToUpdate) {
            case 'str':
                setStrength(event.target.value)
                setStrengthMod(`+${Math.floor((event.target.value - 10) / 2)}`)
                break;
            case 'dex':
                setDexterity(event.target.value)
                setDexterityMod(`+${Math.floor((event.target.value - 10) / 2)}`)
                break;
            case 'con':
                setConstitution(event.target.value)
                setConstitutionMod(`+${Math.floor((event.target.value - 10) / 2)}`)
                break;
            case 'int': 
                setIntelligence(event.target.value)
                setIntelligenceMod(`+${Math.floor((event.target.value - 10) / 2)}`)
                break;
            case 'wis':
                setWisdom(event.target.value)
                setWisdomMod(`+${Math.floor((event.target.value - 10) / 2)}`)
                break;
            case 'cha':
                setCharisma(event.target.value)
                setCharismaMod(`+${Math.floor((event.target.value - 10) / 2)}`)
                break;
        }
    }

    return <> 
        <form id="stats" onSubmit={(e) => e.preventDefault()}>
            <input type="number" id="stats-str" name="str" value={strength} min="0" max="50" onChange={onStatsChange}/>
            <input type="number" id="stats-dex" name="dex" value={dexterity} min="0" max="50" onChange={onStatsChange} />
            <input type="number" id="stats-con" name="con" value={constitution} min="0" max="50" onChange={onStatsChange} />
            <input type="number" id="stats-int" name="int" value={intelligence} min="0" max="50" onChange={onStatsChange} />
            <input type="number" id="stats-wis" name="wis" value={wisdom} min="0" max="50" onChange={onStatsChange} />
            <input type="number" id="stats-cha" name="cha" value={charisma} min="0" max="50" onChange={onStatsChange} />
        </form>
        <div id="modifiers">
            <div id="modifiers-str">{strengthMod}</div>
            <div id="modifiers-dex">{dexterityMod}</div>
            <div id="modifiers-con">{constitutionMod}</div>
            <div id="modifiers-int">{intelligenceMod}</div>
            <div id="modifiers-wis">{wisdomMod}</div>
            <div id="modifiers-cha">{charismaMod}</div>
        </div>
    </>
}

export default StatsBlock
