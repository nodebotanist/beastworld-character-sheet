import {Component, ReactPropTypes} from "react"

export default class SkillsBlock extends Component {
    constructor(props: ReactPropTypes) {
        super(props)
        this.state = {
            strSavingThrowProf: props.strSavingThrowProf || false,
            strSavingThrow: props.strSavingThrow || 0,
            athleticsProf: props.athleticsProf || false,
            athletics: props.athletics || 0,
            dexSavingThrowProf: props.dexSavingThrowProf || false,
            dexSavingThrow: props.dexSavingThrow || 0,
            acrobaticsProf: props.acrobaticsProf || false,
            acrobatics: props.acrobatics || 0,
            sleightOfHandProf: props.sleightOfHandProf || false,
            sleightOfHand: props.sleightOfHand || 0,
            stealthProf: props.stealthProf || false,
            stealth: props.stealth || 0,
            conSavingThrowProf: props.conSavingThrowProf || false,
            conSavingThrow: props.conSavingThrow || 0,
            intSavingThrowProf: props.intSavingThrowProf || false,
            intSavingThrow: props.intSavingThrow || 0,
            arcanaProf: props.arcanaProf || false,
            arcana: props.arcana || 0,
            historyProf: props.historyProf || false,
            history: props.history || 0,
            investigationProf: props.investigationProf || false,
            investigation: props.investigation || 0,
            natureProf: props.natureProf || false,
            nature: props.nature || 0,
            religionProf: props.religionProf || false, 
            religion: props.religion || 0,
            wisSavingThrowProf: props.wisSavingThrowProf || false,
            wisSavingThrow: props.wisSavingThrow || 0,
            animalHandlingProf: props.animalHandlingProf || false,
            animalHandling: props.animalHandling || 0,
            insightProf: props.insightProf || false,
            insight: props.insight || 0,
            medicineProf: props.medicineProf || false,
            medicine: props.medicine || 0,
            perceptionProf: props.perceptionProf || false,
            perception: props.perception || 0,
            survivalProf: props.survivalProf || false,
            survival: props.survival || 0,
            chaSavingThrowProf: props.chaSavingThrowProf || false,
            chaSavingThrow: props.chaSavingThrow || 0,
            deceptionProf: props.deceptionProf || false,
            deception: props.deception || 0,
            intimidationProf: props.intimidationProf || false,
            intimidation: props.intimidation || 0,
            performanceProf: props.performanceProf || false,
            performance: props.performance || 0,
            persuasionProf: props.persuasionProf || false,
            persuasion: props.persuasion || 0,
        }
    }

    render() {   
        return <> 
            <form id="skill-profs" onSubmit={(e) => e.preventDefault()}>
                <input type="checkbox" name="str-saving-throw-prof" id="str-saving-throw-prof" checked={this.state.strSavingThrowProf}/>
                <input type="checkbox" name="athletics-prof" id="athletics-prof" />
                <input type="checkbox" name="dex-saving-throw-prof" id="dex-saving-throw-prof" />
                <input type="checkbox" name="acrobatics-prof" id="acrobatics-prof" />
                <input type="checkbox" name="sleightOfHand-prof" id="sleightOfHand-prof" />
                <input type="checkbox" name="str-prof" id="str-prof" />
                <input type="checkbox" name="str-prof" id="str-prof" />
                <input type="checkbox" name="str-prof" id="str-prof" />
                <input type="checkbox" name="str-prof" id="str-prof" />
                <input type="checkbox" name="str-prof" id="str-prof" />
                <input type="checkbox" name="str-prof" id="str-prof" />
                <input type="checkbox" name="str-prof" id="str-prof" />
                <input type="checkbox" name="str-prof" id="str-prof" />
                <input type="checkbox" name="str-prof" id="str-prof" />
                <input type="checkbox" name="str-prof" id="str-prof" />
                <input type="checkbox" name="str-prof" id="str-prof" />
                <input type="checkbox" name="str-prof" id="str-prof" />
                <input type="checkbox" name="str-prof" id="str-prof" />
                <input type="checkbox" name="str-prof" id="str-prof" />
                <input type="checkbox" name="str-prof" id="str-prof" />
                <input type="checkbox" name="str-prof" id="str-prof" />
                <input type="checkbox" name="str-prof" id="str-prof" />
                <input type="checkbox" name="str-prof" id="str-prof" />
            </form>
            <div id="skill-values">
            </div>
        </>
    }

    onStatsChange = (event) => {
        let statToChange = event.target.id.split('-')[1]
        let modifier = Math.floor((event.target.value - 10) / 2).toString()
        let modifierKey = statToChange + "_mod"
        modifier = parseInt(modifier, 10) >= 0 ? `+${modifier}`: modifier.toString()
        this.setState({
            [statToChange]: event.target.value,
            [modifierKey]: modifier
        })
        
    }
}