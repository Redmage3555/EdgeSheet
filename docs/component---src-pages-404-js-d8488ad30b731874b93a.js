(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(155),l=a(152);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"d",function(){return l}),a.d(t,"a",function(){return c}),a.d(t,"c",function(){return o}),a.d(t,"f",function(){return s}),a.d(t,"e",function(){return u});a(148),a(34);var n=a(0),r=a.n(n),i="CHANGE_NAME",l="CHANGE_SPECIES",c="CHANGE_CAREER",o="CHANGE_SPECIALIZATION",s=r.a.createContext({}),u=r.a.createContext(function(){return null}),d={name:"Default Name",species:{name:"Human",baseCharacterstics:[{key:"Brawn",value:2},{key:"Agility",value:2},{key:"Intelligence",value:2},{key:"Cunning",value:2},{key:"Willpower",value:2},{key:"Presence",value:2}],baseWounds:10,woundCharacterstic:"Brawn",baseStrain:10,strainCharacterstic:"Willpower",speciesFeat:"1 rank in any 2 non-career skills",sourceBook:"Edge of the Empire"},career:{career:"Bounty Hunter",careerSkills:["Athletics","Brawl","Perception","Piloting (Planetary)","Piloting (Space)","Ranged (Heavy)","Streetwise","Vigilance"],specializations:[{name:"Assassin",bonusSkills:["Melee","Ranged (Heavy)","Skulduggery","Stealth"],sourceBook:"Edge of the Empire Source Book P."}]},specialization:{name:"Assassin",bonusSkills:["Melee","Ranged (Heavy)","Skulduggery","Stealth"],sourceBook:"Edge of the Empire Source Book P."}},m=function(e,t){var a=Object.assign({},e);switch(t.type){case i:a.name=t.value;break;case l:a.species=t.value;break;case c:a.career=t.value;break;case o:a.specialization=t.value}return a};t.g=function(e){var t=e.children,a=Object(n.useReducer)(m,d),i=a[0],l=a[1];return r.a.createElement(u.Provider,{value:l},r.a.createElement(s.Provider,{value:i},t))}},147:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return l});a(149),a(150),a(34);var n=a(0),r=a.n(n),i=r.a.createContext({}),l=r.a.createContext(function(){return null}),c={additionalBrawn:0,additionalAgility:0,additionalIntelligence:0,additionalCunning:0,additionalWillpower:0,additionalPresence:0,soak:0,defenseMelee:0,defenseRanged:0},o=function(e,t){var a=Object.assign({},e);switch((Number.isNaN(t.value)||t.value<0)&&(t.value=0),console.log(t),t.type){case"CHANGE_BRAWN":a.additionalBrawn=t.value;break;case"CHANGE_AGILITY":a.additionalAgility=t.value;break;case"CHANGE_Intelligence":a.additionalIntelligence=t.value;break;case"CHANGE_CUNNING":a.additionalCunning=t.value;break;case"CHANGE_WILLPOWER":a.additionalWillpower=t.value;break;case"CHANGE_PRESENCE":a.additionalPresence=t.value;break;case"CHANGE_SOAK":a.soak=t.value;break;case"CHANGE_MELEEDEF":a.defenseMelee=t.value;break;case"CHANGE_RANGEDDEF":a.defenseRanged=t.value}return a};t.c=function(e){var t=e.children,a=Object(n.useReducer)(o,c),s=a[0],u=a[1];return r.a.createElement(l.Provider,{value:u},r.a.createElement(i.Provider,{value:s},t))}},151:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"a",function(){return l});a(149),a(150),a(34);var n=a(0),r=a.n(n),i=r.a.createContext({}),l=r.a.createContext(function(){return null}),c={astrogation:0,athletics:0,charm:0,coercion:0,computers:0,cool:0,coordination:0,deception:0,discipline:0,leadership:0,mechanics:0,medicine:0,negotiation:0,perception:0,pilotingPlanetary:0,pilotingSpace:0,resilience:0,skulduggery:0,stealth:0,streetwise:0,survival:0,vigilance:0},o=function(e,t){var a=Object.assign({},e);return Number.isNaN(t.value)||t.value<0?t.value=0:t.value>5&&(t.value=5),t.type&&(a[t.type]=t.value),a};t.c=function(e){var t=e.children,a=Object(n.useReducer)(o,c),s=a[0],u=a[1];return r.a.createElement(l.Provider,{value:u},r.a.createElement(i.Provider,{value:s},t))}},152:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),l=a(4),c=a.n(l),o=a(159),s=a.n(o);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,c=e.title,o=n.data.site,u=t||o.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},153:function(e){e.exports={data:{site:{siteMetadata:{title:"FFG Star Wars Character Sheet Builder",description:"Build character sheets for all the FFG Star Wars RPGs.",author:"@Living_Target (Twitter)/@RMSD (Github)"}}}}},155:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=function(e){var t=e.siteTitle;return r.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0,color:"white"}},t)))};c.propTypes={siteTitle:l.a.string},c.defaultProps={siteTitle:""};var o=c,s=(a(157),a(158),a(146)),u=a(147),d=a(151),m=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,{siteTitle:"ALPHA VERSION"}),r.a.createElement(s.g,null,r.a.createElement(u.c,null,r.a.createElement(d.c,null,r.a.createElement("main",null,t)))),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement("footer",null,"© ",(new Date).getFullYear(),". Questions? Find me ",r.a.createElement("a",{hraf:"https://twitter.com/Living_Target"},"@Living_Target"),". Have an issue, request, want to contibute? ",r.a.createElement("a",{href:"https://github.com/RMSD/EdgeSheet"},"Github"),". Built with ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))};m.propTypes={children:l.a.node.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-pages-404-js-d8488ad30b731874b93a.js.map