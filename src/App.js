import React, { useState } from "react";
import "./App.css";

// Components
import Advance from "./components/Advance/Advance";
import Classic from "./components/Classic/Classic";

// RULES IMAGE
import ClassRuleImage from "./images/image-rules.svg";
import AdvanceRuleImage from "./images/image-rules-bonus.svg";

// ICONS
import { AiOutlineClose } from "react-icons/ai";

function App() {
  const [isClassic, setIsClassic] = useState(true);
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      {isClassic ? <Classic /> : <Advance />}
      {/* Footer  */}
      <footer>
        <div className="footer-container">
          <div className="footer-btn-container">
            <button
              onClick={() => {
                setIsClassic(true);
              }}
              className="settings-btn"
            >
              Classic
            </button>
            <button
              onClick={() => {
                setIsClassic(false);
              }}
              className="settings-btn"
            >
              Advance
            </button>
          </div>
          <button
            onClick={() => {
              setModalActive(!modalActive);
            }}
            className="rules-btn"
          >
            RULES
          </button>
        </div>
      </footer>
      {/* RULES MODAL */}
      <div className={`modal ${modalActive}`}>
        <div className="modal-header">
          <h1> RULES </h1>
          <AiOutlineClose
            className="closeIcon"
            size={27}
            onClick={() => {
              setModalActive(false);
            }}
          />
        </div>
        <div className="modal-container">
          <img
            src={isClassic ? ClassRuleImage : AdvanceRuleImage}
            alt="rule-img"
          />
        </div>
      </div>
    </>
  );
}

export default App;
