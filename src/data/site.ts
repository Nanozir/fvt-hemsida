// All text och alla uppgifter som ändras ofta ligger här.
// Värden som börjar med "[" visas som gula platshållare på sidan.

export const site = {
  draft: true, // Sätt till false när sidan blir officiell (och ta bort robots.txt-spärren).
  name: 'Föreningen Värmland Tillsammans',
  shortName: 'FVT',
  city: 'Karlstad',
  orgNr: '[Organisationsnummer]',
  address: '[Adress]',
  contactPerson: '[Namn och roll]',
  phone: '073-755 53 94',
  phoneRaw: '0737555394',
  email: 'ali.osman@hotmail.se',
  replyDays: '[antal]',
  board: [
    { role: 'Ordförande', name: '[Namn]' },
    { role: 'Kassör', name: '[Namn]' },
    { role: 'Sekreterare', name: '[Namn]' },
  ],
  whyText: '[Några meningar om varför ni startade föreningen]',
  privacy: {
    retention: '[antal månader]',
    emailProvider: '[namn]',
    host: '[namn]',
  },
};

export const facts = [
  { k: 'Längd', v: '90 dagar' },
  { k: 'Egna mål per deltagare', v: '2–4' },
  { k: 'Kontakter per vecka', v: '3–4' },
  { k: 'Deltagare samtidigt', v: '10' },
  { k: 'Deltagande', v: 'Frivilligt' },
];

export const phases = [
  {
    cls: 'p1', short: 'Stabilitet', days: 'Dag 1–30', title: 'Stabilitet och nystart',
    items: [
      'Vi lär känna varandra och går igenom vad stödet är.',
      'Vi ser över dina mål och praktiska behov.',
      'Du får en första plan för boende, ekonomi och vardag.',
    ],
  },
  {
    cls: 'p2', short: 'Etablering', days: 'Dag 31–60', title: 'Etablering',
    items: [
      'Vi jobbar vidare med boende, ekonomi och rutiner.',
      'Vi utforskar jobb, praktik eller studier.',
      'Du övar på att ta kontakt med myndigheter.',
    ],
  },
  {
    cls: 'p3', short: 'Självständighet', days: 'Dag 61–90', title: 'Självständighet',
    items: [
      'Vi följer upp målen och ser vad som har hänt.',
      'Du gör en plan för de kommande 30–90 dagarna.',
      'Vi avslutar med ett samtal och en sammanfattning.',
    ],
  },
];

export const supportExamples = [
  'Vägledning inför kontakter med myndigheter och samhällsservice.',
  'Praktisk planering kring boende, ekonomi och vardagsrutiner.',
  'Stöd att hitta jobb, praktik, studier eller annan meningsfull aktivitet.',
  'Hjälp att bygga positiva sociala kontakter och planera fritid.',
  'Vi hänvisar vidare när det gäller vård, behandling eller myndighetsbeslut.',
];

export const cannotPromise = [
  'Vi kan inte lova bostad, jobb, ekonomiskt bistånd eller ett visst beslut från en myndighet.',
  'Vi ersätter inte Kriminalvården, socialtjänsten, vården eller juridisk rådgivning.',
  'Vi är inte en jour. Stödet sker på tider vi kommer överens om.',
];

export const weeks = [
  ['Trygg start', 'Tre saker du vill få ordning på.'],
  ['Vardagsrutiner', 'Ett enkelt veckoschema.'],
  ['Boende', 'Frågor och nästa steg.'],
  ['Ekonomi', 'En enkel månadsbudget.'],
  ['Hälsa och välmående', 'En liten vana att prova.'],
  ['Arbete och studier', 'Erfarenheter, intressen och styrkor.'],
  ['Relationer', 'En karta över personer som ger stöd.'],
  ['Problemlösning', 'Dela ett problem i små steg.'],
  ['Digital vardag', 'E-tjänster och hur du använder dem säkert.'],
  ['Sysselsättning', 'Ett realistiskt nästa steg.'],
  ['Nätverk', 'En positiv aktivitet eller kontakt.'],
  ['Fortsatt plan', 'Tre mål för de kommande 30 dagarna.'],
];

export const staff = [
  ['Verksamhetschef och samordnare', '100 %'],
  ['Stödperson', '100 %'],
  ['Stödperson', '100 %'],
  ['Administration', '25 %'],
  ['Deltagare samtidigt', '10'],
  ['Deltagare per halvår', 'upp till 20'],
];

export const quality = [
  'Skriftlig individuell plan och regelbunden uppföljning.',
  'Rutiner för klagomål, avvikelser och ensamarbete.',
  'Tydlig ansvarsfördelning med Kriminalvården och andra aktörer.',
  'Uppföljning av mål, genomförda kontakter och deltagarens egen upplevelse.',
];

export const dataProtection = [
  'Vi samlar bara in de uppgifter som behövs.',
  'Uppgifter om brott och domar prövas juridiskt innan något hanteras.',
  'Uppgifter delas bara när det finns rättslig grund.',
  'Vi utför inte myndighetsutövning, övervakning eller vård.',
];

export const steps = [
  'Ett första dialogmöte.',
  'Vi kartlägger målgruppens behov och de insatser som redan finns.',
  'Vi bestämmer krav på säkerhet, kompetens och dataskydd.',
  'Program, bemanning och pris anpassas efter uppdraget.',
  'Ni tar ställning till pilot, upphandling eller annan finansiering.',
];

export const howItWorks = [
  'Vi träffas eller hörs 3–4 gånger i veckan. Det kan vara möten, telefon eller hjälp på plats.',
  'Du får veta vad vi kan hjälpa till med, och vad vi inte kan.',
  'Efter 90 dagar har du en plan för tiden efter.',
];

export const rights = [
  'Du ska bemötas med respekt och utan diskriminering.',
  'Du får veta vad vi skriver ner och hur vi tar hand om uppgifterna.',
  'Du kan ställa frågor, säga nej eller lämna klagomål.',
  'Vi delar bara uppgifter när det finns stöd i lag och, när det krävs, ditt samtycke.',
];

export const crisis = [
  ['112', 'Vid akut fara för liv eller hälsa.'],
  ['1177', 'Sjukvårdsrådgivning dygnet runt.'],
  ['90101', 'Självmordslinjen, för dig som har tankar på att ta ditt liv.'],
];
