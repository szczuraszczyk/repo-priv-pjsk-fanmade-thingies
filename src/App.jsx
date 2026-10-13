import { useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import StronaPlaceholder from "./strony/StronaPlaceholder";
import StronkaPlace2 from "./strony/StronkaPlace2";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log("Kliknięto serce! Aktualna liczba kliknięć: " + count);
  };

  return (
    <>
        {/* <div className="main">
          <div className="mainSide">
        <header>
          <img
            src="public/czarneKolo.png"
            className="userAwatar"
            alt="Czarne koło"
          />
          <br />
          <p className="user-cytat">6 7</p>
        </header>

          <div className="panDiv">
            <h3>
              łączna ilość spędzona na konsumpcji XXX : <br />
              7865 h !!!
            </h3>
          </div>
          <div className="panDiv">
            <p>#comedy: </p>
            <div className="pasekWyswietlany">
              <div className="test1"></div>
              <div className="test1"></div>
              <div className="test1"></div>
              <div className="test1"></div>
              <div className="test1"></div>
              <div className="test1"></div>
            </div>
          </div>

          <div className="panDiv">
            <p>#romance:</p>
            <div className="pasekWyswietlany">
              <div className="test1"></div>
              <div className="test1"></div>
              <div className="test1"></div>
              <div className="test1"></div>
              <div className="test1"></div>
              <div className="test1"></div>
            </div>
          </div>
          </div>
        
      <aside>
        <img
          src="public/sercePlaceholder.png"
          className="serce-placeholder"
          alt="serce"
        />
        <img
          src="public/sercePlaceholder.png"
          className="serce-placeholder"
          alt="serce"
        />
        <img
          src="public/sercePlaceholder.png"
          className="serce-placeholder"
          alt="serce"
          onClick={handleClick}
        />
        <img
          src="public/sercePlaceholder.png"
          className="serce-placeholder"
          alt="serce"
        />
        <img
          src="public/sercePlaceholder.png"
          className="serce-placeholder"
          alt="serce"
        />
      </aside>
      </div>

      <footer>
        <p>&copy; 2026 My App. All rights reserved.</p>
      </footer> */}

      <h1>biblioteka</h1>

      <Routes>
        <Route path="/" element={<StronaPlaceholder />} /> // Strona główna
        <Route path="/stronka2" element={<StronkaPlace2 />} /> // Strona 2
      </Routes>

    </>
  );
}
export default App;
