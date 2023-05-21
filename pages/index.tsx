import CharacterSheet from '../components/character-sheet'

export default function Home() {
  return (
    <main>
      <CharacterSheet 
        str={10} 
        dex={10} 
        con={10} 
        int={10} 
        wis={10} 
        cha={10} 
        skills={{
            "strSavingThrowProf": false,
            "strSavingThrow": 0,
            "athleticsProf": false,
            "athletics": 0,
            "dexSavingThrowProf": false,
            "dexSavingThrow": 0,
            "acrobaticsProf": false,
            "acrobatics": 0,
            "sleightOfHandProf": false,
            "sleightOfHand": 0,
            "stealthProf": false,
            "stealth": 0,
            "conSavingThrowProf": false,
            "conSavingThrow": 0,
            "intSavingThrowProf": false,
            "intSavingThrow": 0,
            "arcanaProf": false,
            "arcana": 0,
            "historyProf": false,
            "history": 0,
            "investigationProf": false,
            "investigation": 0,
            "natureProf": false,
            "nature": 0,
            "religionProf": false, 
            "religion": 0,
            "wisSavingThrowProf": false,
            "wisSavingThrow": 0,
            "animalHandlingProf": false,
            "animalHandling": 0,
            "insightProf": false,
            "insight": 0,
            "medicineProf": false,
            "medicine": 0,
            "perceptionProf": false,
            "perception": 0,
            "survivalProf": false,
            "survival": 0,
            "chaSavingThrowProf": false,
            "chaSavingThrow": 0,
            "deceptionProf": false,
            "deception": 0,
            "intimidationProf": false,
            "intimidation": 0,
            "performanceProf": false,
            "performance": 0,
            "persuasionProf": false,
            "persuasion": 0,
          }} 
          profBonus={0} 
          levels={[]} 
          name={""} 
          inspiration={false} 
          passivePerception={10}
          currentHP={20}
          maxHP={20}
          tempHP={0}
          copper={0}
          silver={0}
          gold={0}
          platinum={0}
          profAndLangs= {""}
          equipment= {""}
          classFeatures= {""}
          traitsBackground= {""}
          traitsSpecies= {""}
          traitsHomeland= {""}
          attacksAndSpells= { [{ id: "hehetuoetudaoehtsudhtaoeudt", name: '', atkBonus: 0, dmgDice: 4, dmgMod: 0, dmgType: "" }] }
          AC={0}
          init={0}
          walkingSpeed={"0ft"}
          hitDice={"d6"}
          species=""
          alignment=""
          homeland=""
          background=""
        />
    </main>
  )
}
