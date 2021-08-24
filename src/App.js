import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/header" component={Header} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
