/* Shared, framework-free navigation for the independent Learning Lab pages. */
(() => {
  'use strict';
  const CHAPTERS = [
    ['index.html','⌂','Übersicht'],
    ['00_glossar.html','00','Glossar A–Z'],
    ['01_dna_rna.html','01','DNA & RNA'],
    ['02_replikation.html','02','Replikation'],
    ['03_transkription.html','03','Transkription'],
    ['04_translation.html','04','Translation'],
    ['05_mutationen.html','05','Mutationen'],
    ['06_zellkarte.html','06','Zellkarte'],
    ['07_rna_typen.html','07','RNA-Typen']
  ];
  const current = decodeURIComponent(location.pathname.split('/').pop()) || 'index.html';
  const esc = (s) => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
  const header = document.querySelector('.top, .app > header');
  if (!header) return;
  const skip = document.createElement('a');
  skip.href = '#lab-content'; skip.className='labSkip';skip.textContent='Zum Inhalt springen';
  document.body.prepend(skip);
  const main = document.querySelector('main');if(main)main.id ||= 'lab-content';
  const menuButton = document.createElement('button');
  menuButton.type='button';menuButton.className='labMenuButton';menuButton.textContent='☰ Menü';
  menuButton.setAttribute('aria-controls','lab-global-nav');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Kapitelnavigation öffnen');
  header.prepend(menuButton);
  const themeButton = document.createElement('button');
  themeButton.type='button';themeButton.className='labThemeButton';
  themeButton.setAttribute('aria-label','Darstellung zwischen hell und dunkel wechseln');
  header.append(themeButton);
  const backdrop = document.createElement('div'); backdrop.className='labNavBackdrop';backdrop.setAttribute('aria-hidden','true');
  const nav = document.createElement('aside'); nav.className='labGlobalNav';nav.id='lab-global-nav';nav.setAttribute('aria-label','Lernlabor-Navigation');
  nav.setAttribute('aria-hidden','true');
  nav.innerHTML=`<div class="labBrand"><div class="labNavHead"><div><div class="labWordmark">LEARNING<br>LABS</div><span class="labSubtitle">DNA / RNA · Molekularbiologie</span></div><button type="button" class="labNavClose" aria-label="Navigation schließen">×</button></div></div><div class="labNavLabel">Kapitel / Forschung</div><nav class="labNavLinks" aria-label="Kapitel">${CHAPTERS.map(([file,num,title])=>`<a href="${esc(file)}"${current===file?' aria-current="page"':''}><span>${num}</span>${esc(title)}</a>`).join('')}</nav><div class="labNavFoot">MODERN OBJECTIVITY / V0.1<br><b>Beobachten · Verändern · Verstehen</b><br><small>Didaktisch vereinfachte Modelle</small></div>`;
  document.body.append(backdrop,nav);
  const closeButton=nav.querySelector('.labNavClose');
  function setOpen(open){nav.classList.toggle('open',open);backdrop.classList.toggle('visible',open);menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Kapitelnavigation schließen':'Kapitelnavigation öffnen');nav.setAttribute('aria-hidden',String(!open));if(open){closeButton.focus()}else{menuButton.focus()}}
  menuButton.addEventListener('click',()=>setOpen(!nav.classList.contains('open')));
  closeButton.addEventListener('click',()=>setOpen(false));
  backdrop.addEventListener('click',()=>setOpen(false));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');backdrop.classList.remove('visible')}));
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open'))setOpen(false)});
  function setTheme(dark){document.body.classList.toggle('lab-dark',dark);themeButton.textContent=dark?'☀ Hell':'◐ Dunkel';themeButton.setAttribute('aria-pressed',String(dark));try{localStorage.setItem('learning-lab-theme',dark?'dark':'light')}catch{}}
  let dark=false;try{dark=localStorage.getItem('learning-lab-theme')==='dark'}catch{}
  setTheme(dark);themeButton.addEventListener('click',()=>setTheme(!document.body.classList.contains('lab-dark')));
})();