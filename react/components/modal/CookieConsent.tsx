// Import React modules.
import React, { Component } from "react";
import Modal from "react-modal";

// Import translate function.
import { t, cookies } from "../../i18n";

// Interfaces for props.
interface ConsentState {
  modalIsOpen: boolean;
  modalAnimation: string;
}

/**
 * Popup component for cookie consent.
 */
export class CookieConsent extends Component<{}, ConsentState> {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true,
      modalAnimation: "animate__backInLeft",
    };
  }

  componentDidMount() {
    const alreadyAccepted = cookies.get("allowCookies") === "true";
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
      cookies.set("allowCookies", "true", { path: "/", secure: true });
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
        contentLabel="Sütik"
      >
        <div
          className={`cookie-consent animate__animated ${this.state.modalAnimation}`}
        >
          <h1 className="cookie-consent__header">{t("game.cookie_title")}</h1>
          <img src="/img/card_backs/cupcake.png" height="100" alt="cookie" />
          <p className="cookie-consent__paragraph">
            {t("game.cookie_content")}
          </p>
          <button
            className="cookie-consent__button btn btn-lg"
            onClick={this.handleButtonClick}
          >
            {t("game.cookie_ok")}
          </button>
        </div>
      </Modal>
    );
  }
}

// Export component.
export default CookieConsent;
