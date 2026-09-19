import { useState } from "react";
import LandingPage from "./LandingPage.jsx";
import Level2Carousel from "./Level2Carousel.jsx";
import Level3Timeline from "./Level3Timeline.jsx";
import Level4 from "./Level4.jsx";
import Level5 from "./Level5.jsx";
import Level6 from "./Level6.jsx";
import Level7 from "./level7.jsx";
import Level8 from "./level8.jsx";
import Level9 from "./level9.jsx";
import Level10 from "./level10.jsx";
import Level11 from "./level11.jsx";
import Level12 from "./level12.jsx";
import Finish from "./finish.jsx";

function LevelOne() {
  return (
    <main className="level-one">
      <div className="level-one__content">
        <header className="level-one__header">
          <div className="level-one__title-box">
            <h1>APA ITU VAPE ?</h1>
          </div>

          <div className="level-one__line" />
        </header>

        <div className="level-one__text">
          <p>
            Vape atau rokok elektronik merupakan perangkat elektronik yang
            memanaskan cairan (e-liquid) hingga menghasilkan aerosol yang
            kemudian dihirup ke dalam paru-paru. Vape tersedia dalam berbagai
            bentuk, ukuran, rasa, dan kadar nikotin.
          </p>

          <p>
            Meskipun sering dianggap lebih aman daripada rokok konvensional,
            vape bukanlah produk yang bebas risiko. Aerosol vape dapat
            mengandung nikotin, partikel halus, logam berat, bahan kimia
            iritan, serta zat lain yang berpotensi membahayakan kesehatan.
          </p>
        </div>

      </div>

      <img
        className="level-one__vape"
        src="/assets/level1-vape-asap.png"
        alt="Ilustrasi vape dengan asap"
        draggable="false"
      />
    </main>
  );
}

export default function App() {
  const [page, setPage] = useState("landing");
  const [mapLevel, setMapLevel] = useState(null);

  // Mapping level saat ini -> previous level.
  // Finish juga bisa kembali ke Level 12.
  const previousLevel = {
    level2: "level1",
    level3: "level2",
    level4: "level3",
    level5: "level4",
    level6: "level5",
    level7: "level6",
    level8: "level7",
    level9: "level8",
    level10: "level9",
    level11: "level10",
    level12: "level11",
    finish: "level12",
  };

  const nextLevel = {
    level1: "level2",
    level2: "level3",
    level3: "level4",
    level4: "level5",
    level5: "level6",
    level6: "level7",
    level7: "level8",
    level8: "level9",
    level9: "level10",
    level10: "level11",
    level11: "level12",
    level12: "finish",
  };

  const nextLabel = {
    level1: "NEXT LEVEL 2 →",
    level2: "NEXT LEVEL 3 →",
    level3: "NEXT LEVEL 4 →",
    level4: "NEXT LEVEL 5 →",
    level5: "NEXT LEVEL 6 →",
    level6: "NEXT LEVEL 7 →",
    level7: "NEXT LEVEL 8 →",
    level8: "NEXT LEVEL 9 →",
    level9: "NEXT LEVEL 10 →",
    level10: "NEXT LEVEL 11 →",
    level11: "NEXT LEVEL 12 →",
    level12: "FINISH JOURNEY →",
  };

  const open = (target, targetMapLevel = null) => {
    setMapLevel(target === "landing" ? targetMapLevel : null);
    setPage(target);

    // Untuk halaman level, selalu mulai dari atas.
    // Untuk PETA LEVEL, LandingPage akan scroll ke level yang dipilih.
    if (target !== "landing") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Navigasi global: PETA LEVEL kiri atas, BACK kiri bawah, NEXT kanan bawah.
  const renderNavigation = () => {
    const currentLevel = page === "finish" ? 12 : Number(page.replace("level", ""));

    return (
      <>
        <button
          className="home-button"
          onClick={() => open("landing", page === "finish" ? 12 : currentLevel)}
          type="button"
        >
          ← PETA LEVEL
        </button>

        {previousLevel[page] && (
          <button
            className="previous-level-button"
            onClick={() => open(previousLevel[page])}
            type="button"
          >
            ← BACK TO PREVIOUS LEVEL
          </button>
        )}

        {nextLevel[page] && (
          <button
            className="next-level-button"
            onClick={() => open(nextLevel[page])}
            type="button"
          >
            {nextLabel[page]}
          </button>
        )}

        {page === "finish" && (
          <button
            className="next-level-button"
            onClick={() => open("landing", "finish")}
            type="button"
          >
            SELESAI → PETA LEVEL
          </button>
        )}
      </>
    );
  };

  if (page === "level1") {
    return (
      <>
        {renderNavigation()}
        <LevelOne />
      </>
    );
  }

  if (page === "level2") {
    return (
      <>
        {renderNavigation()}
        <Level2Carousel id="level2" />
      </>
    );
  }

  if (page === "level3") {
    return (
      <>
        {renderNavigation()}
        <Level3Timeline id="level3" />
      </>
    );
  }

  if (page === "level4") {
    return (
      <>
        {renderNavigation()}
        <Level4 id="level4" />
      </>
    );
  }

  if (page === "level5") {
    return (
      <>
        {renderNavigation()}
        <Level5 id="level5" />
      </>
    );
  }

  if (page === "level6") {
    return (
      <>
        {renderNavigation()}
        <Level6 id="level6" />
      </>
    );
  }

  if (page === "level7") {
    return (
      <>
        {renderNavigation()}
        <Level7 id="level7" />
      </>
    );
  }

  if (page === "level8") {
    return (
      <>
        {renderNavigation()}
        <Level8 id="level8" />
      </>
    );
  }

  if (page === "level9") {
    return (
      <>
        {renderNavigation()}
        <Level9 id="level9" />
      </>
    );
  }

  if (page === "level10") {
    return (
      <>
        {renderNavigation()}
        <Level10 id="level10" />
      </>
    );
  }

  if (page === "level11") {
    return (
      <>
        {renderNavigation()}
        <Level11 id="level11" />
      </>
    );
  }

  if (page === "level12") {
    return (
      <>
        {renderNavigation()}
        <Level12 id="level12" />
      </>
    );
  }

  if (page === "finish") {
    return (
      <>
        {renderNavigation()}
        <Finish id="finish" />
      </>
    );
  }

  return (
    <LandingPage
      scrollToLevel={mapLevel}
      onStartLevel={(level) => {
        if (level <= 12) {
          open(`level${level}`);
          return;
        }

        window.alert(`Level ${level} belum tersedia.`);
      }}
    />
  );
}