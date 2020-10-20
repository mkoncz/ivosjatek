// Import React modules.
import React, { Component } from "react"

// Import module for cookie handling.
import Cookies from "universal-cookie";


/**
 * The page contains the actual Card.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 * @param {function} props.replaceCard Replaces the current card.
 */
export default class PlayerNameCard extends Component {

  constructor() {
    super();

    this.cookies = new Cookies();


    this.inputs = [];

    for (let i = 0; i < 10; i++) {
      this.inputs.push(React.createRef())
    }
  }

  render() {

    return (
      <div className="pre-card">
        <h5 className="players-header"><b>{this.props.i18n.t("game.player_names")}</b></h5>
        {this.generateForm()}
        <button
          className="btn btn-warning btn-lg add-button"
          onClick={() => { this.addPlayersToSessionStorage() }}>
          {this.props.i18n.t("game.done")}
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
        return (<div>
          <label key={index} className="player-name-label">{this.props.i18n.t("game.player")} {index + 1}: &nbsp; </label>
          <input type="text" className="player-name-input" ref={input} ></input>
        </div>)
      })}
    </form>
  }

  /**
   * Creates card with age check question and next button.
   */
  addPlayersToSessionStorage = () => {
    let that = this;
    // Timeout needed because render() immediately replaces content and the bouncing is not done yet.
    var players = [];
    that.inputs.forEach((item, index) => {
      if (item.current.value !== "") {
        players.push(item.current.value);
      }
    })
    if (players.length === 0) {
      alert(this.props.i18n.t("game.please_add_player_name"));
      return;
    }else {
      this.props.replaceCard(true);
      setTimeout(() => {
        // If the user does not give any player names, we add some default ones.
        sessionStorage.setItem("players", JSON.stringify(players));
      }, 450);
    }
  }
}