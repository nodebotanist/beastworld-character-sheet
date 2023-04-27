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
        return <div className="skills"> 
            <form id="skill-profs" onSubmit={(e) => e.preventDefault()}>
                <div className="str-skill-profs">
                    <input type="checkbox" name="strSavingThrow-prof" id="strSavingThrow-prof" checked={this.state.strSavingThrowProf} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="athletics-prof" id="athletics-prof"  checked={this.state.athleticsProf} onChange={this.handleProficiencyChange}/>
                </div> 
                <div className="dex-skill-profs">
                    <input type="checkbox" name="dexSavingThrow-prof" id="dexSavingThrow-prof"  checked={this.state.dexSavingThrowProf} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="acrobatics-prof" id="acrobatics-prof"  checked={this.state.acrobaticsProf} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="sleightOfHand-prof" id="sleightOfHand-prof"  checked={this.state.sleightOfHandProf} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="stealth-prof" id="stealth-prof"  checked={this.state.stealthProf} onChange={this.handleProficiencyChange}/>
                </div>
                <div className="con-skill-profs">
                    <input type="checkbox" name="conSavingThrow-prof" id="conSavingThrow-prof"  checked={this.state.conSavingThrowProf} onChange={this.handleProficiencyChange}/>
                </div>
                <div className="int-skill-profs">
                    <input type="checkbox" name="intSavingThrow-prof" id="intSavingThrow-prof"  checked={this.state.intSavingThrowProf} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="arcana-prof" id="arcana-prof"  checked={this.state.arcanaProf} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="history-prof" id="history-prof"  checked={this.state.historyProf} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="investigation-prof" id="investigation-prof"  checked={this.state.investigationProf} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="nature-prof" id="nature-prof"  checked={this.state.natureProf} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="religion-prof" id="religion-prof"  checked={this.state.religionProf} onChange={this.handleProficiencyChange}/>
                </div>
                <div className="wis-skill-profs">
                    <input type="checkbox" name="wisSavingThrow-prof" id="wisSavingThrow-prof"  checked={this.state.wisSavingThrowProf} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="animalHandling-prof" id="animalHandling-prof"  checked={this.state.animalHandlingProf} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="insight-prof" id="insight-prof"  checked={this.state.insightProf} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="medicine-prof" id="medicine-prof"  checked={this.state.medicineProf} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="perception-prof" id="perception-prof"  checked={this.state.perceptionProf} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="survival-prof" id="survival-prof"  checked={this.state.survivalProf} onChange={this.handleProficiencyChange}/>
                </div>  
                <div className="cha-skill-profs">
                    <input type="checkbox" name="chaSavingThrow-prof" id="chaSavingThrow-prof"  checked={this.state.chaSavingThrowProf} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="deception-prof" id="deception-prof"  checked={this.state.deceptionProf} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="intimidation-prof" id="intimidation-prof"  checked={this.state.intimidationProf} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="performance-prof" id="performance-prof"  checked={this.state.performanceProf} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="persuasion-prof" id="persuasion-prof"  checked={this.state.persuasionProf} onChange={this.handleProficiencyChange}/>
                </div>
            </form>
            <div id="skill-values">
                <span id="strSavingThrow">{this.state.strSavingThrow}</span>
                <span id="athletics">{this.state.athletics}</span>
                <span id="dexSavingThrow">{this.state.dexSavingThrow}</span>
                <span id="acrobatics">{this.state.acrobatics}</span>
                <span id="sleightOfHand">{this.state.sleightOfHand}</span>
                <span id="stealth">{this.state.stealth}</span>
                <span id="conSavingThrow">{this.state.conSavingThrow}</span>
                <span id="intSavingThrow">{this.state.intSavingThrow}</span>
                <span id="arcana">{this.state.arcana}</span>
                <span id="history">{this.state.history}</span>
                <span id="investigation">{this.state.investigation}</span>
                <span id="nature">{this.state.nature}</span>
                <span id="religion">{this.state.religion}</span>
                <span id="wisSavingThrow">{this.state.wisSavingThrow}</span>
                <span id="animalHandling">{this.state.animalHandling}</span>
                <span id="insight">{this.state.insight}</span>
                <span id="medicine">{this.state.medicine}</span>
                <span id="perception">{this.state.perception}</span>
                <span id="survival">{this.state.survival}</span>
                <span id="chaSavingThrow">{this.state.chaSavingThrow}</span>
                <span id="deception">{this.state.deception}</span>
                <span id="intimidation">{this.state.intimidation}</span>
                <span id="performance">{this.state.performance}</span>
                <span id="persuasion">{this.state.persuasion}</span>
            </div>
        </div>
    }

    handleProficiencyChange = (event) => {
        console.log(event)
        
    }
}