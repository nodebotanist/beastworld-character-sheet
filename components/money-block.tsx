import React, { useState } from 'react'

const MoneyBlock = ({ copper, silver, gold, platinum }) => {
    const [copperAmt, setCopperAmt] = useState(copper)
    const [silverAmt, setSilverAmt] = useState(silver)
    const [goldAmt, setGoldAmt] = useState(gold)
    const [platinumAmt, setPlatinumAmt] = useState(platinum)

    return <div id="money-block">
        <input type="number" name="copper" id="copper" min={0} value={copperAmt} onChange={ (e) => setCopperAmt(e.target.value) } />
        <input type="number" name="silver" id="silver" min={0} value={silverAmt} onChange={ (e) => setSilverAmt(e.target.value) } />
        <input type="number" name="gold" id="gold" min={0} value={goldAmt} onChange={ (e) => setGoldAmt(e.target.value) } />
        <input type="number" name="platinum" id="platinum" min={0} value={platinumAmt} onChange={ (e) => setPlatinumAmt(e.target.value) } />
    </div>
}

export default MoneyBlock
