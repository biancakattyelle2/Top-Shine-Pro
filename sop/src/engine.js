/* ---------- one page = one cleaning type + one audience ----------
   PAGE (set by build.py): { key, audience: "cleaner"|"client"|"trainer", service, langs, name: {lang: "..."}, label: {lang: "..."} }
   DATA: { lang: { title, intro, steps } }, META (cleaner pages only), SCORE (trainer page only) */
const VIEW_UI = {
  en: { steps: "Step by step", all: "Full guide", copy: "Copy text", copied: "Copied. Paste it anywhere.", copyFail: "Copy is blocked here. The text is selected: press Ctrl+C (or ⌘C).", prep: "Before we arrive", notInc: "Not part of this service", good: "Good to know" },
  pt: { steps: "Passo a passo", all: "Guia completo", copy: "Copiar texto", copied: "Copiado. Cole onde quiser.", copyFail: "A cópia está bloqueada aqui. O texto está selecionado: aperte Ctrl+C (ou ⌘C)." },
  es: { steps: "Paso a paso", all: "Guía completa", copy: "Copiar texto", copied: "Copiado. Pégalo donde quieras.", copyFail: "Copiar está bloqueado aquí. El texto está seleccionado: presiona Ctrl+C (o ⌘C)." }
};
const store = {
  get(k, d) { try { const v = localStorage.getItem("tsp:" + PAGE.key + ":" + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem("tsp:" + PAGE.key + ":" + k, JSON.stringify(v)); } catch (e) {} }
};
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const savedLang = store.get("lang", PAGE.langs[0]);
const state = { service: PAGE.service, lang: PAGE.langs.includes(savedLang) ? savedLang : PAGE.langs[0], step: 0, mode: store.get("mode", "steps") === "all" ? "all" : "steps" };
let checks = store.get("checks", {});
const app = document.getElementById("app");
const VU = () => Object.assign({}, VIEW_UI.en, VIEW_UI[state.lang]);

/* client pages always offer the upgrades table before "Our promise" */
if (PAGE.audience === "client" && typeof UPGRADES_STEP !== "undefined")
  Object.values(DATA).forEach(d => { if (!d.steps.some(s => s.upgrades)) d.steps.splice(d.steps.length - 1, 0, UPGRADES_STEP); });

function renderHeader() {
  document.getElementById("pname").textContent = PAGE.name[state.lang] || PAGE.name.en;
  document.getElementById("plabel").textContent = PAGE.label[state.lang] || PAGE.label.en;
  document.title = (PAGE.name.en) + " " + PAGE.label.en;
  document.getElementById("langs").innerHTML = PAGE.langs.length > 1 ? PAGE.langs.map(l =>
    `<button class="lang" type="button" data-lang="${l}" aria-pressed="${state.lang === l}">${l.toUpperCase()}</button>`).join("") : "";
}

function bandHTML(b, L) {
  if (!b || !b.length) return "";
  return `<div class="band-wrap" data-nocopy><div class="band" aria-label="${esc(L.band)}">${L.bands.map((n, i) => `<span class="${b.includes(i) ? "on" : ""}">${esc(n)}</span>`).join("")}</div><div class="band-cap">${esc(L.band)}</div></div>`;
}
const list = (items, ordered) => `<${ordered ? "ol" : "ul"}>${items.map(i => `<li>${esc(i)}</li>`).join("")}</${ordered ? "ol" : "ul"}>`;
function checkList(key, items) {
  return `<ul class="checks">${items.map((it, i) => {
    const id = `${key}-${i}`;
    return `<li><label><input type="checkbox" id="c-${id}" data-check="${id}" ${checks[id] ? "checked" : ""}><span>${esc(it)}</span></label></li>`;
  }).join("")}</ul>`;
}

function stepBody(idx, s, L) {
  const lang = state.lang, V = VU();
  let h = "";
  if (PAGE.audience === "cleaner") {
    const meta = META[idx];
    if (s.do) h += `<div class="blk do"><h3>${icon("list")}${L.do}</h3>${list(s.do, true)}</div>`;
    if (meta.colors) h += clothHTML(lang) + extrasCleanerHTML(lang);
    if (s.tools) h += `<div class="blk"><h3>${icon("kit")}${L.tools}</h3><div class="chips">${s.tools.map(t => `<span>${esc(t)}</span>`).join("")}</div></div>`;
    const side = [];
    if (s.avoid) side.push(`<div class="blk avoid"><h3>${icon("warn")}${L.avoid}</h3>${list(s.avoid)}</div>`);
    if (s.tip) side.push(`<div class="blk tip"><h3>${icon("bulb")}${L.tip}</h3><p>${esc(s.tip)}</p></div>`);
    if (side.length) h += side.length > 1 ? `<div class="two">${side.join("")}</div>` : side[0];
    if (s.done) h += `<div class="blk done"><h3>${icon("check")}${L.done}</h3>${checkList(meta.id, s.done)}</div>`;
  } else if (PAGE.audience === "client") {
    if (s.html) h += s.html;
    if (s.groups) h += `<div class="two">${s.groups.map(([g, items]) => `<div class="blk do"><h3>${icon("check")}${esc(g)}</h3>${list(items)}</div>`).join("")}</div>`;
    if (s.timeline) h += `<div class="blk do"><ol class="timeline">${s.timeline.map(([a, b]) => `<li><div><b>${esc(a)}</b><br><span class="small">${esc(b)}</span></div></li>`).join("")}</ol></div>`;
    if (s.checklist) h += `<div class="blk done"><h3>${icon("check")}${V.prep}</h3>${checkList("prep", s.checklist)}</div>`;
    if (s.upgrades) h += extrasClientHTML();
    if (s.notIncluded) h += `<div class="blk avoid"><h3>${icon("x")}${V.notInc}</h3><ul>${s.notIncluded.map(t => `<li>${esc(t)}</li>`).join("")}</ul></div>`;
    if (s.tip) h += `<div class="blk tip"><h3>${icon("bulb")}${V.good}</h3><p>${esc(s.tip)}</p></div>`;
  } else {
    if (s.blocks) s.blocks.forEach(b => {
      const ic = { do: "list", tip: "bulb", avoid: "warn", done: "check" }[b.k];
      const body = b.list ? (b.k === "done" ? checkList(`tr-${idx}-${b.h.length}`, b.list) : list(b.list, b.k === "do")) : `<p>${esc(b.p)}</p>`;
      h += `<div class="blk ${b.k}"><h3>${icon(ic)}${esc(b.h)}</h3>${body}</div>`;
    });
    if (s.table) h += `<div class="blk do tbl"><table><thead><tr>${s.table.head.map(c => `<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>${s.table.rows.map(r => `<tr>${r.map((c, i) => `<td>${i === 0 ? "<b>" + esc(c) + "</b>" : esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    if (s.scorecard) h += `<div class="blk do"><h3>${icon("clip")}${lang === "pt" ? "Itens avaliados" : "Items evaluated"}</h3>${checkList("score", SCORE[lang])}<div class="score" id="score" data-nocopy></div></div>`;
  }
  return h;
}

function stepArticle(D, idx, L) {
  const s = D.steps[idx], n = D.steps.length;
  const ic = PAGE.audience === "cleaner" ? META[idx].icon : s.icon;
  const band = PAGE.audience === "cleaner" ? META[idx].band : null;
  return `<article class="step" id="s${idx + 1}">
    <div class="step-head">
      <div class="step-ic" data-nocopy>${icon(ic)}</div>
      <div>
        <div class="step-kicker">${L.step} ${idx + 1} ${L.of} ${n}</div>
        <h2>${esc(s.t)}</h2>
      </div>
      ${bandHTML(band, L)}
    </div>
    ${idx === 0 && state.mode === "steps" ? `<p class="lead"><b>${esc(D.intro)}</b></p>` : ""}
    <p class="lead">${esc(s.lead)}</p>
    <div class="blocks">${stepBody(idx, s, L)}</div>
  </article>`;
}

function stepDone(D, i) {
  if (PAGE.audience !== "cleaner") return false;
  const d = D.steps[i].done; if (!d) return false;
  return d.every((_, j) => checks[`${META[i].id}-${j}`]);
}

function render() {
  renderHeader();
  const L = UI[state.lang], V = VU(), D = DATA[state.lang], n = D.steps.length;
  const idx = state.step = Math.min(state.step, n - 1);
  const toolbar = `<div class="toolbar" data-nocopy>
      <div class="seg" role="group" aria-label="View">
        <button type="button" data-mode="steps" aria-pressed="${state.mode === "steps"}">${esc(V.steps)}</button>
        <button type="button" data-mode="all" aria-pressed="${state.mode === "all"}">${esc(V.all)}</button>
      </div>
      <button class="btn small-btn" type="button" data-copy="1">${icon("clip")}${esc(V.copy)}</button>
      <span class="small" id="copymsg" role="status"></span>
    </div>`;
  const savedNote = PAGE.audience !== "client" ? `<p class="small" style="margin-top:12px" data-nocopy>${L.saved} <button class="linkish" type="button" data-reset="1">${L.reset}</button></p>` : "";
  if (state.mode === "all") {
    app.innerHTML = `${toolbar}
      <div class="all" id="copyzone">
        <header class="all-head"><h1>${esc(D.title)}</h1><p class="lead">${esc(D.intro)}</p>
          <ol class="toc" data-nocopy>${D.steps.map((s, i) => `<li><a href="#s${i + 1}">${esc(s.t)}</a></li>`).join("")}</ol></header>
        ${D.steps.map((_, i) => stepArticle(D, i, L)).join("")}
      </div>${savedNote}`;
  } else {
    app.innerHTML = `${toolbar}
    <div class="track">
      <aside class="rail" data-nocopy>
        <h3>${esc(PAGE.audience === "cleaner" ? L.steps : L.sections)}</h3>
        <ol>${D.steps.map((st, i) => `<li><button type="button" data-step="${i}" ${i === idx ? 'aria-current="step"' : ""}><span class="num ${stepDone(D, i) ? "done" : ""}">${stepDone(D, i) ? "✓" : i + 1}</span><span class="lbl">${esc(st.t)}</span></button></li>`).join("")}</ol>
      </aside>
      <section>
        <div class="progress" aria-hidden="true"><i style="width:${((idx + 1) / n) * 100}%"></i></div>
        <div id="copyzone">${stepArticle(D, idx, L)}</div>
        <div class="pager" data-nocopy>
          <button class="btn" type="button" data-nav="-1" ${idx === 0 ? "disabled" : ""}>← ${L.back}</button>
          <span class="count">${idx + 1} / ${n}</span>
          ${idx === n - 1
            ? `<button class="btn primary" type="button" data-nav="first">${L.finish} ↺</button>`
            : `<button class="btn primary" type="button" data-nav="1">${L.next} →</button>`}
        </div>
        ${savedNote}
      </section>
    </div>`;
    const cur = app.querySelector('.rail [aria-current="step"]'), rail = cur && cur.closest("ol");
    if (rail && rail.scrollWidth > rail.clientWidth) rail.scrollLeft = cur.parentElement.offsetLeft - rail.clientWidth / 2 + cur.offsetWidth / 2;
  }
  updateScore();
}

function updateScore() {
  const el = document.getElementById("score"); if (!el || typeof SCORE === "undefined") return;
  const lang = state.lang, total = SCORE[lang].length;
  const got = SCORE[lang].filter((_, i) => checks[`score-${i}`]).length;
  const pct = Math.round(got / total * 100), pass = pct >= 90;
  const t = lang === "pt" ? { s: "Nota", p: "Aprovada", f: "Ainda não aprovada", r: "Mínimo 90%" } : { s: "Score", p: "Pass", f: "Not yet", r: "Minimum 90%" };
  el.innerHTML = `<span>${t.s}</span><b>${pct}%</b><span class="small">${got} / ${total}</span><span class="verdict ${pass ? "pass" : "fail"}">${pass ? t.p : t.f}</span><span class="small">${t.r}</span>`;
}

function copyText() {
  const zone = document.getElementById("copyzone"), msg = document.getElementById("copymsg"), V = VU();
  document.body.classList.add("copying");
  /* plain-text markers so pasted lists stay readable in WhatsApp, SMS or email */
  const tmp = [];
  zone.querySelectorAll("li").forEach(li => {
    const cb = li.querySelector("input[type=checkbox]"), m = document.createElement("span");
    m.textContent = cb ? (cb.checked ? "☑ " : "☐ ") : li.parentElement.tagName === "OL" ? ([...li.parentElement.children].indexOf(li) + 1) + ". " : "• ";
    (li.querySelector("label > span, div") || li).prepend(m); tmp.push(m);
  });
  zone.querySelectorAll(".blk h3, .all-head ~ .step h2").forEach(h => { const br = document.createElement("br"); h.before(br); tmp.push(br); });
  const head = state.mode === "steps" ? `${PAGE.name[state.lang] || PAGE.name.en} · ${PAGE.label[state.lang] || PAGE.label.en}\n\n` : "";
  const text = head + zone.innerText.replace(/\n{3,}/g, "\n\n").trim();
  tmp.forEach(n => n.remove());
  document.body.classList.remove("copying");
  const fallback = () => { const r = document.createRange(); r.selectNodeContents(zone); const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); msg.textContent = V.copyFail; };
  try { navigator.clipboard.writeText(text).then(() => { msg.textContent = V.copied; }, fallback); } catch (e) { fallback(); }
}

document.addEventListener("click", e => {
  const a = e.target.closest('.toc a');
  if (a) { e.preventDefault(); document.querySelector(a.getAttribute("href"))?.scrollIntoView({ behavior: "smooth" }); return; }
  const t = e.target.closest("button"); if (!t) return;
  if (t.dataset.lang) { state.lang = t.dataset.lang; store.set("lang", state.lang); return render(); }
  if (t.dataset.mode) { state.mode = t.dataset.mode; store.set("mode", state.mode); render(); return window.scrollTo({ top: 0 }); }
  if (t.dataset.copy) return copyText();
  if (t.dataset.step) { state.step = +t.dataset.step; render(); return window.scrollTo({ top: 0 }); }
  if (t.dataset.nav) {
    const n = DATA[state.lang].steps.length;
    state.step = t.dataset.nav === "first" ? 0 : Math.max(0, Math.min(n - 1, state.step + +t.dataset.nav));
    render(); return window.scrollTo({ top: 0 });
  }
  if (t.dataset.reset) { checks = {}; store.set("checks", checks); render(); }
});
document.addEventListener("change", e => {
  const c = e.target.closest("[data-check]"); if (!c) return;
  checks[c.dataset.check] = c.checked; store.set("checks", checks);
  if (PAGE.audience === "cleaner" && state.mode === "steps") { const keep = window.scrollY; render(); window.scrollTo({ top: keep }); }
  else updateScore();
});
document.addEventListener("keydown", e => {
  if (state.mode !== "steps" || e.target.matches("input, textarea")) return;
  if (e.key === "ArrowRight") document.querySelector('[data-nav="1"]')?.click();
  if (e.key === "ArrowLeft") document.querySelector('[data-nav="-1"]')?.click();
});
render();
