# sites-er

Monorepo de landing pages de demonstração para prospecção de clientes.
Cada cliente em sua própria pasta, com stack e deploy independentes.

## Clientes

| Cliente | Pasta | Stack | Status |
|---|---|---|---|
| Studio Lorena Paiva (Salão · Manaus) | [`studio-lorena-paiva/`](./studio-lorena-paiva) | Astro + Tailwind | 🟢 [studio-lorena-paiva.pages.dev](https://studio-lorena-paiva.pages.dev) |
| Taty Reis (Estética · Cabelo · Bronze · Manaus) | [`taty-reis/`](./taty-reis) | Astro + Tailwind | 🟢 [taty-reis.pages.dev](https://taty-reis.pages.dev) |
| Aurora Odontologia (clínica fictícia · demo de venda) | [`aurora-odontologia/`](./aurora-odontologia) | Astro + Tailwind + IA Higgsfield | 🟢 [aurora-odontologia.pages.dev](https://aurora-odontologia.pages.dev) |

## Como rodar uma LP

```bash
cd studio-lorena-paiva
pnpm install
pnpm dev
```

## Deploy

Cada pasta é um projeto **Cloudflare Pages** separado, com `Root Directory`
apontando pra pasta do cliente. Astro é detectado como framework
automaticamente.

Passo-a-passo completo do setup no README de cada cliente — ex:
[`studio-lorena-paiva/README.md`](./studio-lorena-paiva/README.md#deploy--cloudflare-pages).
