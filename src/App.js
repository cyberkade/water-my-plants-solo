import { Route, Switch } from "react-router";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Header} />
      <Switch></Switch>
    </div>
  );
}

export default App;
