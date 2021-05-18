import "./App.css";
import Store from "./Store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import Questions from "./views/Questions";
import Result from "./views/Result";

function App() {
  return (
    <Store>
      <div className="App">
        <BrowserRouter>
          <Header />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/questions">
              <Questions />
            </Route>

            <Route path="/result">
              <Result />
            </Route>

            <Route path="*">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </Store>
  );
}

export default App;
