import React, { useState } from 'react'

const LevelsBlock = ({ levels }) => {
    const [ playerLevels, setPlayerLevels ] = useState(levels)

    const onLevelChange = (event) => {
        let [type, index] = event.target.name.split('-')

        let newState = [...playerLevels]

        newState[index][type] = event.target.value 
        setPlayerLevels(newState)
    }

    return <div id="levels-block">
        <input type='text' name="class-0" value={playerLevels[0].class} onChange={onLevelChange}/>     
        <input type="number" name="level-0" min="0" max="50" value={playerLevels[0].level} onChange={onLevelChange} />
        <input type='text' name="class-1" value={playerLevels[1].class} onChange={onLevelChange} />     
        <input type="number" name="level-1" min="0" max="50" value={playerLevels[1].level} onChange={onLevelChange} />
    </div>
}

export default LevelsBlock