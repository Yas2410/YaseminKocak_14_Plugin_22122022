import React from "react";
import close from "../components/assets/close-btn.svg";
import "../components/styles/modal.css";

//Ce composant va permettre la création d'une Modale qui va
//pouvoir contenir les éléments modifiables suivants :
//Le titre, le texte ainsi que l'image
//L'état va également pouvoir être géré grâce aux éléments
//Display et SetDisplay (ouvrir et fermer la modale)
const Modal = ({ display, setDisplay, title, txt, img }) => {
  return (
    display && (
      <div className="modal">
        <div className="modal-section">
          <div className="modal-content">
            <button
              className="modal-btn-cross"
              onClick={() => setDisplay(false)}
            >
              <img className="close-img" src={close} alt="Close Modal button" />
            </button>
            {img && <img className="modal-img" src={img} alt="" />}
            <h2 className="modal-title">{title}</h2>
            <p className="modal-txt">{txt}</p>
          </div>
          <div className="modal-btn">
            <button
              className="modal-btn-close"
              onClick={() => setDisplay(false)}
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
