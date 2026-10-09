/** PERSONALIZE AQUI ANTES DE PUBLICAR. */
export const profile = {
  name: 'Mayko Sulivan',
  initials: 'MS',
  role: 'Desenvolvedor Web & Soluções Digitais',
  email: '', // Adicione seu e-mail profissional quando desejar
  whatsapp: '5592991489340', // WhatsApp profissional com DDI 55 e DDD 92
  github: 'https://github.com/MaykonSulivan', // Perfil público do GitHub
  linkedin: '', // URL completa do seu LinkedIn
  city: 'Brasil · Atendimento remoto',
  available: true,
}
export type Project = {
  number: string
  category: string
  title: string
  description: string
  tags: string[]
  style: 'industrial' | 'inventory' | 'commerce' | 'wellness'
  privacyNote?: string
  link?: string
  repository?: string
}
export const projects: Project[] = [
  {number:'01',category:'DASHBOARD INDUSTRIAL',title:'Gemba Vision',description:'Painel gerencial para acompanhamento de produção, qualidade, desempenho e indicadores operacionais.',tags:['JavaScript','APIs','Dashboards'],style:'industrial',privacyNote:'Demonstração pública mediante autorização.',repository:'https://github.com/MaykonSulivan/gemba-vision'},
  {number:'02',category:'GESTÃO & AUTOMAÇÃO',title:'Controle Inteligente de Estoque',description:'Estrutura de movimentações, acompanhamento por modelo e consolidação de estoque inacabado e acabado.',tags:['Excel','Automação','Power BI'],style:'inventory'},
  {number:'03',category:'E-COMMERCE',title:'ReVest',description:'Plataforma para produtos personalizados com carrinho, orçamento e integração de atendimento por WhatsApp.',tags:['React','TypeScript','UX/UI'],style:'commerce',repository:'https://github.com/MaykonSulivan/Revest'},
  {number:'04',category:'SITE PROFISSIONAL',title:'Agendamento para Consultório',description:'Experiência digital para apresentação de serviços, informações essenciais e solicitação de agendamento.',tags:['React','Responsivo','WhatsApp'],style:'wellness',repository:'https://github.com/MaykonSulivan/PsiCologa-Neila-Maria--'},
]
export const services = [
  {id:'01',icon:'code',title:'Sites e landing pages',description:'Páginas rápidas, elegantes e responsivas para apresentar sua marca e converter visitantes em clientes.'},
  {id:'02',icon:'chart',title:'Dashboards gerenciais',description:'Indicadores claros para acompanhar resultados, desempenho e tomar decisões baseadas em dados.'},
  {id:'03',icon:'layers',title:'Sistemas sob medida',description:'Soluções de gestão, formulários, processos e ferramentas internas para a rotina do seu negócio.'},
  {id:'04',icon:'zap',title:'Automações e integrações',description:'Integração com APIs, planilhas e fluxos para reduzir trabalho repetitivo e erros manuais.'},
]