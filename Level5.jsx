import React from "react";

export default function Level5({ onPrev, id = "level5" }) {
  return (
    <section id={id} className="level5-page">
      <style>{`
        /* =========================================================
           LEVEL 5 — APAKAH VAPE MENYEBABKAN PENYAKIT?
           ========================================================= */

        .level5-page,
        .level5-page * {
          box-sizing: border-box;
        }

        .level5-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          padding: 70px 42px 90px;
          color: #fff;
          font-family: "Chakra Petch", sans-serif;
          background:
            radial-gradient(
              ellipse at 50% 62%,
              rgba(20, 75, 158, 0.82) 0%,
              rgba(7, 51, 119, 0.94) 38%,
              rgba(3, 28, 70, 0.99) 72%,
              #021b4d 100%
            );
        }

        .level5-page::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            radial-gradient(
              ellipse at 4% 72%,
              rgba(38, 105, 215, 0.34),
              transparent 36%
            ),
            radial-gradient(
              ellipse at 96% 18%,
              rgba(54, 115, 218, 0.2),
              transparent 34%
            );
        }

        /* =========================================================
           SMOKE
           ========================================================= */

        .level5-smoke {
          position: absolute;
          z-index: 0;
          pointer-events: none;
          user-select: none;
          width: min(58vw, 900px);
          height: auto;
          object-fit: contain;
          opacity: 0.4;
          mix-blend-mode: screen;
          filter:
            blur(0.3px)
            drop-shadow(0 0 28px rgba(255,255,255,0.1));
          animation: level5SmokeFloat 14s ease-in-out infinite;
        }

        .level5-smoke--top {
          top: -90px;
          right: -110px;
          transform: rotate(4deg);
        }

        .level5-smoke--bottom {
          left: -210px;
          bottom: -260px;
          width: min(64vw, 960px);
          opacity: 0.4;
          transform: scaleX(-1) rotate(-10deg);
          animation-delay: -7s;
        }

        @keyframes level5SmokeFloat {
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

        .level5-content {
          position: relative;
          z-index: 2;
          width: min(100%, 1450px);
          min-height: 1880px;
          margin: 0 auto;
        }

        /* =========================================================
           HEADER
           ========================================================= */

        .level5-header {
          position: relative;
          width: min(82%, 1130px);
          min-height: 92px;
          display: flex;
          align-items: center;
          padding: 0 70px;
          border: 1px solid rgba(255,255,255,0.48);
          border-radius: 0 36px 36px 0;
          background:
            linear-gradient(
              90deg,
              rgba(54, 80, 128, 0.93),
              rgba(49, 72, 116, 0.78)
            );
          box-shadow:
            0 8px 30px rgba(0,0,0,0.23),
            inset 0 1px 0 rgba(255,255,255,0.12);
        }

        .level5-header::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -16px;
          height: 1px;
          background: rgba(255,255,255,0.5);
        }

        .level5-header h1 {
          margin: 0;
          font-size: clamp(28px, 3vw, 46px);
          line-height: 1;
          font-weight: 800;
          letter-spacing: 1px;
          white-space: nowrap;
        }

        /* =========================================================
           INTRO
           ========================================================= */

        .level5-intro {
          width: min(74%, 1080px);
          margin-top: 62px;
          padding-left: 10px;
        }

        .level5-intro p {
          margin: 0 0 24px;
          font-size: clamp(17px, 1.55vw, 24px);
          line-height: 1.55;
          font-weight: 500;
        }

        .level5-intro p:last-child {
          margin-bottom: 0;
        }

        /* =========================================================
           MAIN BODY
           ========================================================= */

        .level5-body-wrap {
          position: absolute;
          z-index: 2;
          top: 365px;
          left: 50%;
          width: 475px;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          pointer-events: none;
        }

        .level5-body {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          filter:
            drop-shadow(0 0 18px rgba(83, 155, 255, 0.12))
            drop-shadow(0 18px 25px rgba(0,0,0,0.12));
        }

        /* =========================================================
           PANELS
           ========================================================= */

        .level5-panel {
          position: absolute;
          z-index: 6;
          border: 1px solid rgba(255,255,255,0.55);
          background:
            linear-gradient(
              135deg,
              rgba(35, 73, 132, 0.9),
              rgba(42, 79, 139, 0.76)
            );
          box-shadow:
            0 14px 35px rgba(0,0,0,0.18),
            inset 0 1px 0 rgba(255,255,255,0.07);
          overflow: hidden;
        }

        .level5-panel::after {
          content: "";
          position: absolute;
          right: -70px;
          bottom: -85px;
          width: 230px;
          height: 230px;
          border-radius: 50%;
          background: rgba(255,255,255,0.07);
          pointer-events: none;
        }

        .level5-panel__title {
          position: relative;
          z-index: 2;
          min-height: 48px;
          display: flex;
          align-items: center;
          padding: 7px 14px;
          border: 1px solid rgba(255,255,255,0.62);
          border-radius: 6px;
          background:
            linear-gradient(
              90deg,
              rgba(58, 85, 133, 0.97),
              rgba(54, 82, 131, 0.8)
            );
          font-size: clamp(16px, 1.45vw, 22px);
          font-weight: 800;
          letter-spacing: 0.6px;
        }

        .level5-panel__body {
          position: relative;
          z-index: 2;
          padding: 13px 20px 28px;
        }

        .level5-panel__body p {
          margin: 0 0 15px;
          font-size: clamp(15px, 1.3vw, 20px);
          line-height: 1.52;
          font-weight: 500;
        }

        .level5-panel__body ol {
          margin: 0 0 20px;
          padding-left: 29px;
        }

        .level5-panel__body li {
          margin: 2px 0;
          padding-left: 2px;
          font-size: clamp(15px, 1.3vw, 20px);
          line-height: 1.48;
        }

        /* =========================================================
           RESPIRATORY
           ========================================================= */

        .level5-panel--respiratory {
          top: 395px;
          left: 0;
          width: min(37%, 535px);
          min-height: 470px;
        }

        .level5-panel--respiratory .level5-panel__body {
          padding-right: 178px;
        }

        .level5-panel--respiratory img {
          position: absolute;
          z-index: 3;
          right: 15px;
          bottom: 18px;
          width: 170px;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 8px 12px rgba(0,0,0,0.18));
        }

        /* =========================================================
           NERVOUS SYSTEM
           ========================================================= */

        .level5-panel--nervous {
          top: 395px;
          right: 0;
          width: min(37%, 535px);
          min-height: 610px;
        }

        .level5-panel--nervous .level5-panel__body {
          padding-right: 18px;
        }

        .level5-panel--nervous img {
          position: absolute;
          z-index: 3;
          right: -2px;
          bottom: 0;
          width: 190px;
          height: auto;
          object-fit: contain;
        }

        /* =========================================================
           CARDIOVASCULAR
           ========================================================= */

        .level5-panel--cardio {
          top: 970px;
          left: 0;
          width: min(40%, 575px);
          min-height: 500px;
        }

        .level5-panel--cardio .level5-panel__body {
          padding-right: 195px;
        }

        .level5-panel--cardio img {
          position: absolute;
          z-index: 3;
          right: 8px;
          bottom: -8px;
          width: 170px;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 8px 14px rgba(0,0,0,0.2));
        }

        /* =========================================================
           PREGNANCY
           ========================================================= */

        .level5-panel--pregnancy {
          top: 1100px;
          right: 0;
          width: min(39%, 565px);
          min-height: 445px;
        }

        .level5-panel--pregnancy .level5-panel__body {
          padding-right: 205px;
        }

        .level5-panel--pregnancy img {
          position: absolute;
          z-index: 3;
          right: 4px;
          bottom: -2px;
          width: 250px;
          height: auto;
          object-fit: contain;
        }

        /* =========================================================
           RESPONSIVE
           ========================================================= */

        @media (max-width: 1050px) {
          .level5-page {
            padding-inline: 24px;
          }

          .level5-content {
            min-height: auto;
            display: flex;
            flex-direction: column;
            gap: 24px;
          }

          .level5-header {
            width: 100%;
            padding-inline: 34px;
          }

          .level5-intro {
            width: 100%;
            margin-top: 48px;
          }

          .level5-body-wrap {
            position: relative;
            top: auto;
            left: auto;
            width: min(65vw, 470px);
            margin: 10px auto;
            transform: none;
          }

          .level5-panel {
            position: relative;
            top: auto !important;
            right: auto !important;
            left: auto !important;
            width: 100% !important;
            min-height: 0 !important;
          }

          .level5-panel--respiratory .level5-panel__body,
          .level5-panel--cardio .level5-panel__body,
          .level5-panel--pregnancy .level5-panel__body {
            padding-right: 210px;
          }
        }

        @media (max-width: 650px) {
          .level5-page {
            padding: 52px 16px 70px;
          }

          .level5-header {
            min-height: 74px;
            padding: 0 22px;
            border-radius: 0 25px 25px 0;
          }

          .level5-header h1 {
            font-size: 24px;
            white-space: normal;
          }

          .level5-intro {
            padding-left: 0;
          }

          .level5-intro p {
            font-size: 16px;
          }

          .level5-body-wrap {
            width: min(82vw, 390px);
          }

          .level5-panel__body {
            padding: 12px 15px 22px;
          }

          .level5-panel--respiratory .level5-panel__body,
          .level5-panel--cardio .level5-panel__body,
          .level5-panel--pregnancy .level5-panel__body {
            padding-right: 15px;
            padding-bottom: 150px;
          }

          .level5-panel--nervous .level5-panel__body {
            padding-bottom: 145px;
          }

          .level5-panel--respiratory img,
          .level5-panel--nervous img,
          .level5-panel--cardio img,
          .level5-panel--pregnancy img {
            width: 145px;
            right: 50%;
            transform: translateX(50%);
            bottom: 5px;
          }

          .level5-panel--cardio img {
            width: 160px;
          }

          .level5-panel--pregnancy img {
            width: 155px;
          }
        }
      `}</style>

      {/* =========================================================
          SMOKE
          ========================================================= */}

      <img
        className="level5-smoke level5-smoke--top"
        src="/assets/level4-efek-asap.png"
        alt=""
        aria-hidden="true"
      />

      <img
        className="level5-smoke level5-smoke--bottom"
        src="/assets/level4-efek-asap.png"
        alt=""
        aria-hidden="true"
      />

      <div className="level5-content">

        {/* =======================================================
            HEADER
            ======================================================= */}

        <header className="level5-header">
          <h1>APAKAH VAPE MENYEBABKAN PENYAKIT ?</h1>
        </header>

        {/* =======================================================
            INTRO
            ======================================================= */}

        <div className="level5-intro">
          <p>
            Vape tidak dapat dikatakan aman hanya karena tidak menghasilkan
            asap dari pembakaran tembakau.
          </p>

          <p>
            Penggunaan vape telah dikaitkan dengan berbagai gangguan kesehatan,
            terutama pada sistem:
          </p>
        </div>

        {/* =======================================================
            MAIN BODY
            ======================================================= */}

        <div className="level5-body-wrap">
          <img
            className="level5-body"
            src="/assets/level5-fullbody.png"
            alt="Ilustrasi sistem tubuh manusia"
          />
        </div>

        {/* =======================================================
            PANEL — RESPIRATORY
            ======================================================= */}

        <article className="level5-panel level5-panel--respiratory">
          <div className="level5-panel__title">
            SISTEM PERNAPASAN
          </div>

          <div className="level5-panel__body">
            <p>Potensi masalah meliputi:</p>

            <ol>
              <li>Iritasi saluran napas</li>
              <li>Gangguan fungsi paru</li>
              <li>Gejala pernapasan</li>
              <li>Cedera paru terkait vaping</li>
            </ol>
          </div>

          <img
            src="/assets/level5-paru-paru.png"
            alt="Ilustrasi paru-paru"
          />
        </article>

        {/* =======================================================
            PANEL — NERVOUS SYSTEM
            ======================================================= */}

        <article className="level5-panel level5-panel--nervous">
          <div className="level5-panel__title">
            SISTEM SARAF
          </div>

          <div className="level5-panel__body">
            <p>
              Nikotin bersifat adiktif dan dapat menyebabkan ketergantungan.
            </p>

            <p>
              Pada remaja, paparan nikotin sangat mengkhawatirkan karena otak
              masih berkembang. Nikotin dapat memengaruhi bagian otak yang
              berkaitan dengan:
            </p>

            <ol>
              <li>Perhatian</li>
              <li>Pembelajaran</li>
              <li>Mood</li>
              <li>Pengendalian impuls</li>
            </ol>
          </div>

          <img
            src="/assets/level5-otak.png"
            alt="Ilustrasi otak dan sistem saraf"
          />
        </article>

        {/* =======================================================
            PANEL — CARDIOVASCULAR
            ======================================================= */}

        <article className="level5-panel level5-panel--cardio">
          <div className="level5-panel__title">
            SISTEM KARDIOVASKULAR
          </div>

          <div className="level5-panel__body">
            <p>
              Nikotin dan paparan aerosol dapat memengaruhi sistem
              kardiovaskular.
            </p>

            <p>Efek yang dapat terjadi antara lain:</p>

            <ol>
              <li>Peningkatan denyut jantung</li>
              <li>Peningkatan tekanan darah</li>
              <li>Gangguan fungsi pembuluh darah</li>
            </ol>

            <p>
              Bukti ilmiah juga menunjukkan adanya hubungan penggunaan
              e-cigarette dengan risiko gangguan kardiovaskular.
            </p>
          </div>

          <img
            src="/assets/jantung.png"
            alt="Ilustrasi jantung"
          />
        </article>

        {/* =======================================================
            PANEL — PREGNANCY
            ======================================================= */}

        <article className="level5-panel level5-panel--pregnancy">
          <div className="level5-panel__title">
            KEHAMILAN
          </div>

          <div className="level5-panel__body">
            <p>
              Nikotin dapat membahayakan perkembangan janin.
              Karena itu, penggunaan vape tidak dianjurkan selama kehamilan.
            </p>
          </div>

          <img
            src="/assets/level5-kehamilan.png"
            alt="Ilustrasi kehamilan"
          />
        </article>
      </div>
    </section>
  );
}
