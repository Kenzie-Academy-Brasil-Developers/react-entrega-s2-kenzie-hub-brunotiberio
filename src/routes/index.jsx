import { Switch, Route } from "react-router-dom";

import React from 'react'
import Home from "../pages/Home";

export default function Routes() {
  return (
    <>

        <Switch >
            <Route exact path='/'>
                <Home />
            </Route>

            <Route exact path='/cadastro'>
                <p>Cadastro</p>
            </Route>

            <Route exact path='/login'>
                <p>Login</p>
            </Route>
        </Switch>
    </>
  )
}
