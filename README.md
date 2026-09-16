## Cíl projektu

Postavit jednostránkovou landing page, která vizuálně odpovídá plausible.io a má čtyři funkční JS prvky. Cílem není pixel-perfect kopie. Cílem je, abys po dokončení uměl sám od nuly postavit landing page pro vlastní produkt.

**Za hotové to považuj, když:**

- Stránka funguje na desktopu i na mobilu bez vodorovného scrollu
- Všechny čtyři JS funkce fungují
- Dark mode přežije refresh stránky
- Nemáš v kódu jediný `!important`
- Nekopíroval jsi žádný kód z devtools

---

## Pravidla

Tahle část je důležitější než samotné zadání. Bez ní se naučíš opisovat, ne programovat.

1. **Vanilla only.** Žádný React, žádný Tailwind, žádný Bootstrap, žádná jQuery. Knihovny ti schovají přesně to, co se teď potřebuješ naučit.
2. **Tři soubory.** `index.html`, `style.css`, `script.js`. Nic víc.
3. **Devtools ano, Ctrl+C ne.** Klidně si otevři inspektor a koukni, jak to mají udělané. Pak ho zavři a napiš to po svém. Kopírování CSS z devtools = ztracený den.
4. **Žádné AI generování celých sekcí.** Ptej se na konkrétní věci („proč mi flexbox nezarovnává na střed"), ne „napiš mi hero sekci".
5. **Vlastní texty.** Nekopíruj marketingové texty Plausible. Vymysli si vlastní produkt (klidně fiktivní) a napiš texty k němu. Bude se ti to hodit, až budeš psát copy pro vlastní věc.
6. **Desktop first.** Mobil řeš až úplně nakonec.
7. **Commituj po každé sekci.** Git od prvního projektu. `git init`, pak commit po každé dokončené sekci.

---

## Technické požadavky

### Struktura souborů

```
plausible-klon/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── logo.svg
    └── (obrázky, ikony)
```

### HTML

- HTML5 doctype, `lang="cs"` nebo `lang="en"` podle textů
- Semantické tagy: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Každá sekce má `id`, aby na ni šlo odkázat z navigace
- Nadpisy v hierarchii: jeden `<h1>` na stránku, sekce mají `<h2>`, podnadpisy `<h3>`
- Obrázky mají `alt` atribut
- Tlačítka, která něco dělají, jsou `<button>`, ne `<div onclick>`

### CSS

- **CSS proměnné pro všechny barvy.** Bez toho dark mode neuděláš:

```css
:root {
  --bg: #ffffff;
  --text: #1a1a1a;
  --text-muted: #6b7280;
  --accent: #5850ec;
  --border: #e5e7eb;
}

[data-theme="dark"] {
  --bg: #0f172a;
  --text: #f1f5f9;
  --text-muted: #94a3b8;
  --accent: #818cf8;
  --border: #1e293b;
}
```

- `box-sizing: border-box` globálně
- Kontejner s `max-width` (kolem 1100px) a `margin: 0 auto` — tohle použiješ v každé sekci
- Flexbox na navbar a řádky, Grid na feature karty
- Spacing dělej po násobcích 4px (4, 8, 16, 24, 32, 48, 64). Nevymýšlej 13px a 27px.
- Breakpointy: `768px` (tablet) a `480px` (mobil). Dva stačí.

### JavaScript

- Žádné inline `onclick` v HTML
- `addEventListener` pro všechno
- `const` a `let`, nikdy `var`
- Skript načítej na konci `<body>` nebo s atributem `defer`

---

## Sekce stránky

Postupuj shora dolů. Dokonči sekci, commitni, jdi na další.

### 1. Navbar

Fixní nahoře, přes celou šířku.

**Obsah:** logo vlevo, odkazy uprostřed nebo vpravo (Funkce, Ceník, Dokumentace, Blog), vpravo tlačítko „Vyzkoušet zdarma" a přepínač dark mode.

**Detaily, na kterých to poznáš:**
- Odkazy mění barvu při hoveru — s `transition`, ne skokově
- Hlavní CTA tlačítko má výraznou barvu pozadí, ostatní odkazy jsou jen text
- Na mobilu se odkazy schovají za hamburger ikonu

**Co se tady naučíš:** `position: fixed`, flexbox s `justify-content: space-between`, hover stavy, `transition`.

---

### 2. Hero

První obrazovka. Nejdůležitější sekce na celé stránce.

**Obsah:** velký nadpis (h1), podnadpis o 2–3 řádcích, dvě tlačítka vedle sebe (primární + sekundární), pod tím screenshot produktu nebo obrázek.

**Detaily:**
- Nadpis je opravdu velký — kolem 48–56px na desktopu
- Text je vycentrovaný, obsah má `max-width` kolem 700px, aby řádky nebyly příliš dlouhé
- Mezi nadpisem a tlačítky je hodně prostoru (48px+)
- Obrázek pod tím má jemný stín a zaoblené rohy

**Častá chyba:** dáš příliš málo vertikálního prostoru. Hero potřebuje dýchat — klidně 80–120px padding nahoře i dole.

---

### 3. Logo strip

Řádek s logy firem, které produkt používají. Jednoduchá sekce, rychlá výhra.

**Obsah:** krátký text nad tím („Používají nás týmy z…"), pod ním 5–6 log v řadě.

**Detaily:**
- Loga jsou šedá (`filter: grayscale(1)` + snížená `opacity`), po hoveru se zbarví
- Na mobilu se zalomí do dvou řádků

**Zdroj log:** použij jednoduché SVG placeholdery nebo si vymysli fiktivní firmy. Nekraď loga skutečných firem.

---

### 4. Feature grid

Mřížka s hlavními funkcemi produktu.

**Obsah:** nadpis sekce, podnadpis, pod tím 6 karet. Každá karta má ikonu, nadpis a 2 řádky textu.

**Detaily:**
- Grid: 3 sloupce na desktopu, 2 na tabletu, 1 na mobilu
- Karty mají jemný border nebo stín, ne obojí
- Po hoveru se karta lehce zvedne (`transform: translateY(-4px)`)

**Co se tady naučíš:** CSS Grid, konkrétně `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`. Tímhle jedním řádkem vyřešíš responsivitu celé mřížky.

**Ikony:** stáhni si z https://lucide.dev nebo https://heroicons.com — obojí zdarma jako SVG.

---

### 5. Porovnání / velká feature sekce

Dvousloupcová sekce: vlevo text, vpravo obrázek. Pod tím druhá, obrácená (obrázek vlevo, text vpravo).

**Obsah každé:** malý štítek nad nadpisem, nadpis, odstavec, odrážkový seznam se 3 body, odkaz „Zjistit více →".

**Detaily:**
- Na desktopu 50/50 rozdělení, na mobilu se přeskládá pod sebe
- Odrážky mají vlastní ikonu (zelená fajfka), ne výchozí puntík
- **Pozor:** na mobilu musí být text vždy nad obrázkem u obou sekcí, i u té obrácené. Řeší se přes `order` ve flexboxu.

---

### 6. Ceník

Tři karty s tarify a nad nimi posuvník.

**Obsah:** nadpis, posuvník s počtem návštěv za měsíc, tři karty (Starter / Growth / Business), každá s názvem, cenou, seznamem funkcí a tlačítkem.

**Detaily:**
- Prostřední karta je zvýrazněná — má barevný border a štítek „Nejoblíbenější"
- Cena se mění podle pozice posuvníku
- Karty mají stejnou výšku bez ohledu na délku obsahu (flexbox: `align-items: stretch`)

---

### 7. FAQ

Accordion s otázkami.

**Obsah:** nadpis sekce, 5–6 otázek.

**Detaily:**
- Zavřené: jen otázka a šipka vpravo
- Otevřené: odpověď se rozbalí, šipka se otočí o 180°
- Otevírání má animaci, ne skok

---

### 8. Závěrečné CTA

Barevný blok přes celou šířku, který volá k akci.

**Obsah:** nadpis, krátký text, jedno tlačítko.

**Detaily:**
- Kontrastní pozadí (barevné nebo tmavé), bílý text
- Tlačítko je bílé s barevným textem — obrácené oproti zbytku stránky

---

### 9. Footer

**Obsah:** 4 sloupce odkazů (Produkt, Firma, Zdroje, Právní), vlevo logo a krátký popis, dole copyright a ikony sociálních sítí.

**Detaily:**
- Na desktopu 4–5 sloupců, na mobilu 2, na malém mobilu 1
- Oddělovací čára nad copyright řádkem
- Menší a tlumenější text než ve zbytku stránky

---

## JavaScript — čtyři úkoly

Dělej je v tomto pořadí. Každý je o kus těžší než předchozí.

### JS 1 — Hamburger menu

**Zadání:** Na mobilu klik na ikonu otevře a zavře navigaci.

**Postup:**
1. Vyber hamburger tlačítko a nav element přes `querySelector`
2. Na tlačítko přidej `addEventListener('click', ...)`
3. Uvnitř použij `classList.toggle('open')` na nav elementu
4. V CSS nastyluj `.nav.open` — ať se zobrazí

**Bonus:** menu se zavře i po kliknutí na odkaz. A přidej `aria-expanded`, které se přepíná spolu s třídou.

**Odhad:** 30 minut.

---

### JS 2 — FAQ accordion

**Zadání:** Klik na otázku rozbalí odpověď. Otevřená může být vždy jen jedna.

**Postup:**
1. `querySelectorAll` na všechny otázky — vrátí ti NodeList
2. `forEach` přes ně, každé přidej listener
3. V listeneru nejdřív zavři všechny ostatní, pak přepni tu kliknutou
4. Animaci výšky řeš přes `max-height` v CSS, ne přes `height: auto` — to se animovat nedá

**Kámen úrazu:** když ve `forEach` zavíráš ostatní, musíš porovnat, jestli to není ta samá položka, na kterou se kliklo. Jinak se otevřená hned zavře.

**Odhad:** 1 hodina.

---

### JS 3 — Pricing slider

Nejcennější úkol z celé čtveřice. Tady poprvé uvidíš, že UI reaguje na data.

**Zadání:** Posuvník s pěti pozicemi. Podle pozice se mění zobrazený počet návštěv i všechny tři ceny.

**Postup:**
1. Vytvoř pole s daty:

```js
const tiers = [
  { pageviews: '10k',  starter: 9,  growth: 19,  business: 39 },
  { pageviews: '100k', starter: 19, growth: 39,  business: 79 },
  // ... doplň zbytek
];
```

2. `<input type="range" min="0" max="4" step="1">`
3. Listener na událost `input` (ne `change` — `change` se spustí až po puštění myši)
4. Ve funkci vezmi `e.target.value`, vytáhni z pole odpovídající objekt a přepiš `textContent` u všech cenovek

**Bonus:** přidej přepínač měsíčně/ročně, kde roční platba dá 20% slevu.

**Odhad:** 2 hodiny.

---

### JS 4 — Dark mode s uložením

**Zadání:** Tlačítko přepíná světlý a tmavý režim. Volba přežije refresh stránky.

**Postup:**
1. Na `<html>` nastav atribut: `document.documentElement.setAttribute('data-theme', 'dark')`
2. V CSS máš už připravené `[data-theme="dark"]` proměnné z technických požadavků
3. Po přepnutí ulož: `localStorage.setItem('theme', 'dark')`
4. Při načtení stránky přečti `localStorage.getItem('theme')` a nastav podle toho

**Kámen úrazu — flash světlého motivu.** Když skript načteš na konci body, stránka na zlomek vteřiny blikne světle, než se přepne. Řešení: tenhle jeden kousek kódu dej do `<script>` přímo v `<head>`, před CSS. Je to jedna z mála situací, kdy je inline script správně.

**Odhad:** 1 hodina.

---

## Harmonogram

Počítáno na tvoje okna 14:00–17:00 a 20:00–23:00.

| Den | Odpoledne | Večer |
|-----|-----------|-------|
| 1 | Setup, navbar, hero | Dodělat hero, logo strip |
| 2 | Feature grid | Porovnávací sekce |
| 3 | Ceník (vzhled) | FAQ, CTA, footer |
| 4 | JS 1 + JS 2 | JS 3 |
| 5 | JS 4 | Mobilní responsivita |
| 6 | Úklid kódu, deploy | Rezerva |

Když ti to zabere 8 dní, nic se neděje. První projekt je vždycky nejpomalejší. Neposouvej termín tím, že sekce vylepšuješ donekonečna — hotové je lepší než dokonalé.

---

## Deploy

Až bude hotovo, nasaď to. Bez toho projekt neexistuje.

1. Založ repozitář na GitHubu a nahraj kód
2. Jdi na https://netlify.com nebo https://vercel.com, přihlas se přes GitHub
3. Vyber repozitář, potvrď, hotovo — dostaneš veřejnou URL

Zabere to 10 minut a máš první věc do portfolia.

---

## Kontrolní seznam před odevzdáním

**Funkčnost**
- [ ] Hamburger menu se otevírá i zavírá
- [ ] FAQ accordion funguje a vždy je otevřená max jedna položka
- [ ] Pricing slider mění všechny tři ceny
- [ ] Dark mode přežije refresh
- [ ] Všechny odkazy v navigaci skáčou na správné sekce

**Vzhled**
- [ ] Na 1440px vypadá stránka dobře
- [ ] Na 768px se nic nerozbije
- [ ] Na 375px není vodorovný scroll
- [ ] Dark mode má čitelný kontrast všude, i na tlačítkách a v ceníku
- [ ] Hover stavy má každý klikatelný prvek

**Kód**
- [ ] Žádný `!important`
- [ ] Žádný inline `onclick`
- [ ] Žádné `var`
- [ ] Všechny barvy přes CSS proměnné
- [ ] Konzole je bez chyb

**Přístupnost**
- [ ] Tabem projdeš celou stránku a vidíš, kde jsi
- [ ] Obrázky mají `alt`
- [ ] Interaktivní prvky jsou `<button>` nebo `<a>`

---

## Když se zasekneš

**Nejdřív zkus 20 minut sám.** Pak teprve hledej pomoc. Ta frustrace je součást učení — když ti někdo dá odpověď hned, nezapamatuješ si nic.

**Kam se dívat:**
- https://developer.mozilla.org — dokumentace pro všechno HTML/CSS/JS. Když googlíš, přidávej „MDN".
- https://flexboxfroggy.com — 24 úrovní, naučí tě flexbox za hodinu
- https://cssgridgarden.com — totéž pro grid
- https://css-tricks.com/snippets/css/complete-guide-grid — tahák na grid

**Jak se ptát AI, aby ti to pomohlo, a ne ublížilo:**

Dobře: „Mám tenhle CSS a karty se mi nezarovnávají na střed. Proč?"
Špatně: „Napiš mi feature grid sekci."

První tě naučí něco. Druhé ti dá kód, kterému nerozumíš, a za týden budeš na stejné úrovni.

---

## Až budeš hotový

Nekopíruj další web. Vezmi tenhle a přestav ho na landing page pro produkt, který chceš prodávat. Máš hotovou strukturu, hotové komponenty, hotový JS. Změníš texty, barvy a obrázky.

To je celý smysl tohohle cvičení — ne mít v portfoliu klon Plausible, ale umět za víkend postavit web pro vlastní věc.
