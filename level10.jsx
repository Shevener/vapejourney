import React from "react";

export default function Level10({ onPrev, id = "level10" }) {
  return (
    <section id={id} className="level10-page">
      <style>{`
        .level10-page,
        .level10-page * {
          box-sizing: border-box;
        }

        .level10-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          padding: 110px 44px 70px;
          color: #fff;
          font-family: "Chakra Petch", sans-serif;
          background:
            radial-gradient(
              ellipse at 55% 55%,
              #154d9e 0%,
              #0b3d83 42%,
              #052b69 72%,
              #021b4b 100%
            );
        }

        .level10-content {
          position: relative;
          z-index: 5;
          width: min(100%, 1450px);
          min-height: 800px;
          margin: 0 auto;
        }

        /* =========================
           TITLE
           ========================= */

        .level10-header {
          position: relative;
          width: min(81%, 950px);
          height: 101px;
          margin-left: -44px;
          display: flex;
          align-items: center;
          padding-left: 125px;
          border-top: 1px solid rgba(255,255,255,.65);
          border-bottom: 1px solid rgba(255,255,255,.65);
          border-right: 1px solid rgba(255,255,255,.55);
          border-radius: 0 52px 52px 0;
          background: rgba(60, 82, 128, .9);
        }

        .level10-header h1 {
          margin: 0;
          font-size: clamp(34px, 4vw, 55px);
          line-height: 1;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .level10-header::after {
          content: "";
          position: absolute;
          left: 44px;
          bottom: -25px;
          width: 108%;
          height: 1px;
          background: rgba(255,255,255,.65);
        }

        /* =========================
           MAIN CARD
           ========================= */

        .level10-card {
          position: absolute;
          top: 183px;
          left: 8.5%;
          width: 78%;
          min-height: 600px;
          padding: 29px 150px 45px 150px;
          border: 1px solid rgba(255,255,255,.55);
          border-radius: 0 58px 58px 58px;
          background:
            linear-gradient(
              105deg,
              rgba(61,87,139,.95),
              rgba(53,79,128,.88)
            );
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.08),
            0 10px 30px rgba(0,0,0,.12);
        }

        .level10-card h2 {
          margin: 0 0 38px;
          font-size: clamp(24px, 2.5vw, 34px);
          font-weight: 800;
          letter-spacing: .6px;
          text-align: center;
        }

        .level10-card p {
          margin: 0 auto 38px;
          width: min(100%, 850px);
          font-size: clamp(18px, 1.65vw, 25px);
          line-height: 1.45;
          font-weight: 500;
          text-align: left;
        }

        .level10-card .level10-intro {
          margin-bottom: 28px;
        }

        .level10-card .level10-paragraph,
        .level10-card .level10-last {
          margin-left: auto;
          margin-right: auto;
          max-width: 850px;
          text-align: justify;
          text-justify: inter-word;
        }

        /* =========================
           WARNING ICONS
           ========================= */

        .level10-ban {
          position: absolute;
          z-index: 10;
          width: 120px;
          height: 150px;
          object-fit: contain;
          filter: drop-shadow(0 8px 12px rgba(0,0,0,.2));
        }

        .level10-ban-vape {
          top: 600px;
          right: 170px;
        }

        .level10-ban-smoking {
          top: 150px;
          left: 70px;
        }

        /* =========================
           VAPE HAND
           ========================= */

        .level10-vape-hand {
          position: absolute;
          z-index: 9;
          right: -150px;
          top: 180px;
          width: 470px;
          height: 660px;
          object-fit: contain;
          object-position: center;
          filter: drop-shadow(0 12px 18px rgba(0,0,0,.23));
          pointer-events: none;
        }

        /* =========================
           CIGARETTE HAND
           ========================= */

        .level10-cigarette-hand {
          position: absolute;
          z-index: 9;
          left: -120px;
          top: 350px;
          width: 470px;
          height: 430px;
          object-fit: contain;
          object-position: center;
          filter: drop-shadow(0 12px 18px rgba(0,0,0,.23));
          pointer-events: none;
        }

        /* =========================
           RESPONSIVE TABLET
           ========================= */

        @media (max-width: 1050px) {
          .level10-page {
            padding: 75px 25px 75px;
          }

          .level10-header {
            margin-left: -25px;
            width: 82%;
            padding-left: 70px;
          }

          .level10-card {
            left: 7%;
            width: 82%;
            padding-right: 75px;
          }

          .level10-ban {
            width: 125px;
            height: 125px;
          }

          .level10-ban-vape {
            left: 45px;
          }

          .level10-ban-smoking {
            left: 195px;
          }

          .level10-vape-hand {
            right: -190px;
            width: 390px;
          }

          .level10-cigarette-hand {
            left: -190px;
            right: auto;
            top: 500px;
            width: 390px;
          }

          .level10-card p,
          .level10-card .level10-paragraph,
          .level10-card .level10-last {
            margin-left: auto;
            margin-right: auto;
            max-width: 760px;
          }
        }

        /* =========================
           MOBILE
           ========================= */

        @media (max-width: 700px) {
          .level10-page {
            min-height: 100vh;
            padding: 30px 16px 95px;
          }

          .level10-content {
            min-height: auto;
            padding-bottom: 90px;
          }

          .level10-header {
            width: calc(100% + 16px);
            height: 72px;
            margin-left: -16px;
            padding: 0 24px;
            border-radius: 0 30px 30px 0;
          }

          .level10-header h1 {
            font-size: 28px;
          }

          .level10-header::after {
            left: 16px;
            bottom: -15px;
            width: 75%;
          }

          .level10-card {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            min-height: auto;
            margin-top: 45px;
            padding: 150px 23px 30px;
            border-radius: 30px;
          }

          .level10-card h2 {
            font-size: 21px;
            line-height: 1.25;
            margin-bottom: 25px;
          }

          .level10-card p,
          .level10-card .level10-paragraph,
          .level10-card .level10-last {
            margin-left: 0;
            margin-bottom: 25px;
            font-size: 15px;
            line-height: 1.55;
            text-align: left;
          }

          .level10-ban {
            width: 105px;
            height: 105px;
            top: 18px;
          }

          .level10-ban-vape {
            left: calc(50% - 112px);
          }

          .level10-ban-smoking {
            left: calc(50% + 7px);
          }

          .level10-vape-hand {
            position: absolute;
            top: 92px;
            right: -92px;
            width: 235px;
            height: auto;
          }

          .level10-cigarette-hand {
            position: absolute;
            top: 485px;
            left: -92px;
            width: 235px;
            height: auto;
          }
        }
      `}</style>

      <div className="level10-content">

        {/* =========================
            TITLE
            ========================= */}

        <header className="level10-header">
          <h1>VAPE VS ROKOK</h1>
        </header>

        {/* =========================
            WARNING ICONS
            ========================= */}

        <img
          src="/assets/level10-dilarang-vape.png"
          alt="Larangan vape"
          className="level10-ban level10-ban-vape"
        />

        <img
          src="/assets/level10-dilarang-merokok.png"
          alt="Larangan merokok"
          className="level10-ban level10-ban-smoking"
        />

        {/* =========================
            MAIN CONTENT
            ========================= */}

        <article className="level10-card">
          <h2>
            MANA YANG LEBIH AMAN, VAPE ATAU ROKOK?
          </h2>

          <p className="level10-intro">
            Jawabannya tidak sesederhana “vape aman, rokok berbahaya”.
            <br />
            Keduanya memiliki risiko kesehatan.
          </p>

          <p className="level10-paragraph">
            Vape umumnya menghasilkan lebih sedikit jenis zat berbahaya
            dibandingkan asap rokok konvensional karena tidak melalui proses
            pembakaran tembakau. Namun, aerosol vape tetap mengandung zat
            berbahaya dan vape bukan produk yang aman.
          </p>

          <p className="level10-paragraph">
            Bagi orang yang tidak merokok, tidak ada alasan kesehatan untuk
            mulai menggunakan vape.
          </p>

          <p className="level10-last">
            WHO menyatakan bahwa pendekatan paling aman adalah tidak
            menggunakan rokok maupun e-cigarette.
          </p>
        </article>

        {/* =========================
            HAND IMAGES
            ========================= */}

        <img
          src="/assets/level10-tangan-vape.png"
          alt="Tangan memegang vape"
          className="level10-vape-hand"
        />

        <img
          src="/assets/level10-tangan-rokok.png"
          alt="Tangan memegang rokok"
          className="level10-cigarette-hand"
        />

      </div>
    </section>
  );
}