import {Component, ReactPropTypes} from "react"

export default class SkillsBlock extends Component {
    constructor(props: ReactPropTypes) {
        super(props)
        this.state = {
            skills: props.skills 
        } 
    }

    render() {   
        return <div className="skills"> 
            <form id="skill-profs" onSubmit={(e) => e.preventDefault()}>
                <div className="str-skill-profs">
                    <input type="checkbox" name="strSavingThrow-prof" id="strSavingThrow-prof" checked={this.state.skills["strSavingThrowProf"]} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="athletics-prof" id="athletics-prof"  checked={this.state.skills["athleticsProf"]} onChange={this.handleProficiencyChange}/>
                </div> 
                <div className="dex-skill-profs">
                    <input type="checkbox" name="dexSavingThrow-prof" id="dexSavingThrow-prof"  checked={this.state.skills["dexSavingThrowProf"]} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="acrobatics-prof" id="acrobatics-prof"  checked={this.state.skills["acrobaticsProf"]} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="sleightOfHand-prof" id="sleightOfHand-prof"  checked={this.state.skills["sleightOfHandProf"]} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="stealth-prof" id="stealth-prof"  checked={this.state.skills["stealthProf"]} onChange={this.handleProficiencyChange}/>
                </div>
                <div className="con-skill-profs">
                    <input type="checkbox" name="conSavingThrow-prof" id="conSavingThrow-prof"  checked={this.state.skills["conSavingThrowProf"]} onChange={this.handleProficiencyChange}/>
                </div>
                <div className="int-skill-profs">
                    <input type="checkbox" name="intSavingThrow-prof" id="intSavingThrow-prof"  checked={this.state.skills["intSavingThrowProf"]} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="arcana-prof" id="arcana-prof"  checked={this.state.skills["arcanaProf"]} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="history-prof" id="history-prof"  checked={this.state.skills["historyProf"]} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="investigation-prof" id="investigation-prof"  checked={this.state.skills["investigationProf"]} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="nature-prof" id="nature-prof"  checked={this.state.skills["natureProf"]} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="religion-prof" id="religion-prof"  checked={this.state.skills["religionProf"]} onChange={this.handleProficiencyChange}/>
                </div>
                <div className="wis-skill-profs">
                    <input type="checkbox" name="wisSavingThrow-prof" id="wisSavingThrow-prof"  checked={this.state.skills["wisSavingThrowProf"]} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="animalHandling-prof" id="animalHandling-prof"  checked={this.state.skills["animalHandlingProf"]} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="insight-prof" id="insight-prof"  checked={this.state.skills["insightProf"]} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="medicine-prof" id="medicine-prof"  checked={this.state.skills["medicineProf"]} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="perception-prof" id="perception-prof"  checked={this.state.skills["perceptionProf"]} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="survival-prof" id="survival-prof"  checked={this.state.skills["survivalProf"]} onChange={this.handleProficiencyChange}/>
                </div>  
                <div className="cha-skill-profs">
                    <input type="checkbox" name="chaSavingThrow-prof" id="chaSavingThrow-prof"  checked={this.state.skills["chaSavingThrowProf"]} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="deception-prof" id="deception-prof"  checked={this.state.skills["deceptionProf"]} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="intimidation-prof" id="intimidation-prof"  checked={this.state.skills["intimidationProf"]} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="performance-prof" id="performance-prof"  checked={this.state.skills["performanceProf"]} onChange={this.handleProficiencyChange}/>
                    <input type="checkbox" name="persuasion-prof" id="persuasion-prof"  checked={this.state.skills["persuasionProf"]} onChange={this.handleProficiencyChange}/>
                </div>
            </form>
            <div id="skill-values">
                <div className="str-skills">
                    <span id="strSavingThrow">{this.state.skills["strSavingThrow"]}</span>
                    <span id="athletics">{this.state.skills["athletics"]}</span>
                </div>
                <div className="dex-skills">
                    <span id="dexSavingThrow">{this.state.skills["dexSavingThrow"]}</span>
                    <span id="acrobatics">{this.state.skills["acrobatics"]}</span>
                    <span id="sleightOfHand">{this.state.skills["sleightOfHand"]}</span>
                    <span id="stealth">{this.state.skills["stealth"]}</span>
                </div>
                <div className="con-skills">
                    <span id="conSavingThrow">{this.state.skills["conSavingThrow"]}</span>
                </div>
                <div className="int-skills">
                    <span id="intSavingThrow">{this.state.skills["intSavingThrow"]}</span>
                    <span id="arcana">{this.state.skills["arcana"]}</span>
                    <span id="history">{this.state.skills["history"]}</span>
                    <span id="investigation">{this.state.skills["investigation"]}</span>
                    <span id="nature">{this.state.skills["nature"]}</span>
                    <span id="religion">{this.state.skills["religion"]}</span>
                </div>
                <div className="wis-skills">
                    <span id="wisSavingThrow">{this.state.skills["wisSavingThrow"]}</span>
                    <span id="animalHandling">{this.state.skills["animalHandling"]}</span>
                    <span id="insight">{this.state.skills["insight"]}</span>
                    <span id="medicine">{this.state.skills["medicine"]}</span>
                    <span id="perception">{this.state.skills["perception"]}</span>
                    <span id="survival">{this.state.skills["survival"]}</span>
                </div>
                <div className="cha-skills">
                    <span id="chaSavingThrow">{this.state.skills["chaSavingThrow"]}</span>
                    <span id="deception">{this.state.skills["deception"]}</span>
                    <span id="intimidation">{this.state.skills["intimidation"]}</span>
                    <span id="performance">{this.state.skills["performance"]}</span>
                    <span id="persuasion">{this.state.skills["persuasion"]}</span>
                </div>
            </div>
        </div>
    }

    handleProficiencyChange = (event) => {
        console.log(event)
        
    }
}