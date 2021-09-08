// Import React modules.
import { State } from "@popperjs/core";
import React, { Component } from "react";

// Import translate function.
import { t } from "../../i18n";

// Interface for props.
interface PlayerNameCardProps {
  replaceCard(newQuestion: boolean): any;
}

// Interface for states.
interface PlayerNameCardStates {
  inputValue: string;
  players: string[];
}

/**
 * The page contains the actual Card.
 */
export default class PlayerNameCard extends Component<
  PlayerNameCardProps,
  PlayerNameCardStates
> {
  constructor(props: PlayerNameCardProps) {
    super(props);

    this.state = {
      inputValue: "",
      players: [],
    };
  }

  handleInputChange = (event: any) => {
    this.setState({ inputValue: event.target.value });
  };

  deletePlayer = (name: string) => {
    this.setState({
      players: this.state.players.filter((el) => el !== name),
    });
  };

  render() {
    return (
      <div className="">
        <h5 className="c-game-card__special-content-subheader">
          <b>{t("game.player_names")}</b>
        </h5>
        <div>
          <label className="c-game-card__special-content-label">
            {t("game.player")}: &nbsp;{" "}
          </label>
          <input
            type="text"
            className="c-game-card__special-content-input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          ></input>
        </div>
        <button
          className="btn c-game-card__special-content-button"
          onClick={() => {
            this.addPlayer();
          }}
        >
          {t("game.add")}
        </button>
        {this.state.players.map((name) => {
          return (
            <div className="c-game-card__special-content-name" key={name}>
              {name}
              <span
                className="c-game-card__special-content-delete"
                onClick={() => this.deletePlayer(name)}
              >
                &nbsp;x
              </span>
            </div>
          );
        })}
        <button
          className="btn c-game-card__button"
          onClick={() => {
            this.addPlayersToSessionStorage();
          }}
        >
          {t("game.done")}
        </button>
      </div>
    );
  }

  /**
   * Adds player to the players state and resets the input field.
   */
  addPlayer = () => {
    if (this.state.players.length > 9) {
      return;
    }
    if (this.state.players.includes(this.state.inputValue)) {
      return;
    }
    this.setState({
      players: [...this.state.players, this.state.inputValue.substring(0, 10)],
      inputValue: "",
    });
  };

  /**
   * Stores player names in SessionStorage.
   */
  addPlayersToSessionStorage = () => {
    let players = this.state.players.length
      ? this.state.players
      : [t("game.player_1")];
    this.props.replaceCard(true);
    setTimeout(() => {
      // If the user does not give any player names, we add some default ones.
      sessionStorage.setItem("players", JSON.stringify(players));
    }, 450);
  };
}
