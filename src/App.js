import './App.css';
import { Switch, Route } from "react-router-dom";
import Login from "./components/auth/login";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/login" exact component={Login} />
      </Switch>
    </div>
  );
}

export default App;
