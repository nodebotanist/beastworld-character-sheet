import {Component, ReactPropTypes} from "react"

const SkillsBlock = ({ skills }) => {

    const handleProficiencyChange = (e) => {

    }

    return <div className="skills"> 
        <form id="skill-profs" onSubmit={(e) => e.preventDefault()}>
            <div className="str-skill-profs">
                <input type="checkbox" name="strSavingThrow-prof" id="strSavingThrow-prof" checked={skills["strSavingThrowProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="athletics-prof" id="athletics-prof"  checked={skills["athleticsProf"]} onChange={handleProficiencyChange}/>
            </div> 
            <div className="dex-skill-profs">
                <input type="checkbox" name="dexSavingThrow-prof" id="dexSavingThrow-prof"  checked={skills["dexSavingThrowProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="acrobatics-prof" id="acrobatics-prof"  checked={skills["acrobaticsProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="sleightOfHand-prof" id="sleightOfHand-prof"  checked={skills["sleightOfHandProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="stealth-prof" id="stealth-prof"  checked={skills["stealthProf"]} onChange={handleProficiencyChange}/>
            </div>
            <div className="con-skill-profs">
                <input type="checkbox" name="conSavingThrow-prof" id="conSavingThrow-prof"  checked={skills["conSavingThrowProf"]} onChange={handleProficiencyChange}/>
            </div>
            <div className="int-skill-profs">
                <input type="checkbox" name="intSavingThrow-prof" id="intSavingThrow-prof"  checked={skills["intSavingThrowProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="arcana-prof" id="arcana-prof"  checked={skills["arcanaProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="history-prof" id="history-prof"  checked={skills["historyProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="investigation-prof" id="investigation-prof"  checked={skills["investigationProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="nature-prof" id="nature-prof"  checked={skills["natureProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="religion-prof" id="religion-prof"  checked={skills["religionProf"]} onChange={handleProficiencyChange}/>
            </div>
            <div className="wis-skill-profs">
                <input type="checkbox" name="wisSavingThrow-prof" id="wisSavingThrow-prof"  checked={skills["wisSavingThrowProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="animalHandling-prof" id="animalHandling-prof"  checked={skills["animalHandlingProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="insight-prof" id="insight-prof"  checked={skills["insightProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="medicine-prof" id="medicine-prof"  checked={skills["medicineProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="perception-prof" id="perception-prof"  checked={skills["perceptionProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="survival-prof" id="survival-prof"  checked={skills["survivalProf"]} onChange={handleProficiencyChange}/>
            </div>  
            <div className="cha-skill-profs">
                <input type="checkbox" name="chaSavingThrow-prof" id="chaSavingThrow-prof"  checked={skills["chaSavingThrowProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="deception-prof" id="deception-prof"  checked={skills["deceptionProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="intimidation-prof" id="intimidation-prof"  checked={skills["intimidationProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="performance-prof" id="performance-prof"  checked={skills["performanceProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="persuasion-prof" id="persuasion-prof"  checked={skills["persuasionProf"]} onChange={handleProficiencyChange}/>
            </div>
        </form>
        <div id="skill-values">
            <div className="str-skills">
                <input id="strSavingThrow" value={skills["strSavingThrow"]} />
                <input id="athletics" value={skills["athletics"]} />
            </div>
            <div className="dex-skills">
                <input id="dexSavingThrow" value={skills["dexSavingThrow"]} />
                <input id="acrobatics" value={skills["acrobatics"]} />
                <input id="sleightOfHand" value={skills["sleightOfHand"]} />
                <input id="stealth" value={skills["stealth"]} />
            </div>
            <div className="con-skills">
                <input id="conSavingThrow" value={skills["conSavingThrow"]} />
            </div>
            <div className="int-skills">
                <input id="intSavingThrow" value={skills["intSavingThrow"]} />
                <input id="arcana" value={skills["arcana"]} />
                <input id="history" value={skills["history"]} />
                <input id="investigation" value={skills["investigation"]} />
                <input id="nature" value={skills["nature"]} />
                <input id="religion" value={skills["religion"]} />
            </div>
            <div className="wis-skills">
                <input id="wisSavingThrow" value={skills["wisSavingThrow"]} />
                <input id="animalHandling" value={skills["animalHandling"]} />
                <input id="insight" value={skills["insight"]} />
                <input id="medicine" value={skills["medicine"]} />
                <input id="perception" value={skills["perception"]} />
                <input id="survival" value={skills["survival"]} />
            </div>
            <div className="cha-skills">
                <input id="chaSavingThrow" value={skills["chaSavingThrow"]} />
                <input id="deception" value={skills["deception"]} />
                <input id="intimidation" value={skills["intimidation"]} />
                <input id="performance" value={skills["performance"]} />
                <input id="persuasion" value={skills["persuasion"]} />
            </div>
        </div>
    </div>
}

export default SkillsBlock

// export default class SkillsBlock extends Component {
//     constructor(props: ReactPropTypes) {
//         super(props)
//         state = {
//             skills: props.skills 
//         } 
//     }

//     render() {   
//         return 
//     }

//     handleProficiencyChange = (event) => {
//         console.log(event)
        
//     }
// }