import { Switch, Route } from "react-router-dom";

import React from 'react'
import Home from "../pages/Home";
import Register from "../pages/Register";

export default function Routes() {
  return (
    <>

        <Switch >
            <Route exact path='/'>
                <Home />
            </Route>

            <Route exact path='/register'>
                <Register />
            </Route>

            <Route exact path='/main'>
                <p>Página principal</p>
            </Route>
        </Switch>
    </>
  )
}
