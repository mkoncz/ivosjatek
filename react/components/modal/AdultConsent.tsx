// Import React modules.
import React, { Component } from "react";
import Modal from "react-modal";

// Import translate function.
import { t, initLanguageCookie } from "../../i18n";

// Interfaces for props.
interface ConsentState {
  modalIsOpen: boolean;
  modalAnimation: string;
}

/**
 * Popup component for adult consent.
 */
export class AdultConsent extends Component<{}, ConsentState> {
  constructor(props) {
    super(props);
    initLanguageCookie();
    this.state = {
      modalIsOpen: true,
      modalAnimation: "animate__backInLeft",
    };
  }

  componentDidMount() {
    const alreadyAccepted = sessionStorage.getItem("isAdult") === "true";
    this.setState({
      modalIsOpen: !alreadyAccepted,
    });
  }

  /**
   * Gets the style configuration for the popup window.
   */
  getModalConfig = () => {
    return {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        width: "322px",
        height: "481px",
        transform: "translate(-50%, -50%)",
        backgroundColor: "rgba(0,0,0,0)",
        textAlign: "center",
        padding: 0,
        border: "none",
      },
    };
  };

  /**
   * Sets the isOpen state.
   */
  setIsOpen = (isOpen) => {
    this.setState({
      modalIsOpen: isOpen,
    });
  };

  /**
   * Sets the modalAnimation state.
   */
  setModalAnimation = (modalAnimation) => {
    this.setState({
      modalAnimation: modalAnimation,
    });
  };

  /**
   * Hides popup and sets session storage.
   */
  handleButtonClick = () => {
    this.setModalAnimation("animate__backOutRight");
    setTimeout(() => {
      sessionStorage.setItem("isAdult", "true");
      this.setIsOpen(false);
    }, 500);
  };

  render() {
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={() => {
          this.setIsOpen(false);
        }}
        style={this.getModalConfig()}
        contentLabel="18 éves"
        ariaHideApp={false}
      >
        <div
          className={`adult-consent animate__animated ${this.state.modalAnimation}`}
        >
          <h1 className="adult-consent__header">18+</h1>
          <h5 className="adult-consent__subheader">{t("game.age_check_1")}</h5>
          <p className="adult-consent__paragraph">{t("game.age_check_2")}</p>
          <button
            className="adult-consent__button btn btn-lg"
            onClick={this.handleButtonClick}
          >
            {t("game.age_check_button")}
          </button>
        </div>
      </Modal>
    );
  }
}

// Export component.
export default AdultConsent;
