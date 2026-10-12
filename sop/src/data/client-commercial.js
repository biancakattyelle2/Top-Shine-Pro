/* =========================================================
   SMALL COMMERCIAL — CLIENT GUIDE (EN)
   ========================================================= */
const DATA = { en: {
  title: "Small Commercial Cleaning · Client Guide",
  intro: "Everything you need to know about cleaning for your business.",
  steps: [
    { icon: "users", t: "What is Small Commercial Cleaning?", lead: "Regular, professional cleaning for small businesses, so your space looks its best for your team and your customers. We work on the schedule that suits you, including before or after business hours.",
      html: `<div class="two">
        <div class="blk do"><h3>${icon("home")}Who it's for</h3><ul><li>Small offices</li><li>Retail shops and boutiques</li><li>Salons, barbershops and spas</li><li>Studios and small gyms</li><li>Waiting rooms and small clinics' common areas</li></ul></div>
        <div class="blk tip"><h3>${icon("shield")}Privacy and security first</h3><p>We never read, move or throw away papers, and we never touch computers, registers or your equipment. Your keys, codes and alarm are handled with care on every visit.</p></div></div>
        <div class="blk"><h3>${icon("calendar")}Flexible schedule</h3><p>Daily, several times a week, weekly or every other week. We agree on a schedule and the same checklist is followed on every visit.</p></div>` },

    { icon: "list", t: "What's included", lead: "Every item below is part of your Small Commercial Cleaning.",
      groups: [
        ["Entrance & reception", ["Glass doors cleaned on both sides", "Door handles and push plates disinfected", "Entry mats vacuumed", "Reception counter and waiting area dusted and wiped"]],
        ["Offices & work areas", ["Clear areas of desks dusted and wiped", "Chairs, shelves and window sills", "Screens dusted with a dry cloth (if allowed)"]],
        ["High-touch disinfecting", ["Door handles and light switches", "Railings", "Shared keypads, printer and copier buttons", "Faucet and dispenser buttons"]],
        ["Break room", ["Counters and coffee area", "Sink and faucet", "Microwave inside", "Fridge outside", "Table and chairs"]],
        ["Restrooms", ["Toilets and urinals", "Sinks, counters and mirrors", "Partitions spot cleaned", "Dispensers refilled from your supplies", "Floor disinfected"]],
        ["Trash & floors", ["Trash and recycling emptied and relined", "Trash taken to the dumpster", "Carpets and mats vacuumed", "Hard floors swept and mopped"]]
      ] },

    { icon: "calendar", t: "How each visit works", lead: "The same order, every visit.",
      timeline: [
        ["Arrival", "Our cleaner arrives at the agreed time, turns off the alarm and reads any notes you left."],
        ["Trash", "Every bin is emptied, relined and taken out."],
        ["Entrance & reception", "Glass, handles, mats, counter and waiting area."],
        ["Offices", "Clear desk areas, chairs and shelves."],
        ["Disinfecting", "All high-touch points across the space."],
        ["Break room & restrooms", "Cleaned, disinfected and restocked from your supplies."],
        ["Floors", "Vacuumed and mopped, with a wet floor sign."],
        ["Close & secure", "Lights off as you prefer, doors locked, alarm set and notes left in your log."]
      ] },

    { icon: "clip", t: "How to prepare", lead: "Help us keep your business clean and secure.",
      checklist: ["Give us a key or code and the alarm instructions", "Tell us who our contact is and how to reach them", "Clear desks you want wiped. We clean around papers and equipment", "Keep a stock of soap, toilet paper, paper towels and trash bags", "Tell us which lights or equipment must stay on", "Tell us about any areas that are off-limits", "Leave notes for the cleaner in a log or message us"],
      tip: "We write low supplies and anything unusual in your log, so you always know what is going on." },

    { icon: "info", t: "What's not included", lead: "These items are not part of the standard Small Commercial Cleaning. Ask us if you would like to add any of them.",
      notIncluded: ["Washing dishes", "Inside the fridge", "Moving or cleaning under papers and equipment on desks", "Cleaning computers, registers or electronics inside", "Floor stripping, waxing or carpet shampoo", "Exterior windows", "Supplies such as soap and paper (we refill from your stock)"],
      tip: "Need deeper work once in a while, like inside the fridge or blinds? See the optional upgrades on the next page." },

    UPGRADES_STEP,

    { icon: "shield", t: "Our promise", lead: "A clean, professional space your customers notice.",
      html: `<div class="blk do"><h3>${icon("check")}What you can count on</h3><ol>
        <li>A trained cleaner following the same checklist on every visit.</li>
        <li>Your privacy and security respected at all times.</li>
        <li>Color-coded cloths, so a restroom cloth never touches your break room.</li>
        <li>If something was missed, tell us and we will make it right.</li></ol></div>` }
  ]
}};
