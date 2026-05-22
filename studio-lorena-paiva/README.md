# Studio Lorena Paiva — LP

Landing page de demonstração para prospecção. Salão de beleza na
Colônia Santo Antônio, Manaus/AM.

## Stack

- Astro 4 + Tailwind 3
- Mobile-first, estático puro
- Schema.org `BeautySalon` para SEO local
- Fotos demo via Unsplash (chip "Foto Lorena" visível enquanto não há real)

## Rodar local

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # gera dist/
pnpm preview  # serve dist/ para conferência
```

## Conteúdo

Todo o conteúdo editável (textos, serviços, horários, endereço, WhatsApp,
depoimentos, URLs de imagem) está centralizado em [`src/data/studio.ts`](src/data/studio.ts).
Pra atualizar a LP, basta editar esse arquivo.

## Deploy — Cloudflare Pages

O Cloudflare Pages auto-detecta Astro e faz deploy automático a cada
push pra `main`. Setup único pelo dashboard:

1. Cloudflare Dashboard → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
2. Selecionar o repo `KhronusxD/sites-er`
3. Configurar build:

   | Campo | Valor |
   |---|---|
   | Project name | `studio-lorena-paiva` |
   | Production branch | `main` |
   | Framework preset | **Astro** |
   | Build command | `pnpm install && pnpm build` |
   | Build output directory | `dist` |
   | Root directory (advanced) | `studio-lorena-paiva` |

4. Environment variables → adicionar:
   - `NODE_VERSION` = `20`

5. **Save and Deploy**

Após o primeiro deploy:
- URL provisória: `studio-lorena-paiva.pages.dev`
- Custom domain (`studiolorenapaiva.com.br`): Pages → Custom domains → Set up (DNS automático se o domínio estiver no Cloudflare)

Pra próximas LPs no mesmo repo, criar um novo Pages project apontando pra
pasta correspondente (`Root directory` muda, resto fica igual).

## Pendências para entrega

- [ ] Substituir fotos Unsplash pelas reais (todas marcadas com chip "Foto Lorena"):
  - Hero (1 foto vertical 4:5)
  - Sobre (1 retrato 4:5)
  - Galeria (9 fotos, formatos mistos)
- [ ] Confirmar textos com a Lorena (Sobre, lista de serviços, horários)
- [ ] Adicionar 3 depoimentos reais quando disponíveis
- [ ] Configurar domínio `studiolorenapaiva.com.br` no Pages
- [ ] Gerar `og.jpg` (1200×630) para social share
