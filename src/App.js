import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import StyledApp from "./styledComponents/StyledApp";

function App() {
  return (
    <StyledApp>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login" component={Login} />

          <Route path="/register" component={Register} />

          <Route path="/" component={Home} />
        </Switch>
      </div>
    </StyledApp>
  );
}

export default App;
