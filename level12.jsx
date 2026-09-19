import React from "react";

export default function Level12({ id = "level12" }) {
  return (
    <section id={id} className="level12-page">
      <style>{`
        .level12-page,
        .level12-page * {
          box-sizing: border-box;
        }

        .level12-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          padding: 110px 44px 45px;
          color: #fff;
          font-family: "Poppins", "Montserrat", Arial, sans-serif;
          background:
            radial-gradient(
              ellipse at 65% 78%,
              rgba(210, 217, 232, 0.95) 0%,
              rgba(105, 130, 172, 0.85) 24%,
              rgba(22, 57, 111, 0.92) 57%,
              rgba(3, 27, 72, 1) 100%
            );
        }

        .level12-page::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(
              circle at 75% 65%,
              rgba(255, 255, 255, 0.16),
              transparent 31%
            );
        }

        .level12-content {
          position: relative;
          z-index: 2;
          width: 100%;
          min-height: calc(100vh - 155px);
        }

        /* =========================
           TITLE
           ========================= */

        .level12-title {
          position: relative;
          width: calc(100% + 44px);
          height: 101px;
          margin-left: -44px;
          display: flex;
          align-items: center;
          padding-left: 81px;
          border-top: 2px solid rgba(255, 255, 255, 0.65);
          border-bottom: 2px solid rgba(255, 255, 255, 0.55);
          border-right: 2px solid rgba(255, 255, 255, 0.55);
          border-radius: 0 55px 55px 0;
          background:
            linear-gradient(
              90deg,
              rgba(62, 83, 128, 0.94),
              rgba(64, 82, 126, 0.86)
            );
        }

        .level12-title::after {
          content: "";
          position: absolute;
          left: 44px;
          bottom: -25px;
          width: 1020px;
          max-width: 76%;
          height: 1px;
          background: rgba(255, 255, 255, 0.75);
        }

        .level12-title h1 {
          margin: 0;
          font-size: clamp(30px, 3vw, 57px);
          line-height: 1;
          font-weight: 800;
          letter-spacing: 1px;
          white-space: nowrap;
        }

        /* =========================
           MAIN CONTENT
           ========================= */

        .level12-main {
          position: relative;
          display: flex;
          min-height: 690px;
          padding-top: 72px;
        }

        /* =========================
           TEXT BOX
           ========================= */

        .level12-info {
          position: relative;
          z-index: 5;
          width: 640px;
          min-height: 532px;
          padding: 63px 33px 55px;
          border: 2px solid rgba(255, 255, 255, 0.68);
          border-radius: 0 78px 78px 78px;
          background:
            linear-gradient(
              135deg,
              rgba(24, 56, 112, 0.72),
              rgba(48, 72, 121, 0.58)
            );
          box-shadow:
            inset 0 0 30px rgba(255, 255, 255, 0.025),
            0 10px 35px rgba(0, 0, 0, 0.08);
        }

        .level12-info p {
          margin: 0;
          font-size: 25px;
          line-height: 1.45;
          font-weight: 500;
          letter-spacing: -0.2px;
        }

        .level12-info p + p {
          margin-top: 8px;
        }

        .level12-list {
          margin: 5px 0 38px;
          padding-left: 39px;
          font-size: 25px;
          line-height: 1.45;
          font-weight: 500;
        }

        .level12-list li {
          padding-left: 0;
        }

        .level12-note {
          margin-top: 28px !important;
          text-align: justify;
          text-justify: inter-word;
          line-height: 1.46 !important;
          word-spacing: 8px;
        }

        /* =========================
           RIGHT ILLUSTRATION
           ========================= */

        .level12-illustration {
          position: absolute;
          z-index: 3;
          right: -80px;
          bottom: -50px;
          width: min(100vw, 1700px);
          height: auto;
          object-fit: contain;
          object-position: bottom right;
          user-select: none;
          pointer-events: none;
          filter: drop-shadow(0 12px 16px rgba(0, 0, 0, 0.08));
        }

        /* =========================
           DECORATIVE STARS
           ========================= */

        .level12-star {
          position: absolute;
          z-index: 1;
          color: #f6d35b;
          font-size: 20px;
          opacity: 0.62;
          line-height: 1;
          text-shadow: 0 0 8px rgba(246, 211, 91, 0.22);
        }

        .level12-star.s1 { top: 32px; right: 50px; }
        .level12-star.s2 { top: 72px; right: 270px; }
        .level12-star.s3 { top: 104px; right: 155px; }
        .level12-star.s4 { top: 166px; right: 385px; }
        .level12-star.s5 { top: 198px; right: 80px; }
        .level12-star.s6 { top: 250px; right: 485px; }
        .level12-star.s7 { top: 310px; right: 330px; }
        .level12-star.s8 { top: 350px; right: 25px; }
        .level12-star.s9 { top: 410px; right: 240px; }

        /* =========================
           LARGE TABLET
           ========================= */

        @media (max-width: 1200px) {
          .level12-page {
            padding-left: 30px;
            padding-right: 30px;
          }

          .level12-title {
            width: calc(100% + 30px);
            margin-left: -30px;
            padding-left: 55px;
          }

          .level12-info {
            width: 55%;
            min-height: 500px;
            padding: 48px 28px;
          }

          .level12-info p,
          .level12-list {
            font-size: 20px;
          }

          .level12-illustration {
            width: 60vw;
            right: -35px;
          }
        }

        /* =========================
           TABLET
           ========================= */

        @media (max-width: 850px) {
          .level12-page {
            padding: 70px 20px 35px;
          }

          .level12-title {
            width: calc(100% + 20px);
            margin-left: -20px;
            height: 78px;
            padding-left: 32px;
            border-radius: 0 40px 40px 0;
          }

          .level12-title h1 {
            font-size: clamp(24px, 4vw, 37px);
          }

          .level12-title::after {
            left: 20px;
            bottom: -18px;
          }

          .level12-main {
            min-height: auto;
            display: block;
            padding-top: 52px;
            padding-bottom: 20px;
          }

          .level12-info {
            width: 100%;
            min-height: 0;
            padding: 35px 27px;
            border-radius: 0 55px 55px 55px;
          }

          .level12-info p,
          .level12-list {
            font-size: 17px;
          }

          .level12-list {
            margin-bottom: 25px;
          }

          .level12-note {
            word-spacing: 2px;
          }

          .level12-illustration {
            position: relative;
            display: block;
            width: 90%;
            max-width: 650px;
            margin: -10px 0 0 auto;
            right: auto;
            bottom: auto;
          }

          .level12-star {
            display: none;
          }
        }

        /* =========================
           MOBILE
           ========================= */

        @media (max-width: 600px) {
          .level12-page {
            padding: 30px 14px 30px;
          }

          .level12-title {
            width: calc(100% + 14px);
            margin-left: -14px;
            height: 65px;
            padding-left: 22px;
            border-radius: 0 32px 32px 0;
          }

          .level12-title h1 {
            font-size: 21px;
            letter-spacing: 0;
          }

          .level12-title::after {
            left: 12px;
            bottom: -13px;
            width: 70%;
          }

          .level12-main {
            padding-top: 38px;
          }

          .level12-info {
            padding: 27px 20px 30px;
            border-radius: 0 38px 38px 38px;
          }

          .level12-info p,
          .level12-list {
            font-size: 14px;
            line-height: 1.55;
          }

          .level12-list {
            padding-left: 26px;
            margin-top: 7px;
            margin-bottom: 25px;
          }

          .level12-note {
            margin-top: 18px !important;
            word-spacing: normal;
            text-align: left;
          }

          .level12-illustration {
            width: 108%;
            max-width: none;
            margin: -5px -8% 0 auto;
          }
        }
      `}</style>

      <span className="level12-star s1">★</span>
      <span className="level12-star s2">★</span>
      <span className="level12-star s3">★</span>
      <span className="level12-star s4">★</span>
      <span className="level12-star s5">★</span>
      <span className="level12-star s6">★</span>
      <span className="level12-star s7">★</span>
      <span className="level12-star s8">★</span>
      <span className="level12-star s9">★</span>

      <div className="level12-content">
        <header className="level12-title">
          <h1>SIAPA YANG PERLU MENGHINDARI VAPE ?</h1>
        </header>

        <main className="level12-main">
          <div className="level12-info">
            <p>Siapa yang Paling Perlu Menghindari Vape?</p>

            <p>Vape terutama tidak dianjurkan untuk:</p>

            <ol className="level12-list">
              <li>Anak-anak dan remaja</li>
              <li>Orang yang belum pernah merokok</li>
              <li>Ibu hamil</li>
              <li>
                Orang yang memiliki ketergantungan nikotin
                <br />
                dan ingin bebas dari nikotin
              </li>
            </ol>

            <p className="level12-note">
              Nikotin pada usia muda menjadi perhatian karena perkembangan
              otak masih berlangsung.
            </p>
          </div>

          <img
            className="level12-illustration"
            src="/assets/level12-bahagia.png"
            alt="Ilustrasi ibu dan anak-anak"
            draggable="false"
          />
        </main>
      </div>
    </section>
  );
}