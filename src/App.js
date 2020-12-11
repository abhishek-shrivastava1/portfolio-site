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
import { Route, Switch, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutMe />
          </Route>
          <Route path="/work" exact>
            <Work />
          </Route>
          <Route path="/work/:id" children={<ProjectDetail />} exact></Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
