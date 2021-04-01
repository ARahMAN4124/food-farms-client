import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import LogIn from "./Components/LogIn/LogIn";
import { createContext, useState } from "react";
import PrivateAuth from "./Components/LogIn/PrivateAuth";
import Admin from "./Components/Admin/Admin";
import Order from "./Components/Order/Order";
import CheckOut from "./Components/CheckOut/CheckOut";

export const userContext = createContext();

function App() {
  const [logInUser, setLogInUser] = useState({});

  return (
    <userContext.Provider value={[logInUser, setLogInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Main></Main>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivateAuth path="/order">
            <Order></Order>
          </PrivateAuth>
          <PrivateAuth path="/checkout/:id">
            <CheckOut></CheckOut>
          </PrivateAuth>
          <PrivateAuth path="/events">
            <Admin></Admin>
          </PrivateAuth>
          <Route path="*">
            <h1>no match</h1>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
