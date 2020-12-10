// Pages
import AboutMe from "./pages/AboutMe";
import ProjectDetail from "./pages/ProjectDetail";
// Styles
import GlobalStyle from "./components/GlobalStyle";
// Components
import Nav from "./components/Nav";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
// Router
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutMe />
        </Route>
        <Route path="/work" exact>
          <Work />
        </Route>
        <Route path="/work/:id" exact>
          <ProjectDetail />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
