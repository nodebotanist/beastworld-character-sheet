(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5709)}])},5709:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var a=n(5893),i=n(7294),s=n(5675),r=n.n(s);class o extends i.Component{render(){return(0,a.jsxs)("div",{id:"hp-block",children:[(0,a.jsx)("input",{type:"number",min:"-50",max:"50",id:"current-hp",value:this.state.currentHP,onChange:this.onChangeHealth.bind(this)}),(0,a.jsx)("input",{type:"number",min:"0",max:"50",id:"max-hp",value:this.state.maxHP,onChange:this.onChangeHealth.bind(this)}),(0,a.jsx)("input",{type:"number",min:"-50",max:"50",id:"temp-hp",value:this.state.tempHP,onChange:this.onChangeHealth.bind(this)})]})}onChangeHealth(e){let t=e.target.id.replace("-hp","HP");this.setState({[t]:e.target.value})}constructor(e){super(e),console.log(e),this.state={currentHP:e.currentHP,maxHP:e.maxHP,tempHP:e.tempHP}}}let c=()=>{let[e,t]=(0,i.useState)(0),[n,s]=(0,i.useState)(0),[r,o]=(0,i.useState)("0ft"),[c,h]=(0,i.useState)("0d0");return(0,a.jsxs)("div",{id:"ac-etc-block",children:[(0,a.jsx)("input",{type:"number",min:"0",max:"100",id:"AC",value:e,onChange:e=>{t(Number(e.target.value))}}),(0,a.jsx)("input",{type:"number",min:"0",max:"100",id:"init",value:n,onChange:e=>{s(Number(e.target.value))}}),(0,a.jsx)("input",{type:"text",id:"walkingSpeed",value:r,onChange:e=>{o(e.target.value)}}),(0,a.jsx)("input",{type:"text",id:"hitDice",value:c,onChange:e=>{h(e.target.value)}})]})};class h extends i.Component{render(){return(0,a.jsxs)("div",{id:"character-portrait-block",children:[(0,a.jsx)("img",{className:"portrait-preview"}),(0,a.jsx)("input",{type:"file",id:"portrait-picker",accept:".jpeg, .jpg, .png",onInput:this.renderPreview.bind(this)})]})}renderPreview(e){let t=e&&e.target&&e.target.files&&e.target.files[0]?e.target.files[0]:this.state.portrait;this.setState({portrait:t});let n=new FileReader;n.addEventListener("load",e=>{let t=document.querySelector("#character-portrait-block .portrait-preview");null==t||t.setAttribute("src",e.target.result)}),n.readAsDataURL(t)}constructor(e){super(e),this.state={portrait:this.props.portrait||void 0}}}var l=n(7632);let d=()=>{let[e,t]=(0,i.useState)([{id:(0,l.Z)(),name:"",atkBonus:0,numDmgDice:0,dmgDice:0,dmgMod:0,dmgType:""},{id:(0,l.Z)(),name:"",atkBonus:0,numDmgDice:0,dmgDice:0,dmgMod:0,dmgType:""},{id:(0,l.Z)(),name:"",atkBonus:0,numDmgDice:0,dmgDice:0,dmgMod:0,dmgType:""}]);return(0,a.jsx)("div",{id:"attack-spellcasting-block",children:e.map(e=>(0,a.jsx)(p,{attackOrSpell:e}))})},p=e=>{let{attackOrSpell:t}=e,{id:n}=t,[s,r]=(0,i.useState)(t.name),[o,c]=(0,i.useState)(t.atkBonus),[h,l]=(0,i.useState)(t.numDmgDice),[d,p]=(0,i.useState)(t.dmgDice),[u,m]=(0,i.useState)(t.dmgMod),[g,x]=(0,i.useState)(t.dmgType);return(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("input",{type:"text",value:s,onChange:e=>{r(e.target.value)},className:"attack-or-spell-name",id:"".concat(n,"-name")}),(0,a.jsx)("span",{className:"dmg-atk-bonus-prefix",children:"+"}),(0,a.jsx)("input",{type:"number",value:o,onChange:e=>{c(e.target.value)},className:"attack-or-spell-atkBonus",id:"".concat(n,"-atkBonus"),min:"0",max:"50"}),(0,a.jsx)("input",{type:"number",value:h,onChange:e=>{l(e.target.value)},min:"0",max:"50",className:"attack-or-spell-numDmgDice",id:"".concat(n,"-numDmgDice")}),(0,a.jsx)("span",{className:"dmg-dice-divider",children:"d"}),(0,a.jsx)("input",{type:"number",value:d,onChange:e=>{p(e.target.value)},min:"0",max:"50",className:"attack-or-spell-dmgDice",id:"".concat(n,"-dmgDice")}),(0,a.jsx)("span",{className:"dmg-dice-mod-divider",children:"+"}),(0,a.jsx)("input",{type:"number",value:u,onChange:e=>{m(e.target.value)},min:"0",max:"50",className:"attack-or-spell-dmgMod",id:"".concat(n,"-dmgMod")}),(0,a.jsx)("input",{type:"text",value:g,onChange:e=>{x(e.target.value)},className:"attack-or-spell-dmgType",id:"".concat(n,"-dmgType")})]},n)};class u extends i.Component{render(){return(0,a.jsxs)("div",{id:"money-block",children:[(0,a.jsx)("input",{type:"number",name:"copper",id:"copper",min:0,value:this.state.copper,onChange:this.onChangeMoney.bind(this)}),(0,a.jsx)("input",{type:"number",name:"silver",id:"silver",min:0,value:this.state.silver,onChange:this.onChangeMoney.bind(this)}),(0,a.jsx)("input",{type:"number",name:"gold",id:"gold",min:0,value:this.state.gold,onChange:this.onChangeMoney.bind(this)}),(0,a.jsx)("input",{type:"number",name:"platinum",id:"platinum",min:0,value:this.state.platinum,onChange:this.onChangeMoney.bind(this)})]})}onChangeMoney(e){let t=e.target.id;this.setState({[t]:e.target.value})}constructor(e){super(e),this.state={copper:e.copper,silver:e.silver,gold:e.gold,platinum:e.platinum}}}class m extends i.Component{render(){return(0,a.jsxs)("div",{id:"character-info-block",children:[(0,a.jsx)("input",{type:"text",name:"species",id:"species",value:this.state.species}),(0,a.jsx)("input",{type:"text",name:"alignment",id:"alignment",value:this.state.alignment}),(0,a.jsx)("input",{type:"text",name:"homeland",id:"homeland",value:this.state.homeland}),(0,a.jsx)("input",{type:"text",name:"background",id:"background",value:this.state.background})]})}constructor(e){super(e),this.state={species:this.props.species||"",alignment:this.props.alignment||"",homeland:this.props.homeland||"",background:this.props.background||""}}}let g=e=>{let{classFeatures:t,equipment:n,profsAndLangs:s,traitsBackground:r,traitsHomeland:o,traitSpecies:c}=e,[h,l]=(0,i.useState)(s),[d,p]=(0,i.useState)(n),[u,m]=(0,i.useState)(t),[g,x]=(0,i.useState)(r),[v,A]=(0,i.useState)(c),[f,j]=(0,i.useState)(o);return(0,a.jsxs)("div",{id:"bottom-block",children:[(0,a.jsx)("textarea",{name:"profsAndLangs",cols:"30",rows:"10",value:h,onChange:e=>l(e.target.value)}),(0,a.jsx)("textarea",{name:"equipment",cols:"30",rows:"10",value:d,onChange:e=>p(e.target.value)}),(0,a.jsx)("textarea",{name:"classFeatures",cols:"30",rows:"10",value:u,onChange:e=>m(e.target.value)}),(0,a.jsx)("textarea",{name:"traitsBackground",cols:"30",rows:"10",value:g,onChange:e=>x(e.target.value)}),(0,a.jsx)("textarea",{name:"traitsSpecies",cols:"30",rows:"10",value:v,onChange:e=>A(e.target.value)}),(0,a.jsx)("textarea",{name:"traitsHomeland",cols:"30",rows:"10",value:f,onChange:e=>j(e.target.value)})]})};class x extends i.Component{render(){let{str:e,dex:t,con:n,int:i,wis:s,cha:r,str_mod:o,dex_mod:c,con_mod:h,int_mod:l,wis_mod:d,cha_mod:p}=this.state;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("form",{id:"stats",onSubmit:e=>e.preventDefault(),children:[(0,a.jsx)("input",{type:"number",id:"stats-str",name:"str",value:e,min:"0",max:"50",onChange:this.onStatsChange}),(0,a.jsx)("input",{type:"number",id:"stats-dex",name:"dex",value:t,min:"0",max:"50",onChange:this.onStatsChange}),(0,a.jsx)("input",{type:"number",id:"stats-con",name:"con",value:n,min:"0",max:"50",onChange:this.onStatsChange}),(0,a.jsx)("input",{type:"number",id:"stats-int",name:"int",value:i,min:"0",max:"50",onChange:this.onStatsChange}),(0,a.jsx)("input",{type:"number",id:"stats-wis",name:"wis",value:s,min:"0",max:"50",onChange:this.onStatsChange}),(0,a.jsx)("input",{type:"number",id:"stats-cha",name:"cha",value:r,min:"0",max:"50",onChange:this.onStatsChange})]}),(0,a.jsxs)("div",{id:"modifiers",children:[(0,a.jsx)("div",{id:"modifiers-str",children:o}),(0,a.jsx)("div",{id:"modifiers-dex",children:c}),(0,a.jsx)("div",{id:"modifiers-con",children:h}),(0,a.jsx)("div",{id:"modifiers-int",children:l}),(0,a.jsx)("div",{id:"modifiers-wis",children:d}),(0,a.jsx)("div",{id:"modifiers-cha",children:p})]})]})}constructor(e){super(e),this.onStatsChange=e=>{let t=e.target.id.split("-")[1],n=Math.floor((e.target.value-10)/2).toString();n=parseInt(n,10)>=0?"+".concat(n):n.toString(),this.setState({[t]:e.target.value,[t+"_mod"]:n})},this.state={str:e.str,dex:e.dex,con:e.con,int:e.int,wis:e.wis,cha:e.cha,str_mod:"+".concat(Math.floor((e.str-10)/2)),dex_mod:"+".concat(Math.floor((e.dex-10)/2)),con_mod:"+".concat(Math.floor((e.con-10)/2)),int_mod:"+".concat(Math.floor((e.int-10)/2)),wis_mod:"+".concat(Math.floor((e.wis-10)/2)),cha_mod:"+".concat(Math.floor((e.cha-10)/2))}}}let v=e=>{let{skillsInitialState:t}=e,[n,s]=(0,i.useState)(t),r=e=>{let t={...n};t[e.target.id]=!!e.target.checked,console.log(t,e.target.checked),s(t)},o=e=>{let t={...n};t[e.target.id]=e.target.value,console.log(t),s(t)};return(0,a.jsxs)("div",{className:"skills",children:[(0,a.jsxs)("form",{id:"skill-profs",onSubmit:e=>e.preventDefault(),children:[(0,a.jsxs)("div",{className:"str-skill-profs",children:[(0,a.jsx)("input",{type:"checkbox",name:"strSavingThrowProf",id:"strSavingThrowProf",checked:n.strSavingThrowProf,onChange:r}),(0,a.jsx)("input",{type:"checkbox",name:"athleticsProf",id:"athleticsProf",checked:n.athleticsProf,onChange:r})]}),(0,a.jsxs)("div",{className:"dex-skill-profs",children:[(0,a.jsx)("input",{type:"checkbox",name:"dexSavingThrowProf",id:"dexSavingThrowProf",checked:n.dexSavingThrowProf,onChange:r}),(0,a.jsx)("input",{type:"checkbox",name:"acrobaticsProf",id:"acrobaticsProf",checked:n.acrobaticsProf,onChange:r}),(0,a.jsx)("input",{type:"checkbox",name:"sleightOfHandProf",id:"sleightOfHandProf",checked:n.sleightOfHandProf,onChange:r}),(0,a.jsx)("input",{type:"checkbox",name:"stealthProf",id:"stealthProf",checked:n.stealthProf,onChange:r})]}),(0,a.jsx)("div",{className:"con-skill-profs",children:(0,a.jsx)("input",{type:"checkbox",name:"conSavingThrowProf",id:"conSavingThrowProf",checked:n.conSavingThrowProf,onChange:r})}),(0,a.jsxs)("div",{className:"int-skill-profs",children:[(0,a.jsx)("input",{type:"checkbox",name:"intSavingThrowProf",id:"intSavingThrowProf",checked:n.intSavingThrowProf,onChange:r}),(0,a.jsx)("input",{type:"checkbox",name:"arcanaProf",id:"arcanaProf",checked:n.arcanaProf,onChange:r}),(0,a.jsx)("input",{type:"checkbox",name:"historyProf",id:"historyProf",checked:n.historyProf,onChange:r}),(0,a.jsx)("input",{type:"checkbox",name:"investigationProf",id:"investigationProf",checked:n.investigationProf,onChange:r}),(0,a.jsx)("input",{type:"checkbox",name:"natureProf",id:"natureProf",checked:n.natureProf,onChange:r}),(0,a.jsx)("input",{type:"checkbox",name:"religionProf",id:"religionProf",checked:n.religionProf,onChange:r})]}),(0,a.jsxs)("div",{className:"wis-skill-profs",children:[(0,a.jsx)("input",{type:"checkbox",name:"wisSavingThrowProf",id:"wisSavingThrowProf",checked:n.wisSavingThrowProf,onChange:r}),(0,a.jsx)("input",{type:"checkbox",name:"animalHandlingProf",id:"animalHandlingProf",checked:n.animalHandlingProf,onChange:r}),(0,a.jsx)("input",{type:"checkbox",name:"insightProf",id:"insightProf",checked:n.insightProf,onChange:r}),(0,a.jsx)("input",{type:"checkbox",name:"medicineProf",id:"medicineProf",checked:n.medicineProf,onChange:r}),(0,a.jsx)("input",{type:"checkbox",name:"perceptionProf",id:"perceptionProf",checked:n.perceptionProf,onChange:r}),(0,a.jsx)("input",{type:"checkbox",name:"survivalProf",id:"survivalProf",checked:n.survivalProf,onChange:r})]}),(0,a.jsxs)("div",{className:"cha-skill-profs",children:[(0,a.jsx)("input",{type:"checkbox",name:"chaSavingThrowProf",id:"chaSavingThrowProf",checked:n.chaSavingThrowProf,onChange:r}),(0,a.jsx)("input",{type:"checkbox",name:"deceptionProf",id:"deceptionProf",checked:n.deceptionProf,onChange:r}),(0,a.jsx)("input",{type:"checkbox",name:"intimidationProf",id:"intimidationProf",checked:n.intimidationProf,onChange:r}),(0,a.jsx)("input",{type:"checkbox",name:"performanceProf",id:"performanceProf",checked:n.performanceProf,onChange:r}),(0,a.jsx)("input",{type:"checkbox",name:"persuasionProf",id:"persuasionProf",checked:n.persuasionProf,onChange:r})]})]}),(0,a.jsxs)("div",{id:"skill-values",children:[(0,a.jsxs)("div",{className:"str-skills",children:[(0,a.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"strSavingThrow",value:n.strSavingThrow}),(0,a.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"athletics",value:n.athletics})]}),(0,a.jsxs)("div",{className:"dex-skills",children:[(0,a.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"dexSavingThrow",value:n.dexSavingThrow}),(0,a.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"acrobatics",value:n.acrobatics}),(0,a.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"sleightOfHand",value:n.sleightOfHand}),(0,a.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"stealth",value:n.stealth})]}),(0,a.jsx)("div",{className:"con-skills",children:(0,a.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"conSavingThrow",value:n.conSavingThrow})}),(0,a.jsxs)("div",{className:"int-skills",children:[(0,a.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"intSavingThrow",value:n.intSavingThrow}),(0,a.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"arcana",value:n.arcana}),(0,a.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"history",value:n.history}),(0,a.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"investigation",value:n.investigation}),(0,a.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"nature",value:n.nature}),(0,a.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"religion",value:n.religion})]}),(0,a.jsxs)("div",{className:"wis-skills",children:[(0,a.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"wisSavingThrow",value:n.wisSavingThrow}),(0,a.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"animalHandling",value:n.animalHandling}),(0,a.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"insight",value:n.insight}),(0,a.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"medicine",value:n.medicine}),(0,a.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"perception",value:n.perception}),(0,a.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"survival",value:n.survival})]}),(0,a.jsxs)("div",{className:"cha-skills",children:[(0,a.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"chaSavingThrow",value:n.chaSavingThrow}),(0,a.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"deception",value:n.deception}),(0,a.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"intimidation",value:n.intimidation}),(0,a.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"performance",value:n.performance}),(0,a.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"persuasion",value:n.persuasion})]})]})]})};class A extends i.Component{render(){return(0,a.jsxs)("div",{id:"stats-profs-levels-block",children:[(0,a.jsx)(x,{str:this.state.str,dex:this.state.dex,con:this.state.con,int:this.state.int,wis:this.state.wis,cha:this.state.cha}),(0,a.jsx)(v,{skillsInitialState:this.state.skills})]})}constructor(e){super(e),this.state={str:e.str,dex:e.dex,con:e.con,int:e.int,wis:e.wis,cha:e.cha,skills:e.skills,levels:e.levels,name:e.name,profBonus:e.profBonus,inspiration:e.inspiration,passivePerception:e.passivePerception}}}var f={src:"/beastworld-character-sheet//_next/static/media/char-sheet.b2f1c42d.jpg",height:1683,width:1241,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAKSJL//EABkQAAIDAQAAAAAAAAAAAAAAAAECABExEv/aAAgBAQABPwA8oRathyf/xAAWEQADAAAAAAAAAAAAAAAAAAAAATH/2gAIAQIBAT8AUP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:6,blurHeight:8};class j extends i.Component{render(){return(0,a.jsxs)("div",{className:"character-sheet-background",children:[(0,a.jsx)(r(),{class:"bg",src:f,alt:"Beastworld Character Sheet page 1"}),(0,a.jsx)(m,{}),(0,a.jsx)(A,{str:this.state.str,dex:this.state.dex,con:this.state.con,int:this.state.int,wis:this.state.wis,cha:this.state.cha,skills:this.state.skills,name:this.state.name,levels:this.state.levels,profBonus:this.state.profBonus,inspiration:this.state.inspiration,passivePerception:this.state.passivePerception}),(0,a.jsx)(o,{currentHP:this.state.currentHP,maxHP:this.state.maxHP,tempHP:this.state.tempHP}),(0,a.jsx)(c,{AC:this.state.AC,init:this.state.init,walkingSpeed:this.state.walkingSpeed,hitDice:this.state.hitDice}),(0,a.jsx)(h,{}),(0,a.jsx)(d,{attacksAndSpells:this.state.attacksAndSpells}),(0,a.jsx)(u,{copper:this.state.copper,silver:this.state.silver,gold:this.state.gold,platinum:this.state.platinum}),(0,a.jsx)(g,{profAndLangs:this.state.profAndLangs,equipment:this.state.equipment,classFeatures:this.state.classFeatures,traitsBackground:this.state.traitsBackground,traitsSpecies:this.state.traitsSpecies,traitsHomeland:this.state.traitsHomeland})]})}constructor(e){super(e),this.state={str:e.str,dex:e.dex,con:e.con,int:e.int,wis:e.wis,cha:e.cha,skills:e.skills,name:e.name,levels:e.levels,profBonus:e.profBonus,inspiration:e.inspiration,passivePerception:e.passivePerception,maxHP:e.maxHP,currentHP:e.currentHP,tempHP:e.tempHP,copper:e.copper,silver:e.silver,gold:e.gold,platinum:e.platinum,profAndLangs:e.profAndLangs,equipment:e.equipment,classFeatures:e.classFeatures,traitsBackground:e.traitsBackground,traitsSpecies:e.traitsSpecies,traitsHomeland:e.traitsHomeland,attacksAndSpells:e.attacksAndSpells,AC:e.AC,init:e.init,walkingSpeed:e.walkingSpeed,hitDice:e.hitDice}}}function P(){return(0,a.jsx)("main",{children:(0,a.jsx)(j,{str:10,dex:10,con:10,int:10,wis:10,cha:10,skills:{strSavingThrowProf:!1,strSavingThrow:0,athleticsProf:!1,athletics:0,dexSavingThrowProf:!1,dexSavingThrow:0,acrobaticsProf:!1,acrobatics:0,sleightOfHandProf:!1,sleightOfHand:0,stealthProf:!1,stealth:0,conSavingThrowProf:!1,conSavingThrow:0,intSavingThrowProf:!1,intSavingThrow:0,arcanaProf:!1,arcana:0,historyProf:!1,history:0,investigationProf:!1,investigation:0,natureProf:!1,nature:0,religionProf:!1,religion:0,wisSavingThrowProf:!1,wisSavingThrow:0,animalHandlingProf:!1,animalHandling:0,insightProf:!1,insight:0,medicineProf:!1,medicine:0,perceptionProf:!1,perception:0,survivalProf:!1,survival:0,chaSavingThrowProf:!1,chaSavingThrow:0,deceptionProf:!1,deception:0,intimidationProf:!1,intimidation:0,performanceProf:!1,performance:0,persuasionProf:!1,persuasion:0},profBonus:0,levels:[],name:"",inspiration:!1,passivePerception:10,currentHP:20,maxHP:20,tempHP:0,copper:0,silver:0,gold:0,platinum:0,profAndLangs:"",equipment:"",classFeatures:"",traitsBackground:"",traitsSpecies:"",traitsHomeland:"",attacksAndSpells:[{id:"hehetuoetudaoehtsudhtaoeudt",name:"",atkBonus:0,dmgDice:4,dmgMod:0,dmgType:""}],AC:0,init:0,walkingSpeed:"0ft",hitDice:"d6"})})}}},function(e){e.O(0,[732,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);