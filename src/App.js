import './App.css';
import Header from "./Components/Homepage/Header.js";
import Projects from "./Components/Projects/Projects_show";
import Skills from "./Components/Skills/skills.js";
import Contact from "./Components/Contact/contact.js";
function App() {
  return (
    <div className="App">
      <Header/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
