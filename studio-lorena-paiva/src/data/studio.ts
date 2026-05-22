export const studio = {
  nome: 'Studio Lorena Paiva',
  tagline: 'Salão de Beleza',
  proprietaria: 'Lorena Paiva',
  endereco: {
    rua: 'R. José Faustino, 13',
    bairro: 'Colônia Santo Antônio',
    cidade: 'Manaus',
    estado: 'AM',
    cep: '69093-120',
    linhaCompleta: 'R. José Faustino, 13 — Colônia Santo Antônio, Manaus/AM',
  },
  whatsapp: {
    e164: '+55 92 98436-2465',
    raw: '5592984362465',
    link: 'https://wa.me/5592984362465',
    mensagemPadrao:
      'Olá Lorena! Vi o site e gostaria de agendar um horário no Studio.',
  },
  maps: {
    link: 'https://www.google.com/maps/search/?api=1&query=Studio%20Lorena%20Paiva&query_place_id=ChIJORfvMlYbbJIRmVo1erA8Kiw',
    embedQuery:
      'Studio+Lorena+Paiva,+R.+Jos%C3%A9+Faustino,+13+-+Col%C3%B4nia+Santo+Ant%C3%B4nio,+Manaus+-+AM,+69093-120',
    placeId: 'ChIJORfvMlYbbJIRmVo1erA8Kiw',
  },
  horarios: [
    { dia: 'Segunda', horario: 'Fechado' },
    { dia: 'Terça a Sexta', horario: '09h às 19h' },
    { dia: 'Sábado', horario: '09h às 18h' },
    { dia: 'Domingo', horario: 'Fechado' },
  ],
  servicos: [
    {
      titulo: 'Corte feminino',
      descricao: 'Corte personalizado pra valorizar o formato do rosto.',
    },
    {
      titulo: 'Escova & finalização',
      descricao: 'Escova modeladora com produtos profissionais.',
    },
    {
      titulo: 'Coloração',
      descricao: 'Cores naturais, mechas e retoque de raiz.',
    },
    {
      titulo: 'Hidratação profunda',
      descricao: 'Tratamento de nutrição e reconstrução capilar.',
    },
    {
      titulo: 'Progressiva & alisamento',
      descricao: 'Liso natural com produtos seguros e duradouros.',
    },
    {
      titulo: 'Manicure & pedicure',
      descricao: 'Cuidado completo das mãos e pés.',
    },
    {
      titulo: 'Design de sobrancelha',
      descricao: 'Modelagem que combina com seu traço.',
    },
    {
      titulo: 'Maquiagem',
      descricao: 'Make pra eventos, festas e ensaios.',
    },
  ],
  galeria: [
    'Corte com franja',
    'Escova modelada',
    'Coloração natural',
    'Mechas iluminadas',
    'Hidratação profunda',
    'Design de sobrancelha',
    'Make festa',
    'Manicure clean',
    'Penteado noiva',
  ],
  depoimentos: [
    { nome: '— em breve —', texto: 'Espaço reservado para o primeiro depoimento de cliente.' },
    { nome: '— em breve —', texto: 'Espaço reservado para o segundo depoimento de cliente.' },
    { nome: '— em breve —', texto: 'Espaço reservado para o terceiro depoimento de cliente.' },
  ],
  seo: {
    title: 'Studio Lorena Paiva — Salão de Beleza na Col. Santo Antônio, Manaus',
    description:
      'Salão de beleza na Colônia Santo Antônio, Manaus. Corte, escova, coloração, hidratação, manicure e mais. Atendimento por agendamento. Marque pelo WhatsApp.',
    keywords:
      'salão de beleza Manaus, salão Colônia Santo Antônio, cabeleireiro Da Paz, escova Manaus, coloração Manaus',
  },
};

export const whatsappLink = (mensagem?: string) => {
  const base = studio.whatsapp.link;
  const msg = mensagem ?? studio.whatsapp.mensagemPadrao;
  return `${base}?text=${encodeURIComponent(msg)}`;
};
