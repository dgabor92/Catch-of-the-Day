import React from "react";
//React router folyamathoz mindig importálni kell
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Főoldal betöltéséhez importálni
import StorePicker from "./StorePicker";
//IP cím megadása után ugorjon az App componensre
import App from "./App";
import NotFound from "./NotFound";

//Routing folyamat felállítása
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
export default Router;
