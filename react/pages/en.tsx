// Import React modules.
import React, { Component } from "react";
import Menu from "./menu";
import { reloadLanguage } from "../i18n";


/**
 * Menu page with English language.
 */
export default class EnMenu extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    reloadLanguage("en");
  }

  render() {
    return <Menu/>
  }
}