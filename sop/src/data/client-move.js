/* =========================================================
   MOVE IN / OUT — CLIENT GUIDE (EN)
   ========================================================= */
const DATA = { en: {
  title: "Move In/Out Cleaning · Client Guide",
  intro: "Everything you need to know about your Move In/Out Cleaning.",
  steps: [
    { icon: "home", t: "What is Move In/Out Cleaning?", lead: "A complete clean of an empty home, so it is ready for the next person. Perfect before you move in, after you move out, or before a home is listed or handed back to a landlord.",
      html: `<div class="two">
        <div class="blk do"><h3>${icon("users")}Who it's for</h3><ul><li>Tenants getting a home ready to hand back</li><li>Buyers and renters moving into a new home</li><li>Landlords and property managers between tenants</li><li>Realtors getting a home ready to show</li></ul></div>
        <div class="blk tip"><h3>${icon("clean")}What makes it different</h3><p>With no furniture in the way, we clean every room edge to edge. <b>Inside the refrigerator and inside the oven are included</b>, and baseboards and doors are disinfected.</p></div></div>
        <div class="blk"><h3>${icon("clip")}Before and after photos</h3><p>Our team photographs every room before and after the clean, so you have a record of the home's condition.</p></div>` },

    { icon: "list", t: "What's included", lead: "Every item below is part of your Move In/Out Cleaning.",
      groups: [
        ["Floors", ["Tile and hardwood floors swept and damp mopped", "Carpets and hardwood floors vacuumed, closets included"]],
        ["Dusting & wipe down", ["All cabinets (outside)", "Countertops", "Ledges", "Ceiling fans"]],
        ["Kitchen & appliances", ["All appliances scrubbed free of dirt, grease and grime", "Refrigerator inside and outside", "Oven inside and on top (stovetop)", "Microwave inside"]],
        ["Bathrooms", ["Sinks", "Toilets", "Showers", "Bathtubs"]],
        ["Windows", ["Blinds dusted", "Window glass cleaned"]],
        ["Disinfecting & trash", ["Baseboards cleaned and disinfected with Clorox/Lysol", "Doors cleaned and disinfected with Clorox/Lysol", "Trash removed (if applicable)"]]
      ] },

    { icon: "calendar", t: "How your cleaning day works", lead: "Here is what happens from the moment our team arrives.",
      timeline: [
        ["Arrival & before photos", "We enter with the access you provide, check that water and power are on, and photograph every room."],
        ["Prep", "Products go on the oven, fridge parts and bathrooms so they can loosen grime while we work."],
        ["High work & windows", "Ceiling fans, high ledges, blinds and window glass."],
        ["Cabinets & counters", "Every cabinet front, countertop and ledge, room by room."],
        ["Kitchen & appliances", "Fridge and oven inside and out, microwave, stovetop and every appliance."],
        ["Bathrooms", "Showers, tubs, sinks and toilets."],
        ["Baseboards & doors", "Cleaned and disinfected with Clorox/Lysol."],
        ["Trash & floors", "Trash removed, then every floor vacuumed, swept and mopped."],
        ["After photos & lock up", "Final check, after photos of every room, and the home locked as you instructed."]
      ] },

    { icon: "clip", t: "How to prepare", lead: "Move In/Out Cleaning works best in an empty home.",
      checklist: ["Move out all furniture, boxes and belongings before we arrive", "Empty the refrigerator and freezer completely", "Make sure water and power (and hot water) are on", "Give us access: key, lockbox code or door code", "Tell us where to put trash and whether there is an outside bin", "Let us know about parking at the property", "Tell us about any damage you already know about"],
      tip: "Items left in the home are not thrown away unless they are clearly trash. We will ask you first." },

    { icon: "info", t: "What's not included", lead: "To keep your visit focused, these items are not part of Move In/Out Cleaning.",
      notIncluded: ["Inside cabinets and drawers", "Washing walls", "Carpet shampoo or steam cleaning", "Exterior windows", "Removing furniture or belongings left behind", "Anything above 2-step ladder reach", "Patio, balcony and garage (available as upgrades)"],
      tip: "Not sure if something is covered? Ask before your visit and we will tell you exactly what to expect." },

    UPGRADES_STEP,

    { icon: "shield", t: "Our promise", lead: "A home that is ready for its next chapter.",
      html: `<div class="blk do"><h3>${icon("check")}What you can count on</h3><ol>
        <li>A trained team following the same step-by-step method in every home.</li>
        <li>Color-coded cloths, so a bathroom cloth never touches your kitchen.</li>
        <li>Before and after photos of every room.</li>
        <li>If something was missed, tell us and we will make it right.</li></ol></div>` }
  ]
}};

