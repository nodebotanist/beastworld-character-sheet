import {ChangeEvent, Component} from "react"

interface ACEtcProps {
    AC: string,
    init: string,
    walkingSpeed: string,
    hitDice: string
}

export default class ACEtcBlock extends Component<{}, {
    AC: string,
    init: string,
    walkingSpeed: string,
    hitDice: string
}> {
    constructor(props: ACEtcProps) {
        super(props)
        this.state = {
            AC: props.AC,
            init: props.init,
            walkingSpeed: props.walkingSpeed,
            hitDice: props.hitDice
        }
    }

    render() {
        return <div id="ac-etc-block">
            <input type="number" min="9" max="100" id="AC" value={this.state.AC} onChange={this.onAcEtcChange.bind(this)} />
            <input type="number" min="9" max="100" id="init" value={this.state.init} onChange={this.onAcEtcChange.bind(this)} />
            <input type="text" id="walkingSpeed" value={this.state.walkingSpeed} onChange={this.onAcEtcChange.bind(this)} />
            <input type="text" id="hitDice" value={this.state.hitDice} onChange={this.onAcEtcChange.bind(this)} />
        </div>
    }

    onAcEtcChange(event: ChangeEvent<HTMLInputElement>) {
        let target = event.target.id
        let value = event.target.value.toString()
        let result: {
            AC?: string | undefined,
            init?: string | undefined,
            walkingSpeed?: string | undefined,
            hitDice?: string | undefined,
        } = {}
        switch(target) {
            case "AC":
                result.AC = value
        }
        this.setState(result)
    }
}