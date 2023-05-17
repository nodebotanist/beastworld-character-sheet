import React, {useState} from "react"

const ACEtcBlock = () => {
    const [ AC, setAC ] = useState(0)
    const [ init, setInit ] = useState(0)
    const [ walkingSpeed, setWalkingSpeed ] = useState("0ft")
    const [ hitDice, setHitDice ] = useState("0d0")

    return (
    <div id="ac-etc-block">
        <input type="number" min="0" max="100" id="AC" value={AC} onChange={e => { setAC(Number(e.target.value)) }} />
        <input type="number" min="0" max="100" id="init" value={init} onChange={ e => {setInit(Number(e.target.value))} } />
        <input type="text" id="walkingSpeed" value={walkingSpeed} onChange={e => {setWalkingSpeed(e.target.value)} }/>
        <input type="text" id="hitDice" value={hitDice} onChange={e => {setHitDice(e.target.value)} }/>
    </div>
    )
}

export default ACEtcBlock