// Clínica fictícia — material de demonstração para vendas.
// Toda referência (nome, equipe, depoimentos, endereço) é ilustrativa.

export const clinic = {
  nome: 'Aurora Odontologia',
  nomeCurto: 'Aurora',
  tagline: 'Odontologia integrada',
  positioning:
    'Clínica boutique de odontologia integrada — implantes, ortodontia digital, estética e prevenção.',

  endereco: {
    rua: 'Av. Djalma Batista, 1.661 — Torre B, 12º andar',
    bairro: 'Adrianópolis',
    cidade: 'Manaus',
    estado: 'AM',
    cep: '69057-070',
    linhaCompleta: 'Av. Djalma Batista, 1.661, Torre B · Adrianópolis · Manaus/AM',
  },

  whatsapp: {
    e164: '+55 92 0000-0000',
    raw: '5592900000000',
    link: 'https://wa.me/5592900000000',
    mensagemPadrao:
      'Olá! Vim pelo site da Aurora e gostaria de agendar uma consulta.',
  },

  maps: {
    link: 'https://www.google.com/maps/search/?api=1&query=Adrian%C3%B3polis%20Manaus',
    embedQuery: 'Av.+Djalma+Batista,+1661+-+Adrian%C3%B3polis,+Manaus+-+AM',
  },

  rating: {
    valor: 4.9,
    total: 187,
    fonte: 'Google',
  },

  kpis: [
    { valor: '12+', label: 'anos de atuação' },
    { valor: '8.500+', label: 'pacientes atendidos' },
    { valor: '4.9/5', label: '187 avaliações no Google' },
    { valor: '12', label: 'especialidades' },
  ],

  selos: [
    'CRO-AM ativo',
    'Anvisa regular',
    'Esterilização autoclavada',
    'Scanner intra-oral 3D',
    'Sedação consciente',
  ],

  horarios: [
    { dia: 'Segunda a Sexta', horario: '08h às 20h' },
    { dia: 'Sábado', horario: '08h às 14h' },
    { dia: 'Domingo', horario: 'Fechado · plantão de urgência' },
  ],

  especialidades: [
    {
      slug: 'implantes',
      titulo: 'Implantes',
      descricao: 'Implantes unitários, múltiplos e protocolos com carga imediata, planejados em 3D.',
      icone: 'tooth',
    },
    {
      slug: 'ortodontia',
      titulo: 'Ortodontia digital',
      descricao: 'Alinhadores transparentes e aparelhos auto-ligados com simulação digital do resultado.',
      icone: 'align',
    },
    {
      slug: 'estetica',
      titulo: 'Estética dental',
      descricao: 'Facetas em resina e cerâmica, clareamento e harmonização do sorriso.',
      icone: 'sparkle',
    },
    {
      slug: 'endodontia',
      titulo: 'Endodontia',
      descricao: 'Tratamento de canal microscópico com instrumentos rotatórios de última geração.',
      icone: 'wave',
    },
    {
      slug: 'periodontia',
      titulo: 'Periodontia',
      descricao: 'Saúde da gengiva, raspagem, enxertos e cirurgia plástica periodontal.',
      icone: 'leaf',
    },
    {
      slug: 'odontopediatria',
      titulo: 'Odontopediatria',
      descricao: 'Atendimento humanizado para crianças, com foco em prevenção e primeira consulta sem trauma.',
      icone: 'child',
    },
    {
      slug: 'cirurgia',
      titulo: 'Cirurgia oral',
      descricao: 'Extrações, cirurgias de sisos e enxertos ósseos guiados por tomografia.',
      icone: 'shield',
    },
    {
      slug: 'protese',
      titulo: 'Prótese e DTM',
      descricao: 'Próteses fixas e removíveis, tratamento de bruxismo e disfunção da ATM.',
      icone: 'gear',
    },
  ],

  diferenciais: [
    {
      titulo: 'Diagnóstico em 3D',
      descricao: 'Scanner intra-oral e tomografia integrados — você vê seu sorriso antes do tratamento começar.',
      kicker: '01',
    },
    {
      titulo: 'Esterilização hospitalar',
      descricao: 'Autoclave classe B com ciclos auditáveis. Cada instrumento embalado e rastreado.',
      kicker: '02',
    },
    {
      titulo: 'Sedação consciente',
      descricao: 'Para pacientes com ansiedade — acompanhamento de anestesista durante toda a consulta.',
      kicker: '03',
    },
    {
      titulo: 'Plano de tratamento claro',
      descricao: 'Orçamento aberto, etapas explicadas e horários previsíveis. Sem surpresas no caixa.',
      kicker: '04',
    },
  ],

  equipe: [
    {
      nome: 'Dra. Helena Andrade',
      titulo: 'Diretora clínica · Implantes e Reabilitação',
      cro: 'CRO-AM 12.345',
      formacao: 'Mestre em Implantodontia (USP) · 14 anos de clínica',
    },
    {
      nome: 'Dr. Rafael Couto',
      titulo: 'Ortodontia digital · Alinhadores',
      cro: 'CRO-AM 18.910',
      formacao: 'Especialista em Ortodontia (UFRGS) · certificado Invisalign Diamond',
    },
    {
      nome: 'Dra. Camila Vasconcelos',
      titulo: 'Estética e harmonização',
      cro: 'CRO-AM 22.470',
      formacao: 'Especialista em Dentística e HOF · referência regional em facetas',
    },
  ],

  casos: [
    {
      titulo: 'Reabilitação total com implantes',
      descricao: '12 meses · protocolo superior com carga imediata',
      img: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=80&auto=format&fit=crop',
    },
    {
      titulo: 'Alinhadores invisíveis',
      descricao: '9 meses · correção de apinhamento e mordida',
      img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80&auto=format&fit=crop',
    },
    {
      titulo: 'Facetas em cerâmica',
      descricao: '3 sessões · 8 facetas com mock-up digital aprovado pela paciente',
      img: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=900&q=80&auto=format&fit=crop',
    },
    {
      titulo: 'Clareamento + harmonização',
      descricao: '6 semanas · clareamento de consultório + ajuste estético',
      img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=80&auto=format&fit=crop',
    },
  ],

  depoimentos: [
    {
      nome: 'Mariana S.',
      contexto: 'Implantes + protocolo',
      texto:
        'Foi a primeira clínica em que entendi exatamente o que ia ser feito. Mostraram o planejamento em 3D, prazo, valor — e cumpriram tudo. Voltei a sorrir sem pensar duas vezes.',
      estrelas: 5,
    },
    {
      nome: 'Roberto A.',
      contexto: 'Alinhadores invisíveis',
      texto:
        'Tinha medo de aparelho fixo, e eles me apresentaram os alinhadores com simulação digital. Em 9 meses os dentes estavam alinhados e ninguém percebeu que eu usava.',
      estrelas: 5,
    },
    {
      nome: 'Luana M.',
      contexto: 'Facetas em cerâmica',
      texto:
        'Cuidado de outro nível. Cada detalhe é pensado, da recepção ao acompanhamento depois. Indico de olhos fechados.',
      estrelas: 5,
    },
  ],

  faq: [
    {
      pergunta: 'Como é a primeira consulta?',
      resposta:
        'A primeira consulta inclui anamnese, exame clínico, fotografias intra-orais e, quando indicado, escaneamento 3D. Em seguida você recebe um plano de tratamento por escrito com etapas, prazos e valores.',
    },
    {
      pergunta: 'Vocês atendem convênio?',
      resposta:
        'Atendemos os principais convênios odontológicos da região. Caso o seu não esteja na lista, oferecemos opções de pagamento parcelado e reembolso facilitado.',
    },
    {
      pergunta: 'Tenho muito medo de dentista. Como vocês ajudam?',
      resposta:
        'Trabalhamos com sedação consciente acompanhada por anestesista, além de protocolos de atendimento humanizado. Você define o ritmo da consulta junto com a equipe.',
    },
    {
      pergunta: 'Quanto tempo dura um tratamento com alinhadores?',
      resposta:
        'Depende do caso, mas a média fica entre 6 e 18 meses. Antes de começar, você vê uma simulação digital do resultado final.',
    },
    {
      pergunta: 'Vocês atendem crianças?',
      resposta:
        'Sim. A Aurora tem equipe de odontopediatria com atendimento exclusivo para crianças a partir de 1 ano, em ambiente lúdico e com foco em prevenção.',
    },
    {
      pergunta: 'Como agendar uma avaliação?',
      resposta:
        'Pelo WhatsApp ou pelo botão "Agendar" no topo da página. Em até 1 hora útil retornamos com horários disponíveis.',
    },
  ],

  seo: {
    title: 'Aurora Odontologia — Clínica integrada em Manaus · Implantes, Ortodontia, Estética',
    description:
      'Clínica boutique de odontologia integrada em Adrianópolis, Manaus. Implantes, ortodontia digital, estética dental, odontopediatria e mais. Atendimento humanizado, tecnologia 3D, sedação consciente.',
    keywords:
      'odontologia Manaus, implantes Manaus, ortodontia digital Manaus, dentista Adrianópolis, clínica odontológica boutique, alinhadores invisíveis Manaus',
  },
};

export const whatsappLink = (mensagem?: string) => {
  const base = clinic.whatsapp.link;
  const msg = mensagem ?? clinic.whatsapp.mensagemPadrao;
  return `${base}?text=${encodeURIComponent(msg)}`;
};

// Imagens oficiais geradas via Higgsfield (Nano Banana Pro) — material de demo
export const imagens = {
  hero: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DTB06TTf3bHRa63ATzDQau3D0m/hf_20260522_195415_6faafcba-5572-40ca-9f64-a005addfbca2_min.webp',
  dentista: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DTB06TTf3bHRa63ATzDQau3D0m/hf_20260522_195419_6deb3f01-9cd3-44de-b515-1144ff407797_min.webp',
  scanner: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DTB06TTf3bHRa63ATzDQau3D0m/hf_20260522_195422_28062935-79f0-402f-a87e-935ec9020bc8_min.webp',
  ambiente: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DTB06TTf3bHRa63ATzDQau3D0m/hf_20260522_195425_64a2d10d-7b82-4d6f-bf1d-94350a1b88fe_min.webp',
};
