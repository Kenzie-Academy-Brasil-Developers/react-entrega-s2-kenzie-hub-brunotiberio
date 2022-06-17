import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import { Teste } from "../styles/global";

export default function Routes() {


  return (
    <>

        <Switch >
            <Route exact path='/'>
                <Home  />
            </Route>

            <Route exact path='/register'>
                <Register />
            </Route>

            <Route exact path='/main/:id'>
                <Teste>main</Teste>
            </Route>
        </Switch>
    </>
  )
}
