/* ==========================================================
   Aurex Flow Controls — demo site scripts
   ========================================================== */

const ICONS = {
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 2H21l-6.5 7.4L22 22h-6l-4.7-6.1L5.8 22H3l7-8L2 2h6.1l4.3 5.6zm-1 18h1.6L7 3.7H5.3z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15V9l5.7 3z"/></svg>',
};

const LOGO = `
  <svg class="logo-mark" viewBox="0 0 40 40" aria-hidden="true">
    <rect width="40" height="40" rx="9" fill="#0f2240"/>
    <circle cx="20" cy="22" r="10" fill="none" stroke="#f2a900" stroke-width="3.5"/>
    <rect x="4" y="19" width="32" height="6" rx="1.5" fill="#b6c0cd"/>
    <circle cx="20" cy="22" r="5" fill="#f2a900"/>
    <rect x="18.5" y="6" width="3" height="10" fill="#b6c0cd"/>
    <rect x="12" y="5" width="16" height="4" rx="2" fill="#f2a900"/>
  </svg>
  <div>AUREX<small>FLOW CONTROLS</small></div>`;

/* ---------- Shared header / footer ---------- */
function renderChrome() {
  const page = document.body.dataset.page;
  const link = (href, label, key) =>
    `<a href="${href}" class="${page === key ? "active" : ""}">${label}</a>`;

  const header = document.getElementById("site-header");
  if (header) {
    header.innerHTML = `
      <div class="topbar">
        <div class="container">
          <div>
            <span>${ICONS.phone.replace("<svg", '<svg width="14" height="14"')} +91 20 4000 1234</span>
            <span class="hide-sm">${ICONS.mail.replace("<svg", '<svg width="14" height="14"')} sales@aurexflow.example</span>
          </div>
          <div class="hide-sm"><a href="contact.html">Request a Catalogue</a> &nbsp;·&nbsp; ISO 9001:2015 Certified</div>
        </div>
      </div>
      <header class="header">
        <div class="container">
          <a href="index.html" class="logo" aria-label="Aurex Flow Controls home">${LOGO}</a>
          <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false"><span></span><span></span><span></span></button>
          <nav class="nav">
            ${link("index.html", "Home", "home")}
            ${link("products.html", "Products", "products")}
            ${link("index.html#industries", "Industries", "industries")}
            ${link("about.html", "About Us", "about")}
            ${link("contact.html", "Contact", "contact")}
            <a href="contact.html#enquiry" class="btn btn--primary">Get a Quote</a>
          </nav>
        </div>
      </header>`;
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div>
              <a href="index.html" class="logo">${LOGO.replace('fill="#0f2240"', 'fill="#16315c"')}</a>
              <p>Engineering industrial valves for oil &amp; gas, power, water and process industries since 1998. Built to API, ASME and ISO standards.</p>
              <div class="socials">
                <a href="#" aria-label="LinkedIn">${ICONS.linkedin}</a>
                <a href="#" aria-label="X">${ICONS.x}</a>
                <a href="#" aria-label="YouTube">${ICONS.youtube}</a>
              </div>
            </div>
            <div>
              <h4>Products</h4>
              <ul>
                <li><a href="products.html?type=ball">Ball Valves</a></li>
                <li><a href="products.html?type=gate">Gate Valves</a></li>
                <li><a href="products.html?type=globe">Globe Valves</a></li>
                <li><a href="products.html?type=butterfly">Butterfly Valves</a></li>
                <li><a href="products.html?type=check">Check Valves</a></li>
                <li><a href="products.html?type=plug">Plug Valves</a></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="about.html">About Us</a></li>
                <li><a href="about.html#quality">Quality &amp; Testing</a></li>
                <li><a href="index.html#industries">Industries</a></li>
                <li><a href="contact.html">Careers</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4>Stay Updated</h4>
              <p>Product launches, technical notes and trade-show updates. No spam.</p>
              <form class="newsletter" onsubmit="event.preventDefault(); this.innerHTML='<p style=&quot;color:#f2a900;margin:0&quot;>Thanks for subscribing!</p>';">
                <input type="email" placeholder="Your email" required aria-label="Email address">
                <button type="submit">Join</button>
              </form>
            </div>
          </div>
        </div>
        <div class="container footer-bottom">
          <span>© ${new Date().getFullYear()} Aurex Flow Controls (fictional demo company). All rights reserved.</span>
          <span>Portfolio project · Designed &amp; built by Manoj Kumar Jigajeni</span>
        </div>
      </footer>
      <button class="to-top" aria-label="Back to top">${ICONS.up}</button>`;
  }
}

/* ---------- Product catalogue ---------- */
const PRODUCTS = [
  { id: "AX-BV-150", name: "Floating Ball Valve", type: "ball", img: "ball",
    desc: "Two-piece, full-bore floating ball valve with fire-safe design and anti-static device. Ideal for general utility and hydrocarbon service.",
    size: '½" – 8"', pressure: "Class 150 – 600", material: "WCB, CF8M, LCC", ends: "Flanged RF / RTJ",
    standards: ["API 6D", "API 607", "ASME B16.34"], industries: ["Oil & Gas", "Chemical"] },
  { id: "AX-BV-TM", name: "Trunnion Mounted Ball Valve", type: "ball", img: "ball",
    desc: "Three-piece forged trunnion design for high-pressure pipeline service with double block & bleed and emergency sealant injection.",
    size: '2" – 48"', pressure: "Class 150 – 2500", material: "A105, LF2, F316", ends: "Flanged / Butt-weld",
    standards: ["API 6D", "API 6FA", "NACE MR0175"], industries: ["Oil & Gas", "Pipelines"] },
  { id: "AX-BV-3W", name: "3-Way Multiport Ball Valve", type: "ball", img: "ball",
    desc: "L-port and T-port configurations for diverting and mixing flows. Compact footprint with ISO 5211 mounting pad for actuation.",
    size: '½" – 4"', pressure: "PN 16 – PN 63", material: "CF8, CF8M", ends: "Screwed / Socket-weld",
    standards: ["ISO 5211", "ASME B16.34"], industries: ["Pharma", "Food & Beverage"] },
  { id: "AX-GV-OS", name: "OS&Y Wedge Gate Valve", type: "gate", img: "gate",
    desc: "Outside screw & yoke, bolted bonnet gate valve with flexible wedge for tight shut-off across wide temperature ranges.",
    size: '2" – 36"', pressure: "Class 150 – 1500", material: "WCB, WC6, CF8M", ends: "Flanged / Butt-weld",
    standards: ["API 600", "API 598", "ASME B16.10"], industries: ["Power", "Refinery"] },
  { id: "AX-GV-PS", name: "Pressure Seal Gate Valve", type: "gate", img: "gate",
    desc: "Pressure-seal bonnet design where line pressure energises the seal — engineered for high-pressure steam and boiler feed water.",
    size: '2" – 24"', pressure: "Class 900 – 2500", material: "WC9, C12A, F91", ends: "Butt-weld",
    standards: ["ASME B16.34", "IBR"], industries: ["Power", "Steam"] },
  { id: "AX-GL-BB", name: "Bolted Bonnet Globe Valve", type: "globe", img: "globe",
    desc: "Precise throttling and flow regulation with plug-type disc, stellited seats and back-seat arrangement for safe repacking.",
    size: '½" – 16"', pressure: "Class 150 – 1500", material: "WCB, CF8M, WC6", ends: "Flanged / Socket-weld",
    standards: ["BS 1873", "API 623"], industries: ["Chemical", "Power"] },
  { id: "AX-GL-BS", name: "Bellow Sealed Globe Valve", type: "globe", img: "globe",
    desc: "Zero-emission bellow seal design for thermal oil, toxic and hazardous media where packing leakage is unacceptable.",
    size: '½" – 10"', pressure: "PN 16 – PN 40", material: "GS-C25, 1.4408", ends: "Flanged",
    standards: ["EN 13709", "ISO 15848"], industries: ["Chemical", "Pharma"] },
  { id: "AX-BF-TO", name: "Triple Offset Butterfly Valve", type: "butterfly", img: "butterfly",
    desc: "Metal-seated, bi-directional zero-leakage butterfly valve for high temperature, cryogenic and critical isolation duties.",
    size: '3" – 72"', pressure: "Class 150 – 600", material: "WCB, CF8M, Duplex", ends: "Wafer / Lug / Double-flanged",
    standards: ["API 609", "API 607", "EN 593"], industries: ["Oil & Gas", "Power"] },
  { id: "AX-BF-RS", name: "Resilient Seated Butterfly Valve", type: "butterfly", img: "butterfly",
    desc: "Concentric, EPDM / NBR lined butterfly valve — light, economical and maintenance-free for water and HVAC networks.",
    size: '2" – 48"', pressure: "PN 10 – PN 16", material: "Ductile Iron, CF8", ends: "Wafer / Lug",
    standards: ["EN 593", "AWWA C504"], industries: ["Water", "HVAC"] },
  { id: "AX-CV-SW", name: "Swing Check Valve", type: "check", img: "check",
    desc: "Bolted cover swing check valve that prevents reverse flow with low pressure drop. Suitable for horizontal and vertical-up lines.",
    size: '2" – 36"', pressure: "Class 150 – 2500", material: "WCB, LCC, CF8M", ends: "Flanged / Butt-weld",
    standards: ["API 594", "BS 1868"], industries: ["Water", "Oil & Gas"] },
  { id: "AX-CV-DP", name: "Dual Plate Check Valve", type: "check", img: "check",
    desc: "Spring-loaded dual plate wafer check valve — up to 80% lighter than swing type with non-slam closure.",
    size: '2" – 48"', pressure: "Class 150 – 900", material: "WCB, CF8M, Duplex", ends: "Wafer / Lug",
    standards: ["API 594", "API 598"], industries: ["Water", "Chemical"] },
  { id: "AX-PV-LS", name: "Lubricated Plug Valve", type: "plug", img: "plug",
    desc: "Tapered plug with pressure-balanced design and sealant injection for abrasive, viscous and slurry service.",
    size: '½" – 24"', pressure: "Class 150 – 900", material: "WCB, CF8M", ends: "Flanged",
    standards: ["API 599", "API 6D"], industries: ["Refinery", "Mining"] },
];

const TYPE_LABEL = { ball: "Ball", gate: "Gate", globe: "Globe", butterfly: "Butterfly", check: "Check", plug: "Plug" };

function productCard(p) {
  return `
    <article class="card reveal" data-id="${p.id}">
      <div class="card-media">
        <span class="tag">${TYPE_LABEL[p.type]} Valve</span>
        <img src="assets/${p.img}.svg" alt="${p.name}" loading="lazy">
      </div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <ul class="specs">
          <li><span>Size</span><span>${p.size}</span></li>
          <li><span>Pressure</span><span>${p.pressure}</span></li>
          <li><span>Material</span><span>${p.material}</span></li>
        </ul>
        <button class="card-link" style="background:none;border:0;padding:0;cursor:pointer;font:inherit;font-weight:600" data-open="${p.id}">
          View specifications ${ICONS.arrow}
        </button>
      </div>
    </article>`;
}

function initProducts() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  const count = document.getElementById("result-count");
  const empty = document.getElementById("empty");
  const search = document.getElementById("search");
  const filters = document.querySelectorAll(".filter");

  let type = new URLSearchParams(location.search).get("type") || "all";
  let term = "";

  function render() {
    const list = PRODUCTS.filter(p =>
      (type === "all" || p.type === type) &&
      (`${p.name} ${p.desc} ${p.material} ${p.standards.join(" ")} ${p.industries.join(" ")}`.toLowerCase().includes(term))
    );
    grid.innerHTML = list.map(productCard).join("");
    count.textContent = `Showing ${list.length} of ${PRODUCTS.length} products`;
    empty.style.display = list.length ? "none" : "block";
    filters.forEach(f => f.classList.toggle("active", f.dataset.type === type));
    observeReveals();
  }

  filters.forEach(f => f.addEventListener("click", () => {
    type = f.dataset.type;
    const url = new URL(location);
    type === "all" ? url.searchParams.delete("type") : url.searchParams.set("type", type);
    try { history.replaceState(null, "", url); } catch {}
    render();
  }));
  search.addEventListener("input", e => { term = e.target.value.trim().toLowerCase(); render(); });

  grid.addEventListener("click", e => {
    const btn = e.target.closest("[data-open]");
    if (btn) openModal(btn.dataset.open);
  });
  render();
}

/* ---------- Spec modal ---------- */
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const modal = document.getElementById("modal");
  if (!p || !modal) return;
  modal.querySelector(".modal-media").innerHTML = `<img src="assets/${p.img}.svg" alt="${p.name}">`;
  modal.querySelector(".modal-content").innerHTML = `
    <span class="eyebrow">${p.id}</span>
    <h2 id="modal-title" style="font-size:2.2rem">${p.name}</h2>
    <p style="color:var(--muted)">${p.desc}</p>
    <ul class="specs">
      <li><span>Valve type</span><span>${TYPE_LABEL[p.type]}</span></li>
      <li><span>Size range</span><span>${p.size}</span></li>
      <li><span>Pressure rating</span><span>${p.pressure}</span></li>
      <li><span>Body material</span><span>${p.material}</span></li>
      <li><span>End connection</span><span>${p.ends}</span></li>
      <li><span>Operation</span><span>Lever / Gear / Actuated</span></li>
    </ul>
    <strong style="font-size:.85rem">Design &amp; testing standards</strong>
    <div class="chips">${p.standards.map(s => `<span class="chip">${s}</span>`).join("")}</div>
    <strong style="font-size:.85rem">Typical industries</strong>
    <div class="chips">${p.industries.map(s => `<span class="chip">${s}</span>`).join("")}</div>
    <a class="btn btn--primary" href="contact.html?product=${encodeURIComponent(p.name)}#enquiry">Request a Quote ${ICONS.arrow}</a>`;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close").focus();
}
function closeModal() {
  const modal = document.getElementById("modal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

/* ---------- Featured products on home ---------- */
function initFeatured() {
  const el = document.getElementById("featured");
  if (!el) return;
  const picks = ["AX-BV-TM", "AX-GV-OS", "AX-BF-TO"].map(id => PRODUCTS.find(p => p.id === id));
  el.innerHTML = picks.map(productCard).join("");
  el.addEventListener("click", e => {
    const btn = e.target.closest("[data-open]");
    if (btn) openModal(btn.dataset.open);
  });
}

/* ---------- Contact form ---------- */
function initForm() {
  const form = document.getElementById("enquiry-form");
  if (!form) return;
  const product = new URLSearchParams(location.search).get("product");
  if (product) form.querySelector("#message").value = `I'd like a quotation for: ${product}\n\nQuantity: \nSize / Class: \nDelivery location: `;

  const rules = {
    name: v => v.trim().length >= 2 || "Please enter your full name",
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Please enter a valid email address",
    phone: v => !v || /^[+\d][\d\s-]{6,}$/.test(v) || "Please enter a valid phone number",
    category: v => !!v || "Please choose a product category",
    message: v => v.trim().length >= 10 || "Please tell us a bit more (min. 10 characters)",
  };

  function validate(field) {
    const input = form.elements[field];
    const result = rules[field](input.value);
    const wrap = input.closest(".field");
    wrap.classList.toggle("error", result !== true);
    wrap.querySelector(".err").textContent = result === true ? "" : result;
    return result === true;
  }

  Object.keys(rules).forEach(f => form.elements[f].addEventListener("blur", () => validate(f)));

  form.addEventListener("submit", e => {
    e.preventDefault();
    const ok = Object.keys(rules).map(validate).every(Boolean);
    if (!ok) { form.querySelector(".error input, .error select, .error textarea")?.focus(); return; }
    const btn = form.querySelector("button[type=submit]");
    btn.disabled = true; btn.textContent = "Sending…";
    setTimeout(() => {
      const success = document.getElementById("form-success");
      success.innerHTML = `<strong>Thank you, ${form.elements.name.value.split(" ")[0]}!</strong> Your enquiry has been received. Our sales engineer will respond within one business day. (Demo — no data was sent.)`;
      success.classList.add("show");
      form.reset();
      btn.disabled = false; btn.innerHTML = `Send Enquiry ${ICONS.arrow}`;
      success.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 900);
  });
}

/* ---------- Counters ---------- */
function initCounters() {
  const nums = document.querySelectorAll("[data-count]");
  if (!nums.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = +el.dataset.count;
      const start = performance.now();
      const step = now => {
        const t = Math.min((now - start) / 1600, 1);
        el.firstChild.nodeValue = Math.round(target * (1 - Math.pow(1 - t, 3))).toLocaleString();
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      io.unobserve(el);
    });
  }, { threshold: .5 });
  nums.forEach(n => io.observe(n));
}

/* ---------- Reveal on scroll ---------- */
let revealObserver;
function observeReveals() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
    return;
  }
  revealObserver ??= new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("visible"); revealObserver.unobserve(e.target); }
    });
  }, { threshold: .12 });
  document.querySelectorAll(".reveal:not(.visible)").forEach(el => revealObserver.observe(el));
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("js-motion");
  renderChrome();
  initFeatured();
  initProducts();
  initForm();
  initCounters();
  observeReveals();

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
  });
  nav?.addEventListener("click", e => {
    if (e.target.closest("a")) { nav.classList.remove("open"); toggle.classList.remove("open"); }
  });

  const header = document.querySelector(".header");
  const toTop = document.querySelector(".to-top");
  const onScroll = () => {
    header?.classList.toggle("scrolled", scrollY > 10);
    toTop?.classList.toggle("show", scrollY > 600);
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop?.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

  document.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));
  addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
});
