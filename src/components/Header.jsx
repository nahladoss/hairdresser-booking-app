import useTheme from "../hooks/useTheme.js"

const BROWN = "#5C301A"
export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header
      className="w-full flex items-center justify-between"
      style={{
        height: 76,
        paddingLeft: 24,
        paddingRight: 24,
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="flex items-center" style={{ gap: 8 }}>
        <span
          className="flex items-center justify-center"
          style={{ width: 32, height: 32, borderRadius: 8, background: BROWN }}
        >
          <svg
            viewBox="0 0 22 23"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: 18, height: 18 }}
          >
            <circle cx="9" cy="9" r="8" />
            <line x1="14.7" y1="14.7" x2="20.8" y2="20.8" />
          </svg>
        </span>
        <span
          style={{
            fontFamily: "var(--font-finder)",
            fontWeight: 700,
            fontStyle: "normal",
            fontSize: 24,
            lineHeight: "32px",
            color: "var(--text)",
          }}
        >
          Finder
        </span>
      </div>

      {}
      <nav
        className="flex items-center"
        style={{ gap: 28, fontSize: 15, color: "var(--text-muted)" }}
      >
        {}
        <a
          href="https://goo.gl/maps/rrnnyf5CHHi5EuJR7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center no-underline cursor-pointer hover:opacity-70"
          style={{ gap: 6, color: "var(--text-muted)", fontSize: 15 }}
        >
          <IconPin />
          <span>Chicago</span>
          <IconChevron />
        </a>

        <a href="#" className="no-underline hover:opacity-70" style={{ color: "var(--text-muted)" }}>
          Interior
        </a>
        <a href="#" className="no-underline hover:opacity-70" style={{ color: "var(--text-muted)" }}>
          Exterior
        </a>
        <a href="#" className="no-underline hover:opacity-70" style={{ color: "var(--text-muted)" }}>
          Lawn &amp; Garden
        </a>

        {}
        <button
          type="button"
          className="flex items-center bg-transparent border-0 cursor-pointer"
          style={{ gap: 6, color: "var(--text-muted)", fontSize: 15 }}
        >
          <span>More</span>
          <IconChevron />
        </button>

        <a href="#" className="no-underline hover:opacity-70" style={{ color: "var(--text-muted)" }}>
          Blog
        </a>
      </nav>

      {}
      <div className="flex items-center" style={{ gap: 16 }}>
        {}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
          title={theme === "dark" ? "Mode clair" : "Mode sombre"}
          aria-pressed={theme === "dark"}
          className="flex items-center justify-center bg-transparent cursor-pointer hover:opacity-70"
          style={{
            color: "var(--text-muted)",
            padding: 6,
            borderRadius: 8,
            border: "1px solid var(--border)",
          }}
        >
          {theme === "dark" ? <IconMoon /> : <IconSun />}
        </button>

        {}
        <button
          type="button"
          aria-label="Mon compte"
          className="flex items-center justify-center bg-transparent border-0 cursor-pointer"
          style={{ color: "var(--text-muted)", padding: 4 }}
        >
          <IconUser />
        </button>

        {}
        <button
          type="button"
          className="flex items-center border-0 cursor-pointer"
          style={{
            gap: 6,
            background: BROWN,
            color: "#ffffff",
            fontSize: 15,
            fontWeight: 500,
            borderRadius: 8,
            padding: "10px 18px",
          }}
        >
          <IconPlus />
          <span>Join Pro Network</span>
        </button>
      </div>
    </header>
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

function IconChevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function IconSun() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" /><path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" /><path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}

function IconMoon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

function IconUser() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function IconPlus() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="M12 5v14" />
    </svg>
  )
}
