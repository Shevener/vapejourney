import React from "react";

export default function Level6({ onPrev, id = "level6" }) {
  return (
    <section id={id} className="level6-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&display=swap');

        .level6-page,
        .level6-page * {
          box-sizing: border-box;
        }

        .level6-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          color: #fff;
          font-family: "Chakra Petch", sans-serif;
          background:
            radial-gradient(
              ellipse at 51% 80%,
              rgba(23, 91, 190, 0.95) 0%,
              rgba(8, 56, 132, 0.98) 42%,
              rgba(2, 30, 73, 1) 78%
            );
        }

        .level6-page::before {
          content: "";
          position: absolute;
          z-index: 0;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(
              circle at 8% 91%,
              rgba(16, 66, 142, 0.75) 0 7%,
              transparent 7.2%
            ),
            radial-gradient(
              circle at 15% 96%,
              rgba(21, 78, 157, 0.52) 0 10%,
              transparent 10.2%
            ),
            radial-gradient(
              circle at 19% 92%,
              rgba(8, 49, 111, 0.55) 0 12%,
              transparent 12.2%
            );
        }

        /* =========================================
           MAIN CONTAINER
           ========================================= */

        .level6-content {
          position: relative;
          z-index: 2;
          width: 100%;
          min-height: 100vh;
          padding-bottom: 100px;
        }

        /* =========================================
           HEADER
           ========================================= */

        .level6-header {
          position: relative;
          width: min(81%, 1220px);
          height: 102px;
          margin-top: 110px;
          display: flex;
          align-items: center;
          padding: 0 84px;
          border: 2px solid rgba(255,255,255,0.42);
          border-left: none;
          border-radius: 0 52px 52px 0;
          background:
            linear-gradient(
              90deg,
              rgba(57, 79, 122, 0.96),
              rgba(48, 70, 112, 0.88)
            );
          box-shadow:
            0 7px 22px rgba(0,0,0,0.18),
            inset 0 1px 0 rgba(255,255,255,0.1);
        }

        .level6-header::after {
          content: "";
          position: absolute;
          left: 44px;
          right: 148px;
          bottom: -26px;
          height: 2px;
          background: rgba(255,255,255,0.55);
        }

        .level6-header h1 {
          margin: 0;
          font-size: clamp(30px, 3.4vw, 52px);
          line-height: 1;
          font-weight: 700;
          letter-spacing: 1.5px;
          white-space: nowrap;
        }

        /* =========================================
           LEFT / MAIN TEXT AREA
           ========================================= */

        .level6-text {
          position: relative;
          z-index: 5;
          width: 63%;
          max-width: 1010px;
          margin-left: 7.1%;
          margin-top: 89px;
        }

        .level6-text__paragraph {
          margin: 0;
          font-size: clamp(18px, 1.7vw, 26px);
          line-height: 1.42;
          font-weight: 500;
          text-align: justify;
          text-justify: inter-word;
        }

        /* =========================================
           WARNING BOX
           ========================================= */

        .level6-warning {
          position: relative;
          width: 91%;
          margin-top: 13px;
          padding: 12px 16px 11px;
          border: 1px solid rgba(255,255,255,0.55);
          border-radius: 20px;
          background:
            linear-gradient(
              90deg,
              rgba(7, 39, 88, 0.95),
              rgba(11, 55, 113, 0.85)
            );
          box-shadow:
            0 5px 16px rgba(0,0,0,0.13),
            inset 0 1px 0 rgba(255,255,255,0.05);
        }

        .level6-warning p {
          margin: 0;
          font-size: clamp(17px, 1.55vw, 23px);
          line-height: 1.45;
          font-weight: 700;
        }

        /* =========================================
           SECOND TEXT
           ========================================= */

        .level6-text__bottom {
          width: 89%;
          margin-top: 27px;
        }

        .level6-text__bottom p {
          margin: 0;
          font-size: clamp(17px, 1.55vw, 24px);
          line-height: 1.5;
          font-weight: 500;
          text-align: justify;
          text-justify: inter-word;
        }

        /* =========================================
           LEFT NO-VAPE IMAGE
           ========================================= */

        .level6-no-vape {
          position: absolute;
          z-index: 7;
          top: 252px;
          left: 0px;
          width: 100px;
          height: 175px;
          object-fit: contain;
          filter: drop-shadow(0 7px 10px rgba(0,0,0,0.18));
        }

        /* =========================================
           RIGHT VAPE + SMOKE
           ========================================= */

        .level6-vape {
          position: absolute;
          z-index: 4;
          top: 0px;
          right: -50px;
          width: 40%;
          min-width: 330px;
          height: auto;
          object-fit: contain;
          pointer-events: none;
          user-select: none;
          filter:
            drop-shadow(0 18px 25px rgba(0,0,0,0.16))
            drop-shadow(0 0 18px rgba(255,255,255,0.06));
        }

        /* =========================================
           RESPONSIVE
           ========================================= */

        @media (max-width: 1200px) {
          .level6-header {
            width: 82%;
            padding-left: 62px;
          }

          .level6-text {
            width: 62%;
            margin-left: 7%;
          }

          .level6-no-vape {
            left: 14px;
            width: 145px;
            height: 145px;
          }

          .level6-vape {
            width: 34%;
            min-width: 300px;
          }
        }

        @media (max-width: 900px) {
          .level6-page {
            min-height: auto;
          }

          .level6-content {
            min-height: auto;
            padding-bottom: 120px;
          }

          .level6-header {
            width: 94%;
            height: auto;
            min-height: 90px;
            margin-top: 55px;
            padding: 20px 35px;
          }

          .level6-header h1 {
            white-space: normal;
            font-size: 32px;
          }

          .level6-header::after {
            left: 25px;
            right: 35px;
          }

          .level6-no-vape {
            top: 220px;
            left: 20px;
            width: 125px;
            height: 125px;
          }

          .level6-vape {
            top: 175px;
            right: -30px;
            width: 40%;
            min-width: 250px;
          }

          .level6-text {
            width: 72%;
            margin-left: 14%;
            margin-top: 75px;
          }

          .level6-text__paragraph {
            font-size: 19px;
          }

          .level6-warning {
            width: 100%;
          }

          .level6-text__bottom {
            width: 100%;
          }
        }

        @media (max-width: 620px) {
          .level6-content {
            padding: 0 16px 90px;
          }

          .level6-header {
            width: calc(100% + 16px);
            margin-left: -16px;
            padding: 19px 22px;
            min-height: 76px;
            border-radius: 0 35px 35px 0;
          }

          .level6-header h1 {
            font-size: 24px;
            letter-spacing: 0.8px;
          }

          .level6-header::after {
            left: 16px;
            right: 30px;
            bottom: -17px;
          }

          .level6-no-vape {
            position: relative;
            top: auto;
            left: auto;
            width: 115px;
            height: 115px;
            display: block;
            margin: 40px auto -10px;
          }

          .level6-vape {
            position: relative;
            top: auto;
            right: auto;
            width: 82%;
            min-width: 0;
            display: block;
            margin: -10px auto 5px;
          }

          .level6-text {
            width: 100%;
            margin: 35px 0 0;
          }

          .level6-text__paragraph,
          .level6-text__bottom p {
            font-size: 16px;
            line-height: 1.5;
            text-align: left;
          }

          .level6-warning {
            width: 100%;
            margin-top: 18px;
            padding: 13px 15px;
            border-radius: 14px;
          }

          .level6-warning p {
            font-size: 16px;
          }

          .level6-text__bottom {
            margin-top: 23px;
          }
        }
      `}</style>

      <div className="level6-content">

        {/* HEADER */}
        <header className="level6-header">
          <h1>DAMPAK JANGKA PANJANG DARI VAPE</h1>
        </header>

        {/* DILARANG VAPE */}
        <img
          className="level6-no-vape"
          src="/assets/level6-dilarang-vape.png"
          alt="Dilarang menggunakan vape"
        />

        {/* VAPE + ASAP */}
        <img
          className="level6-vape"
          src="/assets/level6-vape&efek-asap.png"
          alt="Vape dengan efek asap"
        />

        {/* TEXT */}
        <main className="level6-text">

          <p className="level6-text__paragraph">
            Vape merupakan produk yang relatif lebih baru dibandingkan
            rokok konvensional. Karena itu, dampak kesehatan jangka panjang
            secara keseluruhan masih terus diteliti.
          </p>

          <div className="level6-warning">
            <p>
              Namun, ketidakpastian mengenai seluruh dampak jangka panjang
              bukan berarti vape aman.
            </p>
          </div>

          <div className="level6-text__bottom">
            <p>
              Saat ini sudah diketahui bahwa aerosol vape dapat mengandung
              nikotin, zat toksik, partikel halus, logam berat, dan beberapa
              senyawa yang berpotensi menyebabkan kanker. Penggunaan jangka
              panjang juga menjadi perhatian terhadap kesehatan paru-paru
              dan sistem kardiovaskular
            </p>
          </div>

        </main>

      </div>
    </section>
  );
}