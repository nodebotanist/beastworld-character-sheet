import {Component, ReactPropTypes, useState} from "react"

const SkillsBlock = ({ skillsInitialState }) => {

    const [ skills, setSkills ] = useState(skillsInitialState)

    const handleProficiencyChange = (e) => {
        let newSkills = {
            ...skills
        }
        newSkills[e.target.id] = e.target.checked ? true : false
        console.log(newSkills, e.target.checked)
        setSkills(newSkills)
    }

    const handleSkillModChange = (e) => {
        let newSkills = {
            ...skills
        }
        newSkills[e.target.id] = e.target.value
        console.log(newSkills)
        setSkills(newSkills)
    }

    return <div className="skills"> 
        <form id="skill-profs" onSubmit={(e) => e.preventDefault()}>
            <div className="str-skill-profs">
                <input type="checkbox" name="strSavingThrowProf" id="strSavingThrowProf" checked={skills["strSavingThrowProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="athleticsProf" id="athleticsProf"  checked={skills["athleticsProf"]} onChange={handleProficiencyChange}/>
            </div> 
            <div className="dex-skill-profs">
                <input type="checkbox" name="dexSavingThrowProf" id="dexSavingThrowProf"  checked={skills["dexSavingThrowProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="acrobaticsProf" id="acrobaticsProf"  checked={skills["acrobaticsProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="sleightOfHandProf" id="sleightOfHandProf"  checked={skills["sleightOfHandProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="stealthProf" id="stealthProf"  checked={skills["stealthProf"]} onChange={handleProficiencyChange}/>
            </div>
            <div className="con-skill-profs">
                <input type="checkbox" name="conSavingThrowProf" id="conSavingThrowProf"  checked={skills["conSavingThrowProf"]} onChange={handleProficiencyChange}/>
            </div>
            <div className="int-skill-profs">
                <input type="checkbox" name="intSavingThrowProf" id="intSavingThrowProf"  checked={skills["intSavingThrowProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="arcanaProf" id="arcanaProf"  checked={skills["arcanaProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="historyProf" id="historyProf"  checked={skills["historyProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="investigationProf" id="investigationProf"  checked={skills["investigationProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="natureProf" id="natureProf"  checked={skills["natureProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="religionProf" id="religionProf"  checked={skills["religionProf"]} onChange={handleProficiencyChange}/>
            </div>
            <div className="wis-skill-profs">
                <input type="checkbox" name="wisSavingThrowProf" id="wisSavingThrowProf"  checked={skills["wisSavingThrowProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="animalHandlingProf" id="animalHandlingProf"  checked={skills["animalHandlingProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="insightProf" id="insightProf"  checked={skills["insightProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="medicineProf" id="medicineProf"  checked={skills["medicineProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="perceptionProf" id="perceptionProf"  checked={skills["perceptionProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="survivalProf" id="survivalProf"  checked={skills["survivalProf"]} onChange={handleProficiencyChange}/>
            </div>  
            <div className="cha-skill-profs">
                <input type="checkbox" name="chaSavingThrowProf" id="chaSavingThrowProf"  checked={skills["chaSavingThrowProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="deceptionProf" id="deceptionProf"  checked={skills["deceptionProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="intimidationProf" id="intimidationProf"  checked={skills["intimidationProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="performanceProf" id="performanceProf"  checked={skills["performanceProf"]} onChange={handleProficiencyChange}/>
                <input type="checkbox" name="persuasionProf" id="persuasionProf"  checked={skills["persuasionProf"]} onChange={handleProficiencyChange}/>
            </div>
        </form>
        <div id="skill-values">
            <div className="str-skills">
                <input type="number" min="0" max="50" onChange={handleSkillModChange} id="strSavingThrow" value={skills["strSavingThrow"]} />
                <input type="number" min="0" max="50" onChange={handleSkillModChange} id="athletics" value={skills["athletics"]} />
            </div>
            <div className="dex-skills">
                <input type="number" min="0" max="50" onChange={handleSkillModChange} id="dexSavingThrow" value={skills["dexSavingThrow"]} />
                <input type="number" min="0" max="50" onChange={handleSkillModChange} id="acrobatics" value={skills["acrobatics"]} />
                <input type="number" min="0" max="50" onChange={handleSkillModChange} id="sleightOfHand" value={skills["sleightOfHand"]} />
                <input type="number" min="0" max="50" onChange={handleSkillModChange} id="stealth" value={skills["stealth"]} />
            </div>
            <div className="con-skills">
                <input type="number" min="0" max="50" onChange={handleSkillModChange} id="conSavingThrow" value={skills["conSavingThrow"]} />
            </div>
            <div className="int-skills">
                <input type="number" min="0" max="50" onChange={handleSkillModChange} id="intSavingThrow" value={skills["intSavingThrow"]} />
                <input type="number" min="0" max="50" onChange={handleSkillModChange} id="arcana" value={skills["arcana"]} />
                <input type="number" min="0" max="50" onChange={handleSkillModChange} id="history" value={skills["history"]} />
                <input type="number" min="0" max="50" onChange={handleSkillModChange} id="investigation" value={skills["investigation"]} />
                <input type="number" min="0" max="50" onChange={handleSkillModChange} id="nature" value={skills["nature"]} />
                <input type="number" min="0" max="50" onChange={handleSkillModChange} id="religion" value={skills["religion"]} />
            </div>
            <div className="wis-skills">
                <input type="number" min="0" max="50" onChange={handleSkillModChange} id="wisSavingThrow" value={skills["wisSavingThrow"]} />
                <input type="number" min="0" max="50" onChange={handleSkillModChange} id="animalHandling" value={skills["animalHandling"]} />
                <input type="number" min="0" max="50" onChange={handleSkillModChange} id="insight" value={skills["insight"]} />
                <input type="number" min="0" max="50" onChange={handleSkillModChange} id="medicine" value={skills["medicine"]} />
                <input type="number" min="0" max="50" onChange={handleSkillModChange} id="perception" value={skills["perception"]} />
                <input type="number" min="0" max="50" onChange={handleSkillModChange} id="survival" value={skills["survival"]} />
            </div>
            <div className="cha-skills">
                <input type="number" min="0" max="50" onChange={handleSkillModChange} id="chaSavingThrow" value={skills["chaSavingThrow"]} />
                <input type="number" min="0" max="50" onChange={handleSkillModChange} id="deception" value={skills["deception"]} />
                <input type="number" min="0" max="50" onChange={handleSkillModChange} id="intimidation" value={skills["intimidation"]} />
                <input type="number" min="0" max="50" onChange={handleSkillModChange} id="performance" value={skills["performance"]} />
                <input type="number" min="0" max="50" onChange={handleSkillModChange} id="persuasion" value={skills["persuasion"]} />
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