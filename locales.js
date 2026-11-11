// Portuguese source strings with Latin American Spanish and US English translations.
const translations = [
['PRÉVIA COMERCIAL','VISTA PREVIA COMERCIAL','MARKETING PREVIEW'],
['Conteúdo e oferta em validação','Contenido y oferta en revisión','Content and offer under review'],
['Como funciona','Cómo funciona','How it works'],['Benefícios','Beneficios','Benefits'],['Dúvidas','Preguntas','FAQ'],['Conhecer o teste','Conocer la prueba','Explore the trial'],
['TECNOLOGIA PARA QUEM FAZ MÓVEIS','TECNOLOGÍA PARA QUIENES CREAN MUEBLES','TECHNOLOGY FOR FURNITURE MAKERS'],
['Seu próximo projeto.','Tu próximo proyecto.','Your next project.'],['Mais perto de','Más cerca de','One step closer'],['virar realidade.','hacerse realidad.','to reality.'],
['Do desenho do móvel à preparação para produzir. Conheça uma forma de conectar projeto, peças e plano de corte no dia a dia da sua marcenaria.','Del diseño del mueble a la preparación para producir. Descubre cómo conectar el diseño, las piezas y el plan de corte en el día a día de tu carpintería.','From furniture design to production planning. Discover a way to connect designs, parts, and cutting layouts in your everyday woodworking workflow.'],
['Quero conhecer o WoodQuote Pro','Quiero conocer WoodQuote Pro','Explore WoodQuote Pro'],['Explore o fluxo','Explora el proceso','Explore the workflow'],
['Feito para marcenarias. Pensado para a produção.','Creado para carpinterías. Pensado para la producción.','Built for woodworking shops. Designed for production.'],
['DA IDEIA À OFICINA','DE LA IDEA AL TALLER','FROM IDEA TO WORKSHOP'],['01 — PROJETO','01 — DISEÑO','01 — DESIGN'],
['Ilustração de um armário de madeira em perspectiva, com portas e prateleiras','Ilustración en perspectiva de un gabinete de madera con puertas y repisas','Perspective illustration of a wooden cabinet with doors and shelves'],
['PROJETE EM 3D','DISEÑA EN 3D','DESIGN IN 3D'],['CADA PEÇA CONTA','CADA PIEZA CUENTA','EVERY PART COUNTS'],
['Uma visão do conjunto','Una visión del conjunto','See the whole picture'],['Antes da primeira chapa cortada.','Antes de cortar el primer tablero.','Before cutting the first panel.'],
['Ilustração conceitual · não é uma captura do software','Ilustración conceptual · no es una captura del software','Concept illustration · not a software screenshot'],
['MENOS ETAPAS DESCONECTADAS.','MENOS ETAPAS DESCONECTADAS.','FEWER DISCONNECTED STEPS.'],['Projeto 3D','Diseño 3D','3D design'],['Peças','Piezas','Parts'],['Plano de corte','Plan de corte','Cutting layout'],['Produção','Producción','Production'],
['SUA ROTINA PODE SER DIFERENTE','TU RUTINA PUEDE SER DIFERENTE','A BETTER WAY TO WORK'],['O trabalho é sob medida.','Tu trabajo es a medida.','Your work is custom.'],['O retrabalho não precisa ser.','Repetirlo no debería ser parte del proceso.','Rework shouldn’t be routine.'],
['Quem vive de marcenaria sabe: uma decisão no projeto acompanha a peça até a montagem.','Quien trabaja en carpintería lo sabe: una decisión de diseño acompaña a cada pieza hasta el armado.','Every woodworker knows: a design decision follows each part all the way to assembly.'],
['01 / TEMPO','01 / TIEMPO','01 / TIME'],['Menos contas espalhadas.','Menos cálculos dispersos.','Keep your calculations together.'],
['Conecte as informações do projeto e das peças para organizar a preparação da produção.','Conecta la información del diseño y las piezas para organizar la preparación de la producción.','Connect design and part information to organize production planning.'],
['02 / CLAREZA','02 / CLARIDAD','02 / CLARITY'],['Veja antes de produzir.','Visualiza antes de producir.','See it before you build it.'],
['A visualização em 3D ajuda a apresentar a ideia e conversar sobre o móvel antes de levá-lo à oficina.','La visualización 3D ayuda a presentar la idea y revisar el mueble antes de llevarlo al taller.','3D visualization helps you present the idea and discuss the furniture before it reaches the workshop.'],
['03 / PLANEJAMENTO','03 / PLANIFICACIÓN','03 / PLANNING'],['Cada chapa merece atenção.','Cada tablero merece atención.','Every panel deserves a plan.'],
['Leve o planejamento de corte para dentro do fluxo, com uma visão das peças que compõem o projeto.','Integra la planificación de corte al proceso con una visión de las piezas que componen el diseño.','Bring cutting layouts into your workflow with a view of the parts that make up your design.'],
['UM FLUXO. DO COMEÇO AO FIM.','UN PROCESO. DE PRINCIPIO A FIN.','ONE WORKFLOW. START TO FINISH.'],['Da ideia na tela','De la idea en pantalla','From an idea on screen'],['à próxima etapa na oficina.','al siguiente paso en el taller.','to the next step in the shop.'],
['Explore a jornada proposta pelo WoodQuote Pro. Selecione cada etapa para saber mais.','Explora el proceso propuesto por WoodQuote Pro. Selecciona cada etapa para conocer más.','Explore the workflow proposed by WoodQuote Pro. Select a step to learn more.'],
['Projete o móvel','Diseña el mueble','Design your furniture'],['Organize as peças','Organiza las piezas','Organize the parts'],['Planeje o corte','Planifica el corte','Plan your cuts'],['Prepare a produção','Prepara la producción','Prepare for production'],
['PROJETO & VISUALIZAÇÃO','DISEÑO Y VISUALIZACIÓN','DESIGN & VISUALIZATION'],['Comece enxergando o resultado.','Empieza visualizando el resultado.','Start with the result in view.'],
['Visualize o móvel em 3D para desenvolver a ideia e apresentar o projeto com mais clareza.','Visualiza el mueble en 3D para desarrollar la idea y presentar el diseño con mayor claridad.','View your furniture in 3D to develop the idea and present your design more clearly.'],['IDEIA → PROJETO','IDEA → DISEÑO','IDEA → DESIGN'],
['PROJETO & PEÇAS','DISEÑO Y PIEZAS','DESIGN & PARTS'],['O conjunto começa em cada peça.','El conjunto empieza con cada pieza.','The whole starts with each part.'],
['A geração de peças descrita na proposta conecta o desenho do móvel às informações necessárias para planejar a produção.','La generación de piezas descrita en la propuesta conecta el diseño del mueble con la información necesaria para planificar la producción.','The part generation described in the proposal connects furniture designs with the information needed to plan production.'],['PROJETO → PEÇAS','DISEÑO → PIEZAS','DESIGN → PARTS'],
['PEÇAS & PLANO DE CORTE','PIEZAS Y PLAN DE CORTE','PARTS & CUTTING LAYOUT'],['Planeje antes de cortar.','Planifica antes de cortar.','Plan before you cut.'],
['Organize o próximo passo com o plano de corte. O aproveitamento depende das peças, dos materiais e dos parâmetros de cada projeto.','Organiza el siguiente paso con el plan de corte. El aprovechamiento depende de las piezas, los materiales y los parámetros de cada proyecto.','Organize the next step with a cutting layout. Material utilization depends on the parts, materials, and settings for each project.'],['PEÇAS → CORTE','PIEZAS → CORTE','PARTS → CUTTING'],
['ARQUIVOS & PRODUÇÃO','ARCHIVOS Y PRODUCCIÓN','FILES & PRODUCTION'],['Leve o projeto para a oficina.','Lleva el diseño al taller.','Take your design to the shop.'],
['A proposta inclui preparação de arquivos DXF para o fluxo CNC. Formatos, máquinas e disponibilidade por plano precisam ser confirmados antes da contratação.','La propuesta incluye la preparación de archivos DXF para el proceso CNC. Los formatos, las máquinas compatibles y la disponibilidad por plan deben confirmarse antes de suscribirse.','The proposal includes DXF file preparation for CNC workflows. Formats, machine compatibility, and availability by plan must be confirmed before subscribing.'],['ARQUIVOS → PRODUÇÃO','ARCHIVOS → PRODUCCIÓN','FILES → PRODUCTION'],
['Representação ilustrativa do fluxo descrito na proposta.','Representación ilustrativa del proceso descrito en la propuesta.','Illustration of the workflow described in the proposal.'],
['MAIS CONTINUIDADE NA SUA ROTINA','MÁS CONTINUIDAD EN TU RUTINA','KEEP YOUR WORK MOVING'],['O projeto segue.','El proyecto avanza.','Your project moves forward.'],['A informação também.','La información también.','Your information does, too.'],
['Uma plataforma conectada faz sentido quando ajuda a levar o que foi planejado para a próxima etapa do trabalho.','Una plataforma conectada tiene sentido cuando ayuda a llevar lo planificado a la siguiente etapa del trabajo.','A connected platform makes sense when it helps carry your plans into the next stage of work.'],
['Processo desconectado','Proceso desconectado','Disconnected workflow'],['Com WoodQuote Pro*','Con WoodQuote Pro*','With WoodQuote Pro*'],['Desenho separado dos cálculos','Diseño separado de los cálculos','Designs separate from calculations'],['Projeto e peças no mesmo fluxo','Diseño y piezas en un mismo proceso','Designs and parts in one workflow'],['Explicar o móvel só no papel','Explicar el mueble solo en papel','Explaining furniture on paper alone'],['Apresentação visual em 3D','Presentación visual en 3D','Visual presentation in 3D'],['Planejar o corte à parte','Planificar el corte por separado','Planning cuts separately'],['Continuidade até o plano de corte','Continuidad hasta el plan de corte','A connected path to cutting layouts'],
['*Fluxo descrito na proposta. Recursos e disponibilidade por plano em validação.','*Proceso descrito en la propuesta. Funciones y disponibilidad por plan en revisión.','*Workflow described in the proposal. Features and availability by plan are under review.'],
['SEU PRÓXIMO PROJETO COMEÇA AQUI','TU PRÓXIMO PROYECTO EMPIEZA AQUÍ','YOUR NEXT PROJECT STARTS HERE'],['Conheça uma nova forma','Descubre una nueva forma','Discover a new way'],['de planejar sua produção.','de planificar tu producción.','to plan your production.'],
['O teste gratuito e a assinatura serão realizados diretamente no site principal do WoodQuote Pro.','La prueba gratuita y la suscripción se realizarán directamente en el sitio principal de WoodQuote Pro.','The free trial and subscription will be handled directly on the main WoodQuote Pro website.'],
['Conhecer o site do WoodQuote Pro','Visitar el sitio de WoodQuote Pro','Visit the WoodQuote Pro website'],
['Nesta prévia, o botão abre a página inicial. Link do teste, planos e condições aguardam confirmação.','En esta vista previa, el botón abre la página de inicio. El enlace de la prueba, los planes y las condiciones están pendientes de confirmación.','In this preview, the button opens the homepage. The trial link, plans, and terms are awaiting confirmation.'],
['ANTES DO PRIMEIRO PROJETO','ANTES DEL PRIMER PROYECTO','BEFORE YOUR FIRST PROJECT'],['Vamos tirar','Respondemos','Let’s answer'],['suas dúvidas.','tus preguntas.','your questions.'],
['Para quem é o WoodQuote Pro?','¿Para quién es WoodQuote Pro?','Who is WoodQuote Pro for?'],
['A proposta é atender profissionais que projetam e produzem móveis: marceneiros autônomos, marcenarias e empresas de móveis planejados.','La propuesta está dirigida a profesionales que diseñan y fabrican muebles: carpinteros independientes, talleres y empresas de muebles a medida.','The proposed audience is furniture design and production professionals: independent woodworkers, woodworking shops, and custom furniture companies.'],
['Onde faço o teste e a assinatura?','¿Dónde inicio la prueba y me suscribo?','Where do I start a trial and subscribe?'],
['No site principal do WoodQuote Pro. Esta página apresenta a solução e direciona você para lá.','En el sitio principal de WoodQuote Pro. Esta página presenta la solución y te dirige allí.','On the main WoodQuote Pro website. This page introduces the solution and takes you there.'],
['Quanto tempo dura o teste gratuito?','¿Cuánto dura la prueba gratuita?','How long is the free trial?'],
['A duração e as condições do teste serão informadas aqui após a confirmação da oferta. Confira as condições vigentes no site principal antes de se cadastrar.','La duración y las condiciones de la prueba se publicarán aquí una vez confirmada la oferta. Revisa las condiciones vigentes en el sitio principal antes de registrarte.','The trial duration and terms will appear here once the offer is confirmed. Check the current terms on the main website before signing up.'],
['Quais recursos estão incluídos em cada plano?','¿Qué funciones incluye cada plan?','What features are included in each plan?'],
['Os planos e seus recursos ainda estão sendo confirmados para esta página. Consulte a oferta no site principal, incluindo compatibilidade e requisitos de produção.','Los planes y sus funciones aún se están confirmando para esta página. Consulta la oferta en el sitio principal, incluyendo compatibilidad y requisitos de producción.','Plans and features are still being confirmed for this page. Review the offer on the main website, including compatibility and production requirements.'],
['Do projeto à produção.','Del diseño a la producción.','From design to production.'],['Ir para o site principal ↗','Ir al sitio principal ↗','Visit the main website ↗'],['WoodQuote Pro · Prévia para revisão','WoodQuote Pro · Vista previa para revisión','WoodQuote Pro · Preview for review'],
['WoodQuote Pro, início','WoodQuote Pro, inicio','WoodQuote Pro, home'],['Menu principal','Menú principal','Main navigation'],['Etapas do projeto','Etapas del proyecto','Project steps'],['WoodQuote Pro — logotipo original','WoodQuote Pro — logotipo original','WoodQuote Pro — original logo'],
['WoodQuote Pro — Do projeto à produção','WoodQuote Pro — Del diseño a la producción','WoodQuote Pro — From design to production'],
['Conheça o WoodQuote Pro: projeto de móveis, visualização 3D e preparação para produção em uma única plataforma.','Conoce WoodQuote Pro: diseño de muebles, visualización 3D y preparación para la producción en una sola plataforma.','Discover WoodQuote Pro: furniture design, 3D visualization, and production planning in one platform.']
];
const localeOptions = ['pt-BR', 'es-419', 'en-US'];
const dictionary = new Map(translations.map(row => [row[0], row]));
let activeLocale = 'pt-BR';
window.translate = value => dictionary.get(value)?.[localeOptions.indexOf(activeLocale)] ?? value;
const textBindings = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  if (node.parentElement.closest('script, [data-language-selector], #step-panel')) continue;
  if (dictionary.has(node.textContent.trim())) textBindings.push([node, node.textContent]);
}
const attrBindings = [];
document.querySelectorAll('[aria-label],[alt]').forEach(el => {
  ['aria-label','alt'].forEach(attr => { const value = el.getAttribute(attr); if (dictionary.has(value)) attrBindings.push([el,attr,value]); });
});
const originalTitle = document.title;
const metaDescription = document.querySelector('meta[name="description"]');
const originalDescription = metaDescription.content;
const panelNote = document.querySelector('#step-panel small');
const originalNote = panelNote.textContent;
function setLocale(locale, updateURL = true) {
  activeLocale = localeOptions.includes(locale) ? locale : 'pt-BR';
  document.documentElement.lang = activeLocale;
  textBindings.forEach(([node, value]) => { node.textContent = value.replace(value.trim(), window.translate(value.trim())); });
  attrBindings.forEach(([el,attr,value]) => el.setAttribute(attr,window.translate(value)));
  document.title = window.translate(originalTitle);
  metaDescription.content = window.translate(originalDescription);
  panelNote.textContent = window.translate(originalNote);
  selectStep(currentStep);
  document.querySelectorAll('[data-locale]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.locale === activeLocale)));
  document.querySelector('[data-language-selector]').setAttribute('aria-label', activeLocale === 'pt-BR' ? 'Selecionar idioma' : activeLocale === 'es-419' ? 'Seleccionar idioma' : 'Select language');
  if (updateURL) {
    const url = new URL(window.location.href); url.searchParams.set('lang',activeLocale);
    try { history.replaceState(null,'',url); } catch (_) { /* File previews may block history updates. */ }
  }
}
document.querySelectorAll('[data-locale]').forEach(button => button.addEventListener('click', () => setLocale(button.dataset.locale)));
setLocale(new URLSearchParams(window.location.search).get('lang'),false);
