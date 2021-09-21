import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import { Copyright } from "./components/Copyright";
import Signup from "./components/pages/Signup";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
        </Switch>
        <Footer />
        <Copyright />
      </Router>
    </>
  );
}

export default App;
