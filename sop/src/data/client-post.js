/* =========================================================
   POST-CONSTRUCTION — CLIENT GUIDE (EN)
   ========================================================= */
const DATA = { en: {
  title: "Post-Construction Cleaning · Client Guide",
  intro: "Everything you need to know about your Post-Construction Cleaning.",
  steps: [
    { icon: "tool", t: "What is Post-Construction Cleaning?", lead: "A detailed clean after a renovation, remodel or new build. It removes the fine dust and residue that construction leaves behind, so your space is ready to move into, open or sell.",
      html: `<div class="two">
        <div class="blk do"><h3>${icon("users")}Who it's for</h3><ul><li>Homeowners after a renovation or remodel</li><li>Builders and contractors handing over a new home</li><li>Businesses opening a renovated space</li><li>Realtors preparing a newly finished property</li></ul></div>
        <div class="blk tip"><h3>${icon("clean")}Why it's different</h3><p>Construction dust is very fine and settles everywhere, even inside cabinets and drawers. We work in passes: debris first, then dust from top to bottom, then detail, then a <b>final dust pass</b> to catch what settled while we worked.</p></div></div>
        <div class="blk"><h3>${icon("shield")}Safe, careful work</h3><p>Our team wears protective equipment, checks the space for hazards before starting, and treats new surfaces with care. Before and after photos are taken of every room.</p></div>` },

    { icon: "list", t: "What's included", lead: "Every item below is part of your Post-Construction Cleaning.",
      groups: [
        ["Debris & dust", ["Small debris picked up and bagged", "Dust removed top to bottom with HEPA vacuums", "Ceiling corners, vents and registers", "Walls dry dusted", "Light fixtures and ceiling fans"]],
        ["Windows", ["Stickers and labels removed", "Paint specks removed from glass", "Glass, frames, tracks and sills cleaned"]],
        ["Cabinets & kitchen", ["Cabinets and drawers cleaned inside and outside", "Shelves and countertops", "Appliances cleaned inside and outside", "Sink and faucet"]],
        ["Bathrooms", ["Tubs and showers", "Toilets, sinks and counters", "Mirrors and fixtures", "Caulk and paint smears removed from fixtures"]],
        ["Details", ["Doors and frames", "Baseboards", "Switch and outlet covers", "Railings and stairs"]],
        ["Floors & final pass", ["Floors HEPA vacuumed", "Hard floors damp mopped twice", "Final dust pass on every horizontal surface", "Before and after photos"]]
      ] },

    { icon: "calendar", t: "How your cleaning day works", lead: "Here is what happens from the moment our team arrives.",
      timeline: [
        ["Safety check", "We confirm the site is released, put on protective equipment and check every room for hazards."],
        ["Before photos", "Every room is photographed, including paint or caulk marks we will work on."],
        ["Debris", "Small debris is picked up and bagged so floors are clear."],
        ["First dust pass", "Ceilings, vents, frames, fixtures and walls are dusted with HEPA vacuums, top to bottom."],
        ["Windows", "Labels, paint specks and dust are removed from glass, tracks and sills."],
        ["Cabinets, kitchen & bathrooms", "Inside and outside of cabinets, appliances and every bathroom fixture."],
        ["Details", "Doors, baseboards, covers, vents, railings and stairs."],
        ["Floors", "Vacuumed, then mopped twice to remove the white construction film."],
        ["Final pass & photos", "A last dust pass, a flashlight check and after photos of every room."]
      ] },

    { icon: "clip", t: "How to prepare", lead: "A few things make your Post-Construction Cleaning safe and complete.",
      checklist: ["Make sure all construction work is finished, including paint touch-ups", "Have the contractor remove large debris, leftover materials and tools", "Make sure water and power are on", "Tell us which surfaces are new or delicate (natural stone, special finishes)", "Tell us if protective film on appliances or windows should stay on", "Give us access: key, lockbox code or site contact", "Change or schedule a change of your HVAC filters after the clean"],
      tip: "If painters or other trades are still working, dust will come back. Book your clean for after the last trade leaves." },

    { icon: "info", t: "What's not included", lead: "To keep the work safe and focused, these items are not part of Post-Construction Cleaning.",
      notIncluded: ["Removing large construction waste, lumber, drywall or leftover materials", "Washing walls or removing paint from walls", "Exterior windows and pressure washing", "Air duct cleaning", "Carpet shampoo or steam cleaning", "Hazardous materials", "Heavy grout haze or acid treatments on stone", "Anything above 2-step ladder reach"],
      tip: "A small amount of dust may keep falling from air vents for a few days after construction. That is normal and settles quickly." },

    UPGRADES_STEP,

    { icon: "shield", t: "Our promise", lead: "A space that is truly ready to use.",
      html: `<div class="blk do"><h3>${icon("check")}What you can count on</h3><ol>
        <li>A trained team using protective equipment and HEPA vacuums.</li>
        <li>Careful work on new surfaces, with tests before scraping or using any product.</li>
        <li>Before and after photos of every room.</li>
        <li>If something was missed, tell us and we will make it right.</li></ol></div>` }
  ]
}};
