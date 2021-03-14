// Import React modules.
import React, { Component } from "react";
import Welcome from "./welcome";
import { reloadLanguage } from "../i18n";


/**
 * Welcome page with English language.
 */
export default class EnWelcome extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    reloadLanguage("en");
  }

  render() {
    return <Welcome/>
  }
}