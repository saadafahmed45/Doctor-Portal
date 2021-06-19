import "./App.css";
import Home from "../src/Components/Home/Home";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Appoinment from "./Components/Appointment/Appoinment/Appoinment";
import Login from "./Components/Login/Login";
import Dashbord from "./Components/Dashbord/Dashbord/Dashbord";
import AppointmentPassant from "./Components/Dashbord/AppointmentPassant/AppointmentPassant";
import AllPassant from "./Components/Dashbord/AllPassant/AllPassant";
import AddDoctors from "./Components/Dashbord/AddDoctors/AddDoctors";
import RecentAppointment from "./Components/Dashbord/RecentAppointment/RecentAppointment";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loginUser, setLoginUser] = useState({});


  return (

  <UserContext.Provider value={[loginUser, setLoginUser]}>

    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/appointment">
            <Appoinment></Appoinment>
          </Route>

          <Route path="/dashbord/appointment">
           <Dashbord></Dashbord>
          </Route>


          <Route path="/dashbord">
           <RecentAppointment></RecentAppointment>
          </Route>

          <PrivateRoute path="/doctor/allPatients">
           <AllPassant></AllPassant>
          </PrivateRoute>

          <Route path="/doctor/addDoctor">
         <AddDoctors></AddDoctors>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </div>
    </UserContext.Provider>

  );
}

export default App;
