
const APP_IMG = "/images/phone.png"

const PRICING = [
  {
    title: "Cleaning up after repairs",
    rating: "4.5",
    reviews: 63,
    price: "$150",
    img: "/images/pic2.png",
  },
  {
    title: "Installation of flat roofs",
    rating: "4.3",
    reviews: 18,
    price: "$1,870",
    img: "/images/done3.jpg",
  },
  {
    title: "Handyperson for small projects",
    rating: "4.7",
    reviews: 35,
    price: "$230",
    img: "/images/done4.jpg",
  },
  {
    title: "One-time cleaning service",
    rating: "4.9",
    reviews: 127,
    price: "$120",
    img: "/images/done0.jpg",
  },
]

export default function Testimonials() {
  return (
    <section style={{ background: "var(--bg)", width: "100%", paddingTop: 56, paddingBottom: 72 }}>
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          gap: 72,
        }}
      >
        <AppBanner />
        <PricingReferences />
      </div>
    </section>
  )
}

function AppBanner() {
  return (
    <div
      style={{
        position: "relative",
        background: "var(--banner)",
        borderRadius: 10,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        minHeight: 260,
      }}
    >
      <div style={{ padding: "48px 56px", maxWidth: 420, position: "relative", zIndex: 1 }}>
        <h2
          style={{
            fontFamily: "var(--font-finder)",
            fontSize: 30,
            fontWeight: 700,
            color: "var(--text)",
            margin: 0,
          }}
        >
          Get Finder App
        </h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", margin: "12px 0 0" }}>
          Explore top-rated certified pros
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
          <StoreButton icon={<IconApple />} label="App Store" />
          <StoreButton icon={<IconGooglePlay />} label="Google Play" />
        </div>
      </div>

      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "52%" }}>
        <Photo src={APP_IMG} style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  )
}

function StoreButton({ icon, label }) {
  return (
    <button
      type="button"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "var(--store-bg)",
        color: "var(--store-text)",
        border: "none",
        borderRadius: 6,
        padding: "11px 20px",
        fontSize: 14,
        cursor: "pointer",
      }}
    >
      {icon}
      {label}
    </button>
  )
}

function PricingReferences() {
  return (
    <div>
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
          Common pricing references
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 24,
          marginTop: 24,
        }}
      >
        {PRICING.map((p, i) => (
          <PricingCard key={i} {...p} />
        ))}
      </div>
    </div>
  )
}

function PricingCard({ title, rating, reviews, price, img }) {
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid var(--border)",
        borderRadius: 8,
        overflow: "hidden",
        background: "var(--surface)",
      }}
    >
      <Photo src={img} style={{ width: 110, flexShrink: 0, alignSelf: "stretch" }} />

      <div style={{ padding: "16px 18px" }}>
        <div style={{ fontSize: 15, color: "var(--text)", fontWeight: 500 }}>{title}</div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontSize: 13,
            marginTop: 6,
          }}
        >
          <IconStar />
          <span style={{ color: "var(--text)" }}>{rating}</span>
          <span style={{ color: "var(--text-subtle)" }}>({reviews})</span>
          <span style={{ color: "var(--text-muted)", marginLeft: 8 }}>From {price}</span>
        </div>

        <button
          type="button"
          style={{
            border: "1px solid var(--border-strong)",
            borderRadius: 6,
            padding: "7px 16px",
            marginTop: 14,
            background: "var(--surface)",
            fontSize: 13,
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

function Photo({ src, style }) {
  if (!src) {
    return <div style={{ ...style, background: "var(--placeholder)" }} aria-label="photo à ajouter" />
  }
  return <img src={src} alt="" style={{ ...style, objectFit: "cover" }} />
}
function IconApple() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 12.54c.03-2.5 2.04-3.7 2.13-3.76-1.16-1.7-2.97-1.93-3.61-1.96-1.54-.15-3 .9-3.78.9-.78 0-1.98-.88-3.25-.86-1.67.02-3.21.97-4.07 2.46-1.73 3-.44 7.45 1.25 9.89.82 1.19 1.8 2.53 3.09 2.48 1.24-.05 1.71-.8 3.21-.8s1.92.8 3.24.78c1.34-.03 2.18-1.21 3-2.41.94-1.38 1.33-2.72 1.35-2.79-.03-.01-2.59-1-2.62-3.93zM14.6 4.9c.68-.83 1.14-1.98 1.02-3.13-.98.04-2.17.65-2.88 1.48-.63.73-1.19 1.9-1.04 3.02 1.1.09 2.21-.55 2.9-1.37z" />
    </svg>
  )
}

function IconGooglePlay() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path d="M3.6 2.3c-.25.27-.4.68-.4 1.22v16.96c0 .54.15.95.4 1.22l.06.05 9.5-9.5v-.5l-9.5-9.5-.06.05z" fill="#00D0FF" />
      <path d="m16.3 15.4-3.14-3.15v-.5l3.14-3.15.07.04 3.75 2.13c1.07.6 1.07 1.6 0 2.21l-3.75 2.13-.07.09z" fill="#FFD800" />
      <path d="m16.37 15.36-3.21-3.21-9.56 9.55c.35.38.94.42 1.6.05l11.17-6.39z" fill="#FF3A44" />
      <path d="M16.37 8.64 5.2 2.25c-.66-.37-1.25-.33-1.6.05l9.56 9.55 3.21-3.21z" fill="#00E676" />
    </svg>
  )
}

function IconStar() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="#f5a623" stroke="none">
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
