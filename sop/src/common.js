/* ---------- icons (24x24 stroke) ---------- */
const ICONS = {
  door: '<rect x="5" y="2.5" width="14" height="19" rx="1.5"/><circle cx="15" cy="12" r="1"/><path d="M2 21.5h20"/>',
  star: '<path d="M12 3l2.6 5.6L20.5 9l-4.4 4 1.2 6L12 16.2 6.7 19l1.2-6L3.5 9l5.9-.4z"/>',
  kit: '<path d="M4 9h16l-1.5 11h-13z"/><path d="M8 9V6a4 4 0 0 1 8 0v3"/><path d="M10 13h4"/>',
  spray: '<path d="M8 8h6v13H6V11z"/><path d="M8 8V5h5l3-2"/><path d="M17 7h2M18 10h3M17 13h2"/>',
  fan: '<circle cx="12" cy="12" r="2"/><path d="M12 10c0-5 2-7 5-7 1 3-1 6-5 7zM14 12c5 0 7 2 7 5-3 1-6-1-7-5zM12 14c0 5-2 7-5 7-1-3 1-6 5-7zM10 12c-5 0-7-2-7-5 3-1 6 1 7 5z"/>',
  blinds: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M4 7h16M4 11h16M4 15h16M12 3v18"/>',
  frame: '<rect x="3" y="4" width="18" height="14" rx="1.5"/><path d="M3 15l5-5 4 4 3-3 6 6"/><circle cx="16" cy="8.5" r="1.3"/>',
  base: '<path d="M3 3v15h18"/><path d="M3 14h18"/><path d="M8 14v4M14 14v4"/>',
  kitchen: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="2"/><circle cx="15.5" cy="8.5" r="2"/><path d="M3 13h18M8 17h8"/>',
  bath: '<path d="M3 12h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z"/><path d="M6 12V5a2 2 0 0 1 4 0"/><path d="M7 20l-1 2M17 20l1 2"/>',
  bed: '<path d="M3 18V7M3 13h18v5M21 13a3 3 0 0 0-3-3h-8v3"/><circle cx="6.5" cy="10.5" r="1.5"/>',
  trash: '<path d="M4 6h16M9 6V4h6v2M6 6l1 15h10l1-15"/><path d="M10 10v7M14 10v7"/>',
  floor: '<path d="M14 3l-4 10"/><path d="M6 13h8l3 8H3z"/><path d="M8 17v4M12 17v4"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9.5"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  list: '<path d="M9 6h12M9 12h12M9 18h12"/><path d="M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2"/>',
  x: '<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 10h8M8 13h5"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14a5 5 0 0 1 6 5"/>',
  route: '<circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>',
  clip: '<rect x="5" y="4" width="14" height="18" rx="2"/><path d="M9 4V2.5h6V4M9 10h6M9 14h6M9 18h3"/>',
  warn: '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.5"/>',
  bulb: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.3 1 2.1h5c0-.8.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
  tool: '<path d="M14 6a4 4 0 0 0 5 5l-9 9a2 2 0 0 1-3-3z"/>',
  home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v11h14V10"/><path d="M10 21v-6h4v6"/>',
  clean: '<path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3"/>'
};
const icon = (n, cls) => `<svg ${cls ? 'class="' + cls + '"' : ''} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n] || ICONS.info}</svg>`;

/* ---------- interface words ---------- */
const UI = {
  en: { home: "Home", cleaners: "Cleaners", clients: "Clients", trainers: "Trainers & VA", back: "Back", next: "Next", step: "Step", of: "of", steps: "Steps", sections: "Sections",
        do: "How to do it", avoid: "Never do this", tools: "What you need", done: "Done when…", tip: "Pro tip", why: "Why", band: "Work zone",
        bands: ["Ceiling", "High", "Middle", "Low", "Floor"], reset: "Clear my checkmarks", finish: "Back to start", saved: "Your checkmarks stay on this device." },
  pt: { home: "Início", cleaners: "Cleaners", clients: "Clientes", trainers: "Treinadores & VA", back: "Voltar", next: "Próximo", step: "Passo", of: "de", steps: "Passos", sections: "Seções",
        do: "Como fazer", avoid: "Nunca faça isso", tools: "O que você precisa", done: "Pronto quando…", tip: "Dica de ouro", why: "Por quê", band: "Zona de trabalho",
        bands: ["Teto", "Alto", "Meio", "Baixo", "Chão"], reset: "Limpar minhas marcações", finish: "Voltar ao início", saved: "Suas marcações ficam salvas neste aparelho." },
  es: { home: "Inicio", cleaners: "Cleaners", clients: "Clientes", trainers: "Entrenadores & VA", back: "Atrás", next: "Siguiente", step: "Paso", of: "de", steps: "Pasos", sections: "Secciones",
        do: "Cómo hacerlo", avoid: "Nunca hagas esto", tools: "Lo que necesitas", done: "Listo cuando…", tip: "Consejo de oro", why: "Por qué", band: "Zona de trabajo",
        bands: ["Techo", "Alto", "Medio", "Bajo", "Piso"], reset: "Borrar mis marcas", finish: "Volver al inicio", saved: "Tus marcas se guardan en este aparato." }
};

const CLOTH = {
  en: { title: "Cloth color code",
    intro: "The result we promise includes never carrying dirt from one room to another: a bathroom cloth never goes to the kitchen. The logic is one pair of colors per area — one for wet, one for dry. Holding a cloth and can't remember where it came from? The color tells you.",
    wet: "Wet", dry: "Dry",
    areas: [
      ["Kitchen", ["#2e9e4f", "Green", "Wet & greasy areas: sink, stovetop, inside the microwave"], ["#e9c42b", "Yellow", "Drying & polishing: counters, stainless steel, dry surfaces"]],
      ["Bathroom", ["#e66aa5", "Pink", "Heavy cleaning & disinfecting: shower, tub, sink and toilet"], ["#1fb3c8", "Blue / turquoise", "Drying & polishing: mirror, fixtures, counter"]],
      ["Other areas", ["#f08a24", "Orange", "Furniture, windows, sills, damp surfaces in bedrooms & living rooms"], ["#8a5cc7", "Purple", "Dusting & polishing: furniture, electronics, decor"]]
    ],
    spTitle: "Sponges",
    sponges: [[["#e9c42b", "#2e9e4f"], "Yellow & green, double-sided: kitchen", "Yellow side for delicate surfaces. Green side only for stuck-on dirt on tough surfaces."],
              [["#1fb3c8"], "Blue, non-abrasive: bathroom", "Tub, shower, shower glass, bathroom sink."]] },
  pt: { title: "Código de cores dos panos",
    intro: "O resultado contratado inclui não levar sujeira de um ambiente para outro: pano de banheiro nunca vai para a cozinha. A lógica é um par de cores por área — uma para o úmido, uma para o seco. Se você está com um pano na mão e não lembra de onde ele veio, a cor responde.",
    wet: "Úmido", dry: "Seco",
    areas: [
      ["Cozinha", ["#2e9e4f", "Verde", "Área úmida e engordurada: pia, fogão, interior do micro-ondas"], ["#e9c42b", "Amarelo", "Secagem e polimento: bancada, aço inox e superfícies secas"]],
      ["Banheiro", ["#e66aa5", "Rosa", "Limpeza pesada e desinfecção: box, banheira, pia e vaso sanitário"], ["#1fb3c8", "Azul / turquesa", "Secagem e polimento: espelho, metais e bancada"]],
      ["Demais áreas", ["#f08a24", "Laranja", "Móvel, janela, parapeito e superfície úmida em quartos e salas"], ["#8a5cc7", "Roxo", "Pó e polimento: móvel, eletrônico e decoração"]]
    ],
    spTitle: "Esponjas",
    sponges: [[["#e9c42b", "#2e9e4f"], "Amarela e verde (dupla face): cozinha", "Lado amarelo para superfície sensível; lado verde só para sujeira incrustada em superfície resistente."],
              [["#1fb3c8"], "Azul, não abrasiva: banheiro", "Banheira, box, vidro do box, pia de banheiro."]] },
  es: { title: "Código de colores de trapos",
    intro: "El resultado contratado incluye no llevar suciedad de un cuarto a otro: un trapo del baño nunca va a la cocina. La lógica es un par de colores por área — uno para lo húmedo, uno para lo seco. Si tienes un trapo en la mano y no recuerdas de dónde vino, el color te responde.",
    wet: "Húmedo", dry: "Seco",
    areas: [
      ["Cocina", ["#2e9e4f", "Verde", "Área húmeda y grasosa: fregadero, estufa, interior del microondas"], ["#e9c42b", "Amarillo", "Secado y pulido: mostrador, acero inoxidable y superficies secas"]],
      ["Baño", ["#e66aa5", "Rosa", "Limpieza pesada y desinfección: regadera, tina, lavabo e inodoro"], ["#1fb3c8", "Azul / turquesa", "Secado y pulido: espejo, llaves y mostrador"]],
      ["Demás áreas", ["#f08a24", "Naranja", "Muebles, ventanas, repisas y superficies húmedas en recámaras y salas"], ["#8a5cc7", "Morado", "Polvo y pulido: muebles, electrónicos y decoración"]]
    ],
    spTitle: "Esponjas",
    sponges: [[["#e9c42b", "#2e9e4f"], "Amarilla y verde (doble cara): cocina", "Lado amarillo para superficies delicadas; lado verde solo para suciedad pegada en superficies resistentes."],
              [["#1fb3c8"], "Azul, no abrasiva: baño", "Tina, regadera, vidrio de la regadera, lavabo del baño."]] }
};
function clothHTML(lang) {
  const C = CLOTH[lang];
  const sw = (c, n, u, tag) => `<div class="cl"><i style="background:${c}"></i><div><b>${esc(n)}</b> <span class="tag">${esc(tag)}</span><br><span class="small">${esc(u)}</span></div></div>`;
  return `<div class="blk"><h3>${icon("tool")}${esc(C.title)}</h3><p class="small" style="margin-bottom:12px">${esc(C.intro)}</p>
    <div class="areas">${C.areas.map(([a, w, d]) => `<div class="area"><h4>${esc(a)}</h4>${sw(w[0], w[1], w[2], C.wet)}${sw(d[0], d[1], d[2], C.dry)}</div>`).join("")}</div>
    <h4 class="sp-h">${esc(C.spTitle)}</h4>
    <div class="areas two-col">${C.sponges.map(([cs, n, u]) => `<div class="cl"><i style="background:${cs.length > 1 ? `linear-gradient(${cs[0]} 50%, ${cs[1]} 50%)` : cs[0]}"></i><div><b>${esc(n)}</b><br><span class="small">${esc(u)}</span></div></div>`).join("")}</div></div>`;
}

/* =========================================================
   OPTIONAL UPGRADES — shared by every service
   inc = services where the item is already part of the scope
   ========================================================= */
const EXTRAS = [
  { price: "$50", inc: ["move", "post"],
    en: { n: "Refrigerator interior care", d: "Shelves, drawers and walls inside the fridge cleaned.", c: "Take out one shelf of food at a time, wipe shelves, drawers and walls with the green cloth, dry with the yellow cloth and put everything back in the same place." },
    pt: { n: "Geladeira por dentro", c: "Tire a comida de uma prateleira por vez, limpe prateleiras, gavetas e paredes com o pano verde, seque com o amarelo e coloque tudo de volta no mesmo lugar." },
    es: { n: "Refrigerador por dentro", c: "Saca la comida de una repisa a la vez, limpia repisas, cajones y paredes con el trapo verde, seca con el amarillo y regresa todo al mismo lugar." } },
  { price: "$30", inc: ["move", "post"],
    en: { n: "Oven interior care", d: "Inside of the oven and racks degreased and scrubbed.", c: "Oven OFF and cool. Spray degreaser inside, let it sit, scrub with the green side of the sponge, wipe all residue out. Clean the racks in the sink." },
    pt: { n: "Forno por dentro", c: "Forno DESLIGADO e frio. Borrife desengordurante por dentro, deixe agir, esfregue com o lado verde da esponja e tire todo o resíduo. Limpe as grades na pia." },
    es: { n: "Horno por dentro", c: "Horno APAGADO y frío. Rocía desengrasante por dentro, deja actuar, talla con el lado verde de la esponja y quita todo el residuo. Limpia las parrillas en el fregadero." } },
  { price: "$10 per window", inc: ["move", "post"],
    en: { n: "Interior window care", d: "Inside glass, frame and sill of each window.", c: "Dust frame and sill first. Glass cleaner on the glass, wipe with the orange cloth, then polish with the purple cloth until there are no streaks." },
    pt: { n: "Janelas por dentro", c: "Tire o pó do batente e do parapeito primeiro. Limpa-vidros no vidro, passe o pano laranja e dê polimento com o roxo até não ficar marca." },
    es: { n: "Ventanas por dentro", c: "Quita el polvo del marco y la repisa primero. Limpiavidrios en el vidrio, pasa el trapo naranja y pule con el morado hasta que no queden marcas." } },
  { price: "starting at $30", inc: [],
    en: { n: "Patio / balcony care", d: "Swept, cobwebs removed, railings and outdoor furniture wiped.", c: "Remove cobwebs, wipe railings and outdoor furniture, then sweep the floor from the far side toward the door." },
    pt: { n: "Pátio / varanda", c: "Tire as teias, limpe o guarda-corpo e os móveis de fora, depois varra do fundo em direção à porta." },
    es: { n: "Patio / balcón", c: "Quita las telarañas, limpia el barandal y los muebles de afuera, luego barre desde el fondo hacia la puerta." } },
  { price: "$15", inc: ["airbnb"],
    en: { n: "Dishwashing", d: "Dishes in the sink washed, dried and put away or left on the rack.", c: "Wash, rinse and dry the dishes in the sink. Put them away if you know where they go, or leave them neat on the rack." },
    pt: { n: "Lavar louça", c: "Lave, enxágue e seque a louça da pia. Guarde se souber onde vai, ou deixe arrumada no escorredor." },
    es: { n: "Lavar platos", c: "Lava, enjuaga y seca los platos del fregadero. Guárdalos si sabes dónde van, o déjalos ordenados en el escurridor." } },
  { price: "$30–$60", inc: [],
    en: { n: "Garage sweeping", d: "Garage floor swept and cobwebs removed.", c: "Remove cobwebs, then sweep the garage floor from the back toward the door. Bag the debris." },
    pt: { n: "Varrer a garagem", c: "Tire as teias, depois varra o chão da garagem do fundo em direção à porta. Ensaque a sujeira." },
    es: { n: "Barrer el garaje", c: "Quita las telarañas, luego barre el piso del garaje desde el fondo hacia la puerta. Embolsa la basura." } },
  { price: "$10 per room", inc: ["deluxe", "move", "post"],
    en: { n: "Baseboards", d: "Baseboards dusted and hand wiped.", c: "Dust or vacuum first, then hand wipe with the damp orange cloth and dry with the purple cloth." },
    pt: { n: "Rodapés", c: "Tire o pó ou aspire primeiro, depois passe o pano laranja úmido à mão e seque com o roxo." },
    es: { n: "Zócalos", c: "Quita el polvo o aspira primero, luego limpia a mano con el trapo naranja húmedo y seca con el morado." } },
  { price: "$10 each", inc: ["deluxe", "move"],
    en: { n: "Blinds", d: "Slats dusted or vacuumed on both sides.", c: "Close the slats facing down, dust or vacuum top to bottom, turn them and repeat." },
    pt: { n: "Persianas", c: "Feche as lâminas para baixo, tire o pó ou aspire de cima para baixo, vire e repita." },
    es: { n: "Persianas", c: "Cierra las láminas hacia abajo, quita el polvo o aspira de arriba hacia abajo, voltéalas y repite." } },
  { price: "Double the Standard Service rate", inc: [], only: "regular",
    en: { n: "Deep Care Upgrade", d: "For Regular Cleaning: adds baseboards, blinds and detailed attention to your visit.", c: "Regular visit plus baseboards, blinds and detailed attention. Follow the Deluxe steps for those items." },
    pt: { n: "Upgrade Deep Care", c: "Visita regular + rodapés, persianas e atenção aos detalhes. Siga os passos da Deluxe para esses itens." },
    es: { n: "Mejora Deep Care", c: "Visita regular + zócalos, persianas y atención al detalle. Sigue los pasos de Deluxe para esos puntos." } }
];
const EXTRAS_UI = {
  en: { h: "Extras (upgrades)", lead: "Only do an extra when it is on the job order. Items marked INCLUDED are already part of this service.", inc: "Included" },
  pt: { h: "Extras (upgrades)", lead: "Só faça um extra quando ele estiver na ordem de serviço. Itens marcados INCLUÍDO já fazem parte deste serviço.", inc: "Incluído" },
  es: { h: "Extras (mejoras)", lead: "Solo haz un extra cuando esté en la orden de trabajo. Los puntos marcados INCLUIDO ya son parte de este servicio.", inc: "Incluido" }
};
function extrasCleanerHTML(lang) {
  const U = EXTRAS_UI[lang];
  return `<div class="blk"><h3>${icon("star")}${esc(U.h)}</h3><p class="small" style="margin-bottom:10px">${esc(U.lead)}</p>
    <div class="xgrid">${EXTRAS.filter(x => !x.only || x.only === state.service).map(x => { const inc = x.inc.includes(state.service);
      return `<div class="x${inc ? " inc" : ""}"><b>${esc(x[lang].n)}</b>${inc ? ` <span class="xtag">${esc(U.inc)}</span>` : ""}<br><span class="small">${esc(x[lang].c)}</span></div>`; }).join("")}</div></div>`;
}
function extrasClientHTML() {
  return `<div class="blk do tbl"><table><thead><tr><th>Upgrade</th><th>What it covers</th><th>Price</th></tr></thead><tbody>${EXTRAS.filter(x => !x.only || x.only === state.service).map(x => {
    const inc = x.inc.includes(state.service);
    return `<tr><td><b>${esc(x.en.n)}</b></td><td>${esc(x.en.d)}</td><td>${inc ? `<span class="xtag">Included in this service</span>` : esc(x.price)}</td></tr>`; }).join("")}</tbody></table></div>`;
}
const UPGRADES_STEP = { icon: "star", t: "Optional upgrades", lead: "Optional service upgrades are available, if needed. Add them when you book, or ask us before your visit.", upgrades: true,
  tip: "Upgrades are done only when they are on your booking, so our team has the time to do them well." };

