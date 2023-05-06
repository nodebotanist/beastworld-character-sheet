import CharacterSheet from '../components/character-sheet'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <CharacterSheet 
        str={0} 
        dex={0} 
        con={0} 
        int={0} 
        wis={0} 
        cha={0} 
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
        />
    </main>
  )
}
