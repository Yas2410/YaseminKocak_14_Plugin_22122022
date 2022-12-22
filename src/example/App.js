import { useState } from "react";
import Modal from "../lib/components/Modal";
import logo from "../lib/components/assets/wh-logo.png";

function App() {
  //J'initialise ici mon hook useState pour la gestion
  //de l'ouverture et de la fermeture de la modale

  const [modalIsOpen, setModalIsOpen] = useState(true);
  return (
    <Modal
      //Pour l'exemple, elle est ouverte par défaut (true)
      /*Dans mon composant, le setDisplay passe à false par défaut
    au clic sur l'icone' et le bouton "close"
    ce qui permet la fermeture de la modale*/
      display={modalIsOpen}
      setDisplay={setModalIsOpen}
      //Permet d'ajouter une image
      img={logo}
      //Texte modulable qui va compléter la modale
      title="SUCCESS !"
      txt="The new employee has been correctly saved !"
    />
  );
}

export default App;
