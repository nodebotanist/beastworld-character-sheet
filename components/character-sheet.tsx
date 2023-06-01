import React, { useState } from 'react'
import Image from 'next/image'

import HealthBlock from './health-block'
import ACEtcBlock from './ac-etc-block'
import CharacterPortraitBlock from './character-portrait-block'
import CharacterPictogramBlock from './character-pictogram-block'
import AttacksSpellcastingBlock from './attacks-spellcasting-block'
import MoneyBlock from './money-block'
import CharacterInfoBlock from './character-info-block'
import BottomBlock from './bottom-block'
import StatsProfsLevelsBlock from './stats-profs-levels-block'
import NameCrewBlock from './name-crew-block'   
import CharacterNameBlock from './character-name-block'
import ProfBonusInspirationBlock from './prof-bonus-inspiration-block'

import bg from '../public/images/char-sheet.jpg'

const CharacterSheet = (props) => {
    const [sheetState, setSheetState] = useState(props)

    return <div className="character-sheet-background">
        <Image className="bg" src={bg} alt="Beastworld Character Sheet page 1" />
        <BottomBlock 
            profAndLangs= {sheetState.profAndLangs}
            equipment= {sheetState.equipment}
            classFeatures= {sheetState.classFeatures}
            traitsBackground= {sheetState.traitsBackground}
            traitsSpecies= {sheetState.traitsSpecies}
            traitsHomeland= {sheetState.traitsHomeland}
        />
        <NameCrewBlock
            name={sheetState.playerName}
            crew={sheetState.crewName}
        />
        <CharacterNameBlock
            name={sheetState.charName}
        />  
        <ProfBonusInspirationBlock
            profBonus={sheetState.profBonus}
            inspiration={sheetState.inspiration}
        />
        <CharacterInfoBlock 
            species={sheetState.species}
            alignment={sheetState.alignment}
            homeland={sheetState.homeland}
            background={sheetState.background}    
        />
        <StatsProfsLevelsBlock 
            str={sheetState.str}
            dex={sheetState.dex}
            con={sheetState.con}
            int={sheetState.int}
            wis={sheetState.wis}
            cha={sheetState.cha}
            skills={sheetState.skills}
            name={sheetState.name}
            levels={sheetState.levels}
            profBonus={sheetState.profBonus}
            inspiration={sheetState.inspiration}
            passivePerception={sheetState.passivePerception}
        />
        <HealthBlock 
            currentHP={sheetState.currentHP}
            maxHP={sheetState.maxHP}
            tempHP={sheetState.tempHP}    
        />
        <CharacterPictogramBlock
            pictogram={sheetState.pictogram}
        />
        <ACEtcBlock
            AC={sheetState.AC}
            init={sheetState.init}
            walkingSpeed={sheetState.walkingSpeed}
            hitDice={sheetState.hitDice}
        />
        <CharacterPortraitBlock 
            portrait={sheetState.portrait}
        />
        <AttacksSpellcastingBlock 
            attacksAndSpells={sheetState.attacksAndSpells}
        />
        <MoneyBlock
            copper={sheetState.copper}
            silver={sheetState.silver}
            gold={sheetState.gold}
            platinum={sheetState.platinum}
        />
    </div>
}

export default CharacterSheet
