

const BROWN = "#8C4A2F"
const LOGO_ORANGE = "#C0532A"
const LINE = "rgba(255,255,255,0.14)"
const MUTED = "rgba(255,255,255,0.62)"

const CATEGORIES_LEFT = [
  "Air conditioning",
  "Painting",
  "Electrician",
  "Concrete",
  "Plumbing",
  "Roofing",
]
const CATEGORIES_RIGHT = [
  "Cleaning",
  "Heating & furnace",
  "Carpentry",
  "Flooring",
  "Pest control",
  "Landscaping",
]
const COMPANY = [
  "About",
  "Press & announcements",
  "Careers at Finder",
  "Contact us",
  "Terms of use",
  "Privacy",
]
const CITIES = [
  "New York",
  "Chicago",
  "Indianapolis",
  "Boston",
  "Atlanta",
  "Cincinnati",
  "Los Angeles",
  "Dallas",
  "Pittsburgh",
  "Tampa",
]

export default function Footer() {
  return (
    <footer style={{ background: "#1C1917", color: "#ffffff", width: "100%" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "36px 24px 28px" }}>
        <NewsletterRow />

        <hr style={{ border: "none", borderTop: `1px solid ${LINE}`, margin: "32px 0 44px" }} />

        <LinkColumns />
        <TopCities />
        <BottomBar />
      </div>
    </footer>
  )
}

function NewsletterRow() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        flexWrap: "wrap",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <IconMail />
        <span style={{ fontFamily: "var(--font-finder)", fontSize: 20 }}>
          Subscribe to our newsletter
        </span>
        <button
          type="button"
          style={{
            background: BROWN,
            color: "#ffffff",
            border: "none",
            borderRadius: 6,
            padding: "10px 22px",
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          Subscribe
        </button>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <span style={{ fontFamily: "var(--font-finder)", fontSize: 18, color: MUTED }}>
          Need help?
        </span>
        <a
          href="#"
          style={{
            fontFamily: "var(--font-finder)",
            fontSize: 18,
            color: "#ffffff",
            textDecoration: "none",
          }}
        >
          Contact us
        </a>
      </div>
    </div>
  )
}

function LinkColumns() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.4fr 1.4fr 1fr",
        gap: 32,
        paddingBottom: 56,
      }}
    >
      {}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <LogoMark />
          <span style={{ fontFamily: "var(--font-finder)", fontSize: 24 }}>Finder</span>
        </div>
        <p style={{ fontSize: 14, color: MUTED, margin: "18px 0 0", maxWidth: 260, lineHeight: 1.6 }}>
          Connecting you with reliable local contractors for all your service needs.
        </p>
        <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
          <SocialButton label="Instagram"><IconInstagram /></SocialButton>
          <SocialButton label="Facebook"><IconFacebook /></SocialButton>
          <SocialButton label="X"><IconX /></SocialButton>
        </div>
      </div>

      {}
      <div>
        <ColumnTitle>Popular categories</ColumnTitle>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <LinkList items={CATEGORIES_LEFT} />
          <LinkList items={CATEGORIES_RIGHT} />
        </div>
      </div>

      {}
      <div>
        <ColumnTitle>Company</ColumnTitle>
        <LinkList items={COMPANY} />
      </div>
    </div>
  )
}

function ColumnTitle({ children }) {
  return (
    <h3
      style={{
        fontFamily: "var(--font-finder)",
        fontSize: 20,
        fontWeight: 700,
        color: "#ffffff",
        margin: "0 0 22px",
      }}
    >
      {children}
    </h3>
  )
}

function LinkList({ items }) {
  return (
    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 13 }}>
      {items.map((label, i) => (
        <li key={i}>
          <a href="#" style={{ fontSize: 14, color: MUTED, textDecoration: "none" }}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}

function SocialButton({ label, children }) {
  return (
    <a
      href="#"
      aria-label={label}
      style={{
        width: 34,
        height: 34,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
      }}
    >
      {children}
    </a>
  )
}

function TopCities() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
      <span style={{ fontFamily: "var(--font-finder)", fontSize: 18, flexShrink: 0 }}>
        Top cities
      </span>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {CITIES.map((city, i) => (
          <a
            key={i}
            href="#"
            style={{
              border: `1px solid ${LINE}`,
              borderRadius: 999,
              padding: "9px 18px",
              fontSize: 14,
              color: "#ffffff",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            {city}
          </a>
        ))}
      </div>
    </div>
  )
}

function BottomBar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        flexWrap: "wrap",
        marginTop: 56,
      }}
    >
      <p style={{ fontSize: 13, color: MUTED }}>
        © All rights reserved. Made by{" "}
        <a href="#" style={{ color: "#ffffff", textDecoration: "none" }}>
          Createx Studio
        </a>
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
        <PayVisa />
        <PayMastercard />
        <PayPaypal />
        <PayGPay />
        <PayApplePay />
      </div>
    </div>
  )
}


function LogoMark() {
  return (
    <span
      style={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        background: LOGO_ORANGE,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="10" cy="13" r="5.5" stroke="#ffffff" strokeWidth="2.6" />
        <path d="M17 6v11" stroke="#ffffff" strokeWidth="2.6" strokeLinecap="round" />
      </svg>
    </span>
  )
}


function IconMail() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 8.5V7c0-.8.2-1.2 1.3-1.2H17V3h-2.6C11.5 3 10.5 4.5 10.5 6.8v1.7H8.5V11h2v10H14V11h2.4l.3-2.5H14z" />
    </svg>
  )
}

function IconX() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 3h3.2l-7 8 8.2 10h-6.4l-5-6.1-5.7 6.1H1.6l7.5-8.6L1.2 3h6.6l4.5 5.6L17.5 3zm-1.1 16.1h1.8L7.7 4.8H5.8l10.6 14.3z" />
    </svg>
  )
}


function PayVisa() {
  return (
    <svg width="42" height="14" viewBox="0 0 42 14" aria-label="Visa">
      <text x="0" y="12" fill="#ffffff" fontSize="14" fontWeight="700" fontFamily="Arial, sans-serif" fontStyle="italic" letterSpacing="0.5">
        VISA
      </text>
    </svg>
  )
}

function PayMastercard() {
  return (
    <svg width="36" height="22" viewBox="0 0 36 22" aria-label="Mastercard">
      <circle cx="13" cy="11" r="9" fill="#EB001B" />
      <circle cx="23" cy="11" r="9" fill="#F79E1B" />
      <path d="M18 4.2a9 9 0 0 0 0 13.6 9 9 0 0 0 0-13.6z" fill="#FF5F00" />
    </svg>
  )
}

function PayPaypal() {
  return (
    <svg width="52" height="14" viewBox="0 0 52 14" aria-label="PayPal">
      <text x="0" y="12" fill="#ffffff" fontSize="13" fontWeight="700" fontFamily="Arial, sans-serif" fontStyle="italic">
        Pay
      </text>
      <text x="24" y="12" fill="#8FA6C0" fontSize="13" fontWeight="700" fontFamily="Arial, sans-serif" fontStyle="italic">
        Pal
      </text>
    </svg>
  )
}

function PayGPay() {
  return (
    <svg width="46" height="16" viewBox="0 0 46 16" aria-label="Google Pay">
      <text x="0" y="13" fontSize="14" fontWeight="700" fontFamily="Arial, sans-serif">
        <tspan fill="#4285F4">G</tspan>
      </text>
      <text x="13" y="13" fill="#ffffff" fontSize="14" fontFamily="Arial, sans-serif">
        Pay
      </text>
    </svg>
  )
}

function PayApplePay() {
  return (
    <svg width="44" height="16" viewBox="0 0 44 16" aria-label="Apple Pay" fill="#ffffff">
      <path d="M8.3 4.4c.45-.55.76-1.32.68-2.09-.65.03-1.45.44-1.92.99-.42.48-.79 1.26-.69 2.01.73.06 1.47-.37 1.93-.91zm.67 1.06c-1.06-.06-1.97.6-2.47.6-.51 0-1.29-.57-2.13-.55-1.1.02-2.11.64-2.67 1.62-1.14 1.98-.3 4.9.81 6.51.54.79 1.19 1.68 2.04 1.65.81-.03 1.13-.53 2.11-.53.98 0 1.27.53 2.13.51.88-.02 1.44-.8 1.98-1.6.62-.91.88-1.79.89-1.84-.02-.01-1.71-.66-1.73-2.61-.01-1.63 1.33-2.41 1.39-2.45-.76-1.12-1.94-1.25-2.35-1.27z" />
      <text x="16" y="13" fill="#ffffff" fontSize="13" fontFamily="Arial, sans-serif">
        Pay
      </text>
    </svg>
  )
}
