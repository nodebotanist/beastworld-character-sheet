import React, { useState } from 'react'

const HealthBlock = ({ currentHP, maxHP, tempHP }) => {
    const [ currentHPNum, setCurrentHPNum ] = useState(currentHP)
    const [ maxHPNum, setMaxHPNum ] = useState(maxHP)
    const [ tempHPNum, setTempHPNum ] = useState(tempHP)

    return <div id="hp-block">
        <input type="number" min="-50" max="50" id="current-hp" value={currentHPNum} onChange={ (e) => setCurrentHPNum(e.target.value) } />
        <input type="number" min="0" max="50" id="max-hp" value={maxHPNum} onChange={ (e) => setMaxHPNum(e.target.value) } />
        <input type="number" min="-50" max="50" id="temp-hp" value={tempHPNum} onChange={ (e) => setTempHPNum(e.target.value) } />
    </div>
}

export default HealthBlock
