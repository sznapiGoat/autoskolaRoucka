export const site = {
  name: "Autoškola Roučka",
  city: "Světlá nad Sázavou",
  address: "Světlá nad Sázavou, 582 91",
  locations: ["Světlá nad Sázavou", "Havlíčkův Brod"],
  phone: "+420 602 77 38 36",
  phoneRaw: "420602773836",
  email: "autoskolaroucka@seznam.cz",
  domain: "autoskolaroucka.cz",
};

export const stats = [
  { value: "20+", label: "let zkušeností" },
  { value: "98 %", label: "úspěšnost zkoušek" },
  { value: "1 200+", label: "spokojených absolventů" },
  { value: "1:1", label: "výuka bez kompromisů" },
];

export const perks = [
  {
    icon: "calendar",
    title: "Splátky",
    desc: "Kurz zaplatíte pohodlně ve splátkách — bez navýšení, bez poplatků.",
  },
  {
    icon: "graduation-cap",
    title: "Studentská sleva",
    desc: "Studenti získají slevu na celý kurz. Stačí doložit ISIC nebo potvrzení školy.",
  },
  {
    icon: "gift",
    title: "Dárkový certifikát",
    desc: "Darujte řidičák blízkým — certifikát vydáme okamžitě.",
  },
  {
    icon: "shield-check",
    title: "Bezpečná výuka",
    desc: "Moderní výcviková vozidla vybavená dvojitými pedály a kamerovým systémem.",
  },
];

export const courses = [
  {
    id: "skupina-b",
    title: "Skupina B",
    subtitle: "Osobní automobily",
    desc: "Opravňuje k řízení vozidel do 3 500 kg s nejvýše 8 místy k sezení (přívěs do 750 kg nebo souprava do 3 500 kg). Výuka dle individuálního studijního plánu dle §18 zák. č. 247/2000 Sb.",
    details: [
      "Věk 18 let, zdravotní způsobilost",
      "Praktický výcvik, teorie i učební pomůcky v ceně",
      "1 vyučovací hodina = 45 minut",
      "Doprovod na závěrečných zkouškách",
    ],
    price: "od 17 500,- Kč",
    cta: "Přihlásit se",
  },
  {
    id: "kondicni-jizdy",
    title: "Kondiční jízdy",
    subtitle: "Pro řidiče s průkazem",
    desc: "Vlastníte průkaz, ale za volantem jste neseděli roky? Bojíte se výjezdu do ostrého provozu? Dálnice, parkování, noční jízda — nacvičíme přesně to, co potřebujete.",
    details: [
      "Individuální program dle vašich potřeb",
      "Trasy dle požadavků (město, dálnice, parkování)",
      "Žádné minimum hodin — vyberte si počet",
      "Flexibilní termíny dle dohody",
    ],
    price: "Cena dle dohody / hodinu",
    cta: "Domluvit termín",
  },
];

export const process = [
  { step: "01", title: "Zavolejte nebo napište", desc: "Domluvíme úvodní schůzku a projdeme vše potřebné." },
  { step: "02", title: "Lékařský posudek", desc: "Zajistíte posudek od registrujícího lékaře." },
  { step: "03", title: "Teorie", desc: "30 hodin výuky — prezenčně nebo online dle dohody." },
  { step: "04", title: "Jízdy", desc: "Minimálně 27 hodin jízd s instruktorem v reálném provozu." },
  { step: "05", title: "Zkoušky", desc: "Test + praktická jízda v autoškole. Jedeme spolu." },
  { step: "06", title: "Řidičský průkaz", desc: "Průkaz vydává úřad do 5 pracovních dnů." },
];

export const navLinks = [
  { label: "Kurzy", href: "#kurzy" },
  { label: "Postup", href: "#postup" },
  { label: "Ceník", href: "#cenik" },
  { label: "Kontakt", href: "#kontakt" },
];
