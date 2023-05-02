import {Component, ReactPropTypes, SyntheticEvent} from "react"
import {v4} from 'uuid'

class AttackOrSpell {
    constructor (props) {
        this.id = props.id || v4()
        this.name = props.name || "",
        this.atkBonus = props.atkBonus || 0,
        this.dmg = props.dmg || "0d0",
        this.dmgType = props.dmgType || "bludgeoning"
    }
}

export default class AttacksSpellcastingBlock extends Component {
    constructor(props: ReactPropTypes) {
        super(props)
        this.state = {
            attacksAndSpells: props.attacksAndSpells || [new AttackOrSpell({}), new AttackOrSpell({}), new AttackOrSpell({})],
        }
    }

    render() {
        return <div id="attack-spellcasting-block">
            {this.state.attacksAndSpells.map((attackOrSpell) => {
                return <div className="row" key={attackOrSpell.id}>
                    <input type="text" value={attackOrSpell.name} onChange={this.onChangeAttackAndSpells.bind(this)} className="attack-or-spell-name" id={`${attackOrSpell.id}-name`} />
                    <input type="text" value={attackOrSpell.atkBonus} onChange={this.onChangeAttackAndSpells.bind(this)} className="attack-or-spell-atkBonus" id={`${attackOrSpell.id}-atkBonus`} />
                    <input type="text" value={attackOrSpell.dmg} onChange={this.onChangeAttackAndSpells.bind(this)} className="attack-or-spell-dmg" id={`${attackOrSpell.id}-dmg`} />
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
