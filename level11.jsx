import React from "react";

export default function Level11({ onPrev, id = "level11" }) {
  const rows = [
    {
      myth: "Vape hanya uap air.",
      fact: "Aerosol vape dapat mengandung nikotin, partikel halus, logam berat, dan bahan kimia lainnya.",
    },
    {
      myth: "Vape pasti aman karena tidak ada tembakau.",
      fact: "Tidak adanya tembakau bukan berarti tidak ada risiko.",
    },
    {
      myth: "Kalau rasanya enak berarti aman.",
      fact: "Perasa membuat produk lebih menarik, tetapi bukan berarti aman untuk paru-paru.",
    },
    {
      myth: "Vape tanpa nikotin pasti aman.",
      fact: "Aerosol tetap dapat mengandung zat berbahaya, dan sebagian produk yang diklaim bebas nikotin ditemukan mengandung nikotin.",
    },
    {
      myth: "Vape tidak menyebabkan kecanduan.",
      fact: "Sebagian besar vape mengandung nikotin yang sangat adiktif.",
    },
    {
      myth: "Vaping hanya berdampak pada paru-paru.",
      fact: "Nikotin dan paparan aerosol juga dapat memengaruhi sistem kardiovaskular dan sistem saraf.",
    },
  ];

  return (
    <section id={id} className="level11-page">
      <style>{`
        .level11-page,
        .level11-page * {
          box-sizing: border-box;
        }

        .level11-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          padding: 60px 50px 30px;
          color: #fff;
          font-family: "Chakra Petch", sans-serif;
          background:
            radial-gradient(
              ellipse at 56% 70%,
              #164fa4 0%,
              #0d418b 38%,
              #062d6d 70%,
              #021b4b 100%
            );
        }

        .level11-content {
          position: relative;
          z-index: 2;
          width: min(100%, 1120px);
          margin: 0 auto;
        }

        /* =========================
           TITLE
           ========================= */

        .level11-header {
          position: relative;
          width: 540px;
          height: 60px;
          margin-left: -50px;
          display: flex;
          align-items: center;
          padding-left: 40px;
          border-top: 1px solid rgba(255,255,255,.65);
          border-bottom: 1px solid rgba(255,255,255,.65);
          border-right: 1px solid rgba(255,255,255,.55);
          border-radius: 0 34px 34px 0;
          background:
            linear-gradient(
              90deg,
              rgba(61,82,128,.96),
              rgba(53,76,122,.88)
            );
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.08),
            0 5px 20px rgba(0,0,0,.1);
        }

        .level11-header h1 {
          margin: 0;
          font-size: clamp(26px, 3.1vw, 36px);
          line-height: 1;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .level11-header::after {
          content: "";
          position: absolute;
          left: 18px;
          bottom: -15px;
          width: 595px;
          height: 1px;
          background: rgba(255,255,255,.68);
        }

        /* =========================
           TABLE
           ========================= */

        .level11-table {
          width: 100%;
          margin-top: 30px;
          border-collapse: separate;
          border-spacing: 0;
          table-layout: fixed;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.42);
          background: rgba(44,68,119,.68);
          box-shadow:
            0 8px 28px rgba(0,0,0,.12),
            inset 0 1px 0 rgba(255,255,255,.05);
        }

        .level11-table th,
        .level11-table td {
          border-right: 1px solid rgba(255,255,255,.3);
          border-bottom: 1px solid rgba(255,255,255,.34);
        }

        .level11-table th:last-child,
        .level11-table td:last-child {
          border-right: 0;
        }

        .level11-table tr:last-child td {
          border-bottom: 0;
        }

        .level11-table th {
          height: 45px;
          padding: 7px 18px;
          text-align: left;
          font-size: 21px;
          font-weight: 800;
          letter-spacing: .5px;
        }

        .level11-table th:first-child {
          width: 50%;
          background: rgba(61,63,112,.9);
        }

        .level11-table th:last-child {
          width: 50%;
          background: rgba(36,101,116,.9);
        }

        .level11-table td {
          height: 57px;
          padding: 10px 20px;
          vertical-align: middle;
          font-size: clamp(13px, 1.38vw, 16px);
          line-height: 1.28;
          font-weight: 500;
        }

        .level11-table td.myth {
          background: rgba(66,76,139,.72);
          text-align: center;
        }

        .level11-table td.fact {
          background: rgba(40,106,123,.68);
          text-align: left;
        }

        .level11-table tbody tr:nth-child(1) td {
          height: 78px;
        }

        .level11-table tbody tr:nth-child(2) td {
          height: 60px;
        }

        .level11-table tbody tr:nth-child(3) td {
          height: 60px;
        }

        .level11-table tbody tr:nth-child(4) td {
          height: 78px;
        }

        .level11-table tbody tr:nth-child(5) td {
          height: 62px;
        }

        .level11-table tbody tr:nth-child(6) td {
          height: 78px;
        }

        .myth-title,
        .fact-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .myth-title {
          color: #fff;
        }

        .fact-title {
          color: #baffc4;
        }

        .myth-icon {
          width: 25px;
          height: 25px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #ff1717;
          font-family: Arial, sans-serif;
          font-size: 27px;
          font-weight: 900;
          line-height: 1;
        }

        .fact-icon {
          width: 27px;
          height: 27px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 27px;
          border-radius: 50%;
          background: #48d83e;
          color: #fff;
          font-family: Arial, sans-serif;
          font-size: 19px;
          font-weight: 900;
          line-height: 1;
          box-shadow: 0 0 5px rgba(72,216,62,.28);
        }

        /* =========================
           TABLET
           ========================= */

        @media (max-width: 850px) {
          .level11-page {
            padding: 50px 25px 90px;
          }

          .level11-header {
            width: 520px;
            max-width: calc(100% + 25px);
            margin-left: -25px;
            padding-left: 28px;
          }

          .level11-header::after {
            width: 68%;
          }

          .level11-table th {
            font-size: 18px;
          }

          .level11-table td {
            padding: 9px 13px;
            font-size: 13px;
          }
        }

        /* =========================
           MOBILE
           ========================= */

        @media (max-width: 600px) {
          .level11-page {
            padding: 28px 14px 95px;
            overflow-x: hidden;
          }

          .level11-header {
            width: calc(100% + 14px);
            height: 60px;
            margin-left: -14px;
            padding-left: 22px;
            border-radius: 0 30px 30px 0;
          }

          .level11-header h1 {
            font-size: 24px;
          }

          .level11-header::after {
            left: 12px;
            bottom: -13px;
            width: 75%;
          }

          .level11-table {
            margin-top: 28px;
            display: block;
            overflow-x: auto;
            white-space: normal;
          }

          .level11-table thead,
          .level11-table tbody,
          .level11-table tr {
            width: 100%;
          }

          .level11-table th,
          .level11-table td {
            min-width: 175px;
          }

          .level11-table th {
            height: 48px;
            padding: 8px 12px;
            font-size: 16px;
          }

          .level11-table td {
            height: auto !important;
            min-height: 68px;
            padding: 11px 12px;
            font-size: 12px;
            line-height: 1.4;
          }

          .myth-title,
          .fact-title {
            gap: 8px;
          }

          .myth-icon {
            font-size: 23px;
          }

          .fact-icon {
            width: 23px;
            height: 23px;
            flex-basis: 23px;
            font-size: 16px;
          }
        }
      `}</style>

      <div className="level11-content">
        <header className="level11-header">
          <h1>MYTH or FACT ?</h1>
        </header>

        <table className="level11-table">
          <thead>
            <tr>
              <th>
                <div className="myth-title">
                  <span className="myth-icon">×</span>
                  <span>MITOS</span>
                </div>
              </th>

              <th>
                <div className="fact-title">
                  <span className="fact-icon">✓</span>
                  <span>FAKTA</span>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td className="myth">{row.myth}</td>
                <td className="fact">{row.fact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}