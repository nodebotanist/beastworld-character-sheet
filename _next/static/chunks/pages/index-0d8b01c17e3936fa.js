(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9676)}])},9676:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return w}});var n=t(5893),i=t(7294),s=t(5675),r=t.n(s);let o=e=>{let{currentHP:a,maxHP:t,tempHP:s}=e,[r,o]=(0,i.useState)(a),[c,l]=(0,i.useState)(t),[u,d]=(0,i.useState)(s);return(0,n.jsxs)("div",{id:"hp-block",children:[(0,n.jsx)("input",{type:"number",min:"-50",max:"50",id:"current-hp",value:r,onChange:e=>o(e.target.value)}),(0,n.jsx)("input",{type:"number",min:"0",max:"50",id:"max-hp",value:c,onChange:e=>l(e.target.value)}),(0,n.jsx)("input",{type:"number",min:"-50",max:"50",id:"temp-hp",value:u,onChange:e=>d(e.target.value)})]})},c=()=>{let[e,a]=(0,i.useState)(0),[t,s]=(0,i.useState)(0),[r,o]=(0,i.useState)("0ft"),[c,l]=(0,i.useState)("0d0");return(0,n.jsxs)("div",{id:"ac-etc-block",children:[(0,n.jsx)("input",{type:"number",min:"0",max:"100",id:"AC",value:e,onChange:e=>{a(Number(e.target.value))}}),(0,n.jsx)("input",{type:"number",min:"0",max:"100",id:"init",value:t,onChange:e=>{s(Number(e.target.value))}}),(0,n.jsx)("input",{type:"text",id:"walkingSpeed",value:r,onChange:e=>{o(e.target.value)}}),(0,n.jsx)("input",{type:"text",id:"hitDice",value:c,onChange:e=>{l(e.target.value)}})]})},l=e=>{let{portrait:a}=e,[t,s]=(0,i.useState)(a),r=e=>{let a=e&&e.files&&e.files[0]?e.files[0]:t,n=new FileReader;n.addEventListener("load",e=>{let a=document.querySelector("#character-portrait-block .portrait-preview");null==a||a.setAttribute("src",e.target.result),s(e.target.result)}),n.readAsDataURL(a)};return(0,n.jsxs)("div",{id:"character-portrait-block",children:[(0,n.jsx)("img",{className:"portrait-preview",src:t}),(0,n.jsx)("input",{type:"file",id:"portrait-picker",accept:".jpeg, .jpg, .png",onInput:e=>r(e.target)})]})},u=e=>{let{pictogram:a}=e,[t,s]=(0,i.useState)(a),r=e=>{let a=e&&e.files&&e.files[0]?e.files[0]:t,n=new FileReader;n.addEventListener("load",e=>{let a=document.querySelector("#character-pictogram-block .pictogram-preview");null==a||a.setAttribute("src",e.target.result),s(e.target.result)}),n.readAsDataURL(a)};return(0,n.jsxs)("div",{id:"character-pictogram-block",children:[(0,n.jsx)("img",{className:"pictogram-preview",src:t}),(0,n.jsx)("input",{type:"file",id:"pictogram-picker",accept:".jpeg, .jpg, .png",onInput:e=>r(e.target)})]})};var d=t(7632);let m=()=>{let[e,a]=(0,i.useState)([{id:(0,d.Z)(),name:"",atkBonus:0,numDmgDice:0,dmgDice:0,dmgMod:0,dmgType:""},{id:(0,d.Z)(),name:"",atkBonus:0,numDmgDice:0,dmgDice:0,dmgMod:0,dmgType:""},{id:(0,d.Z)(),name:"",atkBonus:0,numDmgDice:0,dmgDice:0,dmgMod:0,dmgType:""}]);return(0,n.jsx)("div",{id:"attack-spellcasting-block",children:e.map(e=>(0,n.jsx)(p,{attackOrSpell:e}))})},p=e=>{let{attackOrSpell:a}=e,{id:t}=a,[s,r]=(0,i.useState)(a.name),[o,c]=(0,i.useState)(a.atkBonus),[l,u]=(0,i.useState)(a.numDmgDice),[d,m]=(0,i.useState)(a.dmgDice),[p,h]=(0,i.useState)(a.dmgMod),[g,x]=(0,i.useState)(a.dmgType);return(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("input",{type:"text",value:s,onChange:e=>{r(e.target.value)},className:"attack-or-spell-name",id:"".concat(t,"-name")}),(0,n.jsx)("span",{className:"dmg-atk-bonus-prefix",children:"+"}),(0,n.jsx)("input",{type:"number",value:o,onChange:e=>{c(e.target.value)},className:"attack-or-spell-atkBonus",id:"".concat(t,"-atkBonus"),min:"0",max:"50"}),(0,n.jsx)("input",{type:"number",value:l,onChange:e=>{u(e.target.value)},min:"0",max:"50",className:"attack-or-spell-numDmgDice",id:"".concat(t,"-numDmgDice")}),(0,n.jsx)("span",{className:"dmg-dice-divider",children:"d"}),(0,n.jsx)("input",{type:"number",value:d,onChange:e=>{m(e.target.value)},min:"0",max:"50",className:"attack-or-spell-dmgDice",id:"".concat(t,"-dmgDice")}),(0,n.jsx)("span",{className:"dmg-dice-mod-divider",children:"+"}),(0,n.jsx)("input",{type:"number",value:p,onChange:e=>{h(e.target.value)},min:"0",max:"50",className:"attack-or-spell-dmgMod",id:"".concat(t,"-dmgMod")}),(0,n.jsx)("input",{type:"text",value:g,onChange:e=>{x(e.target.value)},className:"attack-or-spell-dmgType",id:"".concat(t,"-dmgType")})]},t)},h=e=>{let{copper:a,silver:t,gold:s,platinum:r}=e,[o,c]=(0,i.useState)(a),[l,u]=(0,i.useState)(t),[d,m]=(0,i.useState)(s),[p,h]=(0,i.useState)(r);return(0,n.jsxs)("div",{id:"money-block",children:[(0,n.jsx)("input",{type:"number",name:"copper",id:"copper",min:0,value:o,onChange:e=>c(e.target.value)}),(0,n.jsx)("input",{type:"number",name:"silver",id:"silver",min:0,value:l,onChange:e=>u(e.target.value)}),(0,n.jsx)("input",{type:"number",name:"gold",id:"gold",min:0,value:d,onChange:e=>m(e.target.value)}),(0,n.jsx)("input",{type:"number",name:"platinum",id:"platinum",min:0,value:p,onChange:e=>h(e.target.value)})]})},g=e=>{let{species:a,alignment:t,homeland:s,background:r}=e,[o,c]=(0,i.useState)(a),[l,u]=(0,i.useState)(t),[d,m]=(0,i.useState)(s),[p,h]=(0,i.useState)(r);return(0,n.jsxs)("div",{id:"character-info-block",children:[(0,n.jsx)("input",{type:"text",name:"species",id:"species",value:o||"",onChange:e=>c(e.target.value)}),(0,n.jsx)("input",{type:"text",name:"alignment",id:"alignment",value:l||"",onChange:e=>u(e.target.value)}),(0,n.jsx)("input",{type:"text",name:"homeland",id:"homeland",value:d||"",onChange:e=>{m(e.target.value)}}),(0,n.jsx)("input",{type:"text",name:"background",id:"background",value:p||"",onChange:e=>h(e.target.value)})]})},x=e=>{let{classFeatures:a,equipment:t,profsAndLangs:s,traitsBackground:r,traitsHomeland:o,traitSpecies:c}=e,[l,u]=(0,i.useState)(s),[d,m]=(0,i.useState)(t),[p,h]=(0,i.useState)(a),[g,x]=(0,i.useState)(r),[v,f]=(0,i.useState)(c),[A,j]=(0,i.useState)(o);return(0,n.jsxs)("div",{id:"bottom-block",children:[(0,n.jsx)("textarea",{name:"profsAndLangs",cols:"30",rows:"10",value:l,onChange:e=>u(e.target.value)}),(0,n.jsx)("textarea",{name:"equipment",cols:"30",rows:"10",value:d,onChange:e=>m(e.target.value)}),(0,n.jsx)("textarea",{name:"classFeatures",cols:"30",rows:"10",value:p,onChange:e=>h(e.target.value)}),(0,n.jsx)("textarea",{name:"traitsBackground",cols:"30",rows:"10",value:g,onChange:e=>x(e.target.value)}),(0,n.jsx)("textarea",{name:"traitsSpecies",cols:"30",rows:"10",value:v,onChange:e=>f(e.target.value)}),(0,n.jsx)("textarea",{name:"traitsHomeland",cols:"30",rows:"10",value:A,onChange:e=>j(e.target.value)})]})},v=e=>{let{str:a,dex:t,con:s,int:r,wis:o,cha:c}=e,[l,u]=(0,i.useState)(a),[d,m]=(0,i.useState)("+".concat(Math.floor((a-10)/2))),[p,h]=(0,i.useState)(t),[g,x]=(0,i.useState)("+".concat(Math.floor((t-10)/2))),[v,f]=(0,i.useState)(s),[A,j]=(0,i.useState)("+".concat(Math.floor((s-10)/2))),[k,S]=(0,i.useState)(r),[b,P]=(0,i.useState)("+".concat(Math.floor((r-10)/2))),[C,y]=(0,i.useState)(o),[w,T]=(0,i.useState)("+".concat(Math.floor((o-10)/2))),[N,D]=(0,i.useState)(c),[B,H]=(0,i.useState)("+".concat(Math.floor((c-10)/2))),M=e=>{let a=e.target.name;switch(a){case"str":u(e.target.value),m("+".concat(Math.floor((e.target.value-10)/2)));break;case"dex":h(e.target.value),x("+".concat(Math.floor((e.target.value-10)/2)));break;case"con":f(e.target.value),j("+".concat(Math.floor((e.target.value-10)/2)));break;case"int":S(e.target.value),P("+".concat(Math.floor((e.target.value-10)/2)));break;case"wis":y(e.target.value),T("+".concat(Math.floor((e.target.value-10)/2)));break;case"cha":D(e.target.value),H("+".concat(Math.floor((e.target.value-10)/2)))}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("form",{id:"stats",onSubmit:e=>e.preventDefault(),children:[(0,n.jsx)("input",{type:"number",id:"stats-str",name:"str",value:l,min:"0",max:"50",onChange:M}),(0,n.jsx)("input",{type:"number",id:"stats-dex",name:"dex",value:p,min:"0",max:"50",onChange:M}),(0,n.jsx)("input",{type:"number",id:"stats-con",name:"con",value:v,min:"0",max:"50",onChange:M}),(0,n.jsx)("input",{type:"number",id:"stats-int",name:"int",value:k,min:"0",max:"50",onChange:M}),(0,n.jsx)("input",{type:"number",id:"stats-wis",name:"wis",value:C,min:"0",max:"50",onChange:M}),(0,n.jsx)("input",{type:"number",id:"stats-cha",name:"cha",value:N,min:"0",max:"50",onChange:M})]}),(0,n.jsxs)("div",{id:"modifiers",children:[(0,n.jsx)("div",{id:"modifiers-str",children:d}),(0,n.jsx)("div",{id:"modifiers-dex",children:g}),(0,n.jsx)("div",{id:"modifiers-con",children:A}),(0,n.jsx)("div",{id:"modifiers-int",children:b}),(0,n.jsx)("div",{id:"modifiers-wis",children:w}),(0,n.jsx)("div",{id:"modifiers-cha",children:B})]})]})},f=e=>{let{skillsInitialState:a}=e,[t,s]=(0,i.useState)(a),r=e=>{let a={...t};a[e.target.id]=!!e.target.checked,console.log(a,e.target.checked),s(a)},o=e=>{let a={...t};a[e.target.id]=e.target.value,console.log(a),s(a)};return(0,n.jsxs)("div",{className:"skills",children:[(0,n.jsxs)("form",{id:"skill-profs",onSubmit:e=>e.preventDefault(),children:[(0,n.jsxs)("div",{className:"str-skill-profs",children:[(0,n.jsx)("input",{type:"checkbox",name:"strSavingThrowProf",id:"strSavingThrowProf",checked:t.strSavingThrowProf,onChange:r}),(0,n.jsx)("input",{type:"checkbox",name:"athleticsProf",id:"athleticsProf",checked:t.athleticsProf,onChange:r})]}),(0,n.jsxs)("div",{className:"dex-skill-profs",children:[(0,n.jsx)("input",{type:"checkbox",name:"dexSavingThrowProf",id:"dexSavingThrowProf",checked:t.dexSavingThrowProf,onChange:r}),(0,n.jsx)("input",{type:"checkbox",name:"acrobaticsProf",id:"acrobaticsProf",checked:t.acrobaticsProf,onChange:r}),(0,n.jsx)("input",{type:"checkbox",name:"sleightOfHandProf",id:"sleightOfHandProf",checked:t.sleightOfHandProf,onChange:r}),(0,n.jsx)("input",{type:"checkbox",name:"stealthProf",id:"stealthProf",checked:t.stealthProf,onChange:r})]}),(0,n.jsx)("div",{className:"con-skill-profs",children:(0,n.jsx)("input",{type:"checkbox",name:"conSavingThrowProf",id:"conSavingThrowProf",checked:t.conSavingThrowProf,onChange:r})}),(0,n.jsxs)("div",{className:"int-skill-profs",children:[(0,n.jsx)("input",{type:"checkbox",name:"intSavingThrowProf",id:"intSavingThrowProf",checked:t.intSavingThrowProf,onChange:r}),(0,n.jsx)("input",{type:"checkbox",name:"arcanaProf",id:"arcanaProf",checked:t.arcanaProf,onChange:r}),(0,n.jsx)("input",{type:"checkbox",name:"historyProf",id:"historyProf",checked:t.historyProf,onChange:r}),(0,n.jsx)("input",{type:"checkbox",name:"investigationProf",id:"investigationProf",checked:t.investigationProf,onChange:r}),(0,n.jsx)("input",{type:"checkbox",name:"natureProf",id:"natureProf",checked:t.natureProf,onChange:r}),(0,n.jsx)("input",{type:"checkbox",name:"religionProf",id:"religionProf",checked:t.religionProf,onChange:r})]}),(0,n.jsxs)("div",{className:"wis-skill-profs",children:[(0,n.jsx)("input",{type:"checkbox",name:"wisSavingThrowProf",id:"wisSavingThrowProf",checked:t.wisSavingThrowProf,onChange:r}),(0,n.jsx)("input",{type:"checkbox",name:"animalHandlingProf",id:"animalHandlingProf",checked:t.animalHandlingProf,onChange:r}),(0,n.jsx)("input",{type:"checkbox",name:"insightProf",id:"insightProf",checked:t.insightProf,onChange:r}),(0,n.jsx)("input",{type:"checkbox",name:"medicineProf",id:"medicineProf",checked:t.medicineProf,onChange:r}),(0,n.jsx)("input",{type:"checkbox",name:"perceptionProf",id:"perceptionProf",checked:t.perceptionProf,onChange:r}),(0,n.jsx)("input",{type:"checkbox",name:"survivalProf",id:"survivalProf",checked:t.survivalProf,onChange:r})]}),(0,n.jsxs)("div",{className:"cha-skill-profs",children:[(0,n.jsx)("input",{type:"checkbox",name:"chaSavingThrowProf",id:"chaSavingThrowProf",checked:t.chaSavingThrowProf,onChange:r}),(0,n.jsx)("input",{type:"checkbox",name:"deceptionProf",id:"deceptionProf",checked:t.deceptionProf,onChange:r}),(0,n.jsx)("input",{type:"checkbox",name:"intimidationProf",id:"intimidationProf",checked:t.intimidationProf,onChange:r}),(0,n.jsx)("input",{type:"checkbox",name:"performanceProf",id:"performanceProf",checked:t.performanceProf,onChange:r}),(0,n.jsx)("input",{type:"checkbox",name:"persuasionProf",id:"persuasionProf",checked:t.persuasionProf,onChange:r})]})]}),(0,n.jsxs)("div",{id:"skill-values",children:[(0,n.jsxs)("div",{className:"str-skills",children:[(0,n.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"strSavingThrow",value:t.strSavingThrow}),(0,n.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"athletics",value:t.athletics})]}),(0,n.jsxs)("div",{className:"dex-skills",children:[(0,n.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"dexSavingThrow",value:t.dexSavingThrow}),(0,n.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"acrobatics",value:t.acrobatics}),(0,n.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"sleightOfHand",value:t.sleightOfHand}),(0,n.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"stealth",value:t.stealth})]}),(0,n.jsx)("div",{className:"con-skills",children:(0,n.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"conSavingThrow",value:t.conSavingThrow})}),(0,n.jsxs)("div",{className:"int-skills",children:[(0,n.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"intSavingThrow",value:t.intSavingThrow}),(0,n.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"arcana",value:t.arcana}),(0,n.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"history",value:t.history}),(0,n.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"investigation",value:t.investigation}),(0,n.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"nature",value:t.nature}),(0,n.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"religion",value:t.religion})]}),(0,n.jsxs)("div",{className:"wis-skills",children:[(0,n.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"wisSavingThrow",value:t.wisSavingThrow}),(0,n.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"animalHandling",value:t.animalHandling}),(0,n.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"insight",value:t.insight}),(0,n.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"medicine",value:t.medicine}),(0,n.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"perception",value:t.perception}),(0,n.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"survival",value:t.survival})]}),(0,n.jsxs)("div",{className:"cha-skills",children:[(0,n.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"chaSavingThrow",value:t.chaSavingThrow}),(0,n.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"deception",value:t.deception}),(0,n.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"intimidation",value:t.intimidation}),(0,n.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"performance",value:t.performance}),(0,n.jsx)("input",{type:"number",min:"0",max:"50",onChange:o,id:"persuasion",value:t.persuasion})]})]})]})},A=e=>{let{levels:a}=e,[t,s]=(0,i.useState)(a),r=e=>{let[a,n]=e.target.name.split("-"),i=[...t];i[n][a]=e.target.value,s(i)};return(0,n.jsxs)("div",{id:"levels-block",children:[(0,n.jsx)("input",{type:"text",name:"class-0",value:t[0].class,onChange:r}),(0,n.jsx)("input",{type:"number",name:"level-0",min:"0",max:"50",value:t[0].level,onChange:r}),(0,n.jsx)("input",{type:"text",name:"class-1",value:t[1].class,onChange:r}),(0,n.jsx)("input",{type:"number",name:"level-1",min:"0",max:"50",value:t[1].level,onChange:r})]})},j=e=>{let[a,t]=(0,i.useState)(e.passivePerception);return(0,n.jsx)("div",{id:"passive-perception-block",children:(0,n.jsx)("input",{type:"number",name:"passive-perception",className:"passive-perception",min:"0",max:"50",onChange:e=>{t(e.target.value)}})})},k=e=>{let{str:a,dex:t,con:s,int:r,wis:o,cha:c,skills:l,levels:u,name:d,profBonus:m,inspiration:p,passivePerception:h}=e,[g,x]=(0,i.useState)(a),[k,S]=(0,i.useState)(t),[b,P]=(0,i.useState)(s),[C,y]=(0,i.useState)(r),[w,T]=(0,i.useState)(o),[N,D]=(0,i.useState)(c),[B,H]=(0,i.useState)(l),[M,E]=(0,i.useState)(u),[Q,I]=(0,i.useState)(d),[F,L]=(0,i.useState)(m),[_,O]=(0,i.useState)(p),[R,U]=(0,i.useState)(h);return(0,n.jsxs)("div",{id:"stats-profs-levels-block",children:[(0,n.jsx)(A,{levels:M}),(0,n.jsx)(v,{str:g,dex:k,con:b,int:C,wis:w,cha:N}),(0,n.jsx)(f,{skillsInitialState:B}),(0,n.jsx)(j,{passivePerception:R})]})},S=e=>{let{name:a,crew:t}=e,[s,r]=(0,i.useState)(a),[o,c]=(0,i.useState)(t);return(0,n.jsxs)("div",{id:"name-crew-block",children:[(0,n.jsx)("input",{type:"text",id:"name",value:s,onChange:e=>r(e.target.value)}),(0,n.jsx)("input",{type:"text",id:"crew",value:o,onChange:e=>c(e.target.value)})]})},b=e=>{let{name:a}=e,[t,s]=(0,i.useState)(a);return(0,n.jsx)("div",{id:"character-name-block",children:(0,n.jsx)("input",{type:"text",id:"name",value:t,onChange:e=>s(e.target.value)})})},P=e=>{let[a,t]=(0,i.useState)(e.profBonus),[s,r]=(0,i.useState)(e.inspiration);return(0,n.jsxs)("div",{id:"prof-bonus-inspiration-block",children:[(0,n.jsx)("input",{type:"number",name:"prof-bonus",className:"prof-bonus",min:"0",max:"20",onChange:e=>{t(e.target.value)}}),(0,n.jsx)("input",{type:"checkbox",name:"inspiration",className:"inspiration",checked:s,onChange:e=>{r(e.target.checked)}})]})};var C={src:"/beastworld-character-sheet//_next/static/media/char-sheet.b2f1c42d.jpg",height:1683,width:1241,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAKSJL//EABkQAAIDAQAAAAAAAAAAAAAAAAECABExEv/aAAgBAQABPwA8oRathyf/xAAWEQADAAAAAAAAAAAAAAAAAAAAATH/2gAIAQIBAT8AUP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:6,blurHeight:8};let y=e=>{let[a,t]=(0,i.useState)(e);return(0,n.jsxs)("div",{className:"character-sheet-background",children:[(0,n.jsx)(r(),{className:"bg",src:C,alt:"Beastworld Character Sheet page 1"}),(0,n.jsx)(x,{profAndLangs:a.profAndLangs,equipment:a.equipment,classFeatures:a.classFeatures,traitsBackground:a.traitsBackground,traitsSpecies:a.traitsSpecies,traitsHomeland:a.traitsHomeland}),(0,n.jsx)(S,{name:a.playerName,crew:a.crewName}),(0,n.jsx)(b,{name:a.charName}),(0,n.jsx)(P,{profBonus:a.profBonus,inspiration:a.inspiration}),(0,n.jsx)(g,{species:a.species,alignment:a.alignment,homeland:a.homeland,background:a.background}),(0,n.jsx)(k,{str:a.str,dex:a.dex,con:a.con,int:a.int,wis:a.wis,cha:a.cha,skills:a.skills,name:a.name,levels:a.levels,profBonus:a.profBonus,inspiration:a.inspiration,passivePerception:a.passivePerception}),(0,n.jsx)(o,{currentHP:a.currentHP,maxHP:a.maxHP,tempHP:a.tempHP}),(0,n.jsx)(u,{pictogram:a.pictogram}),(0,n.jsx)(c,{AC:a.AC,init:a.init,walkingSpeed:a.walkingSpeed,hitDice:a.hitDice}),(0,n.jsx)(l,{portrait:a.portrait}),(0,n.jsx)(m,{attacksAndSpells:a.attacksAndSpells}),(0,n.jsx)(h,{copper:a.copper,silver:a.silver,gold:a.gold,platinum:a.platinum})]})};function w(){return(0,n.jsx)("main",{children:(0,n.jsx)(y,{str:10,dex:10,con:10,int:10,wis:10,cha:10,skills:{strSavingThrowProf:!1,strSavingThrow:0,athleticsProf:!1,athletics:0,dexSavingThrowProf:!1,dexSavingThrow:0,acrobaticsProf:!1,acrobatics:0,sleightOfHandProf:!1,sleightOfHand:0,stealthProf:!1,stealth:0,conSavingThrowProf:!1,conSavingThrow:0,intSavingThrowProf:!1,intSavingThrow:0,arcanaProf:!1,arcana:0,historyProf:!1,history:0,investigationProf:!1,investigation:0,natureProf:!1,nature:0,religionProf:!1,religion:0,wisSavingThrowProf:!1,wisSavingThrow:0,animalHandlingProf:!1,animalHandling:0,insightProf:!1,insight:0,medicineProf:!1,medicine:0,perceptionProf:!1,perception:0,survivalProf:!1,survival:0,chaSavingThrowProf:!1,chaSavingThrow:0,deceptionProf:!1,deception:0,intimidationProf:!1,intimidation:0,performanceProf:!1,performance:0,persuasionProf:!1,persuasion:0},charName:"",profBonus:0,levels:[{class:"",level:0},{class:"",level:0}],name:"",inspiration:!1,passivePerception:10,currentHP:20,maxHP:20,tempHP:0,copper:0,silver:0,gold:0,platinum:0,profAndLangs:"",equipment:"",classFeatures:"",traitsBackground:"",traitsSpecies:"",traitsHomeland:"",attacksAndSpells:[{id:"hehetuoetudaoehtsudhtaoeudt",name:"",atkBonus:0,dmgDice:4,dmgMod:0,dmgType:""}],AC:0,init:0,walkingSpeed:"0ft",hitDice:"d6",species:"",alignment:"",homeland:"",background:"",playerName:"",crewName:"",portrait:"",pictogram:""})})}}},function(e){e.O(0,[732,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);