import React from "react";

export default function Level7({ onPrev, id = "level7" }) {
  return (
    <section id={id} className="level7-page">
      <style>{`
        /* =========================================================
           LEVEL 7 — VAPE MENYEBABKAN KECANDUAN?
           ========================================================= */

        .level7-page,
        .level7-page * {
          box-sizing: border-box;
        }

        .level7-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          padding: 110px 44px 80px;
          color: #fff;
          font-family: "Chakra Petch", sans-serif;
          background:
            radial-gradient(
              ellipse at 57% 52%,
              rgba(20, 74, 157, 0.88) 0%,
              rgba(8, 52, 119, 0.95) 38%,
              rgba(3, 28, 70, 0.99) 72%,
              #021b4d 100%
            );
        }

        /* =========================================================
           BACKGROUND GLOW
           ========================================================= */

        .level7-page::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            radial-gradient(
              ellipse at 4% 88%,
              rgba(32, 103, 214, 0.34),
              transparent 38%
            ),
            radial-gradient(
              ellipse at 91% 12%,
              rgba(60, 120, 225, 0.18),
              transparent 34%
            );
        }

        .level7-page::after {
          content: "";
          position: absolute;
          left: -120px;
          bottom: -230px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: rgba(22, 88, 186, 0.2);
          filter: blur(25px);
          pointer-events: none;
        }

        /* =========================================================
           SMOKE
           ========================================================= */

        .level7-smoke {
          position: absolute;
          z-index: 1;
          pointer-events: none;
          user-select: none;
          width: min(63vw, 970px);
          height: auto;
          object-fit: contain;
          opacity: 0.28;
          mix-blend-mode: screen;
          filter:
            blur(0.25px)
            drop-shadow(0 0 28px rgba(255,255,255,0.11));
          animation: level7SmokeFloat 14s ease-in-out infinite;
        }

        .level7-smoke--top {
          top: 250px;
          right: -170px;
          transform: rotate(4deg);
        }

        .level7-smoke--bottom {
          left: 42%;
          bottom: -300px;
          width: min(67vw, 1000px);
          opacity: 0.2;
          transform: scaleX(-1) rotate(-8deg);
          animation-delay: -7s;
        }

        @keyframes level7SmokeFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(4deg);
          }

          50% {
            transform: translate3d(-18px, 14px, 0) rotate(1deg);
          }
        }

        /* =========================================================
           CONTENT
           ========================================================= */

        .level7-content {
          position: relative;
          z-index: 5;
          width: min(100%, 1450px);
          min-height: 760px;
          margin: 0 auto;
        }

        /* =========================================================
           HEADER
           ========================================================= */

        .level7-header {
          position: relative;
          width: min(82%, 1130px);
          min-height: 102px;
          display: flex;
          align-items: center;
          padding: 0 68px;
          border: 1px solid rgba(255,255,255,0.48);
          border-radius: 0 50px 50px 0;
          background:
            linear-gradient(
              90deg,
              rgba(57, 82, 131, 0.94),
              rgba(51, 75, 120, 0.8)
            );
          box-shadow:
            0 8px 30px rgba(0,0,0,0.22),
            inset 0 1px 0 rgba(255,255,255,0.12);
        }

        .level7-header::after {
          content: "";
          position: absolute;
          left: 44px;
          right: 100px;
          bottom: -25px;
          height: 1px;
          background: rgba(255,255,255,0.58);
        }

        .level7-header h1 {
          margin: 0;
          font-size: clamp(31px, 3.4vw, 54px);
          line-height: 1;
          font-weight: 800;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        /* =========================================================
           MAIN TEXT
           ========================================================= */

        .level7-copy {
          position: absolute;
          z-index: 8;
          left: 22px;
          top: 165px;
          width: min(60%, 875px);
        }

        .level7-copy p {
          margin: 0 0 28px;
          font-size: clamp(17px, 1.55vw, 25px);
          line-height: 1.5;
          font-weight: 500;
          letter-spacing: 0.1px;
        }

        .level7-copy p:last-child {
          margin-bottom: 0;
        }

        .level7-copy .level7-intro {
          margin-bottom: 40px;
        }

        .level7-list {
          margin: 0 0 40px;
          padding-left: 35px;
        }

        .level7-list li {
          margin: 4px 0;
          padding-left: 3px;
          font-size: clamp(17px, 1.5vw, 24px);
          line-height: 1.52;
        }

        .level7-result {
          margin-top: 8px !important;
          margin-bottom: 4px !important;
        }

        .level7-quote {
          margin-bottom: 6px !important;
        }

        .level7-final {
          max-width: 850px;
          margin-top: 5px !important;
          line-height: 1.48 !important;
        }

        /* =========================================================
           RIGHT IMAGE
           ========================================================= */

        .level7-image-wrap {
          position: absolute;
          z-index: 6;
          top: 50px;
          right: -50px;
          width: min(60vw, 900px);
          height: 800px;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .level7-image-wrap::before {
          content: "";
          position: absolute;
          width: 92%;
          height: 88%;
          border-radius: 50%;
          background:
            radial-gradient(
              ellipse,
              rgba(72, 132, 238, 0.23),
              transparent 67%
            );
          filter: blur(22px);
          z-index: -1;
        }

        .level7-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter:
            drop-shadow(0 12px 28px rgba(0,0,0,0.25))
            drop-shadow(0 0 24px rgba(70, 132, 239, 0.18));
          animation: level7ImageFloat 5s ease-in-out infinite;
        }

        @keyframes level7ImageFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        /* =========================================================
           RESPONSIVE — TABLET
           ========================================================= */

        @media (max-width: 1050px) {
          .level7-page {
            padding: 75px 25px 75px;
          }

          .level7-content {
            min-height: 820px;
          }

          .level7-header {
            width: 84%;
            padding: 0 45px;
          }

          .level7-copy {
            left: 10px;
            top: 160px;
            width: 58%;
          }

          .level7-copy p,
          .level7-list li {
            font-size: 17px;
          }

          .level7-image-wrap {
            right: -70px;
            width: 47vw;
            height: 450px;
          }
        }

        /* =========================================================
           RESPONSIVE — MOBILE
           ========================================================= */

        @media (max-width: 720px) {
          .level7-page {
            min-height: 100vh;
            padding: 30px 18px 110px;
            overflow-x: hidden;
          }

          .level7-content {
            min-height: auto;
            padding-bottom: 90px;
          }

          .level7-header {
            width: 100%;
            min-height: 72px;
            padding: 0 23px;
            border-radius: 0 28px 28px 0;
          }

          .level7-header::after {
            left: 0;
            right: 20px;
            bottom: -14px;
          }

          .level7-header h1 {
            font-size: 25px;
            line-height: 1.08;
          }

          .level7-copy {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            margin-top: 48px;
          }

          .level7-copy .level7-intro {
            margin-bottom: 25px;
          }

          .level7-copy p {
            font-size: 15px;
            line-height: 1.5;
            margin-bottom: 20px;
          }

          .level7-list {
            padding-left: 27px;
            margin-bottom: 25px;
          }

          .level7-list li {
            font-size: 15px;
            line-height: 1.5;
          }

          .level7-image-wrap {
            position: relative;
            top: auto;
            right: auto;
            width: 100%;
            height: 330px;
            margin: 20px auto 5px;
          }

          .level7-image {
            max-width: 440px;
          }

          .level7-smoke--top {
            top: 300px;
            right: -190px;
            width: 700px;
          }

          .level7-smoke--bottom {
            left: -180px;
            bottom: -160px;
            width: 650px;
          }
        }
      `}</style>

      {/* =========================================================
          BACKGROUND SMOKE
          ========================================================= */}

      <div className="level7-content">

        {/* =======================================================
            HEADER
            ======================================================= */}

        <header className="level7-header">
          <h1>VAPE MENYEBABKAN KECANDUAN ?</h1>
        </header>

        {/* =======================================================
            MAIN COPY
            ======================================================= */}

        <div className="level7-copy">
          <p className="level7-intro">
            Salah satu masalah terbesar vape adalah ketergantungan nikotin.
          </p>

          <p>
            Penggunaan berulang membuat otak terbiasa mendapatkan nikotin.
            Ketika seseorang mencoba berhenti, dapat muncul gejala seperti:
          </p>

          <ol className="level7-list">
            <li>Keinginan kuat untuk menggunakan vape (craving)</li>
            <li>Mudah marah</li>
            <li>Gelisah</li>
            <li>Sulit berkonsentrasi</li>
            <li>Sulit tidur</li>
            <li>Perubahan suasana hati</li>
          </ol>

          <p className="level7-result">
            Akibatnya, seseorang dapat merasa:
          </p>

          <p className="level7-quote">
            “Saya sebenarnya ingin berhenti, tapi rasanya sulit sekali.”
          </p>

          <p className="level7-final">
            Ini bukan sekadar masalah kemauan. Nikotin memang memiliki sifat
            adiktif yang dapat membuat seseorang terus menggunakannya.
          </p>
        </div>

        {/* =======================================================
            RIGHT IMAGE
            ======================================================= */}

        <div className="level7-image-wrap">
          <img
            src="/assets/level7-gambar-kanan.png"
            alt="Ilustrasi ketergantungan nikotin pada pengguna vape"
            className="level7-image"
          />
        </div>
      </div>
    </section>
  );
}