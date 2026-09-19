import React from "react";

export default function Level9({ id = "level9" }) {
  return (
    <section id={id} className="level9-page">
      <style>{`
        .level9-page,
        .level9-page * {
          box-sizing: border-box;
        }

        .level9-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          padding: 110px 44px 45px;
          color: #fff;
          font-family: "Poppins", "Montserrat", Arial, sans-serif;
          background:
            radial-gradient(
              ellipse at 48% 72%,
              #174fa5 0%,
              #0d3f88 42%,
              #062b68 72%,
              #021b4b 100%
            );
        }

        .level9-content {
          position: relative;
          z-index: 2;
          width: 100%;
          min-height: calc(100vh - 155px);
        }

        /* =========================
           TITLE
           ========================= */

        .level9-title {
          position: relative;
          width: 955px;
          max-width: calc(100% + 44px);
          height: 101px;
          margin-left: -44px;
          display: flex;
          align-items: center;
          padding-left: 81px;
          border-top: 2px solid rgba(255,255,255,.72);
          border-bottom: 2px solid rgba(255,255,255,.55);
          border-right: 2px solid rgba(255,255,255,.55);
          border-radius: 0 55px 55px 0;
          background:
            linear-gradient(
              90deg,
              rgba(61,82,126,.96),
              rgba(62,82,126,.88)
            );
        }

        .level9-title h1 {
          margin: 0;
          font-size: clamp(30px, 4vw, 57px);
          line-height: 1;
          font-weight: 800;
          letter-spacing: 1px;
          white-space: nowrap;
        }

        .level9-title::after {
          content: "";
          position: absolute;
          left: 44px;
          bottom: -25px;
          width: 1025px;
          max-width: 108%;
          height: 1px;
          background: rgba(255,255,255,.72);
        }

        /* =========================
           CONTENT BOX
           ========================= */

        .level9-box {
          position: relative;
          z-index: 4;
          width: min(73%, 1035px);
          min-height: 390px;
          margin: 64px 0 0 73px;
          padding: 30px 56px 32px;
          border: 2px solid rgba(255,255,255,.7);
          border-radius: 76px 0 0 76px;
          background:
            linear-gradient(
              135deg,
              rgba(66,92,143,.94),
              rgba(55,79,128,.9)
            );
          box-shadow:
            inset 0 0 35px rgba(255,255,255,.035),
            0 8px 28px rgba(0,0,0,.08);
        }

        .level9-box h2 {
          margin: 0 0 35px;
          color: #fff;
          font-size: clamp(23px, 2.05vw, 34px);
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: .3px;
        }

        .level9-box p {
          margin: 0;
          color: #fff;
          font-size: clamp(17px, 1.58vw, 25px);
          line-height: 1.48;
          font-weight: 500;
          text-align: justify;
          text-justify: inter-word;
          word-spacing: 5px;
        }

        .level9-box p + p {
          margin-top: 37px;
        }

        /* =========================
           RIGHT IMAGE
           ========================= */

        .level9-image {
          position: absolute;
          z-index: 5;
          right: -50px;
          top: 25px;
          width: min(34vw, 420px);
          height: auto;
          object-fit: contain;
          user-select: none;
          pointer-events: none;
          filter: drop-shadow(0 12px 15px rgba(0,0,0,.16));
        }

        /* =========================
           TABLET
           ========================= */

        @media (max-width: 1200px) {
          .level9-page {
            padding: 80px 30px 40px;
          }

          .level9-title {
            width: 850px;
            max-width: calc(100% + 30px);
            margin-left: -30px;
            padding-left: 55px;
          }

          .level9-box {
            width: 73%;
            margin-left: 40px;
            padding: 28px 40px;
          }

          .level9-box h2 {
            font-size: 25px;
          }

          .level9-box p {
            font-size: 18px;
          }

          .level9-image {
            width: 37vw;
            right: -35px;
          }
        }

        /* =========================
           TABLET / SMALL
           ========================= */

        @media (max-width: 850px) {
          .level9-page {
            min-height: 100vh;
            padding: 60px 20px 35px;
          }

          .level9-title {
            width: calc(100% + 20px);
            max-width: none;
            margin-left: -20px;
            height: 78px;
            padding-left: 32px;
            border-radius: 0 40px 40px 0;
          }

          .level9-title h1 {
            font-size: clamp(25px, 5vw, 40px);
          }

          .level9-title::after {
            left: 20px;
            bottom: -18px;
            width: 75%;
          }

          .level9-content {
            min-height: auto;
          }

          .level9-box {
            width: 100%;
            min-height: 0;
            margin: 52px 0 0;
            padding: 30px 27px;
            border-radius: 45px;
          }

          .level9-box h2 {
            font-size: 22px;
            margin-bottom: 25px;
          }

          .level9-box p {
            font-size: 16px;
            line-height: 1.55;
            text-align: left;
            word-spacing: normal;
          }

          .level9-box p + p {
            margin-top: 25px;
          }

          .level9-image {
            position: relative;
            display: block;
            width: 62%;
            max-width: 500px;
            margin: -15px -5% 0 auto;
            right: auto;
            top: auto;
          }
        }

        /* =========================
           MOBILE
           ========================= */

        @media (max-width: 600px) {
          .level9-page {
            padding: 30px 14px 30px;
          }

          .level9-title {
            width: calc(100% + 14px);
            margin-left: -14px;
            height: 65px;
            padding-left: 22px;
            border-radius: 0 32px 32px 0;
          }

          .level9-title h1 {
            font-size: 24px;
            letter-spacing: 0;
          }

          .level9-title::after {
            left: 12px;
            bottom: -13px;
            width: 72%;
          }

          .level9-box {
            margin-top: 38px;
            padding: 24px 19px 27px;
            border-radius: 34px;
          }

          .level9-box h2 {
            font-size: 17px;
            line-height: 1.35;
            margin-bottom: 21px;
          }

          .level9-box p {
            font-size: 13px;
            line-height: 1.58;
          }

          .level9-box p + p {
            margin-top: 22px;
          }

          .level9-image {
            width: 82%;
            max-width: none;
            margin: -10px -9% 0 auto;
          }
        }
      `}</style>

      <div className="level9-content">
        <header className="level9-title">
          <h1>VAPE TANPA NIKOTIN ?</h1>
        </header>

        <div className="level9-box">
          <h2>BAGAIMANA DENGAN VAPE TANPA NIKOTIN?</h2>

          <p>
            Label “0% nicotine” atau “nicotine-free” bukan jaminan bahwa
            produk sepenuhnya aman.
          </p>

          <p>
            WHO menyebutkan bahwa beberapa produk yang diklaim tidak
            mengandung nikotin ternyata ditemukan mengandung nikotin.
            Selain itu, aerosol vape tetap dapat mengandung bahan kimia
            dan partikel lain yang berpotensi membahayakan.
          </p>
        </div>

        <img
          className="level9-image"
          src="/assets/level9-kanan.png"
          alt="Ilustrasi vape dan nikotin"
          draggable="false"
        />
      </div>
    </section>
  );
}