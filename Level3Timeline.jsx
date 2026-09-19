import { useState } from "react";

export default function Level3Timeline({ onPrev, id = "level3" }) {

  const steps = [
    {
      number: "1",
      title: "ONE PUFF",
      text: "Saat vape digunakan, perangkat akan memanaskan e-liquid dan menghasilkan aerosol yang kemudian dihirup oleh pengguna. Kemudian aerosol masuk melalui mulut dan melewati tenggorokan menuju saluran pernapasan.",
      side: "right",
    },
    {
      number: "2",
      title: "MENCAPAI\nPARU-PARU",
      text: "Setelah masuk ke saluran pernapasan, aerosol mencapai paru-paru. Aerosol vape dapat membawa partikel ultrahalus dan berbagai bahan kimia yang masuk jauh ke dalam saluran pernapasan. Artinya, paru-paru menjadi salah satu organ yang langsung terpapar oleh aerosol vape.",
      side: "left",
    },
    {
      number: "3",
      title: "MEMASUKI ALIRAN\nDARAH",
      text: "Jika vape mengandung nikotin, nikotin yang terhirup dapat masuk melalui paru-paru dan kemudian diserap ke dalam aliran darah. Dari darah, nikotin dapat dibawa ke berbagai bagian tubuh dan mencapai otak dengan cepat.",
      side: "right",
    },
    {
      number: "4",
      title: "MENCAPAI\nOTAK",
      text: "Setelah mencapai otak, nikotin bekerja pada sistem saraf dan merangsang sistem penghargaan (reward system). Hal ini dapat menimbulkan sensasi nyaman atau lebih rileks untuk sementara. Namun, penggunaan berulang dapat membuat tubuh dan otak terbiasa dengan nikotin sehingga muncul keinginan untuk menggunakan vape kembali.",
      side: "left",
    },
    {
      number: "5",
      title: "TUBUH\nMERESPON",
      text: "Setelah itu, tubuh dapat menunjukkan berbagai respons, diantaranya yaitu:\n\n1. Denyut jantung meningkat\n2. Tekanan darah meningkat\n3. Tenggorokan terasa kering atau teriritasi\n4. Batuk\n5. Sakit kepala\n6. Pusing\n7. Mual\n8. Sesak atau rasa tidak nyaman di dada pada sebagian orang\n\nNikotin juga dapat memberikan sensasi stimulasi atau rasa tenang sementara. Namun, efek tersebut dapat mendorong seseorang untuk menggunakan vape kembali sehingga terbentuk siklus ketergantungan.",
      side: "right",
    },
  ];

  return (
    <section id={id} className="level3-section">
      <style>{`
        .level3-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          padding: 54px 5vw 40px;
          background: #063477;
          color: #ffffff;
          overflow: hidden;
          box-sizing: border-box;
          font-family: 'Chakra Petch', sans-serif;
        }

        .level3-section *,
        .level3-section *::before,
        .level3-section *::after {
          box-sizing: border-box;
        }

        .level3-bg {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(3, 32, 82, 0.95),
              rgba(5, 59, 130, 0.88)
            );
          pointer-events: none;
        }

        .level3-lungs {
          position: absolute;
          right: -4%;
          bottom: -8%;
          width: min(62vw, 990px);
          object-fit: content;
          opacity: 0.8;
          pointer-events: none;
          filter: drop-shadow(0 0 25px rgba(0, 120, 255, 0.45));
        }

        .level3-content {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
        }

        .level3-title {
          margin: 0 auto 12px;
          padding: 8px 18px;
          width: fit-content;
          max-width: 100%;
          border: 1px solid rgba(255,255,255,0.8);
          border-radius: 40px;
          background: rgba(255,255,255,0.12);
          font-size: clamp(22px, 3vw, 40px);
          font-weight: 800;
          text-align: center;
          letter-spacing: 1px;
        }

        .level3-line {
          width: 42%;
          height: 1px;
          margin: 0 0 24px 0;
          background: rgba(255,255,255,0.65);
        }

        .level3-image {
          display: block;
          width: min(100%, 660px);
          height: 305px;
          margin: 0 auto 55px;
          object-fit: cover;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.7);
        }

        .level3-timeline {
          position: relative;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          padding-bottom: 35px;
        }

        .level3-timeline::before {
          content: "";
          position: absolute;
          top: 12px;
          bottom: 15px;
          left: 50%;
          width: 2px;
          transform: translateX(-50%);
          background: repeating-linear-gradient(
            to bottom,
            rgba(255,255,255,0.8) 0px,
            rgba(255,255,255,0.8) 6px,
            transparent 6px,
            transparent 11px
          );
        }

        .level3-step {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 70px 1fr;
          align-items: start;
          min-height: 165px;
        }

        .level3-step.left .level3-text {
          grid-column: 1;
          text-align: right;
          padding-right: 28px;
        }

        .level3-step.right .level3-text {
          grid-column: 3;
          text-align: left;
          padding-left: 28px;
        }

        .level3-number {
          grid-column: 2;
          grid-row: 1;
          justify-self: center;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #ffffff;
          color: #17428a;
          font-size: 24px;
          font-weight: 800;
          z-index: 3;
        }

        .level3-step-title {
          margin: 0 0 10px;
          white-space: pre-line;
          font-size: clamp(21px, 2.2vw, 29px);
          line-height: 1.15;
          font-weight: 800;
        }

        .level3-step-text {
          margin: 0;
          white-space: pre-line;
          font-family: 'Space Mono', monospace;
          font-size: 15px;
          line-height: 1.55;
          text-align: justify;
        }

        @media (max-width: 800px) {
          .level3-section {
            padding: 35px 20px;
          }

          .level3-image {
            height: 220px;
            margin-bottom: 35px;
          }

          .level3-step {
            grid-template-columns: 48px 1fr;
            min-height: 0;
            margin-bottom: 40px;
          }

          .level3-timeline::before {
            left: 23px;
          }

          .level3-number {
            grid-column: 1;
            grid-row: 1;
            width: 40px;
            height: 40px;
          }

          .level3-step.left .level3-text,
          .level3-step.right .level3-text {
            grid-column: 2;
            padding: 0 0 0 15px;
            text-align: left;
          }

          .level3-step-title {
            font-size: 21px;
          }

          .level3-step-text {
            font-size: 13px;
          }
        }
      `}</style>

      <div className="level3-bg" />

      <img
        className="level3-lungs"
        src="/assets/level3.png"
        alt=""
      />

      <div className="level3-content">
        <h2 className="level3-title">
          APA YANG TERJADI SAAT MENGGUNAKAN VAPE ?
        </h2>

        <div className="level3-line" />

        <img
          className="level3-image"
          src="/assets/level3-body.png.png"
          alt="Proses aerosol vape masuk ke dalam tubuh"
        />

        <div className="level3-timeline">
          {steps.map((item, index) => (
            <div
              key={item.number}
              className={`level3-step ${item.side}`}
            >
              <div className="level3-number">
                {item.number}
              </div>

              <div className="level3-text">
                <h3 className="level3-step-title">
                  {item.title}
                </h3>

                <p className="level3-step-text">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
