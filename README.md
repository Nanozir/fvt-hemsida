# Hemsida för Föreningen Värmland Tillsammans (utkast)

Utkast till hemsidan för FVT och programmet Samhällsstart 90. Sidan är **inte officiell**:
den har `noindex` och `robots.txt` stänger av sökmotorer.

Skapad av NanPan.

## Kom igång

```bash
npm install
npm run dev
```

Öppna adressen som visas (oftast http://localhost:4321).

## Bygga

```bash
npm run build
```

Den färdiga sidan hamnar i `dist/`. Den kan läggas på vilket statiskt webbhotell som helst (helst i EU).

## Publicering

Sidan publiceras automatiskt på https://nanozir.github.io/fvt-hemsida/ när något läggs på `main`.
Det sköts av `.github/workflows/deploy.yml`. I repots Settings → Pages ska Source vara **GitHub Actions**.

## Ändra texter

Nästan all text och alla uppgifter finns i `src/data/site.ts`.
Värden som börjar med `[` visas som gula platshållare tills de fylls i.

## Innan sidan blir officiell

1. Fyll i alla platshållare i `src/data/site.ts`.
2. Sätt `draft: false` i `src/data/site.ts`.
3. Ändra `public/robots.txt` till `Allow: /` och sätt rätt `site` i `astro.config.mjs`.
4. Byt helst till föreningens egen e-postadress.
5. Koppla kontaktformuläret till en funktion som skickar e-post (se TODO i `src/components/Contact.astro`).
