import React, { useState, useEffect } from "react";
import "./App.scss";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute";
import Admin from "./pages/Admin/Admin";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import HouseDetails from "./pages/HouseDetails/HouseDetails";
import ComingSoon from "./pages/ErrorPage/ComingSoon";
import { selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [user, setUser] = useState({});
  const newUser = useSelector(selectUser);
  console.log(newUser);

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
        <Route path="/about">
          <ComingSoon />
        </Route>
        <Route path="/service">
          <ComingSoon />
        </Route>
        <Route path="/contact">
          <ComingSoon />
        </Route>
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
