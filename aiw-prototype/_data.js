/* ============================================================
   All-In-Weddings — Catalog (mocked for prototype)
   Real data would come from a CMS / API.
   ============================================================ */

export const BRANDS = [
  {
    id: "hard-rock",
    name: "Hard Rock Hotels",
    tagline: "All-inclusive, music-forward, electric energy.",
    accent: "#8C2A2A",
    short: "Iconic. Immersive. Loud-on-purpose.",
  },
  {
    id: "unico",
    name: "UNICO 20°87°",
    tagline: "Adults-only, locally-rooted, intentionally crafted.",
    accent: "#B4814D",
    short: "A more grown-up all-inclusive.",
  },
  {
    id: "nobu",
    name: "Nobu Hotels",
    tagline: "Quiet luxury with a cinematic eye for detail.",
    accent: "#2A2A28",
    short: "Minimalist, cinematic, considered.",
  },
  {
    id: "ava",
    name: "AVA Resort",
    tagline: "Modern Mexican beachfront, designed for moments.",
    accent: "#5A8A8B",
    short: "Sun-soaked & stylish.",
  },
];

export const HOTELS = [
  /* ---------- Hard Rock (All-Inclusive) ---------- */
  { id: "hr-punta-cana",   brand: "hard-rock", name: "Hard Rock Hotel & Casino Punta Cana",
    city: "Punta Cana", country: "Dominican Republic", region: "caribbean",
    fromUSD: 32500, palette: ["#8C2A2A","#F2D5A0","#1F2A2A"],
    blurb: "1,775 suites, 9 pools, 8 wedding venues. Glittering Caribbean wedding factory with serious headline energy." },
  { id: "hr-cancun",       brand: "hard-rock", name: "Hard Rock Hotel Cancun",
    city: "Cancún", country: "Mexico", region: "caribbean",
    fromUSD: 28000, palette: ["#8C2A2A","#E8D4A8","#2A2A28"],
    blurb: "Beachfront with private cove ceremonies and rooftop receptions overlooking the lagoon." },
  { id: "hr-riviera-maya", brand: "hard-rock", name: "Hard Rock Hotel Riviera Maya",
    city: "Riviera Maya", country: "Mexico", region: "caribbean",
    fromUSD: 30000, palette: ["#8C2A2A","#D7B98A","#1F2A2A"],
    blurb: "Hacienda + Heaven sides — choose tropical or rockstar, or split your weekend across both." },
  { id: "hr-vallarta",     brand: "hard-rock", name: "Hard Rock Hotel Vallarta",
    city: "Puerto Vallarta", country: "Mexico", region: "pacific",
    fromUSD: 26500, palette: ["#8C2A2A","#E2A87A","#2A2A28"],
    blurb: "Sierra Madre meets Banderas Bay — sunset ceremonies on the cliffside lawn." },
  { id: "hr-los-cabos",    brand: "hard-rock", name: "Hard Rock Hotel Los Cabos",
    city: "Los Cabos", country: "Mexico", region: "pacific",
    fromUSD: 31000, palette: ["#8C2A2A","#E0BE85","#2A2A28"],
    blurb: "Sea of Cortez backdrop, dramatic rockwork, and a 30,000-sq-ft spa for the wedding party." },

  /* ---------- UNICO 20°87° ---------- */
  { id: "unico-riviera-maya", brand: "unico", name: "UNICO 20°87° Hotel Riviera Maya",
    city: "Riviera Maya", country: "Mexico", region: "caribbean",
    fromUSD: 42000, palette: ["#B4814D","#F0E8DC","#2A2A28"],
    blurb: "Adults-only sanctuary. Locally-sourced everything. The 'I-don't-want-it-to-feel-like-a-resort' resort." },
  { id: "unico-nayarit",      brand: "unico", name: "UNICO 20°105° Riviera Nayarit",
    city: "Riviera Nayarit", country: "Mexico", region: "pacific",
    fromUSD: 44000, palette: ["#B4814D","#E8D5BD","#2A2A28"], upcoming: false,
    blurb: "Pacific coast, jungle backdrop. New for 2026 — designed around three signature wedding moments." },

  /* ---------- Nobu ---------- */
  { id: "nobu-los-cabos",   brand: "nobu", name: "Nobu Hotel Los Cabos",
    city: "Los Cabos", country: "Mexico", region: "pacific",
    fromUSD: 56000, palette: ["#2A2A28","#E8DDD0","#948D80"],
    blurb: "Ryokan-meets-desert. Wabi-sabi materials, stone, and water. The most photographed pool deck in Cabo." },
  { id: "nobu-miami",       brand: "nobu", name: "Nobu Hotel Miami Beach",
    city: "Miami Beach", country: "USA", region: "atlantic",
    fromUSD: 62000, palette: ["#2A2A28","#F0E8DC","#B4814D"],
    blurb: "Mid-century glamour on Collins Ave. White-on-white ceremonies, Eden Roc legacy reception." },
  { id: "nobu-tulum",       brand: "nobu", name: "Nobu Hotel Tulum",
    city: "Tulum", country: "Mexico", region: "caribbean", upcoming: true,
    fromUSD: 58000, palette: ["#2A2A28","#D9C7A6","#5A554D"],
    blurb: "Opening 2027. Cenote ceremonies, jungle long-table receptions. Waitlist priority for All-In planners." },
  { id: "nobu-punta-cana",  brand: "nobu", name: "Nobu Hotel Punta Cana",
    city: "Punta Cana", country: "Dominican Republic", region: "caribbean", upcoming: true,
    fromUSD: 54000, palette: ["#2A2A28","#E8D4A8","#5A554D"],
    blurb: "Opening 2027. Coral-lit ceremonies, omakase rehearsal dinners." },
  { id: "nobu-orlando",     brand: "nobu", name: "Nobu Hotel Orlando",
    city: "Orlando", country: "USA", region: "atlantic", upcoming: true,
    fromUSD: 48000, palette: ["#2A2A28","#F0E8DC","#B4814D"],
    blurb: "Opening 2026. Inland Nobu — for couples blending the destination feel with stateside logistics." },

  /* ---------- AVA ---------- */
  { id: "ava-cancun",       brand: "ava", name: "AVA Resort Cancun",
    city: "Cancún", country: "Mexico", region: "caribbean",
    fromUSD: 34000, palette: ["#5A8A8B","#F0E8DC","#2A2A28"],
    blurb: "Adults-only with three mile beach. Sculptural architecture and 13 venues to compose across." },
];

/* ---------- Spaces (a few per hotel — most relevant) ---------- */
export const SPACES = [
  /* Hard Rock Punta Cana */
  { id: "hr-pc-sky",      hotelId: "hr-punta-cana",   name: "The Sky Terrace",      type: "Rooftop",     capacity: 220, fromUSD: 18500, vibe: ["Glam","Dramatic","Sunset"] },
  { id: "hr-pc-cove",     hotelId: "hr-punta-cana",   name: "Hidden Cove Beach",    type: "Beachfront",  capacity: 140, fromUSD: 14200, vibe: ["Coastal","Intimate","Tropical"] },
  { id: "hr-pc-grand",    hotelId: "hr-punta-cana",   name: "Grand Casino Ballroom",type: "Ballroom",    capacity: 320, fromUSD: 22500, vibe: ["Glam","Black-tie","Bold"] },

  /* Hard Rock Cancun */
  { id: "hr-cn-rooftop",  hotelId: "hr-cancun",       name: "Lagoon Rooftop",       type: "Rooftop",     capacity: 180, fromUSD: 16500, vibe: ["Sunset","Tropical","Modern"] },
  { id: "hr-cn-beach",    hotelId: "hr-cancun",       name: "Pearl Cove",           type: "Beachfront",  capacity: 120, fromUSD: 12800, vibe: ["Coastal","Intimate","Soft"] },

  /* Hard Rock Riviera Maya */
  { id: "hr-rm-hacienda", hotelId: "hr-riviera-maya", name: "Hacienda Courtyard",   type: "Courtyard",   capacity: 200, fromUSD: 15800, vibe: ["Mexican","Earthy","Lantern-lit"] },
  { id: "hr-rm-beach",    hotelId: "hr-riviera-maya", name: "Heaven Beach",         type: "Beachfront",  capacity: 160, fromUSD: 13900, vibe: ["Coastal","Tropical","Soft"] },

  /* Hard Rock Vallarta */
  { id: "hr-vl-cliff",    hotelId: "hr-vallarta",     name: "Sierra Cliff Lawn",    type: "Cliffside",   capacity: 110, fromUSD: 13500, vibe: ["Dramatic","Sunset","Earthy"] },

  /* Hard Rock Los Cabos */
  { id: "hr-lc-sea",      hotelId: "hr-los-cabos",    name: "Sea of Cortez Deck",   type: "Beachfront",  capacity: 130, fromUSD: 15600, vibe: ["Dramatic","Coastal","Modern"] },

  /* UNICO Riviera Maya */
  { id: "u-rm-cenote",    hotelId: "unico-riviera-maya", name: "Cenote Sanctuary",  type: "Cenote",      capacity: 80,  fromUSD: 21500, vibe: ["Mystic","Earthy","Boho"] },
  { id: "u-rm-jungle",    hotelId: "unico-riviera-maya", name: "Mayakoba Long Table", type: "Jungle",   capacity: 140, fromUSD: 19800, vibe: ["Boho","Lantern-lit","Earthy"] },
  { id: "u-rm-beach",     hotelId: "unico-riviera-maya", name: "Cala Blanca Beach", type: "Beachfront",  capacity: 180, fromUSD: 18200, vibe: ["Coastal","Soft","Intimate"] },

  /* UNICO Nayarit */
  { id: "u-na-pacific",   hotelId: "unico-nayarit",   name: "Pacific Bluff",        type: "Cliffside",   capacity: 120, fromUSD: 19500, vibe: ["Dramatic","Sunset","Modern"] },
  { id: "u-na-jungle",    hotelId: "unico-nayarit",   name: "Selva Pavilion",       type: "Jungle",      capacity: 150, fromUSD: 17800, vibe: ["Boho","Earthy","Tropical"] },

  /* Nobu Los Cabos */
  { id: "no-lc-stone",    hotelId: "nobu-los-cabos",  name: "Stone Garden",         type: "Garden",      capacity: 100, fromUSD: 24500, vibe: ["Minimalist","Wabi-sabi","Sculptural"] },
  { id: "no-lc-pool",     hotelId: "nobu-los-cabos",  name: "Onsen Pool Deck",      type: "Poolside",    capacity: 140, fromUSD: 26800, vibe: ["Cinematic","Modern","Quiet"] },

  /* Nobu Miami Beach */
  { id: "no-mb-eden",     hotelId: "nobu-miami",      name: "Eden Roc Solarium",    type: "Indoor",      capacity: 220, fromUSD: 32500, vibe: ["Glam","Mid-century","Black-tie"] },
  { id: "no-mb-pool",     hotelId: "nobu-miami",      name: "Cabana Pool",          type: "Poolside",    capacity: 160, fromUSD: 28500, vibe: ["Glam","Cinematic","White-on-white"] },

  /* Nobu Tulum (upcoming) */
  { id: "no-tu-cenote",   hotelId: "nobu-tulum",      name: "Cenote 21",            type: "Cenote",      capacity: 60,  fromUSD: 28800, vibe: ["Mystic","Minimalist","Earthy"] },

  /* Nobu Punta Cana (upcoming) */
  { id: "no-pc-coral",    hotelId: "nobu-punta-cana", name: "Coral Atrium",         type: "Indoor",      capacity: 180, fromUSD: 30000, vibe: ["Cinematic","Quiet","Sculptural"] },

  /* Nobu Orlando (upcoming) */
  { id: "no-or-court",    hotelId: "nobu-orlando",    name: "Inner Courtyard",      type: "Courtyard",   capacity: 150, fromUSD: 22500, vibe: ["Quiet","Modern","Minimalist"] },

  /* AVA Cancun */
  { id: "av-cn-sky",      hotelId: "ava-cancun",      name: "Sky Pavilion",         type: "Rooftop",     capacity: 200, fromUSD: 17500, vibe: ["Modern","Sunset","Sculptural"] },
  { id: "av-cn-mile",     hotelId: "ava-cancun",      name: "Three-Mile Beach",     type: "Beachfront",  capacity: 240, fromUSD: 16200, vibe: ["Coastal","Soft","Tropical"] },
];

/* ---------- Vendors (verified marketplace) ---------- */
export const VENDOR_CATEGORIES = [
  { id: "hairmakeup", label: "Hair & Makeup", icon: "✦" },
  { id: "florist",    label: "Florists",      icon: "❀" },
  { id: "dj",         label: "DJs",           icon: "♫" },
  { id: "band",       label: "Bands",         icon: "♪" },
];

export const VENDORS = [
  /* Hair & Makeup */
  { id: "hm-luna",   cat: "hairmakeup", name: "Luna Atelier",         based: "Tulum, MX",        rating: 4.9, reviews: 142, fromUSD: 2800, tags: ["Editorial","Soft glam","Bridal hair"] },
  { id: "hm-marisol",cat: "hairmakeup", name: "Marisol Beauty Co.",   based: "Cancún, MX",       rating: 4.8, reviews: 218, fromUSD: 2200, tags: ["Long-wear","Natural","Group-friendly"] },
  { id: "hm-ren",    cat: "hairmakeup", name: "Ren + Co. Studio",     based: "Los Cabos, MX",    rating: 4.9, reviews:  96, fromUSD: 3400, tags: ["Avant-garde","Editorial","Nobu-trained"] },
  { id: "hm-coral",  cat: "hairmakeup", name: "Coral & Co.",          based: "Punta Cana, DR",   rating: 4.7, reviews: 174, fromUSD: 1900, tags: ["Classic","Humidity-proof"] },

  /* Florists */
  { id: "fl-arroyo", cat: "florist",    name: "Arroyo Florals",       based: "Riviera Maya, MX", rating: 4.9, reviews: 231, fromUSD: 6500, tags: ["Boho","Foraged","Cenote-friendly"] },
  { id: "fl-sienna", cat: "florist",    name: "Sienna Stem",          based: "Cancún, MX",       rating: 4.8, reviews: 182, fromUSD: 5200, tags: ["Tropical","Sculptural","Color-forward"] },
  { id: "fl-noir",   cat: "florist",    name: "Noir Botanic",         based: "Miami, USA",       rating: 5.0, reviews:  64, fromUSD:11500, tags: ["Editorial","Minimalist","Black-tie"] },
  { id: "fl-isla",   cat: "florist",    name: "Isla Bloom",           based: "Los Cabos, MX",    rating: 4.8, reviews: 138, fromUSD: 7400, tags: ["Earthy","Wabi-sabi","Stone-friendly"] },

  /* DJs */
  { id: "dj-saito",  cat: "dj",         name: "DJ Saito",             based: "Tulum, MX",        rating: 4.9, reviews: 312, fromUSD: 3800, tags: ["Afrohouse","Open-format","Sunset sets"] },
  { id: "dj-rivera", cat: "dj",         name: "Rivera Sound",         based: "Cancún, MX",       rating: 4.8, reviews: 264, fromUSD: 3200, tags: ["Latin","Top-40","Bilingual MC"] },
  { id: "dj-haru",   cat: "dj",         name: "Haru Audio",           based: "Los Cabos, MX",    rating: 4.9, reviews: 188, fromUSD: 4200, tags: ["Deep house","Cinematic","Dancefloor closer"] },

  /* Bands */
  { id: "bd-mariposa", cat: "band",     name: "Mariposa Big Band",    based: "Mexico City, MX",  rating: 4.8, reviews: 142, fromUSD: 9800, tags: ["12-piece","Mariachi-fusion","Cocktail"] },
  { id: "bd-velvet",   cat: "band",     name: "Velvet Hour",          based: "Miami, USA",       rating: 4.9, reviews:  98, fromUSD:14500, tags: ["Soul","Motown","First-dance ready"] },
  { id: "bd-kintsugi", cat: "band",     name: "Kintsugi Strings",     based: "Los Angeles, USA", rating: 5.0, reviews:  56, fromUSD: 8800, tags: ["String quartet","Ceremony","Cinematic"] },
];

/* ---------- Social proof / past brides ---------- */
export const BRIDES = [
  { name: "Aria & Marcus",  hotelId: "unico-riviera-maya", spaceId: "u-rm-cenote",
    quote: "We told the chatbot 'mystic boho cathedral' and it spit back our exact wedding. We cried. We booked.",
    season: "March 2026", guests: 78 },
  { name: "Priya & Daniel", hotelId: "nobu-los-cabos",     spaceId: "no-lc-stone",
    quote: "We wanted quiet. Not boring — quiet. Nobu was the only place that understood the difference.",
    season: "May 2026", guests: 92 },
  { name: "Jenna & Tomás",  hotelId: "hr-punta-cana",      spaceId: "hr-pc-sky",
    quote: "Sky Terrace at sunset. 220 of our loudest friends. Hard Rock did NOT come to play around.",
    season: "Jan 2026", guests: 220 },
  { name: "Sofía & Will",   hotelId: "ava-cancun",         spaceId: "av-cn-mile",
    quote: "Beach as far as the eye could see. Three different ceremony spots scouted, picked one in 10 minutes.",
    season: "Nov 2025", guests: 140 },
  { name: "Camila & Ben",   hotelId: "unico-nayarit",      spaceId: "u-na-pacific",
    quote: "Pacific bluff. The light at 5:47pm. Don't ask me how I'm typing through this.",
    season: "Apr 2026", guests: 110 },
  { name: "Maya & Theo",    hotelId: "nobu-miami",         spaceId: "no-mb-eden",
    quote: "Eden Roc Solarium. White everything. Tom Ford could not have art-directed it better.",
    season: "Feb 2026", guests: 180 },
];

/* ---------- Vibe presets (chips for the chatbot) ---------- */
export const VIBES = [
  { id: "boho-jungle",     label: "Boho jungle",          tags: ["Boho","Earthy","Lantern-lit"],
    hex: ["#3F4A2A","#B4814D","#E8DDD0","#5A554D"] },
  { id: "minimalist-stone",label: "Minimalist + stone",   tags: ["Minimalist","Wabi-sabi","Sculptural"],
    hex: ["#2A2A28","#948D80","#E8DDD0","#C9C2B6"] },
  { id: "cinematic-noir",  label: "Cinematic noir",       tags: ["Black-tie","Cinematic","Glam"],
    hex: ["#0F0F0E","#2A2A28","#5A554D","#B4814D"] },
  { id: "tropical-sunset", label: "Tropical sunset",      tags: ["Tropical","Sunset","Coastal"],
    hex: ["#C66A2E","#E2A87A","#F0E8DC","#5A8A8B"] },
  { id: "soft-romantic",   label: "Soft & romantic",      tags: ["Soft","Intimate","Coastal"],
    hex: ["#F5EFE6","#E8DDD0","#D9C7A6","#B4814D"] },
  { id: "mystic-cenote",   label: "Mystic cenote",        tags: ["Mystic","Earthy","Boho"],
    hex: ["#1F2A2A","#5A8A8B","#B4814D","#E8DDD0"] },
];

/* Lookup helpers */
export const byId    = (list, id) => list.find(x => x.id === id);
export const spacesOf= (hotelId)  => SPACES.filter(s => s.hotelId === hotelId);
export const bridesOf= (hotelId)  => BRIDES.filter(b => b.hotelId === hotelId);
export const vendorsOf=(catId)    => VENDORS.filter(v => v.cat === catId);
export const hotelOf = (spaceId)  => HOTELS.find(h => h.id === SPACES.find(s => s.id === spaceId)?.hotelId);
