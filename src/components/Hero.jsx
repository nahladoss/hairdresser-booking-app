

const GAP = 112 

const NEAR_PROJECTS = [
  { title: "Decks & porches",  rating: "4.7", reviews: 95,  price: "$1,890", img: "/images/table.jpeg" },
  { title: "Roof repair",      rating: "4.5", reviews: 48,  price: "$1,120", img: "/images/done2.jpg" },
  { title: "Appliance repair", rating: "4.8", reviews: 113, price: "$120",   img: "/images/done1.jpg" },
  { title: "Gutter service",   rating: "5.0", reviews: 73,  price: "$390",   img: "/images/done3.jpg" },
  { title: "Home cleaning",    rating: "4.9", reviews: 256, price: "$75",    img: "/images/done0.jpg" },
  { title: "Fence repair",     rating: "4.8", reviews: 29,  price: "$205",   img: "/images/done4.jpg" },
]
const HOME_PROJECTS = [
  { title: "One-time cleaning service",      rating: "4.9", reviews: 256, price: "$80",  img: "/images/done0.jpg" },  // ← ici
  { title: "Handyperson for small projects", rating: "4.7", reviews: 63,  price: "$250", img: "/images/2ndd.jpg" },  // ← ici
  { title: "Fence installation & repair",    rating: "4.8", reviews: 29,  price: "$310", img: "/images/done2.jpg" },  // ← ici
]
const HOUSE_IMG = "/images/house.jpg"  

const SERVICES = [
  { label: "Flooring", icon: <IconFlooring /> },
  { label: "Concrete", icon: <IconConcrete /> },
  { label: "Cleaning", icon: <IconCleaning /> },
  { label: "Handyperson", icon: <IconHandyperson /> },
  { label: "Painting", icon: <IconPainting /> },
  { label: "Plumbing", icon: <IconPlumbing /> },
  { label: "Pest control", icon: <IconBug /> },
  { label: "Heating & furnace", icon: <IconHeating /> },
  { label: "Electrician", icon: <IconElectrician /> },
  { label: "Heating & furnace", icon: <IconHeating /> },
  { label: "Carpentry", icon: <IconCarpentry /> },
  { label: "Landscaping", icon: <IconLandscaping /> },
]

export default function Hero() {
  return (
    <section style={{ background: "var(--bg)", width: "100%", paddingTop: 56, paddingBottom: 56 }}>
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          gap: GAP, 
        }}
      >
        <BrowsePros />
        <PopularNear />
        <PopularHome />
      </div>
    </section>
  )
}

function BrowsePros() {
  return (
    <div>
      <SectionHeader title="Browse pros in your area" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          rowGap: 24,
          columnGap: 16,
          marginTop: 32,
        }}
      >
        {SERVICES.map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "var(--bg-soft)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-muted)",
                flexShrink: 0,
              }}
            >
              {s.icon}
            </span>
            <span style={{ fontSize: 15, color: "var(--text-muted)" }}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function PopularNear() {
  return (
    <div style={{ display: "flex", gap: 48 }}>
      {}
      <div
        style={{
          width: 280,
          flexShrink: 0,
          background: "var(--bg-soft)",
          borderRadius: 12,
          padding: 24,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-finder)",
            fontSize: 24,
            fontWeight: 700,
            color: "var(--text)",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          Get matched
          <br />
          with local pros
        </h3>
        <p style={{ fontSize: 13, color: "var(--text-soft)", marginTop: 8 }}>
          for your next home project.
        </p>
        <Photo
          src={HOUSE_IMG}
          style={{ width: "100%", height: 160, marginTop: "auto", borderRadius: 8 }}
        />
      </div>

      {}
      <div style={{ flex: 1 }}>
        <SectionHeader title="Popular projects near you" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            rowGap: 20,
            columnGap: 40,
            marginTop: 24,
          }}
        >
          {NEAR_PROJECTS.map((p, i) => (
            <ProjectRow key={i} {...p} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectRow({ title, rating, reviews, price, img }) {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Photo src={img} style={{ width: 64, height: 64, borderRadius: 8, flexShrink: 0 }} />
      <div>
        <div style={{ fontSize: 15, color: "var(--text)", fontWeight: 500 }}>{title}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, marginTop: 3 }}>
          <IconStar />
          <span style={{ color: "var(--text)" }}>{rating}</span>
          <span style={{ color: "var(--text-subtle)" }}>({reviews})</span>
        </div>
        <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 3 }}>From {price}</div>
      </div>
    </div>
  )
}

function PopularHome() {
  return (
    <div>
      <SectionHeader title="Popular home projects" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
          marginTop: 24,
        }}
      >
        {HOME_PROJECTS.map((p, i) => (
          <BigCard key={i} {...p} />
        ))}
      </div>
    </div>
  )
}

function BigCard({ title, rating, reviews, price, img }) {
  return (
    <div>
      <div style={{ position: "relative", borderRadius: 12, overflow: "hidden", height: 240 }}>
        <Photo src={img} style={{ width: "100%", height: "100%" }} />
        <span
          style={{
            position: "absolute",
            left: 16,
            bottom: 16,
            color: "white",
            fontFamily: "var(--font-finder)",
            fontSize: 18,
            fontWeight: 700,
            textShadow: "0 1px 4px rgba(0,0,0,0.4)",
          }}
        >
          {title}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13 }}>
          <IconStar />
          <span style={{ color: "var(--text)" }}>{rating}</span>
          <span style={{ color: "var(--text-subtle)" }}>({reviews})</span>
          <span style={{ color: "var(--text-muted)", marginLeft: 4 }}>From {price}</span>
        </div>
        <button
          type="button"
          style={{
            border: "1px solid var(--border-strong)",
            borderRadius: 8,
            padding: "8px 16px",
            background: "var(--surface)",
            fontSize: 14,
            color: "var(--text)",
            cursor: "pointer",
          }}
        >
          Book now
        </button>
      </div>
    </div>
  )
}

function SectionHeader({ title }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <h2
        style={{
          fontFamily: "var(--font-finder)",
          fontSize: 28,
          fontWeight: 700,
          color: "var(--text)",
          margin: 0,
        }}
      >
        {title}
      </h2>
      <a
        href="#"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          fontSize: 14,
          color: "var(--text-muted)",
          textDecoration: "none",
        }}
      >
        View all
        <IconChevronRight />
      </a>
    </div>
  )
}

function Photo({ src, style }) {
  if (!src) {
    return <div style={{ ...style, background: "var(--placeholder)" }} aria-label="photo à ajouter" />
  }
  return <img src={src} alt="" style={{ ...style, objectFit: "cover" }} />
}
function Icon({ children }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

function IconFlooring() {
  return (
    <Icon>
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </Icon>
  )
}

function IconConcrete() {
  return (
    <Icon>
      <rect width="18" height="18" x="3" y="3" rx="1" />
      <path d="M3 9h18M3 15h18M8 3v6M16 3v6M12 9v6M8 15v6M16 15v6" />
    </Icon>
  )
}

function IconCleaning() {
  return (
    <Icon>
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </Icon>
  )
}

function IconHandyperson() {
  return (
    <Icon>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </Icon>
  )
}

function IconPainting() {
  return (
    <Icon>
      <rect width="16" height="6" x="2" y="2" rx="2" />
      <path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect width="4" height="6" x="8" y="16" rx="1" />
    </Icon>
  )
}

function IconPlumbing() {
  return (
    <Icon>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </Icon>
  )
}

function IconBug() {
  return (
    <Icon>
      <path d="m8 2 1.88 1.88M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </Icon>
  )
}

function IconHeating() {
  return (
    <Icon>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </Icon>
  )
}

function IconElectrician() {
  return (
    <Icon>
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </Icon>
  )
}

function IconCarpentry() {
  return (
    <Icon>
      <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" />
      <path d="m18 15 4-4" />
      <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
    </Icon>
  )
}

function IconLandscaping() {
  return (
    <Icon>
      <path d="M7 20h10" />
      <path d="M10 20c5.5-2.5.8-6.4 3-10" />
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
    </Icon>
  )
}

function IconStar() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#f5a623" stroke="none">
      <path d="M12 2l2.9 6.26 6.1.53-4.6 4.02 1.38 6.19L12 15.9 6.22 19l1.38-6.19-4.6-4.02 6.1-.53z" />
    </svg>
  )
}

function IconChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
