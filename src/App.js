import { Header, Footer, ToTop } from "./components";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import {
  AboutUs,
  Apply,
  Home,
  Incubation,
  Login,
  Mentors,
  News,
  Policy,
  Programs,
} from "./pages";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/apply" component={Apply} />
          <Route path="/login" component={Login} />
          <Route path="/incubation" component={Incubation} />
          <Route path="/mentors" component={Mentors} />
          <Route path="/news" component={News} />
          <Route path="/policy" component={Policy} />
          <Route path="/programs" component={Programs} />
          <Route path="*" component={Home} />
        </Switch>
        {/* <ToTop /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
