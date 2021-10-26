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
          <Route exact path="/miic" component={Home} />
          <Route path="/miic/aboutus" component={AboutUs} />
          <Route path="/miic/apply" component={Apply} />
          <Route path="/miic/login" component={Login} />
          <Route path="/miic/incubation" component={Incubation} />
          <Route path="/miic/mentors" component={Mentors} />
          <Route path="/miic/news" component={News} />
          <Route path="/miic/policy" component={Policy} />
          <Route path="/miic/programs" component={Programs} />
          <Route path="*" component={Home} />
        </Switch>
        {/* <ToTop /> */}
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
