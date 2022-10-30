import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Home";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" element={<Home />}></Route>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
