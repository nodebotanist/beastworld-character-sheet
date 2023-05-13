(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(3647)}])},3647:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return x}});var i=s(5893),n=s(7294);class a extends n.Component{render(){return(0,i.jsxs)("div",{id:"hp-block",children:[(0,i.jsx)("input",{type:"number",min:"-50",max:"50",id:"current-hp",value:this.state.currentHP,onChange:this.onChangeHealth.bind(this)}),(0,i.jsx)("input",{type:"number",min:"0",max:"50",id:"max-hp",value:this.state.maxHP,onChange:this.onChangeHealth.bind(this)}),(0,i.jsx)("input",{type:"number",min:"-50",max:"50",id:"temp-hp",value:this.state.tempHP,onChange:this.onChangeHealth.bind(this)})]})}onChangeHealth(t){let e=t.target.id.replace("-hp","HP");this.setState({[e]:t.target.value})}constructor(t){super(t),console.log(t),this.state={currentHP:t.currentHP,maxHP:t.maxHP,tempHP:t.tempHP}}}class r extends n.Component{render(){return(0,i.jsxs)("div",{id:"ac-etc-block",children:[(0,i.jsx)("input",{type:"number",min:"9",max:"100",id:"AC",value:this.state.AC,onChange:this.onAcEtcChange.bind(this)}),(0,i.jsx)("input",{type:"number",min:"9",max:"100",id:"init",value:this.state.init,onChange:this.onAcEtcChange.bind(this)}),(0,i.jsx)("input",{type:"text",id:"walkingSpeed",value:this.state.walkingSpeed,onChange:this.onAcEtcChange.bind(this)}),(0,i.jsx)("input",{type:"text",id:"hitDice",value:this.state.hitDice,onChange:this.onAcEtcChange.bind(this)})]})}onAcEtcChange(t){let e=t.target.id,s=t.target.value.toString(),i={};"AC"===e&&(i.AC=s),this.setState(i)}constructor(t){super(t),this.state={AC:t.AC,init:t.init,walkingSpeed:t.walkingSpeed,hitDice:t.hitDice}}}class o extends n.Component{render(){return(0,i.jsxs)("div",{id:"character-portrait-block",children:[(0,i.jsx)("img",{className:"portrait-preview"}),(0,i.jsx)("input",{type:"file",id:"portrait-picker",accept:".jpeg, .jpg, .png",onInput:this.renderPreview.bind(this)})]})}renderPreview(t){let e=t&&t.target&&t.target.files&&t.target.files[0]?t.target.files[0]:this.state.portrait;this.setState({portrait:e});let s=new FileReader;s.addEventListener("load",t=>{let e=document.querySelector("#character-portrait-block .portrait-preview");null==e||e.setAttribute("src",t.target.result)}),s.readAsDataURL(e)}constructor(t){super(t),this.state={portrait:this.props.portrait||void 0}}}class h extends n.Component{render(){return(0,i.jsx)("div",{id:"attack-spellcasting-block",children:this.state.attacksAndSpells.map(t=>(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("input",{type:"text",value:t.name,onChange:this.onChangeAttackAndSpells.bind(this),className:"attack-or-spell-name",id:"".concat(t.id,"-name")}),(0,i.jsx)("span",{className:"dmg-atk-bonus-prefix",children:"+"}),(0,i.jsx)("input",{type:"number",value:t.atkBonus,onChange:this.onChangeAttackAndSpells.bind(this),className:"attack-or-spell-atkBonus",id:"".concat(t.id,"-atkBonus"),min:"0",max:"50"}),(0,i.jsx)("input",{type:"number",value:t.numDmgDice,onChange:this.onChangeAttackAndSpells.bind(this),min:"0",max:"50",className:"attack-or-spell-numDmgDice",id:"".concat(t.id,"-numDmgDice")}),(0,i.jsx)("span",{className:"dmg-dice-divider",children:"d"}),(0,i.jsx)("input",{type:"number",value:t.dmgDice,onChange:this.onChangeAttackAndSpells.bind(this),min:"0",max:"50",className:"attack-or-spell-dmgDice",id:"".concat(t.id,"-dmgDice")}),(0,i.jsx)("span",{className:"dmg-dice-mod-divider",children:"+"}),(0,i.jsx)("input",{type:"number",value:t.dmgMod,onChange:this.onChangeAttackAndSpells.bind(this),min:"0",max:"50",className:"attack-or-spell-dmgMod",id:"".concat(t.id,"-dmgMod")}),(0,i.jsx)("input",{type:"text",value:t.dmgType,onChange:this.onChangeAttackAndSpells.bind(this),className:"attack-or-spell-dmgType",id:"".concat(t.id,"-dmgType")})]},t.id))})}onChangeAttackAndSpells(t){let e=t.target.id.split("-").slice(-1)[0],s=t.target.id.replace("-".concat(e),""),i=this.state.attacksAndSpells.find(t=>t.id===s);console.log(e,s,this.state.attacksAndSpells,i,t.target.value),i[e]=t.target.value;let n=this.state.attacksAndSpells.map(t=>t.id===i.id?i:t);this.setState({attacksAndSpells:n}),console.log(e,s,i,n)}constructor(t){super(t),this.state={attacksAndSpells:t.attacksAndSpells}}}class c extends n.Component{render(){return(0,i.jsxs)("div",{id:"money-block",children:[(0,i.jsx)("input",{type:"number",name:"copper",id:"copper",min:0,value:this.state.copper,onChange:this.onChangeMoney.bind(this)}),(0,i.jsx)("input",{type:"number",name:"silver",id:"silver",min:0,value:this.state.silver,onChange:this.onChangeMoney.bind(this)}),(0,i.jsx)("input",{type:"number",name:"gold",id:"gold",min:0,value:this.state.gold,onChange:this.onChangeMoney.bind(this)}),(0,i.jsx)("input",{type:"number",name:"platinum",id:"platinum",min:0,value:this.state.platinum,onChange:this.onChangeMoney.bind(this)})]})}onChangeMoney(t){let e=t.target.id;this.setState({[e]:t.target.value})}constructor(t){super(t),this.state={copper:t.copper,silver:t.silver,gold:t.gold,platinum:t.platinum}}}class l extends n.Component{render(){return(0,i.jsxs)("div",{id:"character-info-block",children:[(0,i.jsx)("input",{type:"text",name:"species",id:"species",value:this.state.species}),(0,i.jsx)("input",{type:"text",name:"alignment",id:"alignment",value:this.state.alignment}),(0,i.jsx)("input",{type:"text",name:"homeland",id:"homeland",value:this.state.homeland}),(0,i.jsx)("input",{type:"text",name:"background",id:"background",value:this.state.background})]})}constructor(t){super(t),this.state={species:this.props.species||"",alignment:this.props.alignment||"",homeland:this.props.homeland||"",background:this.props.background||""}}}class d extends n.Component{render(){return(0,i.jsxs)("div",{id:"bottom-block",children:[(0,i.jsx)("textarea",{name:"profsAndLangs",cols:"30",rows:"10",value:this.state.profAndLangs,onChange:this.onChangeTrait.bind(this)}),(0,i.jsx)("textarea",{name:"equipment",cols:"30",rows:"10",value:this.state.equipment,onChange:this.onChangeTrait.bind(this)}),(0,i.jsx)("textarea",{name:"classFeatures",cols:"30",rows:"10",value:this.state.classFeatures,onChange:this.onChangeTrait.bind(this)}),(0,i.jsx)("textarea",{name:"traitsBackground",cols:"30",rows:"10",value:this.state.traitsBackground,onChange:this.onChangeTrait.bind(this)}),(0,i.jsx)("textarea",{name:"traitsSpecies",cols:"30",rows:"10",value:this.state.traitsSpecies,onChange:this.onChangeTrait.bind(this)}),(0,i.jsx)("textarea",{name:"traitsHomeland",cols:"30",rows:"10",value:this.state.traitsHomeland,onChange:this.onChangeTrait.bind(this)})]})}onChangeTrait(t){let e=t.target.name;this.setState({[e]:t.target.value})}constructor(t){super(t),this.state={profsAndLangs:t.profsAndLangs,equipment:t.equipment,classFeatures:t.classFeatures,traitsBackground:t.traitsBackground,traitsSpecies:t.traitsSpecies,traitsHomeland:t.traitsHomeland}}}class p extends n.Component{render(){let{str:t,dex:e,con:s,int:n,wis:a,cha:r,str_mod:o,dex_mod:h,con_mod:c,int_mod:l,wis_mod:d,cha_mod:p}=this.state;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("form",{id:"stats",onSubmit:t=>t.preventDefault(),children:[(0,i.jsx)("input",{type:"number",id:"stats-str",name:"str",value:t,min:"0",max:"50",onChange:this.onStatsChange}),(0,i.jsx)("input",{type:"number",id:"stats-dex",name:"dex",value:e,min:"0",max:"50",onChange:this.onStatsChange}),(0,i.jsx)("input",{type:"number",id:"stats-con",name:"con",value:s,min:"0",max:"50",onChange:this.onStatsChange}),(0,i.jsx)("input",{type:"number",id:"stats-int",name:"int",value:n,min:"0",max:"50",onChange:this.onStatsChange}),(0,i.jsx)("input",{type:"number",id:"stats-wis",name:"wis",value:a,min:"0",max:"50",onChange:this.onStatsChange}),(0,i.jsx)("input",{type:"number",id:"stats-cha",name:"cha",value:r,min:"0",max:"50",onChange:this.onStatsChange})]}),(0,i.jsxs)("div",{id:"modifiers",children:[(0,i.jsx)("div",{id:"modifiers-str",children:o}),(0,i.jsx)("div",{id:"modifiers-dex",children:h}),(0,i.jsx)("div",{id:"modifiers-con",children:c}),(0,i.jsx)("div",{id:"modifiers-int",children:l}),(0,i.jsx)("div",{id:"modifiers-wis",children:d}),(0,i.jsx)("div",{id:"modifiers-cha",children:p})]})]})}constructor(t){super(t),this.onStatsChange=t=>{let e=t.target.id.split("-")[1],s=Math.floor((t.target.value-10)/2).toString();s=parseInt(s,10)>=0?"+".concat(s):s.toString(),this.setState({[e]:t.target.value,[e+"_mod"]:s})},this.state={str:t.str,dex:t.dex,con:t.con,int:t.int,wis:t.wis,cha:t.cha,str_mod:"+".concat(Math.floor((t.str-10)/2)),dex_mod:"+".concat(Math.floor((t.dex-10)/2)),con_mod:"+".concat(Math.floor((t.con-10)/2)),int_mod:"+".concat(Math.floor((t.int-10)/2)),wis_mod:"+".concat(Math.floor((t.wis-10)/2)),cha_mod:"+".concat(Math.floor((t.cha-10)/2))}}}class g extends n.Component{render(){return(0,i.jsxs)("div",{className:"skills",children:[(0,i.jsxs)("form",{id:"skill-profs",onSubmit:t=>t.preventDefault(),children:[(0,i.jsxs)("div",{className:"str-skill-profs",children:[(0,i.jsx)("input",{type:"checkbox",name:"strSavingThrow-prof",id:"strSavingThrow-prof",checked:this.state.skills.strSavingThrowProf,onChange:this.handleProficiencyChange}),(0,i.jsx)("input",{type:"checkbox",name:"athletics-prof",id:"athletics-prof",checked:this.state.skills.athleticsProf,onChange:this.handleProficiencyChange})]}),(0,i.jsxs)("div",{className:"dex-skill-profs",children:[(0,i.jsx)("input",{type:"checkbox",name:"dexSavingThrow-prof",id:"dexSavingThrow-prof",checked:this.state.skills.dexSavingThrowProf,onChange:this.handleProficiencyChange}),(0,i.jsx)("input",{type:"checkbox",name:"acrobatics-prof",id:"acrobatics-prof",checked:this.state.skills.acrobaticsProf,onChange:this.handleProficiencyChange}),(0,i.jsx)("input",{type:"checkbox",name:"sleightOfHand-prof",id:"sleightOfHand-prof",checked:this.state.skills.sleightOfHandProf,onChange:this.handleProficiencyChange}),(0,i.jsx)("input",{type:"checkbox",name:"stealth-prof",id:"stealth-prof",checked:this.state.skills.stealthProf,onChange:this.handleProficiencyChange})]}),(0,i.jsx)("div",{className:"con-skill-profs",children:(0,i.jsx)("input",{type:"checkbox",name:"conSavingThrow-prof",id:"conSavingThrow-prof",checked:this.state.skills.conSavingThrowProf,onChange:this.handleProficiencyChange})}),(0,i.jsxs)("div",{className:"int-skill-profs",children:[(0,i.jsx)("input",{type:"checkbox",name:"intSavingThrow-prof",id:"intSavingThrow-prof",checked:this.state.skills.intSavingThrowProf,onChange:this.handleProficiencyChange}),(0,i.jsx)("input",{type:"checkbox",name:"arcana-prof",id:"arcana-prof",checked:this.state.skills.arcanaProf,onChange:this.handleProficiencyChange}),(0,i.jsx)("input",{type:"checkbox",name:"history-prof",id:"history-prof",checked:this.state.skills.historyProf,onChange:this.handleProficiencyChange}),(0,i.jsx)("input",{type:"checkbox",name:"investigation-prof",id:"investigation-prof",checked:this.state.skills.investigationProf,onChange:this.handleProficiencyChange}),(0,i.jsx)("input",{type:"checkbox",name:"nature-prof",id:"nature-prof",checked:this.state.skills.natureProf,onChange:this.handleProficiencyChange}),(0,i.jsx)("input",{type:"checkbox",name:"religion-prof",id:"religion-prof",checked:this.state.skills.religionProf,onChange:this.handleProficiencyChange})]}),(0,i.jsxs)("div",{className:"wis-skill-profs",children:[(0,i.jsx)("input",{type:"checkbox",name:"wisSavingThrow-prof",id:"wisSavingThrow-prof",checked:this.state.skills.wisSavingThrowProf,onChange:this.handleProficiencyChange}),(0,i.jsx)("input",{type:"checkbox",name:"animalHandling-prof",id:"animalHandling-prof",checked:this.state.skills.animalHandlingProf,onChange:this.handleProficiencyChange}),(0,i.jsx)("input",{type:"checkbox",name:"insight-prof",id:"insight-prof",checked:this.state.skills.insightProf,onChange:this.handleProficiencyChange}),(0,i.jsx)("input",{type:"checkbox",name:"medicine-prof",id:"medicine-prof",checked:this.state.skills.medicineProf,onChange:this.handleProficiencyChange}),(0,i.jsx)("input",{type:"checkbox",name:"perception-prof",id:"perception-prof",checked:this.state.skills.perceptionProf,onChange:this.handleProficiencyChange}),(0,i.jsx)("input",{type:"checkbox",name:"survival-prof",id:"survival-prof",checked:this.state.skills.survivalProf,onChange:this.handleProficiencyChange})]}),(0,i.jsxs)("div",{className:"cha-skill-profs",children:[(0,i.jsx)("input",{type:"checkbox",name:"chaSavingThrow-prof",id:"chaSavingThrow-prof",checked:this.state.skills.chaSavingThrowProf,onChange:this.handleProficiencyChange}),(0,i.jsx)("input",{type:"checkbox",name:"deception-prof",id:"deception-prof",checked:this.state.skills.deceptionProf,onChange:this.handleProficiencyChange}),(0,i.jsx)("input",{type:"checkbox",name:"intimidation-prof",id:"intimidation-prof",checked:this.state.skills.intimidationProf,onChange:this.handleProficiencyChange}),(0,i.jsx)("input",{type:"checkbox",name:"performance-prof",id:"performance-prof",checked:this.state.skills.performanceProf,onChange:this.handleProficiencyChange}),(0,i.jsx)("input",{type:"checkbox",name:"persuasion-prof",id:"persuasion-prof",checked:this.state.skills.persuasionProf,onChange:this.handleProficiencyChange})]})]}),(0,i.jsxs)("div",{id:"skill-values",children:[(0,i.jsxs)("div",{className:"str-skills",children:[(0,i.jsx)("span",{id:"strSavingThrow",children:this.state.skills.strSavingThrow}),(0,i.jsx)("span",{id:"athletics",children:this.state.skills.athletics})]}),(0,i.jsxs)("div",{className:"dex-skills",children:[(0,i.jsx)("span",{id:"dexSavingThrow",children:this.state.skills.dexSavingThrow}),(0,i.jsx)("span",{id:"acrobatics",children:this.state.skills.acrobatics}),(0,i.jsx)("span",{id:"sleightOfHand",children:this.state.skills.sleightOfHand}),(0,i.jsx)("span",{id:"stealth",children:this.state.skills.stealth})]}),(0,i.jsx)("div",{className:"con-skills",children:(0,i.jsx)("span",{id:"conSavingThrow",children:this.state.skills.conSavingThrow})}),(0,i.jsxs)("div",{className:"int-skills",children:[(0,i.jsx)("span",{id:"intSavingThrow",children:this.state.skills.intSavingThrow}),(0,i.jsx)("span",{id:"arcana",children:this.state.skills.arcana}),(0,i.jsx)("span",{id:"history",children:this.state.skills.history}),(0,i.jsx)("span",{id:"investigation",children:this.state.skills.investigation}),(0,i.jsx)("span",{id:"nature",children:this.state.skills.nature}),(0,i.jsx)("span",{id:"religion",children:this.state.skills.religion})]}),(0,i.jsxs)("div",{className:"wis-skills",children:[(0,i.jsx)("span",{id:"wisSavingThrow",children:this.state.skills.wisSavingThrow}),(0,i.jsx)("span",{id:"animalHandling",children:this.state.skills.animalHandling}),(0,i.jsx)("span",{id:"insight",children:this.state.skills.insight}),(0,i.jsx)("span",{id:"medicine",children:this.state.skills.medicine}),(0,i.jsx)("span",{id:"perception",children:this.state.skills.perception}),(0,i.jsx)("span",{id:"survival",children:this.state.skills.survival})]}),(0,i.jsxs)("div",{className:"cha-skills",children:[(0,i.jsx)("span",{id:"chaSavingThrow",children:this.state.skills.chaSavingThrow}),(0,i.jsx)("span",{id:"deception",children:this.state.skills.deception}),(0,i.jsx)("span",{id:"intimidation",children:this.state.skills.intimidation}),(0,i.jsx)("span",{id:"performance",children:this.state.skills.performance}),(0,i.jsx)("span",{id:"persuasion",children:this.state.skills.persuasion})]})]})]})}constructor(t){super(t),this.handleProficiencyChange=t=>{console.log(t)},this.state={skills:t.skills}}}class m extends n.Component{render(){return(0,i.jsxs)("div",{id:"stats-profs-levels-block",children:[(0,i.jsx)(p,{str:this.state.str,dex:this.state.dex,con:this.state.con,int:this.state.int,wis:this.state.wis,cha:this.state.cha}),(0,i.jsx)(g,{skills:this.state.skills})]})}constructor(t){super(t),this.state={str:t.str,dex:t.dex,con:t.con,int:t.int,wis:t.wis,cha:t.cha,skills:t.skills,levels:t.levels,name:t.name,profBonus:t.profBonus,inspiration:t.inspiration,passivePerception:t.passivePerception}}}class u extends n.Component{render(){return(0,i.jsxs)("div",{className:"character-sheet-background",children:[(0,i.jsx)(l,{}),(0,i.jsx)(m,{str:this.state.str,dex:this.state.dex,con:this.state.con,int:this.state.int,wis:this.state.wis,cha:this.state.cha,skills:this.state.skills,name:this.state.name,levels:this.state.levels,profBonus:this.state.profBonus,inspiration:this.state.inspiration,passivePerception:this.state.passivePerception}),(0,i.jsx)(a,{currentHP:this.state.currentHP,maxHP:this.state.maxHP,tempHP:this.state.tempHP}),(0,i.jsx)(r,{AC:this.state.AC,init:this.state.init,walkingSpeed:this.state.walkingSpeed,hitDice:this.state.hitDice}),(0,i.jsx)(o,{}),(0,i.jsx)(h,{attacksAndSpells:this.state.attacksAndSpells}),(0,i.jsx)(c,{copper:this.state.copper,silver:this.state.silver,gold:this.state.gold,platinum:this.state.platinum}),(0,i.jsx)(d,{profAndLangs:this.state.profAndLangs,equipment:this.state.equipment,classFeatures:this.state.classFeatures,traitsBackground:this.state.traitsBackground,traitsSpecies:this.state.traitsSpecies,traitsHomeland:this.state.traitsHomeland})]})}constructor(t){super(t),this.state={str:t.str,dex:t.dex,con:t.con,int:t.int,wis:t.wis,cha:t.cha,skills:t.skills,name:t.name,levels:t.levels,profBonus:t.profBonus,inspiration:t.inspiration,passivePerception:t.passivePerception,maxHP:t.maxHP,currentHP:t.currentHP,tempHP:t.tempHP,copper:t.copper,silver:t.silver,gold:t.gold,platinum:t.platinum,profAndLangs:t.profAndLangs,equipment:t.equipment,classFeatures:t.classFeatures,traitsBackground:t.traitsBackground,traitsSpecies:t.traitsSpecies,traitsHomeland:t.traitsHomeland,attacksAndSpells:t.attacksAndSpells,AC:t.AC,init:t.init,walkingSpeed:t.walkingSpeed,hitDice:t.hitDice}}}function x(){return(0,i.jsx)("main",{children:(0,i.jsx)(u,{str:10,dex:10,con:10,int:10,wis:10,cha:10,skills:{strSavingThrowProf:!1,strSavingThrow:0,athleticsProf:!1,athletics:0,dexSavingThrowProf:!1,dexSavingThrow:0,acrobaticsProf:!1,acrobatics:0,sleightOfHandProf:!1,sleightOfHand:0,stealthProf:!1,stealth:0,conSavingThrowProf:!1,conSavingThrow:0,intSavingThrowProf:!1,intSavingThrow:0,arcanaProf:!1,arcana:0,historyProf:!1,history:0,investigationProf:!1,investigation:0,natureProf:!1,nature:0,religionProf:!1,religion:0,wisSavingThrowProf:!1,wisSavingThrow:0,animalHandlingProf:!1,animalHandling:0,insightProf:!1,insight:0,medicineProf:!1,medicine:0,perceptionProf:!1,perception:0,survivalProf:!1,survival:0,chaSavingThrowProf:!1,chaSavingThrow:0,deceptionProf:!1,deception:0,intimidationProf:!1,intimidation:0,performanceProf:!1,performance:0,persuasionProf:!1,persuasion:0},profBonus:0,levels:[],name:"",inspiration:!1,passivePerception:10,currentHP:20,maxHP:20,tempHP:0,copper:0,silver:0,gold:0,platinum:0,profAndLangs:"",equipment:"",classFeatures:"",traitsBackground:"",traitsSpecies:"",traitsHomeland:"",attacksAndSpells:[{id:"hehetuoetudaoehtsudhtaoeudt",name:"",atkBonus:0,dmgDice:4,dmgMod:0,dmgType:""}],AC:0,init:0,walkingSpeed:"0ft",hitDice:"d6"})})}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);