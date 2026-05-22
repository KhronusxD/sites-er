# sites-er

Monorepo de landing pages de demonstração para prospecção de clientes.
Cada cliente em sua própria pasta, com stack e deploy independentes.

## Clientes

| Cliente | Pasta | Stack | Status |
|---|---|---|---|
| Studio Lorena Paiva (Salão · Manaus) | [`studio-lorena-paiva/`](./studio-lorena-paiva) | Astro + Tailwind | 🟢 LP demo |

## Como rodar uma LP

```bash
cd studio-lorena-paiva
pnpm install
pnpm dev
```

## Deploy

Cada pasta é um projeto Vercel separado — `Root Directory` apontando
para a pasta do cliente. Astro detectado automaticamente.
