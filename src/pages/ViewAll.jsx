import { useState } from "react"
const IMG = "/2ndPI"
const CONTRACTORS = [
  {
    id: 1,
    name: "Samantha Donovan",
    badge: "Verified",
    image: `${IMG}/1st.jpg`,
    avatar: `${IMG}/1stR.jpg`,
    tags: ["Water softener installation", "Water heater repair"],
    description:
      "I'm Samantha, your licensed, insured plumber in NYC. Specializing in servicing residential buildings, high rises, offices, and eateries.",
    rating: 4.7,
    reviews: 26,
    features: ["Listing of the month", "Eco-friendly"],
  },
  {
    id: 2,
    name: "Easy Handy Services",
    badge: "Top",
    image: `${IMG}/2nd.jpg`,
    avatar: `${IMG}/2ndR.gif`,
    tags: ["Appliance installation"],
    description:
      "We offers reliable and professional appliance installation services, ensuring your home is equipped with expertly installed, ready-to-use appliances.",
    rating: 4.9,
    reviews: 38,
    features: ["Listing of the month"],
  },
  {
    id: 3,
    name: "Alex Rodriguez",
    badge: null,
    image: `${IMG}/3rd.jpg`,
    avatar: `${IMG}/3rd.jpg`,
    tags: ["Carpentry", "Custom kitchen cabinets"],
    description:
      "With an unwavering commitment to excellence, I bring dreams to life with woodwork. Each stroke of skilled hands transforms timber into masterpieces.",
    rating: 5.0,
    reviews: 13,
    features: ["Eco-friendly"],
  },
  {
    id: 4,
    name: "Roofing & Construction",
    badge: "Verified",
    image: `${IMG}/4th.jpg`,
    avatar: `${IMG}/4thR.jpg`,
    tags: ["Roof repair", "Asphalt roofing", "Flat foam roofing"],
    description:
      "With extensive experience in roofing and construction, we focus on both residential and commercial roofing solutions.",
    rating: 4.6,
    reviews: 97,
    features: ["Verified hires", "Eco-friendly"],
  },
  {
    id: 5,
    name: "Sam Jackson",
    badge: null,
    image: `${IMG}/5th.jpg`,
    avatar: `${IMG}/5thR.jpg`,
    tags: ["Bathroom remodeling", "Bathtub installation"],
    description:
      "I provide all types of plumbing service work, repairs and installations. I offer full service remodeling.",
    rating: 5.0,
    reviews: 21,
    features: ["Eco-friendly"],
  },
]

const PROJECT_TYPES = [
  { label: "Appliance installation", checked: true },
  { label: "Bathtub repair", checked: false },
  { label: "Door repair", checked: false },
  { label: "Heating & furnace", checked: true },
  { label: "Locksmith", checked: false },
  { label: "Small appliance repair", checked: false },
  { label: "Smoke detector installation", checked: false },
]

const FEATURES = [
  { label: "Eco-friendly", checked: true },
  { label: "Free consultation", checked: false },
  { label: "Online consultation", checked: false },
  { label: "Free estimate", checked: false },
  { label: "Verified hires", checked: true },
  { label: "Weekend consultations", checked: false },
]

const BUDGET = [
  { label: "$$$$", checked: false },
  { label: "$$$", checked: false },
  { label: "$$", checked: true },
  { label: "$", checked: false },
]

const RATINGS = [
  { stars: 5, checked: true },
  { stars: 4, checked: true },
  { stars: 3, checked: false },
  { stars: "2-1", checked: false },
]

const ACTIVE_CHIPS = [
  "New York",
  "50 mi",
  "Heating & furnace",
  "Roofing",
  "$$",
  "Eco-friendly",
  "5 ★",
]

export default function ViewAll() {
  const [chips, setChips] = useState(ACTIVE_CHIPS)

  const removeChip = (chip) => setChips((prev) => prev.filter((c) => c !== chip))
  const clearAll = () => setChips([])

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1296, margin: "0 auto", padding: "24px 24px 64px" }}>
        <nav className="flex items-center" style={{ gap: 8, fontSize: 14, marginBottom: 20 }}>
          <span style={{ color: "var(--text)", fontWeight: 500 }}>Homepage</span>
          <IconChevronRight />
          <span style={{ color: "var(--text-subtle)" }}>Contractors</span>
        </nav>

        <div className="flex" style={{ gap: 40, alignItems: "flex-start" }}>
          <aside style={{ width: 232, flexShrink: 0 }}>
            <FilterGroup title="Location and radius">
              <SelectPill icon={<IconPin />} label="New York" />
              <div style={{ height: 12 }} />
              <SelectPill icon={<IconNavigation />} label="50 mi" />
            </FilterGroup>

            <FilterGroup title="Project type">
              <div
                className="flex items-center"
                style={{
                  gap: 8,
                  height: 40,
                  padding: "0 12px",
                  borderRadius: 8,
                  border: "1px solid var(--border)",
                  background: "var(--input-bg)",
                  marginBottom: 16,
                }}
              >
                <IconSearch />
                <input
                  placeholder="Search"
                  style={{
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    color: "var(--input-text)",
                    fontSize: 14,
                    width: "100%",
                  }}
                />
              </div>
              {PROJECT_TYPES.map((p) => (
                <CheckRow key={p.label} label={p.label} checked={p.checked} />
              ))}
            </FilterGroup>

            <FilterGroup title="Budget">
              {BUDGET.map((b) => (
                <CheckRow key={b.label} label={b.label} checked={b.checked} />
              ))}
            </FilterGroup>

            <FilterGroup title="Features">
              {FEATURES.map((f) => (
                <CheckRow key={f.label} label={f.label} checked={f.checked} />
              ))}
            </FilterGroup>

            <FilterGroup title="Availability">
              <CheckRow label="Available now" checked={false} />
            </FilterGroup>

            <FilterGroup title="Average rating" last>
              {RATINGS.map((r) => (
                <CheckRow
                  key={r.stars}
                  checked={r.checked}
                  label={
                    <span className="flex items-center" style={{ gap: 4 }}>
                      {r.stars}
                      <IconStar filled />
                    </span>
                  }
                />
              ))}
            </FilterGroup>
          </aside>

          <section style={{ flex: 1, minWidth: 0 }}>
            {chips.length > 0 && (
              <div className="flex items-center flex-wrap" style={{ gap: 8, marginBottom: 20 }}>
                {chips.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => removeChip(c)}
                    className="flex items-center cursor-pointer hover:opacity-70"
                    style={{
                      gap: 6,
                      height: 32,
                      padding: "0 12px",
                      borderRadius: 999,
                      border: "1px solid var(--border)",
                      background: "var(--surface)",
                      color: "var(--text-muted)",
                      fontSize: 13,
                    }}
                  >
                    <IconClose />
                    {c}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={clearAll}
                  className="bg-transparent border-0 cursor-pointer hover:opacity-70"
                  style={{
                    marginLeft: "auto",
                    color: "var(--text)",
                    fontSize: 14,
                    fontWeight: 500,
                    textDecoration: "underline",
                    textUnderlineOffset: 3,
                  }}
                >
                  Clear all
                </button>
              </div>
            )}

            <div className="flex items-center justify-between" style={{ marginBottom: 20 }}>
              <span style={{ color: "var(--text)", fontSize: 15, fontWeight: 500 }}>
                Showing 48 results
              </span>
              <button
                type="button"
                className="flex items-center bg-transparent border-0 cursor-pointer hover:opacity-70"
                style={{ gap: 8, color: "var(--text-muted)", fontSize: 14 }}
              >
                <IconSort />
                <span style={{ color: "var(--text)" }}>Popular</span>
                <IconChevronDown />
              </button>
            </div>

            <div className="flex flex-col" style={{ gap: 20 }}>
              {CONTRACTORS.map((c) => (
                <ContractorCard key={c.id} data={c} />
              ))}
            </div>

            <Pagination />
          </section>
        </div>
      </div>
    </main>
  )
}

function ContractorCard({ data }) {
  return (
    <article
      className="flex"
      style={{
        border: "1px solid var(--border)",
        borderRadius: 12,
        background: "var(--surface)",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", width: 230, flexShrink: 0 }}>
        <img
          src={data.image}
          alt={data.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        {data.badge && (
          <span
            className="flex items-center"
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              gap: 4,
              padding: "4px 10px",
              borderRadius: 6,
              background: data.badge === "Top" ? "#1a1a1a" : "#0f766e",
              color: "#fff",
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            {data.badge === "Verified" && <IconShield />}
            {data.badge}
          </span>
        )}

        <button
          type="button"
          aria-label="Précédent"
          className="flex items-center justify-center cursor-pointer"
          style={{ ...arrowStyle, left: 10 }}
        >
          <IconChevronLeft />
        </button>
        <button
          type="button"
          aria-label="Suivant"
          className="flex items-center justify-center cursor-pointer"
          style={{ ...arrowStyle, right: 10 }}
        >
          <IconChevronRightSmall />
        </button>

        <div
          className="flex items-center justify-center"
          style={{ position: "absolute", bottom: 12, left: 0, right: 0, gap: 6 }}
        >
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              style={{
                width: 6,
                height: 6,
                borderRadius: 999,
                background: i === 0 ? "#fff" : "rgba(255,255,255,0.5)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Infos */}
      <div className="flex" style={{ flex: 1, padding: 20, gap: 20 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="flex items-center" style={{ gap: 10, marginBottom: 8 }}>
            <img
              src={data.avatar}
              alt=""
              style={{
                width: 28,
                height: 28,
                borderRadius: 999,
                objectFit: "cover",
                border: "1px solid var(--border)",
              }}
            />
            <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--text)" }}>{data.name}</h3>
          </div>

          <div
            className="flex items-center flex-wrap"
            style={{ gap: 6, marginBottom: 12, color: "var(--text-muted)", fontSize: 14 }}
          >
            {data.tags.map((t, i) => (
              <span key={t} className="flex items-center" style={{ gap: 6 }}>
                {i > 0 && <span style={{ color: "var(--text-subtle)" }}>·</span>}
                {t}
              </span>
            ))}
          </div>

          <p style={{ color: "var(--text-soft)", fontSize: 14, lineHeight: 1.6 }}>
            {data.description}
          </p>
        </div>

        <div className="flex flex-col" style={{ width: 180, flexShrink: 0, alignItems: "flex-start" }}>
          <button
            type="button"
            aria-label="Enregistrer"
            className="flex items-center justify-center bg-transparent cursor-pointer hover:opacity-70"
            style={{
              alignSelf: "flex-end",
              width: 36,
              height: 36,
              borderRadius: 999,
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
            }}
          >
            <IconBookmark />
          </button>

          <div style={{ marginTop: 6 }}>
            <div className="flex items-center" style={{ gap: 6, marginBottom: 10 }}>
              <IconStar filled />
              <span style={{ color: "var(--text)", fontWeight: 600, fontSize: 15 }}>
                {data.rating.toFixed(1)}
              </span>
              <span style={{ color: "var(--text-subtle)", fontSize: 14 }}>({data.reviews})</span>
            </div>

            {data.features.map((f) => (
              <div
                key={f}
                className="flex items-center"
                style={{ gap: 6, marginBottom: 8, color: "var(--text-muted)", fontSize: 13 }}
              >
                {f === "Eco-friendly" ? <IconLeaf /> : f === "Verified hires" ? <IconShield /> : <IconThumb />}
                {f}
              </div>
            ))}

            <button
              type="button"
              className="flex items-center justify-center cursor-pointer hover:opacity-80"
              style={{
                gap: 8,
                marginTop: 8,
                width: 156,
                height: 40,
                borderRadius: 8,
                border: "1px solid var(--border-strong)",
                background: "var(--surface)",
                color: "var(--text)",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              <IconMail />
              Connect
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

function Pagination() {
  const pages = [1, 2, 3, 4, "...", 10]
  return (
    <div className="flex items-center" style={{ gap: 6, marginTop: 32 }}>
      {pages.map((p, i) => {
        const active = p === 1
        if (p === "...")
          return (
            <span key={i} style={{ color: "var(--text-subtle)", padding: "0 6px" }}>
              …
            </span>
          )
        return (
          <button
            key={i}
            type="button"
            className="flex items-center justify-center cursor-pointer hover:opacity-80"
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: active ? "var(--bg-soft)" : "transparent",
              color: "var(--text)",
              fontSize: 14,
              fontWeight: active ? 600 : 400,
            }}
          >
            {p}
          </button>
        )
      })}
    </div>
  )
}

function FilterGroup({ title, children, last }) {
  return (
    <div
      style={{
        paddingBottom: last ? 0 : 24,
        marginBottom: last ? 0 : 24,
        borderBottom: last ? "none" : "1px solid var(--border)",
      }}
    >
      <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", marginBottom: 16 }}>
        {title}
      </h4>
      {children}
    </div>
  )
}

function SelectPill({ icon, label }) {
  return (
    <button
      type="button"
      className="flex items-center justify-between cursor-pointer hover:opacity-80"
      style={{
        width: "100%",
        height: 40,
        padding: "0 12px",
        borderRadius: 8,
        border: "1px solid var(--border)",
        background: "var(--input-bg)",
        color: "var(--input-text)",
        fontSize: 14,
      }}
    >
      <span className="flex items-center" style={{ gap: 8 }}>
        {icon}
        {label}
      </span>
      <IconChevronDown />
    </button>
  )
}

function CheckRow({ label, checked }) {
  return (
    <label
      className="flex items-center cursor-pointer"
      style={{ gap: 10, marginBottom: 12, fontSize: 14, color: "var(--text-muted)" }}
    >
      <span
        className="flex items-center justify-center"
        style={{
          width: 18,
          height: 18,
          borderRadius: 4,
          flexShrink: 0,
          border: checked ? "none" : "1px solid var(--border-strong)",
          background: checked ? "#5C301A" : "transparent",
        }}
      >
        {checked && <IconCheck />}
      </span>
      {label}
    </label>
  )
}

const arrowStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: 28,
  height: 28,
  borderRadius: 999,
  border: "none",
  background: "rgba(255,255,255,0.9)",
  color: "#1a1a1a",
}

function IconChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
function IconChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
function IconChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}
function IconChevronRightSmall() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
function IconPin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
function IconNavigation() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  )
}
function IconSearch() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
function IconCheck() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
function IconClose() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
  )
}
function IconSort() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 5h10" /><path d="M11 9h7" /><path d="M11 13h4" />
      <path d="m3 17 3 3 3-3" /><path d="M6 18V4" />
    </svg>
  )
}
function IconStar({ filled }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill={filled ? "#f5a623" : "none"} stroke={filled ? "#f5a623" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
function IconShield() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
function IconLeaf() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6" />
    </svg>
  )
}
function IconThumb() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}
function IconBookmark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  )
}
function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
