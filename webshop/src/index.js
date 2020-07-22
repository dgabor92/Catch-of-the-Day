import React from "react";
import { render } from "react-dom";
//Router componens magába foglalja az App és a Header componenst így elég csak a Router componenst beimportálni
import Router from "./components/Router";
import "./css/style.css";

render(<Router />, document.querySelector("#main"));
