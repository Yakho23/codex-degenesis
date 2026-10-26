(function(){
"use strict";
/* ───────── utilitaires ───────── */
const $=(s,r=document)=>r.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const DG=s=>String(s).normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[’']/g," ").toUpperCase(); // police titre : A–Z sans accents
const norm=s=>String(s??"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();
const rnd=n=>Math.floor(Math.random()*n);
const pick=a=>a[rnd(a.length)];
const store={get(k,d){try{const v=localStorage.getItem("codex."+k);return v==null?d:JSON.parse(v)}catch(e){return d}},
             set(k,v){try{localStorage.setItem("codex."+k,JSON.stringify(v))}catch(e){}}};
function toast(t){const d=document.createElement("div");d.className="toast";d.textContent=t;document.body.appendChild(d);setTimeout(()=>d.remove(),1800)}
async function copy(t){try{await navigator.clipboard.writeText(t);toast("Copié")}catch(e){toast("Copie impossible ici")}}

const CULT_ICON={"Spitaliers":"SPITALIANS","Chroniqueurs":"CHRONICLERS","Hellvétiques":"HELLVETICS","Juges":"JUDGES","Clanistes":"CLANNERS","Ferrailleurs":"SCRAPPERS","Néolibyens":"NEOLIBYANS","Fléaux":"SCOURGERS","Anubiens":"ANUBIANS","Jehammétans":"JEHAMMEDANS","Apocalyptiques":"APOCALYPTICS","Anabaptistes":"ANABAPTISTS","Blafards":"PALERS",
 "Borca":"BORCA","Franka":"FRANKA","Pollen":"POLLEN","Balkhans":"BALKHAN","Hybrispanie":"HYBRISPANIA","Purgare":"PURGARE","Afrika":"AFRICA"};
const icon=name=>(window.ICONS&&ICONS[CULT_ICON[name]])||"";

const I={ /* icônes de trait */
 regles:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" aria-hidden="true"><path d="M24 12c-5-3-11-3-16-1v26c5-2 11-2 16 1 5-3 11-3 16-1V11c-5-2-11-2-16 1z"/><path d="M24 12v26"/></svg>',
 bazar:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true"><path d="M24 8v32M14 40h20M10 14h28"/><path d="M10 14l-6 13h12zM38 14l-6 13h12z"/></svg>',
 des:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" aria-hidden="true"><rect x="8" y="8" width="32" height="32" rx="4"/><g fill="currentColor" stroke="none"><circle cx="16.5" cy="16" r="2.4"/><circle cx="31.5" cy="16" r="2.4"/><circle cx="16.5" cy="24" r="2.4"/><circle cx="31.5" cy="24" r="2.4"/><circle cx="16.5" cy="32" r="2.4"/><circle cx="31.5" cy="32" r="2.4"/></g></svg>',
 generateurs:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true"><path d="M24 5l16.5 9.5v19L24 43 7.5 33.5v-19z"/><path d="M17 21a8 8 0 0 1 14-3M31 27a8 8 0 0 1-14 3"/><path d="M31 13v5h-5M17 35v-5h5"/></svg>',
 outils:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true"><path d="M30 8a9 9 0 0 0-9 12L8 33a4 4 0 0 0 6 6l13-13a9 9 0 0 0 12-9l-6 6-5-1-1-5z"/></svg>',
 campagne:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true"><path d="M6 11l11-4 14 4 11-4v30l-11 4-14-4-11 4z"/><path d="M17 7v30M31 11v30"/></svg>',
 back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',
 search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
 grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7.5" height="7.5"/><rect x="13.5" y="3" width="7.5" height="7.5"/><rect x="3" y="13.5" width="7.5" height="7.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5"/></svg>',
 hive:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.5l4 2.3v4.6l-4 2.3-4-2.3V4.8zM7 11.2l4 2.3v4.6l-4 2.3-4-2.3v-4.6zM17 11.2l4 2.3v4.6l-4 2.3-4-2.3v-4.6z"/></svg>'
};
const EMBLEM='<svg viewBox="272.4 -2 54.8 54.8" width="60" height="60" fill="#0b0b0b" aria-hidden="true"><polygon points="311.1,18.6 319.8,27.3 325.2,27.3 312.7,14.8 306.6,14.8 306.6,23.5 301.7,23.5 301.7,21.3 301.7,21.3 301.7,18.6 303.7,18.6 303.7,14.8 301.7,14.8 301.7,7.6 297.9,11.4 297.9,14.8 293,14.8 293,14.1 301.7,5.4 301.7,0 289.2,12.5 289.2,18.6 297.9,18.6 297.9,23.5 295.7,23.5 295.7,23.5 293,23.5 293,21.5 289.2,21.5 289.2,23.5 282,23.5 285.8,27.3 289.2,27.3 289.2,32.2 288.5,32.2 279.8,23.5 274.4,23.5 286.9,36 293,36 293,27.3 297.9,27.3 297.9,29.5 297.9,29.5 297.9,32.1 295.9,32.1 295.9,36 297.9,36 297.9,43.1 301.7,39.3 301.7,36 306.6,36 306.6,36.7 297.9,45.4 297.9,50.8 310.4,38.3 310.4,32.1 301.7,32.1 301.7,27.3 303.9,27.3 303.9,27.3 306.6,27.3 306.6,29.3 310.4,29.3 310.4,27.3 317.6,27.3 313.8,23.5 310.4,23.5 310.4,18.6"/></svg>';

const SECTIONS=[
 {id:"regles",n:"I",t:"Règles",s:"Combat, blessures, Ego",pos:[58,0]},
 {id:"bazar",n:"II",t:"Bazar",s:"Armes, armures, matériel",pos:[174,0]},
 {id:"des",n:"III",t:"Dés",s:"Réserve, déclencheurs, échecs",pos:[232,100]},
 {id:"generateurs",n:"IV",t:"Générateurs",s:"PNJ, rencontres, fouilles",pos:[174,201]},
 {id:"outils",n:"V",t:"Outils",s:"Combat, oracle, dégâts",pos:[58,201]},
 {id:"campagne",n:"VI",t:"Campagne",s:CAMPAGNE.titre,pos:[0,100]}];

/* ───────── état ───────── */
const S={view:"home",layout:store.get("layout","ruche"),
 regCat:"Tous",regQ:"",
 bzGrp:"armes",bzCat:"Tout",bzCulte:"",bzQ:"",
 dice:store.get("dice",{va:6,diff:2,ego:0,mod:0}),diceMode:"simple",diceB:{va:6,ego:0,mod:0},last:null,hist:store.get("hist",[]),
 genTab:"pnj",gen:{culture:"",culte:"",sexe:""},genOut:null,
 outTab:"combat",fighters:store.get("fighters",null),round:store.get("round",1),oracle:null,
 dmg:{base:"",f:"",dc:0,pot:0,arm:0},
 campTab:"groupe"};
if(!S.fighters){S.fighters=CAMPAGNE.groupe.map((p,i)=>({id:i+1,n:p.n,ini:0,bs:0,bsM:{Pavel:8,Octet:6}[p.n]||6,tr:0,trM:{Pavel:4,Octet:5}[p.n]||4,eg:{Octet:18}[p.n]||10,egM:{Octet:18}[p.n]||10,done:false,ex:true}));}

/* ───────── navigation ───────── */
function go(v,push=true){S.view=v;render();window.scrollTo(0,0);if(push){try{history.replaceState(null,"",v==="home"?"#":"#"+v)}catch(e){try{location.hash=v==="home"?"":v}catch(_){}}}}
window.addEventListener("hashchange",()=>{const h=(location.hash||"").slice(1);const v=SECTIONS.some(s=>s.id===h)?h:"home";if(v!==S.view)go(v,false)});

/* ───────── rendu ───────── */
const app=$("#app");
function render(){
  app.innerHTML=S.view==="home"?home():section();
  if(S.view==="bazar"||S.view==="regles"){const q=$("#q");if(q&&S._focusQ){q.focus();q.setSelectionRange(q.value.length,q.value.length);S._focusQ=false}}
}
function home(){
  const ruche=S.layout==="ruche";
  const hive=`<nav class="hive" aria-label="Menu principal">
    <div class="hex core" style="left:116px;top:100px" aria-hidden="true"><span class="in">${EMBLEM}</span></div>
    ${SECTIONS.map(s=>`<button class="hex" data-go="${s.id}" style="left:${s.pos[0]}px;top:${s.pos[1]}px" aria-label="${esc(s.t)}"><span class="in"><span class="num dg">${s.n}</span>${I[s.id]}<span class="lab dg" ${s.id==="generateurs"?'style="font-size:10px;letter-spacing:.02em"':""}>${DG(s.t)}</span></span></button>`).join("")}
  </nav>`;
  const grid=`<nav class="grid6" aria-label="Menu principal">${SECTIONS.map(s=>`<button class="tile" data-go="${s.id}"><span class="num dg">${s.n}</span>${I[s.id]}<span><span class="lab dg" ${s.id==="generateurs"?'style="font-size:16px;letter-spacing:.03em"':""}>${DG(s.t)}</span><small>${esc(s.s)}</small></span></button>`).join("")}</nav>`;
  return `<section class="home wrap">
    <button class="switch" data-act="layout" aria-label="${ruche?"Affichage en grille":"Affichage en ruche"}">${ruche?I.grid:I.hive}</button>
    <header><img src="assets/logo-clean.svg" alt="Degenesis"><p class="dg">CODEX DU MJ</p></header>
    ${ruche?hive:grid}
    <footer><i></i><span class="dg">PRIMAL PUNK</span><i></i></footer></section>`;
}
function section(){
  const s=SECTIONS.find(x=>x.id===S.view);
  const tabs={regles:regTabs,bazar:bzTabs,generateurs:genTabs,outils:outTabs,campagne:campTabs}[s.id];
  return `<div class="top"><div class="wrap"><div class="bar"><button class="back" data-go="home" aria-label="Retour à l’accueil">${I.back}</button><h1 class="dg">${DG(s.t)}</h1><span class="roman dg">${s.n}</span></div>${tabs?tabs():""}</div></div>
  <main class="wrap">${({regles:regles,bazar:bazar,des:des,generateurs:generateurs,outils:outils,campagne:campagne})[s.id]()}</main>`;
}
const chips=(list,cur,act,label)=>`<div class="tabs" role="toolbar" aria-label="${esc(label)}">${list.map(x=>{const v=Array.isArray(x)?x[0]:x,l=Array.isArray(x)?x[1]:x;return `<button class="chip" data-act="${act}" data-v="${esc(v)}" aria-pressed="${v===cur}">${l}</button>`}).join("")}</div>`;

/* ───────── I. RÈGLES ───────── */
const REG_CATS=["Tous",...new Set(REGLES.map(r=>r.cat))];
function regTabs(){return chips(REG_CATS,S.regCat,"regcat","Catégories de règles")}
function regles(){
  const q=norm(S.regQ).trim();
  const list=REGLES.filter(r=>(S.regCat==="Tous"||r.cat===S.regCat)&&(!q||norm(r.t+" "+r.tags+" "+r.h.replace(/<[^>]+>/g," ")).includes(q)));
  return `<div class="stack">
   <label class="search">${I.search}<input id="q" data-in="regq" type="search" placeholder="Chercher : initiative, feu, hémorragie…" value="${esc(S.regQ)}" autocomplete="off"></label>
   <div class="count">${list.length} fiche${list.length>1?"s":""}</div>
   ${list.map(r=>`<details class="card"${q&&list.length<=3?" open":""}><summary><span class="t">${esc(r.t)}</span><span class="ref">${esc(r.ref)}</span></summary><div class="body">${S.regCat==="Tous"?`<div class="catline">${esc(r.cat)}</div>`:""}${r.h}</div></details>`).join("")||`<p class="empty">Aucune fiche ne correspond. Essayez un autre mot.</p>`}
   <p class="note">Résumés pour la table. En cas de doute, les pages indiquées renvoient à Katharsys (K) ou au supplément Artefacts (A).</p></div>`;
}

/* ───────── II. BAZAR ───────── */
const BZ_GRP=[["armes","Armes"],["protection","Protection"],["equipement","Équipement"],["medical","Médical"],["vehicules","Véhicules"]];
function bzTabs(){return chips(BZ_GRP,S.bzGrp,"bzgrp","Familles d’objets")}
function bazar(){
  const inGrp=BAZAR.filter(r=>r._grp===S.bzGrp);
  const cats=["Tout",...new Set(inGrp.map(r=>r._cat))];
  const cultes=[...new Set(BAZAR.map(r=>r.Culte).filter(Boolean))].sort();
  const q=norm(S.bzQ).trim();
  const list=(q?BAZAR:inGrp).filter(r=>(q||S.bzCat==="Tout"||r._cat===S.bzCat)&&(!S.bzCulte||r.Culte===S.bzCulte)&&(!q||norm(Object.values(r).join(" ")).includes(q)));
  return `<div class="stack">
   <label class="search">${I.search}<input id="q" data-in="bzq" type="search" placeholder="Chercher dans tout le Bazar…" value="${esc(S.bzQ)}" autocomplete="off"></label>
   ${q?"":chips(cats,S.bzCat,"bzcat","Catégories")}
   <div class="selrow"><select class="sel" id="bzculte" data-in="bzculte" aria-label="Filtrer par Culte"><option value="">Tous les Cultes</option>${cultes.map(c=>`<option ${c===S.bzCulte?"selected":""}>${esc(c)}</option>`).join("")}</select></div>
   <div class="count">${list.length} objet${list.length>1?"s":""}${q?" · recherche dans toutes les familles":""}</div>
   ${list.map(item).join("")||`<p class="empty">Rien dans le Bazar avec ces filtres.</p>`}
   <p class="note">Valeurs en Lettres de Change (LC). Ress. = Ressources nécessaires dans le Culte. Données relevées dans Katharsys, chapitre Équipement : relisez les lignes douteuses.</p></div>`;
}
function stat(k,v){return v&&v!=="–"?`<span>${k} <b>${esc(v)}</b></span>`:""}
function item(r){
  const g=r._grp;let line="";
  if(r._cat==="Munitions") line=stat("Dégâts",r["Dégâts"])+stat("Tech",r.Tech)+stat("Prix",r.Valeur);
  else if(g==="armes"&&r["Dégâts"]!==undefined) line=stat("Dég.",r["Dégâts"])+stat("Man.",r["Man."])+stat("Portée",r["Portée"])+stat("Cal.",r["Cal."]);
  else if(r["Valeur d’armure"]) line=stat("Armure",r["Valeur d’armure"])+stat("Enc.",r["Enc."]);
  else if(r["Défense"]) line=stat("Déf.",r["Défense"])+stat("Att.",r["Attaque"]);
  else if(r["Vit. Max."]) line=stat("Vit.",r["Vit. Max."])+stat("Armure",r.Armure)+stat(r.Blessures?"Bless.":"Carross.",r.Blessures||r.Carrosserie);
  else line=r.Effet?`<span>${esc(r.Effet)}</span>`:"";
  const skip=new Set(["Nom","_cat","_grp","_skill","Culte"]);
  const kv=Object.entries(r).filter(([k,v])=>!skip.has(k)&&v&&v!=="–").map(([k,v])=>`<dt>${esc(k.replace("Man.","Maniabilité").replace("Charg.","Chargeur").replace("Enc.","Encombrement").replace("Empl.","Emplacements").replace("Ress.","Ressources").replace("Cal.","Calibre"))}</dt><dd>${esc(k==="Valeur"?v+" LC":v)}</dd>`).join("");
  return `<details class="card item"><summary><span class="t">${esc(r.Nom)}</span>${r.Culte?`<span class="cult">${icon(r.Culte)}${esc(r.Culte)}</span>`:""}<span class="stats">${line}</span></summary><div class="body"><div class="catline">${esc(r._cat)}${r._skill?" · "+esc(r._skill):""}</div><dl class="kv">${kv}</dl></div></details>`;
}

/* ───────── III. DÉS ───────── */
function rollPool(n){
  const dice=[],k=Math.max(0,Math.min(12,n)),auto=Math.max(0,n-12);
  for(let i=0;i<k;i++)dice.push(1+rnd(6));
  const succ=dice.filter(d=>d>=4).length+auto, trig=dice.filter(d=>d===6).length, ones=dice.filter(d=>d===1).length;
  return {n,dice,auto,succ,trig,ones};
}
const QUAL=["","Bien","Remarquable","Excellent","Brillant","Exceptionnel","Légendaire"];
const qual=t=>t<=0?"":QUAL[Math.min(6,t)];
function dieSvg(v,cls){
  const P={1:[[24,24]],2:[[15,15],[33,33]],3:[[14,14],[24,24],[34,34]],4:[[15,15],[33,15],[15,33],[33,33]],5:[[14,14],[34,14],[24,24],[14,34],[34,34]],6:[[15,13],[33,13],[15,24],[33,24],[15,35],[33,35]]}[v];
  return `<svg class="die ${cls}" viewBox="0 0 48 48" role="img" aria-label="${v}"><rect x="2" y="2" width="44" height="44" rx="7" stroke-width="2"/>${P.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="4.2"/>`).join("")}</svg>`;
}
function diceView(r,mark){return `<div class="dice">${r.dice.map(v=>dieSvg(v,v===6?"t":v>=4?"s":v===1?"o":"f")).join("")}</div>${r.auto?`<div class="note">+${r.auto} succès automatique${r.auto>1?"s":""} (au-delà de 12 dés)</div>`:""}`}
function stepper(id,val,min,max,sm){return `<div class="stepper${sm?" sm":""}"><button data-act="step" data-k="${id}" data-d="-1" aria-label="Moins">−</button><output aria-live="polite">${val}</output><button data-act="step" data-k="${id}" data-d="1" aria-label="Plus">+</button></div>`}
function des(){
  const d=S.dice,conf=S.diceMode==="conf";
  const pool=d.va+d.ego+d.mod;
  let res="";
  if(S.last){
    const L=S.last;
    if(L.mode==="simple"){
      const r=L.a,dif=L.diff;let verdict,cls;
      if(r.n<=0){verdict="Échec automatique";cls="ko"}
      else if(dif>0){const ok=r.succ>=dif;verdict=ok?("Réussite"+(r.trig?" · "+qual(r.trig):"")):(r.ones>r.succ?"Échec critique":"Échec");cls=ok?"ok":"ko"}
      else {verdict=r.succ?("Succès"+(r.trig?" · "+qual(r.trig):"")):(r.ones>0?"Aucun succès · "+r.ones+"×1":"Aucun succès");cls=r.succ?"ok":"ko"}
      res=`<div class="dice-panel result" aria-live="polite"><div class="verdict"><span class="big ${cls}">${DG(verdict)}</span>${dif>0?`<span class="note">difficulté ${dif}</span>`:""}</div>
        <div class="tally"><span><b>${r.succ}</b>succès</span><span><b>${r.trig}</b>déclencheurs</span><span><b>${r.ones}</b>× 1</span></div>${diceView(r)}
        ${dif>0&&r.succ>=dif&&r.trig?`<div class="note">Actions en combat (Initiative) : ${1+Math.floor(r.trig/2)} · Dégâts +${r.trig} DC</div>`:""}</div>`;
    } else {
      const A=L.a,B=L.b;let w;
      if(A.succ!==B.succ)w=A.succ>B.succ?"A":"B";else if(A.trig!==B.trig)w=A.trig>B.trig?"A":"B";else w="=";
      res=`<div class="dice-panel result" aria-live="polite"><div class="verdict"><span class="big ${w==="="?"ko":"ok"}">${w==="="?"EGALITE":"VICTOIRE "+w}</span>${w==="="?`<span class="note">S’il faut un vainqueur, celui qui a pris l’initiative perd.</span>`:""}</div>
        <div class="lbl">A · ${A.succ} succès · ${A.trig} DC</div>${diceView(A)}<div class="lbl">B · ${B.succ} succès · ${B.trig} DC</div>${diceView(B)}</div>`;
    }
  }
  return `<div class="stack">
   ${chips([["simple","Jet simple"],["conf","Confrontation"]],S.diceMode,"dmode","Mode")}
   <div class="dice-panel">
     <div class="lbl">${conf?"Camp A · ":""}Valeur d’action (attribut + compétence)</div>${stepper("va",d.va,0,30)}
     <div class="row2"><div><div class="lbl">Ego dépensé</div>${stepper("ego",d.ego,0,3,true)}</div><div><div class="lbl">Modificateur</div>${stepper("mod",(d.mod>0?"+":"")+d.mod+"D",-12,12,true)}</div></div>
     ${conf?`<div class="lbl">Camp B · Valeur d’action</div>${stepper("vb",S.diceB.va,0,30)}`:`<div><div class="lbl">Difficulté</div><div class="diffs" role="toolbar" aria-label="Difficulté">${[[0,"—"],[1,"1"],[2,"2"],[4,"4"],[6,"6"],[8,"8"],[10,"10"]].map(([v,l])=>`<button class="chip" data-act="diff" data-v="${v}" aria-pressed="${d.diff===v}">${l}</button>`).join("")}</div></div>`}
     <button class="roll" data-act="roll">LANCER ${conf?"":pool+"D"}</button>
   </div>
   ${res}
   <div class="btnrow"><button class="btn" data-act="quick" data-v="1">1D6</button><button class="btn" data-act="quick" data-v="2">2D6</button><button class="btn" data-act="quick" data-v="init">Initiative</button></div>
   ${S.hist.length?`<div><div class="sec-title dg">HISTORIQUE</div><div class="hist">${S.hist.map(h=>`<div><span>${esc(h.t)}</span><span>${esc(h.r)}</span></div>`).join("")}</div></div>`:""}
  </div>`;
}
function pushHist(t,r){S.hist.unshift({t,r});S.hist=S.hist.slice(0,10);store.set("hist",S.hist)}

/* ───────── IV. GÉNÉRATEURS ───────── */
function genTabs(){return chips([["pnj","PNJ"],["rencontre","Rencontre"],["fouille","Fouille"],["nom","Noms"],["meteo","Ambiance"]],S.genTab,"gentab","Générateurs")}
const CULTS=Object.keys(GEN.cultures);
function genNPC(){
  const c=S.gen.culture||pick(CULTS),C=GEN.cultures[c];
  const culte=S.gen.culte||(Math.random()<.75?pick(C.cultes):pick(GEN.cultes));
  const sexe=S.gen.sexe||(Math.random()<.5?"h":"f");
  const con=pick(GEN.concepts),rg=pick(GEN.rang);
  return {type:"pnj",nom:pick(C[sexe])+" "+pick(C.n),c,culte,con,sexe,phys:pick(GEN.physique),att:pick(GEN.attitude),sec:pick(GEN.secret),rg};
}
function generateurs(){
  const t=S.genTab,o=S.genOut&&S.genOut.tab===t?S.genOut:null;
  const selC=`<select class="sel" data-in="gculture" aria-label="Culture"><option value="">Culture au hasard</option>${CULTS.map(c=>`<option ${S.gen.culture===c?"selected":""}>${c}</option>`).join("")}</select>`;
  let form="",out="";
  if(t==="pnj"){
    form=`<div class="selrow">${selC}<select class="sel" data-in="gculte" aria-label="Culte"><option value="">Culte au hasard</option>${GEN.cultes.map(c=>`<option ${S.gen.culte===c?"selected":""}>${c}</option>`).join("")}</select><select class="sel" data-in="gsexe" aria-label="Sexe"><option value="">Homme ou femme</option><option value="h" ${S.gen.sexe==="h"?"selected":""}>Homme</option><option value="f" ${S.gen.sexe==="f"?"selected":""}>Femme</option></select></div>`;
    if(o){const p=o.v;out=`<article class="gen-card"><span class="cult">${icon(p.culte)}${esc(p.culte)}</span><h2>${esc(p.nom)}</h2><div class="meta">${esc(p.c)} · ${esc(p.con.n)}</div>
      <p><span class="k">Motivation</span>${esc(p.con.m.charAt(0).toUpperCase()+p.con.m.slice(1))}.</p><p><span class="k">Apparence</span>${esc(p.phys)}</p><p><span class="k">Attitude</span>${esc(p.att)}</p><p><span class="k">Secret</span>${esc(p.sec)}</p>
      <p><span class="k">Niveau · ${esc(p.rg.n)}</span>VA principale ${p.rg.va} · Blessures ${p.rg.bs} · Traumatismes ${p.rg.tr}</p>
      <div class="btnrow"><button class="btn" data-act="copynpc">Copier</button><button class="btn" data-act="addfighter">Ajouter au combat</button></div></article>`;}
  }
  if(t==="rencontre"){form=`<div class="selrow">${selC}</div>`;if(o)out=`<article class="gen-card"><span class="cult">${icon(o.v.c)}${esc(o.v.c)}</span><h2>${esc(o.v.r)}</h2><p><span class="k">Ambiance</span>${esc(o.v.m)}</p></article>`}
  if(t==="fouille"){form=`<div class="selrow">${selC}</div>`;if(o){const f=o.v;out=`<article class="gen-card"><span class="cult">${icon(f.c)}${esc(f.c)} · difficulté pour trouver le site : ${f.dif}</span><h2>${esc(f.site.charAt(0).toUpperCase()+f.site.slice(1))}</h2>
      <p><span class="k">Trouvaille</span>${esc(f.obj)}, ${esc(f.etat)}</p><p><span class="k">Niveau technologique</span>Tech ${f.tech} · ${f.kg} kg de débris</p><p><span class="k">Valeur estimée</span>achat ~${f.buy} LC · revente ~${f.sell} LC aux Chroniqueurs</p><p class="note">Règle complète : Règles › Progression › Chasse aux rebuts.</p></article>`}}
  if(t==="nom"){form=`<div class="selrow">${selC}<select class="sel" data-in="gsexe" aria-label="Sexe"><option value="">Mélangé</option><option value="h" ${S.gen.sexe==="h"?"selected":""}>Hommes</option><option value="f" ${S.gen.sexe==="f"?"selected":""}>Femmes</option></select></div>`;if(o)out=`<article class="gen-card"><span class="cult">${icon(o.v.c)}${esc(o.v.c)}</span>${o.v.l.map(n=>`<h2 style="font-size:21px">${esc(n)}</h2>`).join("")}</article>`}
  if(t==="meteo"){if(o)out=`<article class="gen-card"><span class="k">Météo</span><h2>${esc(o.v)}</h2></article>`}
  return `<div class="stack">${form}<button class="roll" data-act="gen">GENERER</button>${out||`<p class="empty">Choisissez vos filtres puis touchez Générer.</p>`}
   <p class="note">Noms, accroches et rencontres : tables maison dans l’esprit des cultures du jeu. À enrichir ensemble.</p></div>`;
}
const TECH_PRICE={I:[1,0],II:[15,5],III:[80,25],IV:[200,80],V:[600,200],VI:[2000,600]};
const DIF_CULT={Borca:2,Franka:5,Pollen:4,Balkhans:4,Hybrispanie:5,Purgare:3,Afrika:5};
function doGen(){
  const t=S.genTab;let v;
  if(t==="pnj")v=genNPC();
  if(t==="rencontre"){const c=S.gen.culture||pick(CULTS);v={c,r:pick(GEN.rencontres[c]),m:pick(GEN.meteo)}}
  if(t==="fouille"){const c=S.gen.culture||pick(CULTS);const dc=Math.max(0,[1,2,3].map(()=>rnd(6)+1).filter(x=>x===6).length);const lv=Math.min(6,3+Math.floor(dc/2)+(Math.random()<.25?1:0)-(Math.random()<.35?1:0));const tech=["I","II","III","IV","V","VI"][Math.max(0,lv-1)];const kg=1+rnd(6);v={c,dif:DIF_CULT[c],site:pick(GEN.ruines),obj:pick(GEN.trouvailles),etat:pick(GEN.etat),tech,kg,buy:TECH_PRICE[tech][0]*kg,sell:TECH_PRICE[tech][1]*kg}}
  if(t==="nom"){const c=S.gen.culture||pick(CULTS),C=GEN.cultures[c];v={c,l:Array.from({length:6},()=>pick(C[S.gen.sexe||(Math.random()<.5?"h":"f")])+" "+pick(C.n))}}
  if(t==="meteo")v=pick(GEN.meteo);
  S.genOut={tab:t,v};render();
}

/* ───────── V. OUTILS ───────── */
function outTabs(){return chips([["combat","Combat"],["oracle","Oracle"],["degats","Dégâts"],["sons","Ambiances"]],S.outTab,"outtab","Outils")}
function outils(){
  if(S.outTab==="combat"){
    const F=[...S.fighters].sort((a,b)=>b.ini-a.ini);
    const m=(f,k,lab,max)=>`<div class="meter"><span>${lab}</span><button data-act="fm" data-id="${f.id}" data-k="${k}" data-d="-1" aria-label="${lab} moins">−</button><b class="${(k==="eg"?f[k]<=0:f[k]>=max)?"warn":""}">${f[k]}${max?"/"+max:""}</b><button data-act="fm" data-id="${f.id}" data-k="${k}" data-d="1" aria-label="${lab} plus">+</button></div>`;
    return `<div class="stack">
      <div class="btnrow"><div class="dice-panel" style="flex:1;flex-direction:row;align-items:center;justify-content:space-between;padding:10px 14px"><span class="lbl">Round</span><b class="ui" style="font-size:30px">${S.round}</b></div></div>
      <div class="btnrow"><button class="btn red" data-act="nextround">Round suivant</button><button class="btn" data-act="resetfight">Nouveau combat</button></div>
      <div class="fighters">${F.map(f=>`<div class="fighter${f.done?" done":""}">
        <div class="ini" title="Initiative">${f.ini}</div>
        <div class="nm">${esc(f.n)}<small>Init. <button class="mini" style="display:inline-grid;width:28px;height:28px" data-act="fm" data-id="${f.id}" data-k="ini" data-d="-1" aria-label="Initiative moins">−</button> <button class="mini" style="display:inline-grid;width:28px;height:28px" data-act="fm" data-id="${f.id}" data-k="ini" data-d="1" aria-label="Initiative plus">+</button> · ${1+Math.floor((f.dc||0)/2)} action${(f.dc||0)>=2?"s":""} <button class="mini" style="display:inline-grid;width:28px;height:28px" data-act="fm" data-id="${f.id}" data-k="dc" data-d="1" aria-label="Ajouter un déclencheur d’initiative">DC</button></small></div>
        <div style="display:flex;gap:6px"><button class="mini" data-act="done" data-id="${f.id}" aria-label="A agi">${f.done?"↺":"✓"}</button><button class="mini" data-act="delf" data-id="${f.id}" aria-label="Retirer ${esc(f.n)}">×</button></div>
        <div class="meters">${m(f,"bs","BLESS.",f.bsM)}${m(f,"tr","TRAUMA",f.trM)}${m(f,"eg","EGO",0)}</div></div>`).join("")}</div>
      ${F.some(f=>f.ex)?`<p class="note">Maximums des PJ repris des fiches quand ils y figurent (Pavel, Octet), sinon valeurs d’exemple à ajuster.</p>`:""}
      <form class="form" data-form="addf"><label class="wide">Nom<input id="fn" name="n" required placeholder="Ex. Gendo, Juge, Cafard…"></label>
        <label>Init.<input id="fi" name="ini" type="number" inputmode="numeric" value="0"></label><label>Bless.<input id="fb" name="bsM" type="number" inputmode="numeric" value="6"></label><label>Trauma<input id="ft" name="trM" type="number" inputmode="numeric" value="4"></label><label>Ego<input id="fe" name="eg" type="number" inputmode="numeric" value="8"></label>
        <button class="btn red wide" type="submit" style="grid-column:span 4">Ajouter au combat</button></form>
      <p class="note">Rappel : -1D par Traumatisme · Blessures pleines → Traumatismes · Ego à 0 → hors combat.</p></div>`;
  }
  if(S.outTab==="oracle"){
    const o=S.oracle;
    let out=`<p class="empty">Tirez une carte pour un augure, ou deux pour une combinaison.</p>`;
    if(o){const A=ORACLE.archetypes[o[0]],B=o.length>1?ORACLE.archetypes[o[1]]:null;
      const txt=B?(ORACLE.combinations[A.name]||{})[B.name]:"";
      out=`<div class="tarot"><figure><img src="${A.image}" alt="${esc(A.name)}"><figcaption>${esc(A.name)}</figcaption></figure>${B?`<figure><img src="${B.image}" alt="${esc(B.name)}"><figcaption>${esc(B.name)}</figcaption></figure>`:""}</div>
      ${txt?`<div class="gen-card oracle-txt">${(()=>{const i=txt.indexOf(".");return `<b>${esc(txt.slice(0,i+1))}</b>${esc(txt.slice(i+1))}`})()}</div>`:""}
      ${!B?`<div class="gen-card"><span class="k">Concept</span><p>${esc((GEN.concepts[o[0]]||{}).m||"").replace(/^./,c=>c.toUpperCase())}.</p></div>`:""}`;}
    return `<div class="stack"><div class="btnrow"><button class="btn" data-act="tarot" data-v="1">1 carte</button><button class="btn red" data-act="tarot" data-v="2">2 cartes</button></div>${out}
      <p class="note">Oracle et combinaisons repris de ton outil « Tirage-tarot ».</p></div>`;
  }
  if(S.outTab==="degats"){
    const d=S.dmg;const weap=BAZAR.filter(r=>r._grp==="armes"&&r["Dégâts"]&&/\d|F/.test(r["Dégâts"]));
    const base=calcBase(d.base,+d.f||0);const tot=base==null?null:base+(+d.dc||0)+(+d.pot||0);const bl=tot==null?null:Math.max(0,tot-(+d.arm||0));
    return `<div class="stack"><div class="dice-panel">
      <label class="lbl" for="dw">Arme</label><select class="sel" id="dw" data-in="dweap"><option value="">Choisir une arme…</option>${weap.map(w=>`<option value="${esc(w["Dégâts"])}" ${d.base===w["Dégâts"]?"selected":""}>${esc(w.Nom)} — ${esc(w["Dégâts"])}</option>`).join("")}</select>
      <div class="form"><label>Dégâts<input id="db" data-in="dbase" value="${esc(d.base)}" placeholder="6+F/3"></label><label>PHY+Force<input id="df" data-in="df" type="number" inputmode="numeric" value="${esc(d.f)}"></label><label>DC<input id="dd" data-in="ddc" type="number" inputmode="numeric" value="${esc(d.dc)}"></label><label>Armure<input id="da" data-in="darm" type="number" inputmode="numeric" value="${esc(d.arm)}"></label><label class="wide">Bonus de Potentiels<input id="dp" data-in="dpot" type="number" inputmode="numeric" value="${esc(d.pot)}"></label></div></div>
      <div class="dice-panel result"><div class="tally"><span><b>${tot??"–"}</b>dégâts</span><span><b>${bl??"–"}</b>blessures</span></div><p class="note">Dégâts = arme + DC + Potentiels. Blessures = dégâts − armure. F/2 et F/3 arrondis au supérieur.</p></div></div>`;
  }
  return `<div class="stack"><div class="gen-card"><h2>Ambiances sonores</h2><p>À venir : boucles d’ambiance (pluie sur Justitienne, vent, tension, combat) et effets ponctuels. Il faudra me fournir les fichiers son.</p></div></div>`;
}
function calcBase(s,F){
  if(!s)return null;s=String(s).replace(/\s/g,"");
  const m=s.match(/^(\d+)?\+?(F(?:\/(\d))?)?$/);if(!m)return /^\d+$/.test(s)?+s:null;
  let v=m[1]?+m[1]:0;if(m[2])v+=m[3]?Math.ceil(F/+m[3]):F;return v;
}

/* ───────── VI. CAMPAGNE ───────── */
function campTabs(){return chips([["groupe","Groupe"],["mission","Mission"],["pnj","PNJ"],["lieux","Lieux"],["chrono","Chronologie"],["notes","Notes"]],S.campTab,"camptab","Campagne")}
function campagne(){
  const C=CAMPAGNE,t=S.campTab;let b="";
  if(t==="groupe")b=C.groupe.map(p=>`<article class="card pc"><img src="${p.img}" alt=""><h3>${esc(p.n)}</h3><div class="l">${esc(p.l)}</div><div class="note">${esc(p.r)}</div><p>${esc(p.d)}</p>${p.s.length?`<div class="sk">${p.s.map(([k,v])=>`<span>${esc(k)} <b>${esc(v)}</b></span>`).join("")}</div>`:""}</article>`).join("");
  if(t==="mission")b=`<article class="card"><div class="body">${C.mission}</div></article>`;
  if(t==="pnj")b=C.pnj.map(p=>`<article class="card npc">${p.img?`<button class="ph" data-act="zoom" data-src="${p.img}" aria-label="Agrandir le portrait de ${esc(p.n)}"><img src="${p.img}" alt=""></button>`:`<div class="noimg" aria-hidden="true">${DG(p.n.charAt(0))}</div>`}<div><h3>${esc(p.n)}</h3><div class="r">${esc(p.r)}</div><p>${esc(p.d)}</p></div></article>`).join("");
  if(t==="lieux")b=C.lieux.map(p=>`<article class="card npc"><button class="ph" data-act="zoom" data-src="${p.img}" aria-label="Agrandir ${esc(p.n)}"><img src="${p.img}" alt=""></button><div><h3>${esc(p.n)}</h3><p>${esc(p.d)}</p></div></article>`).join("");
  if(t==="chrono")b=`<button class="card" data-act="zoom" data-src="${C.chrono}" data-wide="1" style="padding:0;border:1px solid var(--line)"><img src="${C.chrono}" alt="Chronologie d’En Ton Sang" style="display:block;width:100%"></button><p class="note">Touchez l’image pour l’agrandir et la faire défiler.</p>`;
  if(t==="notes"){const n=store.get("notes","");b=`<label class="lbl" for="notes">Notes de séance</label><textarea id="notes" class="notes" data-in="notes" placeholder="Ce qui s’est passé, les indices trouvés, les PNJ rencontrés…">${esc(n)}</textarea><div class="btnrow"><button class="btn" data-act="stamp">Insérer la date</button><button class="btn" data-act="copynotes">Copier</button></div><p class="note">Enregistrées automatiquement sur cet appareil uniquement.</p>`}
  return `<div class="stack"><div class="hero-c"><h2>${DG(C.titre)}</h2><p>${esc(C.sous)}</p></div>${b}</div>`;
}

/* ───────── événements ───────── */
app.addEventListener("click",e=>{
  const g=e.target.closest("[data-go]");if(g){go(g.dataset.go);return}
  const a=e.target.closest("[data-act]");if(!a)return;
  const act=a.dataset.act,v=a.dataset.v;
  switch(act){
    case "layout":S.layout=S.layout==="ruche"?"grille":"ruche";store.set("layout",S.layout);render();break;
    case "regcat":S.regCat=v;render();break;
    case "bzgrp":S.bzGrp=v;S.bzCat="Tout";render();break;
    case "bzcat":S.bzCat=v;render();break;
    case "dmode":S.diceMode=v;S.last=null;render();break;
    case "diff":S.dice.diff=+v;store.set("dice",S.dice);render();break;
    case "step":{const k=a.dataset.k,d=+a.dataset.d;
      if(k==="vb")S.diceB.va=Math.max(0,Math.min(30,S.diceB.va+d));
      else{const lim={va:[0,30],ego:[0,3],mod:[-12,12]}[k];S.dice[k]=Math.max(lim[0],Math.min(lim[1],S.dice[k]+d));store.set("dice",S.dice)}
      render();break;}
    case "roll":{const d=S.dice;
      if(S.diceMode==="simple"){const r=rollPool(d.va+d.ego+d.mod);S.last={mode:"simple",a:r,diff:d.diff};pushHist(`${r.n}D${d.diff?" (diff. "+d.diff+")":""}`,`${r.succ} S · ${r.trig} DC${d.diff?(r.succ>=d.diff?" · réussite":r.ones>r.succ?" · critique":" · échec"):""}`)}
      else{const A=rollPool(d.va+d.ego+d.mod),B=rollPool(S.diceB.va);S.last={mode:"conf",a:A,b:B};pushHist(`Confrontation ${A.n}D / ${B.n}D`,`${A.succ}-${B.succ} S · ${A.trig}-${B.trig} DC`)}
      render();break;}
    case "quick":{if(v==="init"){S.diceMode="simple";S.dice.diff=0;store.set("dice",S.dice);toast("Mettez la VA de PSY+Réactivité puis lancez");render();break}
      const r=Array.from({length:+v},()=>1+rnd(6));pushHist(`${v}D6`,r.join(" + ")+(r.length>1?" = "+r.reduce((x,y)=>x+y,0):""));render();break;}
    case "gentab":S.genTab=v;render();break;
    case "gen":doGen();break;
    case "copynpc":{const p=S.genOut.v;copy(`${p.nom} — ${p.c}, ${p.culte}, ${p.con.n}\nMotivation : ${p.con.m}\nApparence : ${p.phys}\nAttitude : ${p.att}\nSecret : ${p.sec}\nNiveau ${p.rg.n} : VA ${p.rg.va}, Blessures ${p.rg.bs}, Traumatismes ${p.rg.tr}`);break;}
    case "addfighter":{const p=S.genOut.v;S.fighters.push({id:Date.now(),n:p.nom,ini:0,dc:0,bs:0,bsM:+p.rg.bs,tr:0,trM:+p.rg.tr,eg:8,egM:8,done:false});store.set("fighters",S.fighters);toast("Ajouté à Outils › Combat");break;}
    case "outtab":S.outTab=v;render();break;
    case "fm":{const f=S.fighters.find(x=>String(x.id)===a.dataset.id),k=a.dataset.k,d=+a.dataset.d;if(!f)break;
      const max={bs:f.bsM,tr:f.trM,eg:f.egM}[k];f[k]=Math.max(k==="ini"?0:0,(f[k]||0)+d);if(max&&k!=="eg")f[k]=Math.min(max,f[k]);if(k==="dc"&&f[k]>6)f[k]=0;
      if(k==="bs"&&d>0&&(f.bs>=f.bsM)&&f._bsfull){f.tr=Math.min(f.trM,f.tr+1)}f._bsfull=f.bs>=f.bsM;
      store.set("fighters",S.fighters);render();break;}
    case "done":{const f=S.fighters.find(x=>String(x.id)===a.dataset.id);f.done=!f.done;store.set("fighters",S.fighters);render();break;}
    case "delf":S.fighters=S.fighters.filter(x=>String(x.id)!==a.dataset.id);store.set("fighters",S.fighters);render();break;
    case "nextround":S.round++;S.fighters.forEach(f=>{f.done=false;f.ini=0;f.dc=0});store.set("round",S.round);store.set("fighters",S.fighters);toast("Nouveau round : relancez l’Initiative");render();break;
    case "resetfight":S.round=1;S.fighters=S.fighters.filter(f=>CAMPAGNE.groupe.some(p=>p.n===f.n));S.fighters.forEach(f=>{f.done=false;f.ini=0;f.dc=0});store.set("round",1);store.set("fighters",S.fighters);render();break;
    case "tarot":{const n=+v,a1=rnd(22);let a2=rnd(21);if(a2>=a1)a2++;S.oracle=n===1?[a1]:[a1,a2];render();break;}
    case "camptab":S.campTab=v;render();break;
    case "zoom":{const z=document.createElement("div");z.className="zoom"+(a.dataset.wide?" wide":"");z.innerHTML=`<img src="${a.dataset.src}" alt=""><button class="x" aria-label="Fermer">×</button>`;z.addEventListener("click",ev=>{if(ev.target.closest(".x")||ev.target===z)z.remove()});document.body.appendChild(z);break;}
    case "stamp":{const ta=$("#notes");const d=new Date().toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"});ta.value=(ta.value?ta.value+"\n\n":"")+"— "+d+" —\n";store.set("notes",ta.value);ta.focus();break;}
    case "copynotes":copy($("#notes").value);break;
  }
});
app.addEventListener("input",e=>{
  const k=e.target.dataset.in;if(!k)return;const v=e.target.value;
  if(k==="regq"){S.regQ=v;S._focusQ=true;render()}
  if(k==="bzq"){S.bzQ=v;S._focusQ=true;render()}
  if(k==="notes")store.set("notes",v);
  if(["dbase","df","ddc","darm","dpot"].includes(k)){S.dmg[{dbase:"base",df:"f",ddc:"dc",darm:"arm",dpot:"pot"}[k]]=v;const r=$(".result .tally");if(r){const base=calcBase(S.dmg.base,+S.dmg.f||0);const tot=base==null?null:base+(+S.dmg.dc||0)+(+S.dmg.pot||0);r.innerHTML=`<span><b>${tot??"–"}</b>dégâts</span><span><b>${tot==null?"–":Math.max(0,tot-(+S.dmg.arm||0))}</b>blessures</span>`}}
});
app.addEventListener("change",e=>{
  const k=e.target.dataset.in;if(!k)return;const v=e.target.value;
  if(k==="bzculte"){S.bzCulte=v;render()}
  if(k==="gculture"){S.gen.culture=v}
  if(k==="gculte"){S.gen.culte=v}
  if(k==="gsexe"){S.gen.sexe=v}
  if(k==="dweap"){S.dmg.base=v;render()}
});
app.addEventListener("submit",e=>{
  if(e.target.dataset.form!=="addf")return;e.preventDefault();const f=new FormData(e.target);
  const bsM=+f.get("bsM")||6,trM=+f.get("trM")||4,eg=+f.get("eg")||8;
  S.fighters.push({id:Date.now(),n:String(f.get("n")).trim()||"Adversaire",ini:+f.get("ini")||0,dc:0,bs:0,bsM,tr:0,trM,eg,egM:eg,done:false});store.set("fighters",S.fighters);render();
});

/* démarrage */
const h=(location.hash||"").slice(1);
S.view=SECTIONS.some(s=>s.id===h)?h:"home";
render();
})();
