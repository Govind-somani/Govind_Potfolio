// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <div className="App">
      {/* <Router>
        <Route exact path="/navbar" component={<NavBar />} />
      </Router> */}
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Banner />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/projects" element={<Projects />} />
          {/* <Route exact path="/contact" element={<Contact />} /> */}
          <Route exact path="/about" element={<About />} />
          <Route exact path="/footer" element={<Footer />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </Router>

      <div className="footer">Made with ❤ by Govind</div>

      {/* <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  );
};

export default App;
