import { Header, Footer } from './components';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {AboutUs, Apply, Home, Incubation, Login, Mentors, News, Policy, Programs} from './pages';

function App() {
  return (
    <>
      <Header />
      <Router>
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
          <Route path="/programs" component={Programs} />
          <Route path="*" component={Login} />
        </Switch>
      </Router>
      <Footer />
    </>  
  );
}

export default App;
