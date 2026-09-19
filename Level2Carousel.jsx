import { useState, useRef } from "react";

const SLIDES = [
  {
    id: "zat-berbahaya",
    tab: "ZAT BERBAHAYA",
    title: "ZAT KIMIA BERBAHAYA",
    badge: "KANDUNGAN 01",
    accentColor: "#ff3fb0",
    icon: "☣️",
    image: "/assets/zat-kimia-berbahaya.png",
    warning:
      "Aerosol vape mengandung senyawa karsinogenik & pengiritasi paru akut!",
    paragraphs: [
      "Uap vape bukanlah sekadar uap air biasa, melainkan aerosol yang mengandung berbagai zat kimia berbahaya hasil pemanasan e-liquid pada suhu tinggi.",
      "Di dalamnya terkandung Formaldehida (senyawa karsinogenik yang biasa digunakan untuk pengawet), Akrolein (racun herbisida pemicu kerusakan paru permanen), Asetaldehida, serta senyawa organik volatil (VOC) yang merusak membran sel pernapasan.",
    ],
  },
  {
    id: "nikotin",
    tab: "NIKOTIN",
    title: "NIKOTIN KONSENTRAT TINGGI",
    badge: "KANDUNGAN 02",
    accentColor: "#00e5ff",
    icon: "⚡",
    image: "/assets/nikotin.png",
    warning:
      "Sangat adiktif! Menembus otak dalam <7 detik dan merusak perkembangan saraf.",
    paragraphs: [
      "Nikotin merupakan zat alkaloid adiktif utama dalam vape, sering kali hadir dalam bentuk salt nicotine dengan konsentrasi tinggi sehingga diserap sangat cepat oleh aliran darah.",
      "Nikotin membajak reseptor dopamin di otak untuk menciptakan rasa rileks semu, yang kemudian menjebak pengguna dalam siklus ketergantungan fisik dan psikologis.",
      "Pada remaja dan dewasa muda (<25 tahun), nikotin merusak sirkuit neuroplastisitas otak yang sedang berkembang, mengakibatkan penurunan fokus belajar, mood swing, dan gangguan kontrol impuls.",
    ],
  },
  {
    id: "logam-berat",
    tab: "LOGAM BERAT",
    title: "PARTIKEL LOGAM BERAT",
    badge: "KANDUNGAN 03",
    accentColor: "#ffcf6b",
    icon: "⚙️",
    image: "/assets/logam-berat.png",
    warning:
      "Partikel mikro logam terlepas dari coil pemanas dan mengendap permanen di alveoli!",
    paragraphs: [
      "Saat kawat koil (atomizer) dipanaskan berulang kali pada suhu tinggi, serpihan mikro dan nanopartikel logam berat akan terkikis dan ikut terhirup ke dalam paru-paru.",
      "Uji laboratorium menemukan kandungan Timbal (Lead), Nikel (Nickel), Kromium (Chromium), Kadmium, dan Timah di dalam aerosol vape.",
      "Logam-logam berat ini bersifat toksik dan karsinogenik, tidak dapat diuraikan oleh tubuh, serta memicu inflamasi kronis dan kerusakan jaringan pernapasan jangka panjang.",
    ],
  },
  {
    id: "perasa",
    tab: "PERASA",
    title: "BAHAN PERASA",
    badge: "KANDUNGAN 04",
    accentColor: "#ff8ad1",
    icon: "🧪",
    image: "/assets/perasa.png",
    warning:
      "Bahan perasa yang aman untuk dikonsumsi belum tentu aman ketika dipanaskan dan dihirup!",
    paragraphs: [
      "Vape tersedia dalam berbagai rasa, seperti buah, mint, permen, kopi, dan lainnya. Rasa tersebut berasal dari berbagai bahan perasa yang ditambahkan ke dalam e-liquid.",
      "Bahan perasa membuat vape terasa lebih menarik dan dapat mendorong pengguna untuk terus menggunakannya. Namun, keamanan suatu bahan saat dikonsumsi tidak otomatis berarti aman ketika dipanaskan dan dihirup berulang kali.",
      "Proses pemanasan dapat mengubah sebagian senyawa perasa menjadi zat lain yang berpotensi mengiritasi saluran pernapasan.",
    ],
  },
  {
    id: "pg-vg",
    tab: "PG & GLISERIN",
    title: "PROPILEN GLIKOL & GLISERIN",
    badge: "KANDUNGAN 05",
    accentColor: "#5a8bff",
    icon: "💧",
    image: "/assets/propilen-glikol-gliserin.png",
    warning:
      "PG dan gliserin membentuk dasar aerosol vape, tetapi pemanasan dapat menghasilkan senyawa iritan tertentu.",
    paragraphs: [
      "Propilen glikol (PG) dan gliserin nabati (VG) merupakan bahan dasar yang umum digunakan dalam e-liquid. Keduanya membantu membawa nikotin dan bahan perasa sekaligus menghasilkan aerosol ketika dipanaskan.",
      "PG cenderung menghasilkan sensasi throat hit yang lebih kuat, sedangkan gliserin menghasilkan aerosol yang lebih tebal dan lembut.",
      "Ketika dipanaskan pada suhu tinggi, terutama dalam kondisi tertentu, PG dan gliserin dapat mengalami perubahan kimia dan menghasilkan senyawa seperti aldehida yang dapat mengiritasi saluran pernapasan.",
    ],
  },
];

export default function Level2Carousel({ id = "level2" }) {
  const [index, setIndex] = useState(0); // Mulai dari ZAT BERBAHAYA
  const [imgErrors, setImgErrors] = useState({});
  const touchStartX = useRef(null);

  const go = (dir) => {
    setIndex((prev) => Math.min(Math.max(prev + dir, 0), SLIDES.length - 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) go(-1);
    else if (diff < -50) go(1);
    touchStartX.current = null;
  };

  const active = SLIDES[index];

  return (
    <section id={id} style={styles.section} className="observed-section">
      {/* SCOPED CSS KHUSUS VERCEL / NEXT / VITE */}
      <style>{`
        .vape-carousel-card {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          width: 100%;
          background: #0e1a3f;
          border: 1px solid #3a5ca8;
          border-radius: 16px;
          padding: 32px 30px;
          box-shadow: 0 12px 35px rgba(0,0,0,0.6);
          box-sizing: border-box;
          align-items: center;
        }

        @media (min-width: 800px) {
          .vape-carousel-card {
            grid-template-columns: 320px 1fr;
          }
        }

        .carousel-btn {
          background: #101c4a;
          border: 1px solid #3a5ca8;
          color: #eaf0ff;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.25s ease;
          outline: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .carousel-btn:hover {
          transform: translateY(-2px);
          border-color: #5a8bff;
          box-shadow: 0 0 15px rgba(90, 139, 255, 0.4);
        }
        .carousel-btn:active {
          transform: translateY(1px);
        }

        .carousel-tab-active {
          background: #1c2e63 !important;
          border-color: #5a8bff !important;
          color: #ffffff !important;
          box-shadow: 0 0 16px rgba(90, 139, 255, 0.5) !important;
        }

        .carousel-arrow {
          position: absolute;
          z-index: 10;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #101c4a;
          border: 2px solid #5a8bff;
          color: #ffffff;
          font-size: 26px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0,0,0,0.8), 0 0 12px rgba(90,139,255,0.4);
          transition: all 0.2s ease;
        }
        .carousel-arrow:hover {
          background: #1e3578;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 0 20px rgba(90,139,255,0.8);
        }
      `}</style>

      {/* AMBIENT SMOKE EFFECT */}
      <div style={styles.smokeLeft} />
      <div style={styles.smokeRight} />

      {/* HEADER PILL SOLID */}
      <div style={styles.headerPill}>
        <span style={styles.levelTag}>LEVEL 2 • LAB ANALYSIS</span>
        <h2 style={styles.headerText}>APA SAJA KANDUNGAN DALAM VAPE ?</h2>
        <p style={styles.headerSub}>
          Bongkar komponen utama di balik cairan e-liquid dan kabut aerosol yang kamu hisap.
        </p>
      </div>

      <div style={styles.divider} />

      {/* TABS NAVIGATION */}
      <div style={styles.tabRow}>
        {SLIDES.map((s, i) => {
          const isActive = i === index;
          return (
            <button
              key={s.id}
              onClick={() => setIndex(i)}
              className={`carousel-btn ${isActive ? "carousel-tab-active" : ""}`}
              style={{
                ...styles.tab,
                ...(isActive
                  ? {
                      borderColor: s.accentColor,
                      boxShadow: `0 0 16px ${s.accentColor}66`,
                    }
                  : {}),
              }}
            >
              <span style={{ marginRight: 8, fontSize: 14 }}>{s.icon}</span>
              {s.tab}
            </button>
          );
        })}
      </div>

      {/* INTERACTIVE CAROUSEL CARD */}
      <div
        style={styles.cardWrap}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {index > 0 && (
          <button
            style={{ left: -18 }}
            className="carousel-arrow"
            onClick={() => go(-1)}
            aria-label="Previous Slide"
          >
            ‹
          </button>
        )}

        <div className="vape-carousel-card">
          {/* IMAGE / VISUAL BOX (CONSTRAINED CONTAINER) */}
          <div style={styles.imageBox}>
            {!imgErrors[active.id] ? (
              <img
                src={active.image}
                alt={active.title}
                style={styles.image}
                onError={() =>
                  setImgErrors((prev) => ({ ...prev, [active.id]: true }))
                }
              />
            ) : (
              /* Fallback Cyber Card Illustration */
              <div style={styles.fallbackBox}>
                <span style={{ fontSize: 52, marginBottom: 12 }}>{active.icon}</span>
                <div
                  style={{
                    ...styles.fallbackBadge,
                    color: active.accentColor,
                    borderColor: active.accentColor,
                  }}
                >
                  {active.tab}
                </div>
                <span style={styles.fallbackText}>ASET: {active.image}</span>
              </div>
            )}
          </div>

          {/* TEXT & INFO CONTENT */}
          <div style={styles.textBox}>
            <div style={styles.badgeRow}>
              <span
                style={{
                  ...styles.contentBadge,
                  borderColor: active.accentColor,
                  color: active.accentColor,
                }}
              >
                {active.badge}
              </span>
              <span style={styles.slideIndicator}>
                {index + 1} / {SLIDES.length}
              </span>
            </div>

            <h3 style={{ ...styles.cardTitle, color: active.accentColor }}>
              {active.title}
            </h3>

            {active.paragraphs.map((p, i) => (
              <p key={i} style={styles.paragraph}>
                {p}
              </p>
            ))}

            {/* WARNING BADGE */}
            <div style={styles.warningBox}>
              <span style={styles.warningIcon}>⚠️</span>
              <span style={styles.warningText}>{active.warning}</span>
            </div>
          </div>
        </div>

        {index < SLIDES.length - 1 && (
          <button
            style={{ right: -18 }}
            className="carousel-arrow"
            onClick={() => go(1)}
            aria-label="Next Slide"
          >
            ›
          </button>
        )}
      </div>

      {/* DOTS INDICATOR */}
      <div style={styles.dots}>
        {SLIDES.map((s, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            style={{
              ...styles.dot,
              background: i === index ? s.accentColor : "rgba(255,255,255,0.25)",
              boxShadow: i === index ? `0 0 10px ${s.accentColor}` : "none",
              width: i === index ? 24 : 8,
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
}

/* ---------- STYLES ---------- */

const styles = {
  section: {
    position: "relative",
    minHeight: "100vh",
    padding: "80px 6vw 90px",
    background: "radial-gradient(ellipse at 50% 0%, #0c1a47 0%, #06102b 50%, #04081a 100%)",
    color: "#eaf0ff",
    fontFamily: "'Space Mono', 'Courier New', Courier, monospace",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderTop: "1px solid rgba(90, 139, 255, 0.12)",
    boxSizing: "border-box",
  },
  smokeLeft: {
    position: "absolute",
    top: "10%",
    left: "-10%",
    width: 450,
    height: 450,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(90,139,255,0.08) 0%, rgba(255,255,255,0) 70%)",
    filter: "blur(20px)",
    pointerEvents: "none",
  },
  smokeRight: {
    position: "absolute",
    bottom: "5%",
    right: "-10%",
    width: 480,
    height: 480,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(255,63,176,0.06) 0%, rgba(255,255,255,0) 70%)",
    filter: "blur(20px)",
    pointerEvents: "none",
  },
  headerPill: {
    background: "#101c4a",
    border: "1px solid #3a5ca8",
    borderRadius: 30,
    padding: "22px 36px",
    maxWidth: 850,
    width: "100%",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
    position: "relative",
    zIndex: 2,
    boxSizing: "border-box",
  },
  levelTag: {
    fontSize: 10,
    color: "#ffcf6b",
    letterSpacing: 2,
    fontWeight: 800,
    display: "inline-block",
    marginBottom: 8,
  },
  headerText: {
    fontSize: "clamp(18px, 2.6vw, 26px)",
    fontWeight: 800,
    margin: "0 0 8px",
    letterSpacing: 1,
    color: "#ffffff",
    textShadow: "0 0 12px rgba(90, 139, 255, 0.5)",
  },
  headerSub: {
    fontSize: 12,
    color: "#b0c4de",
    lineHeight: 1.6,
    margin: 0,
  },
  divider: {
    width: "50%",
    maxWidth: 600,
    height: 1,
    background: "linear-gradient(90deg, transparent, rgba(90, 139, 255, 0.5), transparent)",
    margin: "24px 0 28px",
  },
  tabRow: {
    display: "flex",
    gap: 12,
    width: "100%",
    maxWidth: 900,
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: 28,
    position: "relative",
    zIndex: 2,
  },
  tab: {
    background: "#101c4a",
    border: "1px solid #3a5ca8",
    color: "#c7d3f0",
    padding: "12px 22px",
    borderRadius: 8,
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: 0.5,
  },
  cardWrap: {
    position: "relative",
    width: "100%",
    maxWidth: 900,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    boxSizing: "border-box",
  },
  imageBox: {
    width: "100%",
    height: 280,
    maxHeight: 280,
    borderRadius: 12,
    overflow: "hidden",
    background: "#08102a",
    border: "1px solid #233b74",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
  },
  image: {
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "cover",
    borderRadius: 10,
    display: "block",
  },
  fallbackBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    textAlign: "center",
  },
  fallbackBadge: {
    fontSize: 10,
    fontWeight: 800,
    letterSpacing: 1,
    border: "1px solid",
    padding: "4px 10px",
    borderRadius: 4,
    marginBottom: 8,
  },
  fallbackText: {
    fontSize: 9,
    color: "#6f88b8",
  },
  textBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minWidth: 0,
  },
  badgeRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  contentBadge: {
    fontSize: 10,
    fontWeight: 800,
    letterSpacing: 1.5,
    border: "1px solid",
    padding: "4px 12px",
    borderRadius: 4,
    background: "rgba(0,0,0,0.4)",
  },
  slideIndicator: {
    fontSize: 11,
    color: "#839bc4",
    fontWeight: 700,
  },
  cardTitle: {
    fontSize: "clamp(16px, 2.2vw, 22px)",
    fontWeight: 800,
    margin: "0 0 14px",
    letterSpacing: 1,
  },
  paragraph: {
    fontSize: 13,
    lineHeight: 1.75,
    color: "#d0dcf5",
    margin: "0 0 12px",
  },
  warningBox: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: "rgba(255, 63, 176, 0.12)",
    border: "1px solid rgba(255, 63, 176, 0.45)",
    padding: "12px 16px",
    borderRadius: 8,
    marginTop: 10,
  },
  warningIcon: {
    fontSize: 16,
  },
  warningText: {
    fontSize: 11,
    color: "#ffc2ea",
    lineHeight: 1.45,
  },
  dots: {
    display: "flex",
    gap: 8,
    marginTop: 24,
    alignItems: "center",
    zIndex: 2,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    border: "none",
    cursor: "pointer",
    padding: 0,
    transition: "all 0.25s ease",
  },
};
