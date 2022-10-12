import { Route, Switch } from "wouter";
import Form from "./components/Form";
import Home from "./components/Home";

const App = () => (
  <div>
    <Route path="/form" component={Form} />
    <Route path="/" component={Home} />
  </div>
)

export default App;
