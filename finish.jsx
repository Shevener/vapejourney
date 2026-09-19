import React from "react";

export default function Finish({ id = "finish" }) {
  return (
    <section id={id} className="finish-page">
      <style>{`
        .finish-page,
        .finish-page * {
          box-sizing: border-box;
        }

        .finish-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          color: #fff;
          font-family: "Poppins", "Montserrat", Arial, sans-serif;
          background:
            radial-gradient(
              ellipse at 38% 65%,
              #dce4f2 0%,
              #aebfd9 28%,
              #5277aa 56%,
              #174c98 100%
            );
        }

        .finish-content {
          position: relative;
          width: 100%;
          min-height: 100vh;
          padding: 51px 44px 45px;
        }

        /* =========================
           MAIN PANEL
           ========================= */

        .finish-panel {
          position: relative;
          width: 100%;
          min-height: 831px;
          padding: 38px 80px 40px;
          border: 2px solid rgba(255, 255, 255, 0.82);
          border-radius: 76px 76px 76px 0;
          background:
            linear-gradient(
              135deg,
              rgba(135, 163, 204, 0.74),
              rgba(83, 112, 155, 0.70)
            );
          box-shadow:
            inset 0 0 40px rgba(255, 255, 255, 0.06),
            0 10px 35px rgba(0, 0, 0, 0.08);
        }

        /* =========================
           TEXT
           ========================= */

        .finish-top-title {
          margin: 0;
          text-align: center;
          color: #050505;
          font-size: clamp(25px, 2.25vw, 35px);
          line-height: 1.25;
          font-weight: 900;
          letter-spacing: 0.5px;
        }

        .finish-intro {
          max-width: 1240px;
          margin: 24px auto 0;
          color: #fff;
          font-size: clamp(16px, 1.6vw, 25px);
          line-height: 1.48;
          font-weight: 500;
          text-align: justify;
          text-justify: inter-word;
          word-spacing: 5px;
        }

        .finish-middle-title {
          margin: 43px 0 0;
          text-align: center;
          color: #050505;
          font-size: clamp(24px, 2.15vw, 34px);
          line-height: 1.25;
          font-weight: 900;
          letter-spacing: 0.5px;
        }

        .finish-right-text {
          position: absolute;
          z-index: 5;
          top: 315px;
          right: 70px;
          width: 48%;
          color: #fff;
          font-size: clamp(16px, 1.55vw, 24px);
          line-height: 1.48;
          font-weight: 500;
          text-align: justify;
          text-justify: inter-word;
          word-spacing: 5px;
        }

        .finish-right-text p {
          margin: 0 0 36px;
        }

        .finish-final {
          margin: 38px 0 0;
          color: #050505;
          font-size: clamp(22px, 2.05vw, 33px);
          line-height: 1.4;
          font-weight: 900;
          letter-spacing: 0.5px;
        }

        /* =========================
           ILLUSTRATION
           ========================= */

        .finish-illustration {
          position: absolute;
          z-index: 4;
          left: -46px;
          bottom: -47px;
          width: 48%;
          height: auto;
          user-select: none;
          pointer-events: none;
          object-fit: contain;
          object-position: bottom left;
          filter: drop-shadow(0 12px 18px rgba(0, 0, 0, 0.08));
        }

        /* =========================
           RESPONSIVE
           ========================= */

        @media (max-width: 1200px) {
          .finish-content {
            padding: 40px 30px 40px;
          }

          .finish-panel {
            min-height: 720px;
            padding: 32px 50px;
            border-radius: 60px 60px 60px 0;
          }

          .finish-right-text {
            top: 285px;
            right: 50px;
          }

          .finish-illustration {
            width: 52%;
          }
        }

        @media (max-width: 850px) {
          .finish-page {
            overflow-y: auto;
          }

          .finish-content {
            min-height: auto;
            padding: 25px 20px 35px;
          }

          .finish-panel {
            min-height: auto;
            padding: 30px 28px 40px;
            border-radius: 45px 45px 45px 0;
          }

          .finish-top-title {
            font-size: 23px;
          }

          .finish-intro {
            font-size: 16px;
            line-height: 1.55;
            margin-top: 20px;
          }

          .finish-middle-title {
            margin-top: 30px;
            font-size: 22px;
          }

          .finish-right-text {
            position: relative;
            top: auto;
            right: auto;
            width: 100%;
            margin-top: 25px;
            font-size: 16px;
            line-height: 1.55;
          }

          .finish-right-text p {
            margin-bottom: 25px;
          }

          .finish-final {
            margin-top: 20px;
            font-size: 21px;
          }

          .finish-illustration {
            position: relative;
            left: auto;
            bottom: auto;
            display: block;
            width: 75%;
            max-width: 600px;
            margin: -5px auto 0 -7%;
          }
        }

        @media (max-width: 600px) {
          .finish-content {
            padding: 15px 12px 25px;
          }

          .finish-panel {
            padding: 24px 18px 30px;
            border-radius: 32px 32px 32px 0;
          }

          .finish-top-title {
            font-size: 17px;
            line-height: 1.35;
          }

          .finish-intro {
            font-size: 13px;
            line-height: 1.55;
            word-spacing: normal;
            text-align: left;
          }

          .finish-middle-title {
            margin-top: 25px;
            font-size: 17px;
          }

          .finish-right-text {
            font-size: 13px;
            line-height: 1.55;
            text-align: left;
          }

          .finish-right-text p {
            margin-bottom: 20px;
          }

          .finish-final {
            font-size: 17px;
            line-height: 1.45;
          }

          .finish-illustration {
            width: 112%;
            max-width: none;
            margin: 0 0 0 -13%;
          }
        }
      `}</style>

      <div className="finish-content">
        <div className="finish-panel">
          <h1 className="finish-top-title">
            JANGAN TUNGGU SAMPAI SAKIT UNTUK BERHENTI.
          </h1>

          <p className="finish-intro">
            Vape mungkin terlihat modern, memiliki berbagai rasa, dan
            menghasilkan aerosol yang berbeda dari asap rokok. Namun,
            tampilannya tidak menggambarkan risikonya. Setiap kali seseorang
            vaping, tubuh dapat terpapar nikotin dan berbagai zat lain yang
            berpotensi membahayakan.
          </p>

          <h2 className="finish-middle-title">
            TIDAK MULAI ADALAH PILIHAN TERBAIK.
          </h2>

          <img
            className="finish-illustration"
            src="/assets/finish.png"
            alt="Ilustrasi anak-anak bermain di taman"
            draggable="false"
          />

          <div className="finish-right-text">
            <p>
              Bagi orang yang sudah menggunakan vape, berhenti merupakan
              langkah penting untuk mengurangi paparan nikotin dan zat
              berbahaya.
            </p>

            <p>
              Vape bukan sekadar “uap beraroma”.
            </p>

            <p>
              Yang masuk ke paru-paru adalah aerosol yang dapat membawa nikotin
              dan berbagai zat kimia.
            </p>

            <p className="finish-final">
              JAGA PARU-PARU. JAGA OTAK. JAGA MASA DEPAN.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}