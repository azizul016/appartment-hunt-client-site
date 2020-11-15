import React, { useState, useEffect } from "react";
import "./App.scss";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute";
import Admin from "./pages/Admin/Admin";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import HouseDetails from "./pages/HouseDetails/HouseDetails";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("apartment-hunt")) || {});
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header user={user} setUser={setUser} />
          <Home />
        </Route>
        <Route path="/housedetails/:id">
          <Header user={user} setUser={setUser} />
          <HouseDetails></HouseDetails>
        </Route>
        <Route path="/login">
          <Login user={user} setUser={setUser} />
        </Route>
        <PrivateRoute user={user} path="/admin/:pagename">
          <Admin user={user} />
        </PrivateRoute>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// <Header user={user} setUser={setUser} />
// <HouseDetails />
