/* =========================================================
   REGULAR CLEANING — CLIENT GUIDE (EN)
   ========================================================= */
const DATA = { en: {
  title: "Regular Cleaning · Client Guide",
  intro: "Everything you need to know about your Regular Cleaning.",
  steps: [
    { icon: "calendar", t: "What is Regular Cleaning?", lead: "Recurring cleaning on a weekly or monthly basis. The goal is to keep up with basic cleaning tasks, so your home stays fresh between deep cleans.",
      html: `<div class="blk do"><h3>${icon("list")}Typical tasks during this service</h3><ul>
        <li>Tidying up your spaces</li><li>Cleaning floors</li><li>Wiping surfaces in kitchens and bathrooms</li><li>Taking out the trash</li><li>General dusting</li></ul></div>
        <div class="two">
        <div class="blk tip"><h3>${icon("home")}Regular Cleaning</h3><p>Keeps a home that is already in good shape clean, visit after visit.</p></div>
        <div class="blk"><h3>${icon("clean")}Deluxe Cleaning</h3><p>Our deep clean, done by hand to remove build-up. Best for a first visit or a home that needs a reset.</p></div></div>` },

    { icon: "list", t: "What's included", lead: "Every item below is part of your Regular Cleaning.",
      groups: [
        ["Throughout the home", ["Vacuum all hardwood floors", "Vacuum carpets", "Vents dusted", "Floors mopped", "Dusting all around (furniture)", "Blinds and windows dusted", "Tidying up", "Trash taken out"]],
        ["Kitchen", ["Inside the microwave", "Outside of the fridge", "Countertops", "Stovetop (top of the oven)", "Table (if applicable)"]],
        ["Bathrooms (all of them)", ["Walls and shower washed with Clorox", "Sink washed", "Toilet disinfected", "Mirrors cleaned"]],
        ["Bedrooms", ["Sheets changed (leave the clean sheets on the bed)", "Beds made"]]
      ] },

    { icon: "route", t: "How your cleaning day works", lead: "Here is what happens on every visit.",
      timeline: [
        ["Arrival", "Our team arrives in uniform and asks if there is anything special for today."],
        ["Bathrooms first", "Showers and walls get Clorox so it can work while we clean the rest of the home."],
        ["Tidy & dust", "We tidy up, then dust vents, blinds, windows and furniture all around."],
        ["Kitchen", "Microwave, fridge, stovetop, counters and table."],
        ["Bathrooms", "Showers and walls scrubbed and rinsed, sinks, mirrors and toilets finished."],
        ["Bedrooms & trash", "Sheets changed where you left them on the bed, beds made, trash taken out."],
        ["Floors last", "Hardwood and carpets vacuumed, floors mopped."],
        ["Final check", "Every room is checked before we leave."]
      ] },

    { icon: "clip", t: "How to prepare", lead: "A few minutes before each visit makes a big difference.",
      checklist: ["Load your dishes into the dishwasher. We don't wash or put away dishes", "Leave clean sheets on top of each bed you want changed", "Pick up clothes, toys and papers so we can reach floors and surfaces", "Put away valuables, cash and private documents", "Secure pets or tell us how they should be handled", "Tell us if a shower or bathroom is natural stone (marble, granite). We use Clorox in bathrooms", "Make sure we have a way in: key, code or someone at home"],
      tip: "Clear surfaces get fully cleaned. Crowded areas are dusted around the items." },

    { icon: "info", t: "What's not included", lead: "These items are not part of Regular Cleaning. Ask us if you would like to add any of them.",
      notIncluded: ["Washing or putting away dishes", "Loading or unloading the dishwasher", "Inside the fridge", "Inside the oven", "Inside cabinets", "Laundry", "Hand-washed baseboards, cabinet fronts, ceiling fan blades and light fixtures (part of Deluxe Cleaning)"],
      tip: "Dishwashing, fridge and oven interiors, baseboards, blinds and the Deep Care Upgrade are available as optional upgrades (next page). If your home hasn't had a professional clean in a while, we recommend starting with a Deluxe Cleaning." },

    { icon: "shield", t: "Our promise", lead: "Same team method, same quality, every visit.",
      html: `<div class="blk do"><h3>${icon("check")}What you can count on</h3><ol>
        <li>Every item on the list, on every visit.</li>
        <li>Color-coded cloths, so a bathroom cloth never touches your kitchen.</li>
        <li>Your belongings treated with care and put back where they were.</li>
        <li>If something was missed, tell us and we will make it right.</li></ol></div>` }
  ]
}};

