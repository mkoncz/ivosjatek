// Import React modules.
import React, { Component } from "react";

// Import cookie handling module.
import Cookies from "universal-cookie";

// Import CardBack component.
import CardBack from "./CardBack";
import PlayerNameCard from "./PlayerNameCard";
import ConfirmCard from "./ConfirmCard";

// Import translate function.
import { t } from "../../i18n";

// Interfaces for props and state.
interface QuestionModel {
  type: string; // category of question
  hu: string; // Hungarian question
  en: string; // English version of question
  im: string; // image keyword (logo)
  adult: string; // is adult question
}

interface CardProps {
  setNewQuestion(): any;
  currentQuestionModel?: QuestionModel;
}

interface CardState {
  name: string;
  flipClasses: string;
}

/**
 * The component describes the actual Card.
 *
 * @param {string} props.setNewQuestion Replaces the read question with a new question.
 * @param {string} props.currentQuestionModel.logo Logo of the current card.
 * @param {string} props.currentQuestionModel.color Background color of the current card.
 */
export default class Card extends Component<CardProps, CardState> {
  mounted: boolean;
  cookies = new Cookies();

  outAnimationArray = [
    "backOutDown",
    "backOutRight",
    "fadeOutDown",
    "fadeOut",
    "fadeOutDown",
    "fadeOutDownBig",
    "fadeOutRight",
    "fadeOutRightBig",
    "rotateOutUpRight",
    "zoomOutDown",
    "zoomOutRight",
    "slideOutDown",
    "slideOutRight",
    "rollOut",
  ];

  inAnimationArray = [
    "backInLeft",
    "backInDown",
    "fadeInLeftBig",
    "fadeInDown",
    "fadeInDownBig",
    "flipInY",
    "zoomInLeft",
    "zoomInUp",
    "slideInDown",
  ];

  constructor(props: CardProps) {
    super(props);

    this.state = {
      flipClasses: "",
      name: "",
    };

    this.mounted = false;
  }

  componentDidMount() {
    const inAnimation =
      this.inAnimationArray[
        Math.floor(Math.random() * this.inAnimationArray.length)
      ];

    // Animates in the current card.
    this.setState({
      flipClasses: `c-game-card--active animate__animated animate__${inAnimation}`,
    });

    // Animates out the current card.
    setTimeout(() => {
      this.setState({
        flipClasses: `animate__animated animate__${inAnimation}`,
      });
    }, 2);

    this.mounted = true;
  }

  render() {
    // The first render should be avoided.
    // The session storage are loaded only after the componentDidMound.
    if (!this.mounted) {
      return <div></div>;
    }

    // Set default value of specialCard to false.
    // Special cards are the "age check card" and the "players names card".
    let specialCard = false;
    let content;

    // Set default logo.
    var logo = "new_logo.png";

    // If the game does not asked about age, it creates an "age check card".
    if (null == sessionStorage.getItem("isAdult")) {
      content = this.createAgeCheckCard();
      specialCard = true;
      // If the game does not asked about player names, it creates an "player names card".
    } else if (
      null == sessionStorage.getItem("players") ||
      sessionStorage.getItem("players").length === 0
    ) {
      content = this.createPlayerSelectorCard();
      specialCard = true;
    } else {
      // The %NAME% wildcard is replaced with a random user's name.
      content = this.props.currentQuestionModel[
        this.cookies.get("lang")
      ].replace(
        "%NAME%",
        this.state.name === "" ? this.getRandomName() : this.state.name
      );
      // If the current question has a sporsor, the logo is overridden.
      if (this.props.currentQuestionModel.im !== "") {
        logo = this.props.currentQuestionModel.im;
      }
    }

    return (
      <div
        className={`c-game-card ${this.state.flipClasses}`}
        onClick={this.cardClickHandler}
      >
        <div className="c-game-card__flipper">
          <CardBack logo={logo} />
          <div className="c-game-card__front">
            <div
              className={
                !specialCard
                  ? "c-game-card__normal-content"
                  : "c-game-card__special-content"
              }
            >
              {" "}
              {content}{" "}
            </div>
            <button
              className={`c-game-card__button btn btn-lg ${
                specialCard ? "hidden" : ""
              }`}
              onClick={this.replaceCard}
            >
              {t("game.next")}
            </button>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Replaces the read card.
   * Moves out the read card and bounces in the new card.
   * Uses the animations of the animate.css.
   */
  replaceCard = (newQuestion) => {
    if (newQuestion || newQuestion == null) {
      this.props.setNewQuestion();
    }

    const outAnimation =
      this.outAnimationArray[
        Math.floor(Math.random() * this.outAnimationArray.length)
      ];

    // Animates out the current card.
    setTimeout(() => {
      this.setState({
        flipClasses: `c-game-card--active animate__animated animate__${outAnimation}`,
      });
    }, 25);
    console.log(outAnimation);
    const inAnimation =
      this.inAnimationArray[
        Math.floor(Math.random() * this.inAnimationArray.length)
      ];
    console.log(inAnimation);

    // Animates in the new card.
    setTimeout(() => {
      this.setState({
        flipClasses: `animate__animated animate__${inAnimation}`,
        name: this.getRandomName(),
      });
    }, 550);
  };

  /**
   * Handles the click event on the unread cards.
   */
  cardClickHandler = () => {
    this.setState({
      flipClasses: "c-game-card--active",
    });
  };

  /**
   * Creates card with age check question and next button.
   */
  createAgeCheckCard = () => {
    return <ConfirmCard replaceCard={this.replaceCard} />;
  };

  /**
   * Creates card with age check question and next button.
   */
  createPlayerSelectorCard = () => {
    return <PlayerNameCard replaceCard={this.replaceCard} />;
  };

  /**
   * Gets a random name from the sessionStorage.
   */
  getRandomName = () => {
    // If the component is not mounted, the sessionStorage is not defined yet.
    if (!this.mounted) {
      return "";
    }
    let names = JSON.parse(sessionStorage.getItem("players"));
    if (names != null && names.length !== 0) {
      return names[Math.floor(Math.random() * names.length)];
    } else {
      return "";
    }
  };
}
