// Replace only after the exact registration route and trial terms are confirmed.
const MAIN_SITE_URL = 'https://woodquotepro.com/';
const steps = [
  ['PROJETO & VISUALIZAÇÃO', 'Comece enxergando o resultado.', 'Visualize o móvel em 3D para desenvolver a ideia e apresentar o projeto com mais clareza.', 'IDEIA → PROJETO'],
  ['PROJETO & PEÇAS', 'O conjunto começa em cada peça.', 'Transforme o desenho do móvel em informações de peças para organizar os próximos passos da produção.', 'PROJETO → PEÇAS'],
  ['PEÇAS & PLANO DE CORTE', 'Planeje antes de cortar.', 'Organize o próximo passo com o plano de corte. O aproveitamento depende das peças, dos materiais e dos parâmetros de cada projeto.', 'PEÇAS → CORTE'],
  ['ARQUIVOS & PRODUÇÃO', 'Leve o projeto para a oficina.', 'Prepare arquivos DXF para seu fluxo CNC. Confira os recursos do plano e os requisitos da sua máquina para escolher a configuração adequada ao seu trabalho.', 'ARQUIVOS → PRODUÇÃO']
];
const tabs = [...document.querySelectorAll('[role="tab"]')];
let currentStep = 0;
function selectStep(index, focus = false) {
  currentStep = index;
  const t = window.translate || (value => value);
  const panel = document.querySelector('#step-panel');
  tabs.forEach((tab, i) => { tab.setAttribute('aria-selected', String(i === index)); tab.tabIndex = i === index ? 0 : -1; });
  panel.setAttribute('aria-labelledby', tabs[index].id);
  panel.querySelector('.panel-label').textContent = t(steps[index][0]);
  panel.querySelector('h3').textContent = t(steps[index][1]);
  panel.querySelector('#step-description').textContent = t(steps[index][2]);
  panel.querySelector('.dimension').textContent = t(steps[index][3]);
  if (focus) tabs[index].focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectStep(index));
  tab.addEventListener('keydown', event => {
    const key = event.key;
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(key)) return;
    event.preventDefault();
    selectStep(key === 'Home' ? 0 : key === 'End' ? tabs.length - 1 : (index + (key === 'ArrowDown' ? 1 : -1) + tabs.length) % tabs.length, true);
  });
});
// Forward only campaign attribution fields, never arbitrary query parameters.
// No cookies, storage or advertising pixels are used on this marketing page.
const source = new URLSearchParams(window.location.search);
document.querySelectorAll('[data-main-site]').forEach(link => {
  const destination = new URL(MAIN_SITE_URL);
  ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].forEach(key => {
    const value = source.get(key);
    if (value && value.length <= 300) destination.searchParams.set(key, value);
  });
  link.href = destination.href;
});
document.querySelector('#year').textContent = new Date().getFullYear();

