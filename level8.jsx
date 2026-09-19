import React from "react";

export default function Level8({ onPrev, id = "level8" }) {
  return (
    <section id={id} className="level8-page">
      <style>{`
        /* =========================================================
           LEVEL 8 — DAMPAK PSIKOLOGIS, EKONOMI, & SOSIAL
           ========================================================= */

        .level8-page,
        .level8-page * {
          box-sizing: border-box;
        }

        .level8-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          padding: 88px 35px 70px;
          color: #fff;
          font-family: "Chakra Petch", sans-serif;
          background:
            radial-gradient(
              ellipse at 55% 52%,
              #164c99 0%,
              #0b3d83 40%,
              #062b69 72%,
              #031d4d 100%
            );
        }

        /* =========================================================
           CONTENT WRAPPER
           ========================================================= */

        .level8-content {
          position: relative;
          z-index: 5;
          width: min(100%, 1150px);
          min-height: 1070px;
          margin: 0 auto;
        }

        /* =========================================================
           TITLE
           ========================================================= */

        .level8-header {
          position: relative;
          width: calc(100% + 35px);
          min-height: 82px;
          margin-left: -35px;
          padding: 0 65px;
          display: flex;
          align-items: center;
          border-top: 1px solid rgba(255,255,255,0.65);
          border-bottom: 1px solid rgba(255,255,255,0.65);
          border-right: 1px solid rgba(255,255,255,0.5);
          border-radius: 0 48px 48px 0;
          background:
            linear-gradient(
              90deg,
              rgba(62, 84, 132, 0.9),
              rgba(52, 76, 122, 0.82)
            );
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            0 5px 20px rgba(0,0,0,0.12);
        }

        .level8-header h1 {
          margin: 0;
          font-size: clamp(28px, 3.2vw, 45px);
          line-height: 1;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .level8-header::after {
          content: "";
          position: absolute;
          left: 35px;
          bottom: -20px;
          width: 68%;
          height: 1px;
          background: rgba(255,255,255,0.62);
        }

        /* =========================================================
           GENERAL PANELS
           ========================================================= */

        .level8-panel {
          position: absolute;
          background:
            linear-gradient(
              100deg,
              rgba(61, 87, 139, 0.92),
              rgba(51, 76, 125, 0.82)
            );
          border: 1px solid rgba(255,255,255,0.55);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            0 7px 20px rgba(0,0,0,0.1);
        }

        /* =========================================================
           PSYCHOLOGICAL
           ========================================================= */

        .level8-psychology {
          top: 151px;
          left: 15px;
          width: calc(100% - 45px);
          min-height: 225px;
          padding: 17px 42px 18px 315px;
          border-radius: 0 55px 55px 0;
        }

        .level8-psychology-image {
          position: absolute;
          z-index: 3;
          left: -100px;
          top: -70px;
          width: 500px;
          height: 320px;
          object-fit: contain;
          filter: drop-shadow(0 7px 12px rgba(0,0,0,0.15));
        }

        /* =========================================================
           ECONOMY
           ========================================================= */

        .level8-economy {
          top: 412px;
          left: 125px;
          width: calc(100% - 145px);
          min-height: 290px;
          padding: 19px 320px 20px 98px;
          border-radius: 58px;
        }

        .level8-economy-image {
          position: absolute;
          z-index: 3;
          right: -5px;
          bottom: 0px;
          width: 310px;
          height: 315px;
          object-fit: contain;
          filter: drop-shadow(0 8px 15px rgba(0,0,0,0.14));
        }

        /* =========================================================
           SOCIAL
           ========================================================= */

        .level8-social {
          top: 810px;
          left: 125px;
          width: calc(100% - 160px);
          min-height: 225px;
          padding: 17px 48px 18px 285px;
          border-radius: 0 58px 58px 0;
        }

        .level8-social-image {
          position: absolute;
          z-index: 3;
          left: -130px;
          top: -50px;
          width: 335px;
          height: 310px;
          object-fit: contain;
          filter: drop-shadow(0 8px 15px rgba(0,0,0,0.13));
        }

        /* =========================================================
           TYPOGRAPHY
           ========================================================= */

        .level8-panel h2 {
          margin: 0 0 10px;
          font-size: clamp(23px, 2.25vw, 31px);
          line-height: 1.15;
          font-weight: 800;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .level8-panel p {
          margin: 0;
          font-size: clamp(17px, 1.55vw, 21px);
          line-height: 1.45;
          font-weight: 500;
        }

        .level8-list {
          margin: 4px 0 0;
          padding-left: 30px;
        }

        .level8-list li {
          margin: 2px 0;
          font-size: clamp(16px, 1.45vw, 20px);
          line-height: 1.42;
        }

        .level8-economy .level8-list {
          margin-top: 5px;
        }

        .level8-economy .level8-note {
          margin-top: 4px;
        }

        .level8-social p {
          text-align: justify;
          text-justify: inter-word;
        }

        /* =========================================================
           RESPONSIVE — TABLET
           ========================================================= */

        @media (max-width: 900px) {
          .level8-page {
            padding: 60px 25px 80px;
          }

          .level8-content {
            min-height: 1180px;
          }

          .level8-header {
            width: calc(100% + 25px);
            margin-left: -25px;
            padding: 0 40px;
          }

          .level8-psychology {
            left: 0;
            width: 100%;
            padding-left: 260px;
          }

          .level8-psychology-image {
            width: 230px;
          }

          .level8-economy {
            left: 70px;
            width: calc(100% - 70px);
            padding-left: 55px;
            padding-right: 270px;
          }

          .level8-economy-image {
            width: 270px;
          }

          .level8-social {
            left: 70px;
            width: calc(100% - 70px);
            padding-left: 230px;
          }

          .level8-social-image {
            left: -110px;
            width: 300px;
          }
        }

        /* =========================================================
           RESPONSIVE — MOBILE
           ========================================================= */

        @media (max-width: 650px) {
          .level8-page {
            min-height: 100vh;
            padding: 28px 16px 90px;
          }

          .level8-content {
            min-height: auto;
            padding-bottom: 85px;
          }

          .level8-header {
            width: calc(100% + 16px);
            min-height: 70px;
            margin-left: -16px;
            padding: 0 22px;
            border-radius: 0 30px 30px 0;
          }

          .level8-header h1 {
            font-size: 24px;
            line-height: 1.12;
          }

          .level8-header::after {
            left: 15px;
            bottom: -14px;
            width: 72%;
          }

          .level8-panel {
            position: relative;
            top: auto !important;
            left: auto !important;
            right: auto !important;
            width: 100% !important;
            min-height: auto;
            margin-top: 45px;
            padding: 25px 22px;
            border-radius: 30px;
          }

          .level8-psychology,
          .level8-economy,
          .level8-social {
            padding: 25px 22px;
          }

          .level8-panel h2 {
            font-size: 21px;
            line-height: 1.2;
          }

          .level8-panel p,
          .level8-list li {
            font-size: 15px;
            line-height: 1.5;
          }

          .level8-list {
            padding-left: 24px;
          }

          .level8-psychology-image,
          .level8-economy-image,
          .level8-social-image {
            position: relative;
            top: auto;
            right: auto;
            left: auto;
            bottom: auto;
            display: block;
            width: min(80%, 280px);
            height: auto;
            margin: 0 auto 15px;
          }

          .level8-social-image {
            order: -1;
          }

          .level8-social p {
            text-align: left;
          }
        }
      `}</style>

      <div className="level8-content">

        {/* =======================================================
            TITLE
            ======================================================= */}

        <header className="level8-header">
          <h1>DAMPAK PSIKOLOGIS, EKONOMI, &amp; SOSIAL</h1>
        </header>

        {/* =======================================================
            1. DAMPAK PSIKOLOGIS
            ======================================================= */}

        <article className="level8-panel level8-psychology">
          <img
            src="/assets/level8-psikologis.png"
            alt="Ilustrasi dampak psikologis penggunaan vape"
            className="level8-psychology-image"
          />

          <h2>1. DAMPAK PSIKOLOGIS &amp; PERILAKU</h2>

          <p>
            Ketergantungan dapat membuat seseorang:
          </p>

          <ol className="level8-list">
            <li>Selalu memikirkan kapan bisa vaping</li>
            <li>Membawa vape ke berbagai tempat</li>
            <li>Merasa tidak nyaman ketika tidak membawa vape</li>
            <li>Menggunakan vape lebih sering dari yang direncanakan</li>
          </ol>
        </article>

        {/* =======================================================
            2. DAMPAK EKONOMI
            ======================================================= */}

        <article className="level8-panel level8-economy">
          <img
            src="/assets/level8-ekonomi.png"
            alt="Ilustrasi dampak ekonomi penggunaan vape"
            className="level8-economy-image"
          />

          <h2>2. DAMPAK EKONOMI</h2>

          <p>
            Pengeluaran untuk:
          </p>

          <ol className="level8-list">
            <li>Membeli device</li>
            <li>Membeli liquid</li>
            <li>Coil</li>
            <li>Pod</li>
            <li>Baterai atau aksesori</li>
          </ol>

          <p className="level8-note">
            Jika dilakukan terus-menerus, pengeluaran kecil yang berulang
            dapat menjadi cukup besar.
          </p>
        </article>

        {/* =======================================================
            3. DAMPAK SOSIAL
            ======================================================= */}

        <article className="level8-panel level8-social">
          <img
            src="/assets/level8-sosial.png"
            alt="Ilustrasi dampak sosial penggunaan vape"
            className="level8-social-image"
          />

          <h2>3. DAMPAK SOSIAL</h2>

          <p>
            Aerosol vape tidak hanya menjadi persoalan pengguna. Orang di
            sekitar juga dapat terpapar aerosol bekas yang mengandung nikotin
            dan zat berpotensi toksik.
          </p>
        </article>

      </div>
    </section>
  );
}