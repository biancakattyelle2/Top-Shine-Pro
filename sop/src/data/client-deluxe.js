/* =========================================================
   CLIENT GUIDE (EN)
   ========================================================= */
const DATA = { en: {
  title: "Deluxe Cleaning · Client Guide",
  intro: "Everything you need to know about your Deluxe Cleaning.",
  steps: [
    { icon: "clean", t: "What is Deluxe Cleaning?", lead: "Our deepest clean. It is the right choice for a first visit, a home that has not had a professional clean in a while, a seasonal reset, or before a special event.",
      html: `<div class="two">
        <div class="blk"><h3>${icon("home")}General Cleaning</h3><p>Keeps a home that is already in good shape clean and fresh. Surfaces, kitchens, bathrooms and floors are cleaned on a regular schedule.</p></div>
        <div class="blk tip"><h3>${icon("clean")}Deluxe Cleaning (Top to Bottom)</h3><p>Everything in a General Cleaning, cleaned <b>by hand</b> with emphasis on removing build-up, plus fans, light fixtures, baseboards, woodwork, cabinet fronts, inside the microwave, beds with fresh sheets and more.</p></div>
      </div>
      <div class="blk do" style="margin-top:16px"><h3>${icon("route")}How we work</h3><ol>
        <li>We clean <b>top to bottom</b>: ceilings and fans first, floors last, so dust never falls on a clean surface.</li>
        <li>We clean <b>dry before wet</b>: dust and vacuum first, then wipe and wash.</li>
        <li>We use <b>color-coded cloths</b>, so a bathroom cloth never touches your kitchen.</li></ol></div>` },

    { icon: "list", t: "What's included", lead: "Every item below is part of your Deluxe Cleaning.",
      groups: [
        ["Throughout the home", ["Ceiling fan blades within 2-step ladder reach (hand washed or wiped)", "Light fixtures within 2-step ladder reach (hand washed in place, not removed)", "Cobwebs removed", "Blinds & shutters (vacuumed, not washed)", "Moldings, woodwork, window sills & lock ledges (hand washed or wiped)", "Baseboards (hand washed or wiped, reachable without moving furniture)", "Pictures & knick-knacks (hand wiped)", "Uncluttered shelves (hand wiped)", "Furniture polished: fronts, sides and legs"]],
        ["Kitchen", ["Top of refrigerator (hand washed or wiped)", "Outside of appliances", "Inside the microwave", "Stovetop, grates or drip pans scrubbed", "All cabinet fronts (hand washed or wiped)", "Counters, backsplash and sink"]],
        ["Bathrooms", ["All bathroom counters & fixtures sanitized", "Tub, shower, sink and toilet cleaned", "Mirrors cleaned"]],
        ["Bedrooms, trash & floors", ["Beds made, up to 3 sets of sheets changed", "Wastebaskets emptied and relined", "Stairs vacuumed", "Floors vacuumed and/or mopped"]]
      ] },

    { icon: "calendar", t: "How your cleaning day works", lead: "Here is what happens from the moment our team arrives.",
      timeline: [
        ["Arrival", "Our team arrives in uniform, introduces themselves and does a quick walk-through with you."],
        ["Your priorities", "Tell us any area to focus on, anything fragile or off-limits, pets, and where the clean sheets are."],
        ["Prep", "We apply products in bathrooms and on stove parts so they can loosen build-up while we work."],
        ["High work", "Cobwebs, ceiling fans and light fixtures are cleaned first."],
        ["Room by room", "Blinds, sills, pictures, furniture, woodwork and baseboards, then the kitchen and bathrooms."],
        ["Beds & trash", "Beds are made with your fresh sheets and wastebaskets are emptied and relined."],
        ["Floors last", "Stairs and floors are vacuumed and mopped as the final step."],
        ["Final check", "The team checks every room top to bottom. If you are home, we walk you through the results."]
      ] },

    { icon: "clip", t: "How to prepare", lead: "A few minutes of prep helps us spend all our time on deep cleaning.",
      checklist: ["Pick up clothes, toys and papers from floors, counters and shelves", "Leave clean sheets on or near each bed you want changed (up to 3)", "Put away valuables, cash, jewelry and private documents", "Secure pets or tell us how they should be handled", "Let us know about fragile items, special surfaces or areas to skip", "Make sure we have a way in: key, code or someone at home", "Tell us the best place to leave used sheets"],
      tip: "Cleared surfaces get a full hand wipe. Crowded shelves and counters are dusted around the items." },

    { icon: "info", t: "What's not included", lead: "To keep your visit focused and safe, these items are not part of Deluxe Cleaning. Ask us if you would like to add any of them.",
      notIncluded: ["Inside the oven", "Inside the refrigerator", "Inside cabinets and drawers", "Washing blinds (we vacuum them)", "Anything above 2-step ladder reach", "Moving heavy furniture", "Laundry and dishes", "Exterior windows"],
      tip: "Inside the oven, inside the refrigerator and other items are available as optional upgrades. See the next page for prices." },

    { icon: "shield", t: "Our promise", lead: "We want you to love your home when we leave.",
      html: `<div class="blk do"><h3>${icon("check")}What you can count on</h3><ol>
        <li>A trained team following the same step-by-step method in every home.</li>
        <li>Your belongings treated with care and put back where they were.</li>
        <li>A final top-to-bottom check of every room before we leave.</li>
        <li>If something was missed, tell us and we will make it right.</li></ol></div>
        <div class="blk tip"><h3>${icon("calendar")}After your deep clean</h3><p>A deep clean resets your home. Regular General Cleaning visits keep it that way, so build-up never comes back. Ask us about a recurring schedule.</p></div>` }
  ]
}};

