// Import React modules.
import React, { Component } from "react";
import Modal from "react-modal";

// Import translate function.
import { t, initLanguageCookie } from "../../i18n";

/**
 * Popup component for adult consent.
 */
const AdultConsent = () => {
  initLanguageCookie();

  const [modalIsOpen, setIsOpen] = React.useState(true);

  const postModalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#000",
      textAlign: "center",
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => {
        setIsOpen(false);
      }}
      style={postModalStyle}
      contentLabel="18 éves"
    >
      <div className="post-card-big">
        <h1>18+</h1>
        <div className="pre-card">
          <div className="question_block">
            <h5>{t("game.age_check_1")}</h5>
            <p>{t("game.age_check_v2")}</p>
          </div>
          <button
            className="btn btn-warning btn-lg"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {t("game.age_check_button")}
          </button>
        </div>
      </div>
    </Modal>
  );
};

// Export component.
export default AdultConsent;
