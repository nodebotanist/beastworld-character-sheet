import {Component, ReactPropTypes, SyntheticEvent} from "react"
import {v4} from 'uuid'

class AttackOrSpell {
    constructor (props) {
        this.id = props.id || v4()
        this.name = props.name || "Unarmed attack",
        this.atkBonus = props.atkBonus || 0,
        this.numDmgDice = props.numDmgDice || 1,
        this.dmgDice = props.dmgDice || 4,
        this.dmgMod = props.dmgMod || 0,
        this.dmgType = props.dmgType || "bludgeoning"
    }
}

export default class AttacksSpellcastingBlock extends Component {
    constructor(props: ReactPropTypes) {
        super(props)
        this.state = {
            attacksAndSpells: props.attacksAndSpells,
        }
    }

    render() {
        return <div id="attack-spellcasting-block">
            {this.state.attacksAndSpells.map((attackOrSpell) => {
                return <div className="row" key={attackOrSpell.id}>
                    <input type="text" value={attackOrSpell.name} onChange={this.onChangeAttackAndSpells.bind(this)} className="attack-or-spell-name" id={`${attackOrSpell.id}-name`} />
                    <span className="dmg-atk-bonus-prefix">+</span>
                    <input type="number" value={attackOrSpell.atkBonus} onChange={this.onChangeAttackAndSpells.bind(this)} className="attack-or-spell-atkBonus" id={`${attackOrSpell.id}-atkBonus`} min="0" max="50" />
                    <input type="number" value={attackOrSpell.numDmgDice} onChange={this.onChangeAttackAndSpells.bind(this)} min="0" max="50" className="attack-or-spell-numDmgDice" id={`${attackOrSpell.id}-numDmgDice`}/>
                    <span className="dmg-dice-divider">d</span>
                    <input type="number" value={attackOrSpell.dmgDice} onChange={this.onChangeAttackAndSpells.bind(this)} min="0" max="50" className="attack-or-spell-dmgDice" id={`${attackOrSpell.id}-dmgDice`}/>
                    <span className="dmg-dice-mod-divider">+</span>
                    <input type="number" value={attackOrSpell.dmgMod} onChange={this.onChangeAttackAndSpells.bind(this)} min="0" max="50" className="attack-or-spell-dmgMod" id={`${attackOrSpell.id}-dmgMod`}/>
                    <input type="text" value={attackOrSpell.dmgType} onChange={this.onChangeAttackAndSpells.bind(this)} className="attack-or-spell-dmgType" id={`${attackOrSpell.id}-dmgType`} />
                </div>
            })}
        </div>
    }

    onChangeAttackAndSpells(event: SyntheticEvent){
        let changeType: string = event.target.id.split('-').slice(-1)[0]
        let id = event.target.id.replace(`-${changeType}`, '')
        let elementToChange = this.state.attacksAndSpells.find(element => element.id === id)

        console.log(changeType, id, this.state.attacksAndSpells, elementToChange, event.target.value)
        
        elementToChange[changeType] = event.target.value

        let newState = this.state.attacksAndSpells.map(attackOrSpell => attackOrSpell.id === elementToChange.id ? elementToChange : attackOrSpell)        

        this.setState({
            attacksAndSpells: newState
        })
        
        console.log(changeType, id, elementToChange, newState)
    }
}
