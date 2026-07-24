
const TEAL = "#3D7A81" 
const BROWN = "#5C301A"

const SIDE_IMAGES = {
  leftFar: "/1stPI/done0.jpg", 
  leftNear: "/1stPI/pic1.png", 
  rightNear: "/1stPI/pic2.png", 
  rightFar: "/1stPI/rajel2.png", 
}

const TAGS = ["Handyperson", "Electrician", "Plumbing", "Landscaping", "Roofing"]

const inputStyle = {
  border: "none",
  outline: "none",
  fontSize: 14,
  width: "100%",
  background: "transparent",
  color: "var(--input-text)",
}

export default function Navbar() {
  return (
    <nav
      style={{
        background: TEAL,
        width: "100%",
        height: "705px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 0",
      }}
    >
      {}
      <SideImage src={SIDE_IMAGES.leftFar} style={{ left: -121, top: 298, width: 300, height: 270, opacity: 0.3 }} />
      <SideImage src={SIDE_IMAGES.leftNear} style={{ left: 191, top: 118, width: 312, height: 285, transform: "rotate(3.5deg)" }} />
      <SideImage src={SIDE_IMAGES.rightNear} style={{ right: 208, top: 298, width: 300, height: 270 }} />
      <SideImage src={SIDE_IMAGES.rightFar} style={{ right: -116, top: 163, width: 300, height: 270, opacity: 0.3 }} />

      {}
      <div style={{ textAlign: "center", zIndex: 2, width: "100%", maxWidth: 640, padding: "0 24px" }}>
        {}
        <h1
          style={{
            fontFamily: "var(--font-finder)",
            fontSize: 44,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.15,
            margin: 0,
          }}
        >
          Find your perfect
          <br />
          hairdresser
        </h1>
        {}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "var(--input-bg)",
            borderRadius: 10,
            padding: 6,
            marginTop: 48,
            width:"572px" ,
            height:"96px",
            boxShadow: "0 6px 22px rgba(0,0,0,0.15)",
          }}
        >
          {}
          <div style={{ display: "flex", alignItems: "center", gap: 48, flex: 1, padding: "0 12px" }}>
            <IconSearch />
            <input placeholder="What service do you need?" style={inputStyle} />
          </div>

          {}
          <div style={{ width: 1, height: 28, background: "var(--border)" }} />

          {}
          <div style={{ display: "flex", alignItems: "center", gap: 8, width: 130, padding: "0 12px" }}>
            <IconPin />
            <input placeholder="Zip code" style={inputStyle} />
          </div>

          {}
          <button
            type="button"
            style={{
              background: BROWN,
              color: "#ffffff",
              border: 0,
              borderRadius: 8,
              padding: "11px 22px",
              fontSize: 14,
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            Search
          </button>
        </div>

        {}
        <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 20, flexWrap: "wrap" }}>
          {TAGS.map((t) => (
            <span
              key={t}
              style={{
                border: "1px solid rgba(255,255,255,0.55)",
                borderRadius: 999,
                padding: "6px 16px",
                fontSize: 13,
                color: "#ffffff",
                cursor: "pointer",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </nav>
  )
}

function SideImage({ src, style }) {
  const base = { position: "absolute", borderRadius: 40, objectFit: "cover", ...style }
  if (!src) {
    return <div style={{ ...base, background: "rgba(255,255,255,0.15)" }} aria-hidden="true" />
  }
  return <img src={src} alt="" style={base} />
}

function IconSearch() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function IconPin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
