// Import React modules.
import React, { Component } from "react"

// Import translate function.
import { t } from "../../i18n";

// Interface for props.
interface PlayerNameCardProps {
  replaceCard(newQuestion: boolean): any;
}

/**
 * The page contains the actual Card.
 */
export default class PlayerNameCard extends Component<PlayerNameCardProps> {

  inputs: any;
  //inputs: LegacyRef<HTMLInputElement>[];

  constructor(props: PlayerNameCardProps) {
    super(props);

    this.inputs = [];

    for (let i = 0; i < 10; i++) {
      this.inputs.push(React.createRef())
    }
  }

  render() {
    return (
      <div className="pre-card">
        <h5 className="players-header"><b>{t("game.player_names")}</b></h5>
        {this.generateForm()}
        <button
          className="btn btn-warning btn-lg add-button"
          onClick={() => { this.addPlayersToSessionStorage() }}>
          {t("game.done")}
        </button>
      </div>
    )
  }

  /**
   * Creates card with age check question and next button.
   */
  generateForm = () => {
    return <form>
      {this.inputs.map((input, index) => {
        return (<div key={index}>
          <label key={index} className="player-name-label">{t("game.player")} {index + 1}: &nbsp; </label>
          <input type="text" className="player-name-input" ref={input} ></input>
        </div>)
      })}
    </form>
  }

  /**
   * Stores player names in SessionStorage.
   */
  addPlayersToSessionStorage = () => {
    let that = this;
    // Timeout needed because render() immediately replaces content and the bouncing is not done yet.
    var players = [];
    that.inputs.forEach((item) => {
      if (item.current.value !== "") {
        players.push(item.current.value);
      }
    })
    if (players.length === 0) {
      alert(t("game.please_add_player_name"));
      return;
    } else {
      this.props.replaceCard(true);
      setTimeout(() => {
        // If the user does not give any player names, we add some default ones.
        sessionStorage.setItem("players", JSON.stringify(players));
      }, 450);
    }
  }
}