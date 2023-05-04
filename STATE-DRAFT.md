# Ideas for state keeping in character sheet

* Investigate redux?
* Stats as context
* 

## Global state:
### state:
{
    str: number,
    dex: number,
    con: number,
    int: number,
    wis: number,
    cha: number,
    levels: [
        class: string,
        level: number
    ]
    profs: [ string ]
}

## ACEtcBlock state:

### props:
    dex mod
    armor mod
    race
    levels

### state:

{
    AC
    init
    speed
    hitDice
}

## AttacksSpellcastingBlock state:

### props:

