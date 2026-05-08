import "./App.css";
import Profile from "./Profile";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Profile />
      <hr />
      <Skills />
      <hr />
      <Experience />
      <hr />
      <Projects />
      <hr />
      <Footer />
    </div>
  );
}

export default App;