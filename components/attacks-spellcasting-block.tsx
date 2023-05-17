import {Component, ReactPropTypes, SyntheticEvent, useState} from "react"
import {v4} from 'uuid'

const AttacksSpellcastingBlock = () => {
    let [ attacksAndSpells, setAttacksAndSpells ] = useState([{
            id: v4(),
            name: '',
            atkBonus: 0,
            numDmgDice: 0,
            dmgDice: 0,
            dmgMod: 0,
            dmgType: ''
        },{
            id: v4(),
            name: '',
            atkBonus: 0,
            numDmgDice: 0,
            dmgDice: 0,
            dmgMod: 0,
            dmgType: ''
        },{
            id: v4(),
            name: '',
            atkBonus: 0,
            numDmgDice: 0,
            dmgDice: 0,
            dmgMod: 0,
            dmgType: ''
        }
    ])

    return (
        <div id="attack-spellcasting-block">
            {attacksAndSpells.map((attackOrSpell) => {
                return <AttackOrSpell attackOrSpell={attackOrSpell} />
            })}
        </div>
    )
}

const AttackOrSpell = ({ attackOrSpell }) => {

    const { id } = attackOrSpell
    const [ name, setName ] = useState(attackOrSpell.name)
    const [ atkBonus, setAtkBonus ] = useState(attackOrSpell.atkBonus)
    const [ numDmgDice, setNumDmgDice ] = useState(attackOrSpell.numDmgDice)
    const [ dmgDice, setDmgDice ] = useState(attackOrSpell.dmgDice)
    const [ dmgMod, setDmgMod ] = useState(attackOrSpell.dmgMod)
    const [ dmgType, setDmgType ] = useState(attackOrSpell.dmgType)

    return (
        <div className="row" key={id}>
            <input type="text" value={name} onChange={ e => { setName(e.target.value) }} className="attack-or-spell-name" id={`${id}-name`} />
            <span className="dmg-atk-bonus-prefix">+</span>
            <input type="number" value={atkBonus} onChange={ e => { setAtkBonus(e.target.value) }} className="attack-or-spell-atkBonus" id={`${id}-atkBonus`} min="0" max="50" />
            <input type="number" value={numDmgDice} onChange={ e => { setNumDmgDice(e.target.value) }} min="0" max="50" className="attack-or-spell-numDmgDice" id={`${id}-numDmgDice`}/>
            <span className="dmg-dice-divider">d</span>
            <input type="number" value={dmgDice} onChange={ e => { setDmgDice(e.target.value) }} min="0" max="50" className="attack-or-spell-dmgDice" id={`${id}-dmgDice`}/>
            <span className="dmg-dice-mod-divider">+</span>
            <input type="number" value={dmgMod} onChange={ e => { setDmgMod(e.target.value) }} min="0" max="50" className="attack-or-spell-dmgMod" id={`${id}-dmgMod`}/>
            <input type="text" value={dmgType} onChange={ e => { setDmgType(e.target.value) }} className="attack-or-spell-dmgType" id={`${id}-dmgType`} />
        </div>
    )
}

export default AttacksSpellcastingBlock