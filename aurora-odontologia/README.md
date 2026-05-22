# Aurora Odontologia — LP demo

**Clínica fictícia** criada como material de apoio para prospecção
comercial. Mostra o que conseguimos entregar quando o briefing é
"capricha em tudo": clínica boutique, 10 seções, schema rico,
fotografia IA gerada sob medida (Higgsfield Nano Banana Pro).

## Stack

- Astro 4 + Tailwind 3 (estático puro, zero JS no runtime)
- Tipografia: Instrument Serif + Inter (self-hosted via @fontsource)
- Schema.org `Dentist` (subtipo de LocalBusiness) + `FAQPage`
- Imagens IA otimizadas em webp (Higgsfield, 426KB no total)
- Preconnect ao CDN da Higgsfield, fonts inlined
- `_headers` com cache imutável pra assets

## Seções

1. Hero — headline, 4 KPIs, CTA agendar
2. Trust strip — 5 selos
3. Especialidades — 8 cards
4. Diferenciais — fundo dark com 4 cards + foto scanner
5. Equipe — 3 dentistas fictícios com CRO + formação
6. Casos clínicos — 4 cards antes/depois
7. Depoimentos — 3 reviews 5★
8. FAQ — 6 perguntas (com `<details>` nativo + Schema.org)
9. Localização — endereço + horários + foto recepção + mapa
10. Footer — CTA grande, contato, créditos

## Imagens IA (Higgsfield)

| Slot | Job ID | Aspecto | Tamanho |
|---|---|---|---|
| Hero | 6faafcba | 4:5 | 108 KB |
| Equipe | 6deb3f01 | 3:4 | 65 KB |
| Scanner | 28062935 | 4:3 | 64 KB |
| Recepção | 64a2d10d | 3:2 | 189 KB |

Cada uma marcada com chip **"IA · demo"** no canto. Quando virar
projeto real, substituir as 4 URLs em [`src/data/clinic.ts`](src/data/clinic.ts).

## Rodar local

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # gera dist/
```

## Deploy — Cloudflare Pages

| Campo | Valor |
|---|---|
| Project name | `aurora-odontologia` |
| Production branch | `main` |
| Build | `pnpm install && pnpm build` |
| Output | `dist` |
| Root | `aurora-odontologia` |
| `NODE_VERSION` | `20` |

URL: `aurora-odontologia.pages.dev`.
