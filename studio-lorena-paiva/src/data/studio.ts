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
  imagens: {
    hero: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80&auto=format&fit=crop',
    sobre: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&q=80&auto=format&fit=crop',
  },
  galeria: [
    {
      img: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=700&q=80&auto=format&fit=crop',
      legenda: 'Corte com franja',
    },
    {
      img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80&auto=format&fit=crop',
      legenda: 'Escova modelada',
    },
    {
      img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=700&q=80&auto=format&fit=crop',
      legenda: 'Coloração natural',
    },
    {
      img: 'https://images.unsplash.com/photo-1595944927101-4ce10c8f4cd5?w=700&q=80&auto=format&fit=crop',
      legenda: 'Mechas iluminadas',
    },
    {
      img: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=700&q=80&auto=format&fit=crop',
      legenda: 'Hidratação profunda',
    },
    {
      img: 'https://images.unsplash.com/photo-1605980776566-0486c3ac7617?w=700&q=80&auto=format&fit=crop',
      legenda: 'Design de sobrancelha',
    },
    {
      img: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=700&q=80&auto=format&fit=crop',
      legenda: 'Make festa',
    },
    {
      img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&q=80&auto=format&fit=crop',
      legenda: 'Manicure clean',
    },
    {
      img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=700&q=80&auto=format&fit=crop',
      legenda: 'Penteado noiva',
    },
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
