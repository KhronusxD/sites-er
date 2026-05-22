# Taty Reis — LP

Landing page de demonstração para prospecção. Salão multi-serviço
(estética + cabelo + bronze artificial) no bairro Da Paz, Manaus/AM.
Reputação ⭐ 4.9 no Google com 13 avaliações.

## Stack

- Astro 4 + Tailwind 3
- Mobile-first, estático puro
- Schema.org `BeautySalon` + `AggregateRating` para SEO local
- Fotos demo via Unsplash (chip "Foto Taty" visível enquanto não há real)

## Rodar local

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # gera dist/
pnpm preview  # serve dist/ para conferência
```

## Conteúdo

Todo o conteúdo editável (textos, pilares, horários, endereço, WhatsApp,
depoimentos, URLs de imagem) está centralizado em
[`src/data/taty.ts`](src/data/taty.ts). Pra atualizar a LP, basta
editar esse arquivo.

## Deploy — Cloudflare Pages

Projeto Pages: `taty-reis` (auto-deploy a cada push em `studio-...` é
filtrado; só dispara quando há mudanças em `taty-reis/*`).

| Campo | Valor |
|---|---|
| Project name | `taty-reis` |
| Production branch | `main` |
| Build command | `pnpm install && pnpm build` |
| Build output | `dist` |
| Root directory | `taty-reis` |
| `NODE_VERSION` | `20` |

URL: `taty-reis.pages.dev` (custom domain `tatyreis.com.br` pendente).

## Pendências para entrega

- [ ] Substituir fotos Unsplash pelas reais (todas com chip "Foto Taty"):
  - Hero (1 foto vertical 4:5)
  - Sobre (1 retrato 4:5)
  - 3 cards de pilares (Estética, Cabelo, Bronze)
  - Galeria (9 fotos, formatos mistos — priorizar antes/depois de bronze)
- [ ] Substituir 3 depoimentos placeholder por trechos reais das reviews
      4.9 do Google (com inicial das autoras)
- [ ] Confirmar textos com a Taty (Sobre, descrições dos pilares, horários)
- [ ] Configurar domínio `tatyreis.com.br` no Pages
- [ ] Gerar `og.jpg` (1200×630) para social share
