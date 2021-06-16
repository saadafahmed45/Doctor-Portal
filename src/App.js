import "./App.css";
import Home from "../src/Components/Home/Home";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
       
          </Route>

          <Route path="/about"></Route>
          <Route path="/dashboard"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
