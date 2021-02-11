import './App.css';
import { Switch, Route } from "react-router-dom";
import withAuth from "./components/auth/withAuth";
import Login from "./components/auth/login";
import Index from "./components/index";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/profile" exact component={withAuth(Index)} />
      </Switch>
    </div>
  )
}

export default App;
