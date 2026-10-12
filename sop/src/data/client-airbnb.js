/* =========================================================
   AIRBNB — CLIENT (HOST) GUIDE (EN)
   ========================================================= */
const DATA = { en: {
  title: "Airbnb Cleaning · Host Guide",
  intro: "Everything you need to know about turnover cleaning for your short-term rental.",
  steps: [
    { icon: "calendar", t: "What is Airbnb Cleaning?", lead: "A complete turnover between guests, so your rental looks exactly like your listing photos when the next guest walks in. Built around your check-out and check-in times.",
      html: `<div class="two">
        <div class="blk do"><h3>${icon("home")}Who it's for</h3><ul><li>Airbnb and Vrbo hosts</li><li>Short-term and vacation rental owners</li><li>Property managers with several units</li></ul></div>
        <div class="blk tip"><h3>${icon("clip")}Protection for you</h3><p>We photograph every room <b>before</b> we clean, so damage, unusual mess and items left by guests are documented and sent to you right away. After photos show the home ready for the next guest.</p></div></div>
        <div class="blk"><h3>${icon("star")}Guest-ready, every time</h3><p>Fresh linens and towels, a spotless kitchen and bathrooms, restocked essentials and every room staged to match your listing.</p></div>` },

    { icon: "list", t: "What's included", lead: "Every item below is part of your Airbnb turnover.",
      groups: [
        ["Linens & beds", ["All beds stripped and remade with fresh linens", "Used towels, bath mats and kitchen towels replaced", "Laundry on site, if it's on your checklist"]],
        ["Kitchen", ["Dishes washed, dried and put away", "Dishwasher run and unloaded", "Guest food removed from fridge and pantry", "Fridge, microwave and stovetop cleaned", "Counters, table and sink"]],
        ["Bathrooms", ["Showers, tubs, toilets and sinks cleaned", "Mirrors and fixtures shined", "Zero-hair check", "Fresh towels presented"]],
        ["Living areas & bedrooms", ["Dusting and tidying", "Fingerprints removed from glass", "Cushions, throws and remotes reset", "Staged to match your listing photos"]],
        ["Restock & trash", ["Essentials restocked from your supply", "Low supplies reported to you", "Trash and recycling taken out"]],
        ["Floors & report", ["Carpets vacuumed, hard floors mopped", "Before and after photos", "Report of damage, left items and supplies"]]
      ] },

    { icon: "route", t: "How each turnover works", lead: "The same order in every property, so nothing is missed.",
      timeline: [
        ["Arrival", "We make sure the guest has left, enter with your code and check the time until the next check-in."],
        ["Before photos", "Every room is photographed. Damage and left items are reported to you right away."],
        ["Linens first", "Beds are stripped and laundry is started or bagged."],
        ["Trash & fridge", "Trash out, guest food removed, left items bagged."],
        ["Kitchen & bathrooms", "Dishes, appliances, counters, showers and toilets."],
        ["Beds & rooms", "Hotel-style beds, dusting, tidying and staging."],
        ["Floors & restock", "Floors vacuumed and mopped, essentials restocked."],
        ["Final check & report", "After photos, home locked, report sent."]
      ] },

    { icon: "clip", t: "How to prepare", lead: "Set us up once and every turnover runs smoothly.",
      checklist: ["Share your check-out and check-in times and your booking calendar", "Give us the lockbox or door code", "Keep at least two full linen and towel sets per bed", "Keep a stock of essentials: toilet paper, soap, shampoo, paper towels, coffee", "Share your listing photos so we can stage each room", "Tell us your rule for guest food left behind", "Tell us if laundry is done on site or by a linen service"],
      tip: "A written restock list for your property helps us tell you exactly what is running low after each turnover." },

    { icon: "info", t: "What's not included", lead: "These items are not part of a standard turnover. Ask us if you would like to add any of them.",
      notIncluded: ["Buying supplies or linens (we use your stock)", "Repairs or replacing broken items", "Off-site laundry service", "Inside the oven", "Deep cleaning such as baseboards and blinds every turnover", "Exterior areas, patio and garage (available as upgrades)", "Removing heavy items or furniture"],
      tip: "Schedule a Deluxe Cleaning every few months to keep your rental in top shape between turnovers." },

    UPGRADES_STEP,

    { icon: "shield", t: "Our promise", lead: "Five-star clean, every turnover.",
      html: `<div class="blk do"><h3>${icon("check")}What you can count on</h3><ol>
        <li>A trained team following the same turnover checklist in every property.</li>
        <li>Before and after photos and a clear report after every turnover.</li>
        <li>Your home staged to match your listing.</li>
        <li>If something was missed, tell us and we will make it right before your guest arrives whenever possible.</li></ol></div>` }
  ]
}};
