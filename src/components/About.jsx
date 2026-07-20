
const STEPS = [
  {
    title: "Explore",
    text: "Browse through our curated list of contractors.",
    icon: <IconExplore />,
  },
  {
    title: "Connect",
    text: "Connect with them through our platform.",
    icon: <IconConnect />,
  },
  {
    title: "Get quotes and hire",
    text: "Receive quotes from interested contractors.",
    icon: <IconQuote />,
  },
]

export default function About() {
  return (
    <section style={{ background: "var(--bg)", width: "100%", paddingTop: 72, paddingBottom: 72 }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
        <h2
          style={{
            fontFamily: "var(--font-finder)",
            fontSize: 34,
            fontWeight: 700,
            color: "var(--text)",
            lineHeight: 1.15,
            margin: 0,
          }}
        >
          How it works
        </h2>
        <p style={{ fontSize: 15, color: "var(--text-muted)", margin: "12px 0 0" }}>
          Effortlessly find, connect, and hire the perfect contractor for your job – all in
          just three easy steps.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            columnGap: 40,
            marginTop: 48,
          }}
        >
          {STEPS.map((s, i) => (
            <div key={i}>
              <span style={{ display: "block", color: "var(--text)" }}>{s.icon}</span>
              <h3
                style={{
                  fontFamily: "var(--font-finder)",
                  fontSize: 17,
                  fontWeight: 700,
                  color: "var(--text)",
                  margin: "20px 0 0",
                }}
              >
                {s.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--text-muted)", margin: "8px 0 0", lineHeight: 1.5 }}>
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StepIcon({ children }) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

function IconExplore() {
  return (
    <StepIcon>
      <circle cx="12" cy="12" r="9" />
      <circle cx="11" cy="11" r="4" />
      <path d="m14 14 3.5 3.5" />
    </StepIcon>
  )
}

function IconConnect() {
  return (
    <StepIcon>
      <path d="M3 4h13v9H8l-5 4z" />
      <path d="M6.5 7.5h6M6.5 10h4" />
      <path d="M18.5 8H21v9l-3-2.5h-6v-1.5" />
    </StepIcon>
  )
}

function IconQuote() {
  return (
    <StepIcon>
      <path d="M4 3h11l4 4v7" />
      <path d="M15 3v4h4" />
      <path d="M4 3v18h9" />
      <path d="M7.5 9h5M7.5 12h8M7.5 15h5" />
      <circle cx="17.5" cy="17.5" r="3.5" />
      <path d="m16 17.5 1.2 1.2 2.1-2.3" />
    </StepIcon>
  )
}
