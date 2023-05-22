import React, { useState } from 'react'

const NameCrewBlock = ({ name, crew }) => {
    const [ nameText, setNameText ] = useState(name)
    const [ crewText, setCrewText ] = useState(crew)

    return <div id="name-crew-block">
        <input type="text" id="name" value={nameText} onChange={(e) => setNameText(e.target.value)} />
        <input type="text" id="crew" value={crewText} onChange={(e) => setCrewText(e.target.value)} />
    </div>
}

export default NameCrewBlock