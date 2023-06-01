import React, {useState} from 'react'


const ProfBonusInspirationBlock = (props) => {
    const [profBonus, setProfBonus] = useState(props.profBonus)
    const [inspiration, setInspiration] = useState(props.inspiration)

    return <div id="prof-bonus-inspiration-block">
        <input type="number" name="prof-bonus" className="prof-bonus" min="0" max="20" onChange={(e)=>{setProfBonus(e.target.value)}} />   
        <input type="checkbox" name="inspiration" className="inspiration" checked={inspiration} onChange={(e) => {setInspiration(e.target.checked)}} />
    </div>
}

export default ProfBonusInspirationBlock