#!/usr/bin/env python3
"""Build one standalone HTML page per cleaning type and audience, plus the owner's index.

Each page only contains its own content, so a cleaner page never includes client or
trainer text. Run: python3 sop/build.py   (writes sop/dist/*.html)
Published links live in sop/links.json and are used by the index page."""
import json, os
ROOT = os.path.dirname(os.path.abspath(__file__))
SRC, DIST = os.path.join(ROOT, "src"), os.path.join(ROOT, "dist")
read = lambda *p: open(os.path.join(SRC, *p), encoding="utf-8").read()

SERVICES = {
    "regular":    {"en": "Regular Cleaning", "pt": "Limpeza Regular", "es": "Limpieza Regular"},
    "deluxe":     {"en": "Deluxe Cleaning", "pt": "Limpeza Deluxe", "es": "Limpieza Deluxe"},
    "move":       {"en": "Move In/Out Cleaning", "pt": "Limpeza Move In/Out", "es": "Limpieza Move In/Out"},
    "post":       {"en": "Post-Construction Cleaning", "pt": "Limpeza Pós-obra", "es": "Limpieza Post-construcción"},
    "commercial": {"en": "Small Commercial Cleaning", "pt": "Limpeza Comercial Pequena", "es": "Limpieza Comercial Pequeña"},
    "airbnb":     {"en": "Airbnb Cleaning", "pt": "Limpeza Airbnb", "es": "Limpieza Airbnb"},
}
LABEL = {
    "cleaner": {"en": "Cleaner SOP", "pt": "SOP da Cleaner", "es": "SOP de la Cleaner"},
    "client":  {"en": "Client Guide"},
    "host":    {"en": "Host Guide"},
    "trainer": {"en": "Trainer SOP", "pt": "SOP do Treinador"},
}

def pages():
    out = []
    for svc, name in SERVICES.items():
        out.append(dict(key=f"{svc}-cleaner", audience="cleaner", service=svc, langs=["en", "pt", "es"],
                        name=name, label=LABEL["cleaner"], data=f"cleaner-{svc}.js", title=f"{name['en']} SOP"))
        lab = LABEL["host"] if svc == "airbnb" else LABEL["client"]
        out.append(dict(key=f"{svc}-client", audience="client", service=svc, langs=["en"],
                        name={"en": name["en"]}, label=lab, data=f"client-{svc}.js", title=f"{name['en']} {lab['en']}"))
    out.append(dict(key="trainer", audience="trainer", service="", langs=["pt", "en"],
                    name={"pt": "Treinamento de Cleaners", "en": "Cleaner Training"}, label=LABEL["trainer"],
                    data="trainer.js", title="Cleaner Trainer SOP"))
    return out

HEAD = """<title>{title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@600;700&family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700&display=swap">
<style>
{css}
</style>
"""

def build_page(p, css, house, common, engine):
    cfg = {k: p[k] for k in ("key", "audience", "service", "langs", "name", "label")}
    body = f"""<header class="bar">
  <div class="bar-in">
    <div class="brand">
      <span class="brand-mark"><img src="{house}" alt=""></span>
      <span><b id="pname"></b><small>Top&amp;Shine · <span id="plabel"></span></small></span>
    </div>
    <div class="langs" id="langs" role="group" aria-label="Language"></div>
  </div>
</header>
<main class="wrap" id="app"></main>
<script>
{common}
const PAGE = {json.dumps(cfg, ensure_ascii=False)};
{read("data", p["data"])}
{engine}
</script>
"""
    return HEAD.format(title=p["title"], css=css) + body

def build_index(ps, css, links):
    tpl = read("index.html")
    entries = {p["key"]: links.get(p["key"], "") for p in ps}
    return (HEAD.format(title="Tipos de Limpezas/ SOP&#39;s", css=css) + tpl
            .replace("/*LOGO*/", json.dumps(read("logo-full.txt").strip()))
            .replace("/*LINKS*/", json.dumps(entries))
            .replace("/*SERVICES*/", json.dumps(SERVICES, ensure_ascii=False)))

def main():
    os.makedirs(DIST, exist_ok=True)
    css, house = read("styles.css"), read("logo-house.txt").strip()
    common, engine = read("common.js"), read("engine.js")
    ps = pages()
    for p in ps:
        with open(os.path.join(DIST, p["key"] + ".html"), "w", encoding="utf-8") as f:
            f.write(build_page(p, css, house, common, engine))
    lp = os.path.join(ROOT, "links.json")
    links = json.load(open(lp)) if os.path.exists(lp) else {}
    with open(os.path.join(DIST, "index.html"), "w", encoding="utf-8") as f:
        f.write(build_index(ps, css, links))
    print("built", len(ps) + 1, "pages in", DIST)

if __name__ == "__main__":
    main()
