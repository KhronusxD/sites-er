# Studio Lorena Paiva — LP

Landing page de demonstração para prospecção. Salão de beleza na
Colônia Santo Antônio, Manaus/AM.

## Stack

- Astro 4 + Tailwind 3
- Mobile-first, estático puro
- Schema.org `BeautySalon` para SEO local
- Sitemap automático

## Rodar local

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # gera dist/
pnpm preview  # serve dist/ para conferência
```

## Conteúdo

Todo o conteúdo editável (textos, serviços, horários, endereço,
WhatsApp, depoimentos) está centralizado em [`src/data/studio.ts`](src/data/studio.ts).
Para atualizar a LP, basta editar esse arquivo.

## Pendências para entrega

- [ ] Substituir placeholders de foto (todos marcados com chip "Foto Lorena"):
  - Hero (1 foto vertical 4:5)
  - Sobre (1 retrato 4:5)
  - Galeria (9 fotos, formatos mistos)
- [ ] Confirmar textos com a Lorena (Sobre, lista de serviços, horários)
- [ ] Adicionar 3 depoimentos reais quando disponíveis
- [ ] Configurar domínio `studiolorenapaiva.com.br` na Vercel
- [ ] Gerar `og.jpg` (1200x630) para social share
