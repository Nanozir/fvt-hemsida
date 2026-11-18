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

export const phases = [
  {
    short: 'Stabilitet', days: 'Dag 1–30', title: 'Stabilitet och nystart',
    question: 'Var står jag nu, och vad är viktigast först?',
    goal: 'Skapa trygg kontakt, se över dina behov och göra en första plan.',
    items: [
      'Vad stödet är, att det är frivilligt och vad vi inte kan göra',
      'Kartläggning av dina mål och praktiska behov',
      'En första plan för boende, ekonomi, myndigheter och vardag',
      'Vilka andra verksamheter som behöver kontaktas',
    ],
    done: 'Du har en skriftlig plan med 2–4 egna mål.',
    weeks: [0, 1, 2, 3],
  },
  {
    short: 'Etablering', days: 'Dag 31–60', title: 'Etablering',
    question: 'Hur bygger jag en vardag som fungerar?',
    goal: 'Jobba vidare med boende, ekonomi och rutiner, och ta steg mot jobb eller studier.',
    items: [
      'Boende, ekonomi och vardagsstruktur',
      'Jobb, praktik, studier eller annan sysselsättning',
      'Positiva sociala kontakter och fritid',
      'Öva på att själv kontakta myndigheter och verksamheter',
    ],
    done: 'Du har tagit konkreta steg mot boende, ekonomi och sysselsättning.',
    weeks: [4, 5, 6, 7],
  },
  {
    short: 'Självständighet', days: 'Dag 61–90', title: 'Självständighet',
    question: 'Hur klarar jag mig vidare själv?',
    goal: 'Följa upp målen, göra en plan för tiden efter och veta vart du kan vända dig.',
    items: [
      'Uppföljning av mål, framsteg och det som återstår',
      'En plan för de kommande 30–90 dagarna',
      'Fortsatt kontakt med ordinarie stöd',
      'Avslutande samtal och en skriftlig sammanfattning',
    ],
    done: 'Du har en plan för tiden efter och vet vem du kan kontakta.',
    weeks: [8, 9, 10, 11],
  },
];

export const supportSteps = [
  ['Kartläggning', 'Vi går igenom din situation, dina mål och vad du behöver hjälp med.'],
  ['Din plan', 'Du väljer 2–4 konkreta mål. Vi skriver ner vem som gör vad och när.'],
  ['Tät kontakt', 'Vi hörs eller träffas 3–4 gånger i veckan: möten, telefon eller hjälp på plats.'],
  ['Uppföljning', 'Vi ser vad som fungerar och justerar planen. Efter 90 dagar har du en plan för tiden efter.'],
];

export const suitsYou = [
  'nyligen har frigivits eller snart ska friges',
  'vill ha ordning på boende, ekonomi och vardag',
  'vill komma vidare mot jobb, praktik eller studier',
  'behöver hjälp att förstå och ta kontakt med myndigheter',
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
  ['Dialogmöte', 'Vi går igenom era behov, målgruppen och de insatser som redan finns.'],
  ['Krav och ansvar', 'Vi bestämmer krav på säkerhet, kompetens, dataskydd och rapportering.'],
  ['Anpassat upplägg', 'Program, bemanning och pris anpassas efter uppdragets omfattning.'],
  ['Pilot', 'En avgränsad pilot med tydliga mål, urval och utvärdering.'],
  ['Beslut', 'Ni tar ställning till fortsättning genom upphandling eller annan finansiering.'],
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
