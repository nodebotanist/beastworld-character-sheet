import React, { useState } from "react"

const PassivePerceptionBlock = ( props ) => {
    const [passivePerception, setPassivePerception] = useState(props.passivePerception)

    return <div id="passive-perception-block">
        <input type="number" name="passive-perception" className="passive-perception" min="0" max="50" onChange={(e)=>{setPassivePerception(e.target.value)}} />
    </div>
}

export default PassivePerceptionBlock