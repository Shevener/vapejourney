export default function Level4({ onPrev, id = "level4" }) {
  return (
    <section id={id} className="level4-page">
      <style>{`
        /* =========================================================
           LEVEL 4 — DAMPAK BAGI PARU-PARU
           ========================================================= */

        .level4-page,
        .level4-page * {
          box-sizing: border-box;
        }

        .level4-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          padding: 66px 42px 70px;
          color: #ffffff;
          font-family: "Chakra Petch", sans-serif;
          background:
            radial-gradient(
              ellipse at 78% 45%,
              rgba(21, 76, 164, 0.8) 0%,
              rgba(7, 49, 112, 0.9) 30%,
              rgba(3, 28, 70, 0.98) 67%,
              #021b4d 100%
            );
        }

        .level4-page::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            radial-gradient(
              ellipse at 8% 82%,
              rgba(30, 103, 211, 0.35),
              transparent 36%
            ),
            radial-gradient(
              ellipse at 92% 12%,
              rgba(52, 111, 207, 0.18),
              transparent 32%
            );
        }

        /* =========================================================
           SMOKE
           ========================================================= */

        .level4-smoke {
          position: absolute;
          z-index: 0;
          pointer-events: none;
          user-select: none;
          width: min(62vw, 940px);
          height: auto;
          object-fit: contain;
          opacity: 0.4;
          mix-blend-mode: screen;
          filter:
            blur(0.2px)
            drop-shadow(0 0 24px rgba(255,255,255,0.12));
          animation: level4SmokeFloat 13s ease-in-out infinite;
        }

        .level4-smoke--top {
          top: -80px;
          right: -100px;
          opacity: 1;
          transform: rotate(4deg);
        }

        .level4-smoke--bottom {
          left: -160px;
          bottom: -250px;
          width: min(68vw, 980px);
          opacity: 1;
          transform: scaleX(-1) rotate(-10deg);
          animation-delay: -6s;
        }

        @keyframes level4SmokeFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(4deg);
          }

          50% {
            transform: translate3d(-18px, 15px, 0) rotate(1deg);
          }
        }

        /* =========================================================
           CONTENT WRAPPER
           ========================================================= */

        .level4-content {
          position: relative;
          z-index: 2;
          width: min(100%, 1450px);
          min-height: 1850px;
          margin: 0 auto;
        }

        /* =========================================================
           HEADER
           ========================================================= */

        .level4-header {
          position: relative;
          width: min(78%, 1100px);
          min-height: 88px;
          display: flex;
          align-items: center;
          padding: 0 68px;
          border: 1px solid rgba(255,255,255,0.48);
          border-radius: 0 34px 34px 0;
          background: linear-gradient(
            90deg,
            rgba(53, 78, 126, 0.9),
            rgba(49, 72, 116, 0.78)
          );
          box-shadow:
            0 8px 30px rgba(0,0,0,0.22),
            inset 0 1px 0 rgba(255,255,255,0.12);
        }

        .level4-header::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -16px;
          height: 1px;
          background: rgba(255,255,255,0.5);
        }

        .level4-header h1 {
          margin: 0;
          font-size: clamp(28px, 3vw, 47px);
          line-height: 1;
          font-weight: 800;
          letter-spacing: 1px;
        }

        /* =========================================================
           INTRO
           ========================================================= */

        .level4-intro {
          width: min(58%, 850px);
          margin-top: 64px;
        }

        .level4-intro h2 {
          margin: 0 0 14px;
          font-size: clamp(19px, 2vw, 28px);
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: 0.4px;
        }

        .level4-intro p {
          margin: 0 0 4px;
          font-size: clamp(17px, 1.55vw, 24px);
          line-height: 1.55;
          font-weight: 500;
        }

        .level4-intro .level4-intro-last {
          margin-top: 3px;
        }

        /* =========================================================
           TEXT PANELS
           ========================================================= */

        .level4-panel {
          position: absolute;
          z-index: 6;
          border: 1px solid rgba(255,255,255,0.55);
          background: linear-gradient(
            135deg,
            rgba(7, 46, 105, 0.93),
            rgba(20, 67, 135, 0.82)
          );
          box-shadow:
            0 14px 35px rgba(0,0,0,0.18),
            inset 0 1px 0 rgba(255,255,255,0.07);
          overflow: hidden;
        }

        .level4-panel::after {
          content: "";
          position: absolute;
          right: -75px;
          bottom: -85px;
          width: 230px;
          height: 230px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
        }

        .level4-panel__title {
          position: relative;
          z-index: 2;
          min-height: 47px;
          display: flex;
          align-items: center;
          padding: 7px 14px;
          border: 1px solid rgba(255,255,255,0.62);
          border-radius: 6px;
          background: linear-gradient(
            90deg,
            rgba(57, 84, 132, 0.95),
            rgba(54, 82, 131, 0.78)
          );
          font-size: clamp(16px, 1.5vw, 23px);
          font-weight: 800;
          letter-spacing: 0.6px;
        }

        .level4-panel__body {
          position: relative;
          z-index: 2;
          padding: 12px 20px 30px;
        }

        .level4-panel__body p {
          margin: 0 0 15px;
          font-size: clamp(16px, 1.35vw, 21px);
          line-height: 1.55;
          font-weight: 500;
        }

        .level4-panel__body ol {
          margin: 0 0 27px;
          padding-left: 30px;
        }

        .level4-panel__body li {
          margin: 2px 0;
          padding-left: 2px;
          font-size: clamp(16px, 1.35vw, 21px);
          line-height: 1.55;
        }

        .level4-panel--irritation {
          top: 390px;
          left: 0;
          width: min(38%, 555px);
          min-height: 560px;
        }

        .level4-panel--evali {
          top: 1290px;
          right: -30px;
          width: min(47%, 680px);
          min-height: 410px;
        }

        /* =========================================================
           MAIN BODY IMAGE
           ========================================================= */

        .level4-body-wrap {
          position: absolute;
          z-index: 2;
          top: 470px;
          right: -380px;
          width: 100%;
          height: 900px;
          pointer-events: none;

          transform: scale(1.21);
          transform-origin: center top;
        }

        .level4-body {
          position: absolute;
          right: 50px;
          bottom: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center bottom;
          filter:
            drop-shadow(0 0 18px rgba(40, 142, 255, 0.16))
            drop-shadow(0 0 40px rgba(40, 142, 255, 0.08));
        }

        /* =========================================================
           FOCUS IMAGES
           ========================================================= */

        .level4-focus {
          position: absolute;
          z-index: 7;
          width: clamp(245px, 25vw, 370px);
          height: auto;
          object-fit: contain;
          pointer-events: none;
          filter:
            drop-shadow(0 0 2px rgba(255,255,255,0.5))
            drop-shadow(0 10px 25px rgba(0,0,0,0.42));
        }

        .level4-focus--throat {
          top: 360px;
          left: 32%;
        }

        .level4-focus--lungs {
          top: 1200px;
          left: 29%;
        }

        /* =========================================================
           RESPONSIVE — TABLET
           ========================================================= */

        @media (max-width: 1050px) {
          .level4-page {
            padding: 45px 25px 55px;
          }

          .level4-content {
            min-height: 1650px;
          }

          .level4-header {
            width: 82%;
            padding-left: 40px;
          }

          .level4-intro {
            width: 63%;
          }

          .level4-panel--irritation {
            width: 45%;
            top: 365px;
          }

          .level4-body-wrap {
            right: -90px;
            width: 55%;
            height: 820px;
            top: 390px;
          }

          .level4-focus {
            width: 300px;
          }

          .level4-focus--throat {
            left: 30%;
            top: 400px;
          }

          .level4-focus--lungs {
            left: 5%;
            top: 1030px;
          }

          .level4-panel--evali {
            width: 55%;
            top: 1120px;
          }
        }

        /* =========================================================
           RESPONSIVE — MOBILE
           ========================================================= */

        @media (max-width: 720px) {
          .level4-page {
            min-height: 100vh;
            padding: 30px 18px 35px;
            overflow-x: hidden;
          }

          .level4-content {
            min-height: auto;
            padding-bottom: 95px;
          }

          .level4-header {
            width: 100%;
            min-height: 66px;
            padding: 0 22px;
            border-radius: 0 25px 25px 0;
          }

          .level4-header h1 {
            font-size: 25px;
          }

          .level4-intro {
            width: 100%;
            margin-top: 42px;
          }

          .level4-intro h2 {
            font-size: 18px;
          }

          .level4-intro p {
            font-size: 15px;
            line-height: 1.5;
          }

          /*
             Mobile dibuat satu kolom supaya seluruh informasi
             tetap terbaca dan gambar tidak bertabrakan.
          */

          .level4-panel {
            position: relative;
            top: auto !important;
            right: auto !important;
            left: auto !important;
            width: 100% !important;
            min-height: 0 !important;
            margin-top: 28px;
          }

          .level4-panel--irritation {
            margin-top: 300px;
          }

          .level4-panel--evali {
            margin-top: 35px;
          }

          .level4-body-wrap {
            position: absolute;
            top: 610px;
            right: -105px;
            width: 82%;
            height: 590px;
          }

          .level4-focus {
            width: 210px;
          }

          .level4-focus--throat {
            top: 570px;
            left: 6%;
          }

          .level4-focus--lungs {
            top: 1220px;
            left: 2%;
          }

          .level4-smoke {
            width: 100vw;
          }

          .level4-smoke--top {
            top: 70px;
            right: -180px;
            opacity: 0.14;
          }

          .level4-smoke--bottom {
            bottom: 0;
            left: -210px;
            opacity: 0.12;
          }
        }

        @media (max-width: 440px) {
          .level4-header h1 {
            font-size: 21px;
          }

          .level4-panel__title {
            font-size: 15px;
          }

          .level4-panel__body p,
          .level4-panel__body li {
            font-size: 14px;
          }

          .level4-focus {
            width: 180px;
          }

          .level4-body-wrap {
            right: -120px;
            width: 92%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .level4-smoke {
            animation: none;
          }
        }
      `}</style>

      {/* =========================================================
          BACKGROUND SMOKE
          ========================================================= */}

      <img
        className="level4-smoke level4-smoke--top"
        src="/assets/level4-efek-asap.png"
        alt=""
        aria-hidden="true"
      />

      <img
        className="level4-smoke level4-smoke--bottom"
        src="/assets/level4-efek-asap.png"
        alt=""
        aria-hidden="true"
      />

      <div className="level4-content">
        {/* =======================================================
            HEADER
            ======================================================= */}

        <header className="level4-header">
          <h1>DAMPAK BAGI PARU PARU</h1>
        </header>

        {/* =======================================================
            INTRO TEXT
            ======================================================= */}

        <div className="level4-intro">
          <h2>BAGAIMANA VAPE MEMENGARUHI PARU-PARU ?</h2>

          <p>
            Paru-paru merupakan salah satu organ yang langsung terpapar
            aerosol vape.
          </p>

          <p>
            Aerosol dapat membawa partikel ultrahalus dan berbagai bahan
            kimia jauh ke dalam saluran pernapasan.
          </p>

          <p className="level4-intro-last">
            Penggunaan vape dapat berhubungan dengan:
          </p>
        </div>

        {/* =======================================================
            MAIN BODY IMAGE
            ======================================================= */}

        <div className="level4-body-wrap">
          <img
            className="level4-body"
            src="/assets/level4-full-upper-body.png"
            alt="Ilustrasi tubuh bagian atas dengan sistem pernapasan"
          />
        </div>

        {/* =======================================================
            FOCUS — THROAT
            ======================================================= */}

        <img
          className="level4-focus level4-focus--throat"
          src="/assets/level4-focus-tenggorokan.png"
          alt="Fokus ilustrasi saluran tenggorokan"
        />

        {/* =======================================================
            FOCUS — LUNGS
            ======================================================= */}

        <img
          className="level4-focus level4-focus--lungs"
          src="/assets/level4-focus-paru-paru.png"
          alt="Fokus ilustrasi paru-paru"
        />

        {/* =======================================================
            PANEL 1
            ======================================================= */}

        <article className="level4-panel level4-panel--irritation">
          <div className="level4-panel__title">
            1. IRITASI SALURAN PERNAPASAN
          </div>

          <div className="level4-panel__body">
            <p>Pengguna dapat mengalami:</p>

            <ol>
              <li>Batuk</li>
              <li>Tenggorokan teriritasi</li>
              <li>Sesak napas</li>
              <li>Rasa tidak nyaman di dada</li>
            </ol>

            <p>
              Paparan berulang juga menjadi perhatian karena dapat
              memengaruhi fungsi paru-paru.
            </p>
          </div>
        </article>

        {/* =======================================================
            PANEL 2
            ======================================================= */}

        <article className="level4-panel level4-panel--evali">
          <div className="level4-panel__title">
            2. CEDERA PARU-PARU TERKAIT VAPING
          </div>

          <div className="level4-panel__body">
            <p>
              Salah satu kondisi yang pernah ditemukan adalah EVALI
              (E-cigarette or Vaping Product Use-Associated Lung Injury).
            </p>

            <p>
              Kondisi ini merupakan cedera paru-paru yang berkaitan dengan
              penggunaan produk vaping dan dapat menyebabkan gangguan
              pernapasan serius. Kasus EVALI terutama berkaitan dengan
              produk yang mengandung THC dan vitamin E asetat, meskipun
              faktor lain juga dapat berperan.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
