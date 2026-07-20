

const TEAL = "#3D7A81"
const BROWN = "#8A3A1C"
const PHOTO = "/images/pic1.png"

export default function Services() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: 440,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        color: "#ffffff",
        overflow: "hidden",
      }}
    >
      {}
      <div
        style={{
          background: TEAL,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "56px 64px",
        }}
      >
        <div style={{ maxWidth: 380, marginLeft: "auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-finder)",
              fontSize: 30,
              fontWeight: 700,
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            Grow your business with us. Become a Pro today
          </h2>

          <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
            <button
              type="button"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: BROWN,
                color: "#ffffff",
                border: "none",
                borderRadius: 6,
                padding: "11px 20px",
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              <IconPlus />
              Add business
            </button>

            <button
              type="button"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "transparent",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.7)",
                borderRadius: 6,
                padding: "11px 20px",
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              Learn more
              <IconChevronRight />
            </button>
          </div>
        </div>
      </div>

      {}
      <div style={{ position: "relative" }}>
        <img
          src={PHOTO}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      {}
      <RotatingBadge />
    </section>
  )
}


function RotatingBadge() {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: 120,
        height: 120,
        pointerEvents: "none",
      }}
    >
      <style>{`
        @keyframes services-badge-spin { to { transform: rotate(360deg); } }
        @keyframes services-badge-spin-reverse { to { transform: rotate(-360deg); } }
        .services-ring-out { animation: services-badge-spin 24s linear infinite; transform-origin: 50% 50%; }
        .services-ring-in { animation: services-badge-spin-reverse 18s linear infinite; transform-origin: 50% 50%; }
        @media (prefers-reduced-motion: reduce) {
          .services-ring-out, .services-ring-in { animation: none; }
        }
      `}</style>

      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <defs>
          <path id="services-arc-out" d="M 60,12 a 48,48 0 1,1 -0.1,0" />
          <path id="services-arc-in" d="M 60,26 a 34,34 0 1,1 -0.1,0" />
        </defs>

        <circle cx="60" cy="60" r="55" stroke="rgba(255,255,255,0.55)" strokeWidth="0.8" />
        <circle cx="60" cy="60" r="40" stroke="rgba(255,255,255,0.55)" strokeWidth="0.8" />
        <circle cx="60" cy="60" r="21" stroke="rgba(255,255,255,0.55)" strokeWidth="0.8" />

        
        <g className="services-ring-out">
          <text fill="#ffffff" fontSize="6.4" letterSpacing="1.4">
            <textPath href="#services-arc-out">
              FEATURE YOUR BUSINESS • FEATURE YOUR BUSINESS • FEATURE YOUR BUSINESS •
            </textPath>
          </text>
        </g>

=        <g className="services-ring-in">
          <text fill="#ffffff" fontSize="5.8" letterSpacing="1.1">
            <textPath href="#services-arc-in">
              FEATURED PROS • FEATURED PROS • FEATURED PROS • FEATURED PROS •
            </textPath>
          </text>
        </g>

        {}
        <circle cx="60" cy="60" r="9" fill={BROWN} />
      </svg>
    </div>
  )
}


function IconPlus() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

function IconChevronRight() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
