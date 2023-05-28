import React, { useState } from 'react'

const CharacterNameBlock = ({ name }) => {
    const [ nameText, setNameText ] = useState(name)

    return <div id="character-name-block">
        <input type="text" id="name" value={nameText} onChange={(e) => setNameText(e.target.value)} />
    </div>
}

export default CharacterNameBlock