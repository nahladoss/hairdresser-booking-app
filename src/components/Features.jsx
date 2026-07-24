import { Link } from "react-router-dom"

const ARTICLES = [
  {
    category: "Cleaning",
    title: "Expert advice from masters of cleanliness",
    text: "Unlock the secrets to a spotless home with tips from cleaning professionals. From tackling stubborn…",
    date: "Oct 19, 2024",
    img: "/1stPI/im1.png",
  },
  {
    category: "Flooring",
    title: "How to quickly clean laminate flooring",
    text: "Learn the fastest and most effective methods to clean laminate flooring without damaging its surface…",
    date: "Sep 13, 2024",
    img: "/1stPI/im3.png", 
  },
  {
    category: "Air Conditioning",
    title: "Choose air conditioner with air ionization",
    text: "Explore the benefits of air conditioners with air ionization technology. Find out how these units improve air…",
    date: "Sep 05, 2024",
    img: "/1stPI/im2.png", 
  },
  {
    category: "Landscaping",
    title: "Landscaping ideas from top local experts",
    text: "Get inspired by creative landscaping ideas from the best local experts. Whether you're revamping your garden…",
    date: "Aug 26, 2024",
    img: "/1stPI/im4.png", 
  },
]

export default function Features() {
  return (
    <section
      style={{
        background: "var(--bg-alt)",
        width: "100%",
        height: 636,
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: 1080, width: "100%", margin: "0 auto", padding: "0 24px" }}>
        {}
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
            Expert advice
          </h2>
          <Link
            to="/view-all"
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
          </Link>
        </div>

        {}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            rowGap: 32,
            columnGap: 32,
            marginTop: 32,
          }}
        >
          {ARTICLES.map((a, i) => (
            <ArticleCard key={i} {...a} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ArticleCard({ category, title, text, date, img }) {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      {}
      <Photo
        src={img}
        style={{ width: 130, height: 150, borderRadius: 12, flexShrink: 0 }}
      />

      {}
      <div
        style={{
          flex: 1,
          minWidth: 0,
          maxWidth: 458,
          height: 150,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {}
        <span
          style={{
            alignSelf: "flex-start",
            background: "var(--chip)",
            color: "var(--text-muted)",
            fontSize: 12,
            padding: "3px 10px",
            borderRadius: 999,
          }}
        >
          {category}
        </span>

        <h3
          style={{
            fontFamily: "var(--font-finder)",
            fontSize: 18,
            fontWeight: 700,
            color: "var(--text)",
            lineHeight: 1.25,
            margin: 0,
          }}
        >
          {title}
        </h3>

        <p style={{ fontSize: 14, color: "var(--text-soft)", lineHeight: 1.4, margin: 0 }}>{text}</p>

        <span style={{ fontSize: 13, color: "var(--text-subtle)", marginTop: "auto" }}>{date}</span>
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

function IconChevronRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
